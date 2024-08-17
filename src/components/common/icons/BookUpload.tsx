import type { IconProps } from "../../../types";

function BookUpload(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
      <path d="M11 16h-5a2 2 0 0 0 -2 2" />
      <path d="M15 16l3 -3l3 3" />
      <path d="M18 13v9" />
    </svg>
  );
}

export default BookUpload;
