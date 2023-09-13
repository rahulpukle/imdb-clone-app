import { ReactNode } from "react";

interface proper {
  children: ReactNode;
  color?: "primary" | "secondary" | "success";
  onClickButton: () => void;
}
const Button = ({ children, color = "success", onClickButton }: proper) => {
  return (
    <button className={"btn btn-" + color} onClick={onClickButton}>
      {children}
    </button>
  );
};

export default Button;
