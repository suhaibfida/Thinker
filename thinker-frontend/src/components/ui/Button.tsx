import { ReactElement } from "react";

interface buttonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
}

const variant = {
  primary: "bg-pink-800 text-white",
  secondary: "bg-pinki-200 text-pink-800",
};
const defaults =
  "px-4 py-2 rounded-md flex items-center m-3 border cursor-pointer";
export const Button = (props: buttonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={` ${variant[props.variant]} ${defaults}`}
    >
      <div className="pr-2 ">{props.startIcon}</div>
      {props.text}
    </button>
  );
};
