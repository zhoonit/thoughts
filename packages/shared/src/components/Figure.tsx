import type { ReactNode } from "react";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  number?: number;
}

export function Figure({ src, alt, caption, number }: FigureProps): ReactNode {
  return (
    <figure className="lectures-figure">
      <img src={src} alt={alt} />
      {caption && (
        <figcaption>
          {number != null && (
            <span className="lectures-figure-number">Figure {number}: </span>
          )}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
