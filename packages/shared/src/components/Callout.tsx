import type { ReactNode } from "react";

type CalloutType = "tip" | "warning" | "info";

interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: ReactNode;
}

export function Callout({ type, title, children }: CalloutProps): ReactNode {
  return (
    <div className={`lectures-callout lectures-callout-${type}`} role="note">
      {title && <div className="lectures-callout-title">{title}</div>}
      <div className="lectures-callout-content">{children}</div>
    </div>
  );
}
