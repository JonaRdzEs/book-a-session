import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode,
  size?: "xs" | "sm" | "base" | "lg";
};

function Tag({ children, size = "xs" }: TagProps) {
  const textSize = `text-${size}`
  return (
    <span className={`${textSize} text-center px-2 py-1 bg-[#6CA0DC] rounded-lg text-[#33333]`}>
      {children}
    </span>
  );
}

export default Tag;
