import { Button } from "../../types";
import "./Button.css";

export function Button({
  title,
  type,
  onClick,
  classButton,
  icon,
  classIcon,
}: Button) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`button  ${classButton || ""} button bg-primary`}
    >
      {title}
      {icon && <img className={classIcon} src={icon} />}
    </button>
  );
}
