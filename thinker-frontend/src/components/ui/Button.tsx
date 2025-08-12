import { ReactElement } from "react";
interface buttonProps {
  variant: "primary" | "secondary";
  text: String;
  startIcon?: ReactElement;
}

const variant = { primary: "bg-pinki-800", secondary: "bg-pinki-200" };
export const Button = (props: buttonProps) => {
  return <button className={variant[props.variant]}>{props.text}</button>;
};
