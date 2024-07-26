import type { ComponentPropsWithoutRef } from "react";

type BackgroundProps = ComponentPropsWithoutRef<"svg">;

function ShapesBg(props: BackgroundProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="600"
      height="445"
      viewBox="0 0 600 445"
      {...props}
    >
      <g mask='url("#SvgjsMask1042")' fill="none">
        <path
          d="M589.98 229.63L602.9 229.63L602.9 258.17L589.98 258.17z"
          fill="rgba(162, 213, 171, 1)"
        ></path>
        <path
          d="M528.23 123.32L543.1 123.32L543.1 137.89L528.23 137.89z"
          stroke="rgba(255, 111, 97, 1)"
        ></path>
        <path
          d="M251.1 9.4L256.75 9.4L256.75 47.6L251.1 47.6z"
          stroke="rgba(162, 213, 171, 1)"
        ></path>
        <path
          d="M459.66 399.95 a15.36 15.36 0 1 0 30.72 0 a15.36 15.36 0 1 0 -30.72 0z"
          stroke="rgba(58, 78, 117, 1)"
        ></path>
        <path
          d="M208.04 283.67a23.59 23.59 0 1 0 16.26 44.29z"
          fill="rgba(162, 213, 171, 1)"
        ></path>
        <path
          d="M378.03 227.45 a22.07 22.07 0 1 0 44.14 0 a22.07 22.07 0 1 0 -44.14 0z"
          fill="rgba(58, 78, 117, 1)"
        ></path>
        <path
          d="M73.13 77.66 a40.91 40.91 0 1 0 81.82 0 a40.91 40.91 0 1 0 -81.82 0z"
          fill="rgba(162, 213, 171, 1)"
        ></path>
        <path
          d="M557.71 201.12a21.33 21.33 0 1 0-8.58 41.79z"
          fill="rgba(255, 111, 97, 1)"
        ></path>
        <path
          d="M381.59 115.96L385.65 115.96L385.65 157.83L381.59 157.83z"
          fill="rgba(58, 78, 117, 1)"
        ></path>
        <path
          d="M571.58 158.58L586.73 158.58L586.73 173.73L571.58 173.73z"
          fill="rgba(58, 78, 117, 1)"
        ></path>
        <path
          d="M118.67 207.79L133.66 207.79L133.66 222.78L118.67 222.78z"
          stroke="rgba(58, 78, 117, 1)"
        ></path>
        <path
          d="M116.25 124.97 a33.77 33.77 0 1 0 67.54 0 a33.77 33.77 0 1 0 -67.54 0z"
          stroke="rgba(58, 78, 117, 1)"
        ></path>
        <path
          d="M340.09 389.83 a18.04 18.04 0 1 0 36.08 0 a18.04 18.04 0 1 0 -36.08 0z"
          stroke="rgba(162, 213, 171, 1)"
        ></path>
        <path
          d="M150.42 301.49a18.16 18.16 0 1 0 16.33-32.44z"
          fill="rgba(162, 213, 171, 1)"
        ></path>
        <path
          d="M339.73 437.28 a1.04 1.04 0 1 0 2.08 0 a1.04 1.04 0 1 0 -2.08 0z"
          fill="rgba(162, 213, 171, 1)"
        ></path>
        <path
          d="M554.92 380.02L582.23 380.02L582.23 407.33L554.92 407.33z"
          stroke="rgba(58, 78, 117, 1)"
        ></path>
        <path
          d="M341.24 374.34L382.72 374.34L382.72 408.23L341.24 408.23z"
          stroke="rgba(58, 78, 117, 1)"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1042">
          <rect width="600" height="445" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  );
}

export default ShapesBg;
