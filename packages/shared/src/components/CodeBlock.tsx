import { Highlight, themes } from "prism-react-renderer";
import type { ReactNode } from "react";

interface CodeBlockProps {
  language: string;
  children: string;
}

export function CodeBlock({ language, children }: CodeBlockProps): ReactNode {
  const code = children.trim();

  return (
    <div className="lectures-code-block">
      <div className="lectures-code-block-header">
        <span className="lectures-code-block-lang">{language}</span>
        <button
          className="lectures-code-block-copy"
          onClick={() => navigator.clipboard.writeText(code)}
          aria-label="Copy code"
        >
          Copy
        </button>
      </div>
      <Highlight theme={themes.vsDark} code={code} language={language}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="lectures-code-block-pre">
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
