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

export type UpcomingSession = {
  id: string;
  title: string;
  summary: string;
  releaseDate: string;
  image: string;
}