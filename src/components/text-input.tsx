interface Props {
label: string
id: string
}

export const TextInput = ({ label, id }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className="border border-Grey-500-medium w-full rounded-sm h-10"
        type="text"
        name={id}
      />
    </div>
  );
};
