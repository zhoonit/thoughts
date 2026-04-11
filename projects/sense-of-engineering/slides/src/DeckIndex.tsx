const decks = import.meta.glob("./decks/*.mdx");

const deckNames = Object.keys(decks)
  .map((path) => {
    const match = path.match(/\.\/decks\/(.+)\.mdx$/);
    return match ? match[1] : null;
  })
  .filter((name): name is string => name !== null)
  .sort();

export function DeckIndex() {
  return (
    <div style={{ fontFamily: "var(--lectures-font-sans, sans-serif)", padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>A Sense of Engineering</h1>
      <h2>Slide Decks</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {deckNames.map((name) => (
          <li key={name} style={{ marginBottom: "0.5rem" }}>
            <a href={`#${name}`} style={{ fontSize: "1.2rem" }}>
              {name.replace(/^ch/, "Chapter ")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
