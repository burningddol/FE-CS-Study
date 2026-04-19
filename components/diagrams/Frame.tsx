import type { ReactNode } from "react";

interface FrameProps {
  caption?: string;
  children: ReactNode;
}

export function Frame({ caption, children }: FrameProps) {
  return (
    <figure className="diagram-frame">
      <div className="relative">{children}</div>
      {caption && <figcaption className="diagram-caption">{caption}</figcaption>}
    </figure>
  );
}
