import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TitleProps<T extends ElementType> = {
  level?: HeadingLevels;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Title<T extends ElementType>({ level, children, ...props }: TitleProps<T>  & Omit<ComponentPropsWithoutRef<T>, keyof TitleProps<T>>) {
  const Heading = level || "h1";
  return (
    <Heading { ...props }>
      {children}
    </Heading>
  )
}

export default Title;
