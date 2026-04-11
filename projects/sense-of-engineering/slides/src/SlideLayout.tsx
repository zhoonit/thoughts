import { useEffect, useRef, type ReactNode } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

interface SlideLayoutProps {
  children: ReactNode;
}

function splitByHr(children: ReactNode[]): ReactNode[][] {
  const slides: ReactNode[][] = [[]];
  for (const child of children) {
    if (
      typeof child === "object" &&
      child !== null &&
      "type" in child &&
      (child as any).type === "hr"
    ) {
      slides.push([]);
    } else {
      slides[slides.length - 1].push(child);
    }
  }
  return slides.filter((s) => s.length > 0);
}

export function SlideLayout({ children }: SlideLayoutProps) {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<Reveal | null>(null);

  const childArray = Array.isArray(children) ? children : [children];
  let flatChildren: ReactNode[] = childArray;
  if (
    childArray.length === 1 &&
    typeof childArray[0] === "object" &&
    childArray[0] !== null &&
    "props" in childArray[0] &&
    (childArray[0] as any).props?.children
  ) {
    const inner = (childArray[0] as any).props.children;
    flatChildren = Array.isArray(inner) ? inner : [inner];
  }

  const slides = splitByHr(flatChildren);

  useEffect(() => {
    if (!deckRef.current || revealRef.current) return;
    const deck = new Reveal(deckRef.current, {
      hash: true,
      embedded: false,
      transition: "slide",
    });
    deck.initialize();
    revealRef.current = deck;
    return () => {
      deck.destroy();
      revealRef.current = null;
    };
  }, []);

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        {slides.map((slideChildren, i) => (
          <section key={i}>{slideChildren}</section>
        ))}
      </div>
    </div>
  );
}
