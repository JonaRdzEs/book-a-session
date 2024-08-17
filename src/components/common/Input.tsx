import type { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label?: string,
}&  ComponentPropsWithoutRef<"input">;

function Input(props: InputProps) {
  return (
    <div className="flex justify-start items-start flex-col gap-1 w-full">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input {...props} />
    </div>
  );
}

export default Input;
