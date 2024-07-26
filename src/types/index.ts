import type{ ComponentPropsWithoutRef } from "react";

export type IconProps = ComponentPropsWithoutRef<"svg">;

export type Session = {
  id: string;
  image: string;
  title: string;
  summary: string
  description: string;
  tags?: string[];
  duration: number;
  date: string;
};