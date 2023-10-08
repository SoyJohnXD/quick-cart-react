import { Filter } from "../../../types";
import { stringToKebabCase } from "../../../utils";

export default function Filter({ title, onChange }: Filter) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="form-checkbox mr-2"
        name={stringToKebabCase(title)}
        value={stringToKebabCase(title)}
        onChange={onChange}
      />
      {title}
    </label>
  );
}
