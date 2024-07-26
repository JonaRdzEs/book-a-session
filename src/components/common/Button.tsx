import type { ComponentPropsWithoutRef } from "react";
import { Link, type LinkProps } from "wouter";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const isLinkProps = (props: ButtonProps | LinkProps): props is LinkProps => "to" in props;

function Button(props: ButtonProps | LinkProps) {
  if (isLinkProps(props)) {
    return <Link {...props} />;
  }

  return <button {...props} />;
}

export default Button;
