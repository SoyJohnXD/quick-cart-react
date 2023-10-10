import { Input, SearchInput } from "../../types";
import { searchIcon } from "../../assets";
import "./Input.css";

export function Input({
  label,
  type,
  name,
  placeholder,
  isRequired,
  classLabel,
  classInput,
  classContainer,
  onChage,
  value,
}: Input) {
  return (
    <div className={classContainer}>
      <label
        className={`block mb-2 text-sm font-medium text-gray-900 ${classLabel}`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={`input ${classInput}`}
        placeholder={placeholder}
        required={isRequired}
        onChange={onChage}
        value={value}
      />
    </div>
  );
}

export function SearchInput({
  type,
  name,
  placeholder,
  classInput,
  classContainer,
  whitIcon,
}: SearchInput) {
  return (
    <div className={`input-search ${classContainer}`}>
      <input
        name={name}
        className={classInput}
        type={type}
        placeholder={placeholder}
      />
      {whitIcon && <img src={searchIcon} />}
    </div>
  );
}
