import type { IconProps } from "../../../types";

function CalendarClockIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50px" 
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3A4E75"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M4 11h10" />
      <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M18 16.5v1.5l.5 .5" />
    </svg>
  );
}

export default CalendarClockIcon;
