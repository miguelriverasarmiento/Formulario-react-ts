interface Props {
  label: string
  id: string
}

export const RadioInput = ({ label, id }: Props) => {
  return (
    <div className="flex flex-row-reverse justify-end gap-2 items-center border border-Grey-500-medium rounded-sm w-full px-4 py-2 h-10">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name="query_type"
        type="radio"
      />
    </div>
  )
}
