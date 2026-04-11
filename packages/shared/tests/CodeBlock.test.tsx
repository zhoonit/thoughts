import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CodeBlock } from "../src/components/CodeBlock";

describe("CodeBlock", () => {
  it("renders code with syntax highlighting", () => {
    render(
      <CodeBlock language="typescript">
        {"const x: number = 42;"}
      </CodeBlock>
    );
    expect(screen.getByText(/const/)).toBeDefined();
    expect(screen.getByText(/42/)).toBeDefined();
  });

  it("renders language label", () => {
    render(
      <CodeBlock language="typescript">
        {"const x = 1;"}
      </CodeBlock>
    );
    expect(screen.getByText("typescript")).toBeDefined();
  });

  it("copies code to clipboard on button click", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });

    const { getByRole } = render(
      <CodeBlock language="typescript">
        {"const x = 1;"}
      </CodeBlock>
    );

    getByRole("button", { name: /copy/i }).click();
    expect(writeText).toHaveBeenCalledWith("const x = 1;");
  });
});
