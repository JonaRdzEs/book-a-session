import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode,
  size?: "xs" | "sm" | "base" | "lg";
};

function Tag({ children, size = "xs" }: TagProps) {
  return (
    <span className={`text-center px-2 py-1 bg-light-gray rounded-lg text-${size} text-xs`}>
      {children}
    </span>
  );
}

export default Tag;
