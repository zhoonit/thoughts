import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import type * as EsbuildTypes from "esbuild-wasm";

let esbuildReady: Promise<typeof EsbuildTypes> | null = null;

function initEsbuild(): Promise<typeof EsbuildTypes> {
  if (!esbuildReady) {
    esbuildReady = import("esbuild-wasm").then(async (esbuild) => {
      await esbuild.initialize({
        wasmURL: "https://unpkg.com/esbuild-wasm@0.24.0/esbuild.wasm",
      });
      return esbuild;
    });
  }
  return esbuildReady;
}

interface CodePlaygroundProps {
  children: string;
}

export function CodePlayground({ children }: CodePlaygroundProps): ReactNode {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!editorRef.current) return;
    const view = new EditorView({
      doc: children.trim(),
      extensions: [basicSetup, javascript({ typescript: true }), oneDark],
      parent: editorRef.current,
    });
    viewRef.current = view;
    return () => {
      view.destroy();
      viewRef.current = null;
    };
  }, []);

  const handleRun = useCallback(async () => {
    setOutput([]);
    setError(null);
    setRunning(true);

    try {
      const esbuild = await initEsbuild();
      const code = viewRef.current?.state.doc.toString() ?? "";
      const result = await esbuild.transform(code, {
        loader: "ts",
        format: "esm",
      });

      const logs: string[] = [];

      const iframe = document.createElement("iframe");
      iframe.sandbox.add("allow-scripts");
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => {
          cleanup();
          reject(new Error("Execution timed out (5s)"));
        }, 5000);

        function cleanup() {
          clearTimeout(timeout);
          window.removeEventListener("message", handler);
          document.body.removeChild(iframe);
        }

        function handler(e: MessageEvent) {
          if (e.source !== iframe.contentWindow) return;
          const msg = e.data;
          if (msg.type === "log") {
            logs.push(msg.value);
          } else if (msg.type === "done") {
            cleanup();
            resolve();
          } else if (msg.type === "error") {
            cleanup();
            reject(new Error(msg.value));
          }
        }

        window.addEventListener("message", handler);

        const script = `
          const console = {
            log: (...args) => {
              const msg = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
              parent.postMessage({ type: 'log', value: msg }, '*');
            }
          };
          try {
            ${result.code}
            parent.postMessage({ type: 'done' }, '*');
          } catch(e) {
            parent.postMessage({ type: 'error', value: e.message }, '*');
          }
        `;
        iframe.srcdoc = "<script>" + script + "<\/script>";
      });

      setOutput(logs);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setRunning(false);
    }
  }, []);

  return (
    <div className="lectures-playground">
      <div ref={editorRef} className="lectures-playground-editor" />
      <button
        onClick={handleRun}
        disabled={running}
        className="lectures-playground-run"
      >
        {running ? "Running..." : "▶ Run"}
      </button>
      <div className="lectures-playground-output">
        {error && <pre className="lectures-playground-error">{error}</pre>}
        {output.map((line, i) => (
          <pre key={i} className="lectures-playground-line">
            {line}
          </pre>
        ))}
      </div>
    </div>
  );
}
