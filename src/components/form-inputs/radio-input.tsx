import { type FormValues, type QueryType } from "../../types/form";

interface Props {
  label: QueryType;
  id: string;
  updateState: React.Dispatch<React.SetStateAction<FormValues>>;
  currentState: FormValues;
}

export const RadioInput = ({ label, id, updateState, currentState }: Props) => {
  const isChecked = currentState.queryType === label;

  const handleChange = () => {
    updateState((prevState: FormValues) => ({
      ...prevState,
      queryType: label,
    }));
  };

  return (
    <label
      htmlFor={id}
      className={`flex flex-row-reverse accent-Green-600-medium cursor-pointer justify-end gap-2 items-center border border-Grey-500-medium rounded-sm w-full px-4 py-2 h-10 ${
        isChecked ? "bg-Green-200-lighter" : ""
      }`}
    >
      {label}
      <input
        id={id}
        type="radio"
        name="query_type"
        checked={isChecked}
        onChange={handleChange}
        value={label}
      />
    </label>
  );
};
