import { useEffect, useState, type ComponentType } from "react";
import { SlideLayout } from "./SlideLayout";
import { DeckIndex } from "./DeckIndex";
import { CodeBlock, Callout, Figure } from "@lectures/shared";
import "@lectures/shared/theme";

const mdxComponents = { CodeBlock, Callout, Figure };

const deckModules = import.meta.glob<{ default: ComponentType }>(
  "./decks/*.mdx"
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
    const loader = deckModules[`./decks/${deckName}.mdx`];
    if (loader) {
      loader().then((mod) => setDeckComponent(() => mod.default));
    } else {
      setDeckComponent(null);
    }
  }, [deckName]);

  if (!deckName || !DeckComponent) return <DeckIndex />;

  return (
    <SlideLayout>
      <DeckComponent components={mdxComponents} />
    </SlideLayout>
  );
}
