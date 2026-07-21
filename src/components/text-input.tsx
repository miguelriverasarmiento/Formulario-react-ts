import { RequiredSign } from "./required-sign"

interface Props {
label: string
id: string
}

export const TextInput = ({ label, id }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div>
        <label htmlFor={id}>{label}</label><RequiredSign />
      </div>
      <input
        id={id}
        className="border border-Grey-500-medium rounded-sm h-10"
        type="text"
        name={id}
      />
    </div>
  );
};
