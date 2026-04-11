import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Figure } from "../src/components/Figure";

describe("Figure", () => {
  it("renders an image with alt text", () => {
    render(<Figure src="/img/diagram.png" alt="Architecture diagram" />);
    const img = screen.getByRole("img");
    expect(img.getAttribute("src")).toBe("/img/diagram.png");
    expect(img.getAttribute("alt")).toBe("Architecture diagram");
  });

  it("renders caption when provided", () => {
    render(
      <Figure
        src="/img/diagram.png"
        alt="Diagram"
        caption="System architecture overview"
      />
    );
    expect(screen.getByText("System architecture overview")).toBeDefined();
  });

  it("renders figure number with caption", () => {
    render(
      <Figure
        src="/img/diagram.png"
        alt="Diagram"
        caption="Overview"
        number={1}
      />
    );
    expect(screen.getByText(/Figure 1:/)).toBeDefined();
    expect(screen.getByText(/Overview/)).toBeDefined();
  });

  it("renders as a figure element", () => {
    const { container } = render(
      <Figure src="/img/x.png" alt="x" />
    );
    expect(container.querySelector("figure")).not.toBeNull();
  });
});
