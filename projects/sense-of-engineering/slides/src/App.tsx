import { useEffect, useState, type ComponentType } from "react";
import { DeckIndex } from "./DeckIndex";
import { Deck } from "@revealjs/react";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import RevealMermaid from "reveal.js-mermaid-plugin/plugin/mermaid/mermaid.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import "./deck.css";

const deckConfig = {
  width: 960,
  height: 700,
  margin: 0.04,
  minScale: 0.2,
  maxScale: 2.0,
  slideNumber: 'c/t',
  transition: "none",
  navigationMode: "linear",
};

const deckModules = import.meta.glob<{ default: ComponentType }>(
  "./decks/*.tsx"
);

function getDeckName(): string | null {
  const hash = window.location.hash.replace(/^#\/?/, "").split("/")[0];
  return hash || null;
}

export function App() {
  const [DeckComponent, setDeckComponent] = useState<ComponentType | null>(
    null
  );
  const [deckName, setDeckName] = useState<string | null>(getDeckName);

  useEffect(() => {
    const onHashChange = () => setDeckName(getDeckName());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (!deckName) {
      setDeckComponent(null);
      return;
    }
    const loader = deckModules[`./decks/${deckName}.tsx`];
    if (loader) {
      loader().then((mod) => setDeckComponent(() => mod.default));
    } else {
      setDeckComponent(null);
    }
  }, [deckName]);

  if (!deckName || !DeckComponent) return <DeckIndex />;

  return (
    <Deck config={deckConfig} plugins={[RevealHighlight, RevealMermaid]}>
      <DeckComponent />
    </Deck>
  );
}
