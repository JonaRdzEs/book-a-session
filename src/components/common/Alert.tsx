import type { ReactNode } from "react";
import toast, { type Toast } from "react-hot-toast";
import Check from "./icons/Check";
import CircleCross from "./icons/CircleCross";

type AlertProps = {
  variant: "success" | "error";
  children: ReactNode,
  t: Toast
}

const icons = {
  "success": <Check fill="#36f25b" />,
  "error": <CircleCross fill="#FF6F61" />,
}

function Alert({ variant, children, t }: AlertProps) {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-sm w-full bg-[#f8f8f8] shadow-md rounded-sm pointer-events-auto flex`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 pt-0.5">
            {icons[variant]}
          </div>
          <div className="ml-3 flex-1">
            {children}
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-sm p-4 flex items-center justify-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  );

}

export default Alert;
