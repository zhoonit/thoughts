import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Callout } from "../src/components/Callout";

describe("Callout", () => {
  it("renders children content", () => {
    render(<Callout type="info">Some info text</Callout>);
    expect(screen.getByText("Some info text")).toBeDefined();
  });

  it("renders title when provided", () => {
    render(
      <Callout type="tip" title="Pro tip">
        Content here
      </Callout>
    );
    expect(screen.getByText("Pro tip")).toBeDefined();
    expect(screen.getByText("Content here")).toBeDefined();
  });

  it("applies the correct type class", () => {
    const { container } = render(
      <Callout type="warning">Watch out</Callout>
    );
    const el = container.firstElementChild;
    expect(el?.className).toContain("callout-warning");
  });

  it("has role=note for accessibility", () => {
    render(<Callout type="info">Accessible</Callout>);
    expect(screen.getByRole("note")).toBeDefined();
  });
});
