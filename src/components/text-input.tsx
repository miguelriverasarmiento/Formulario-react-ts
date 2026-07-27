import { RequiredSign } from "./required-sign"
import { type FormValues } from "../types/form"

interface Props {
  label: string
  id: string
  updateState: React.Dispatch<React.SetStateAction<FormValues>>
  currentState: FormValues
}

export const TextInput = ({ label, id, updateState, currentState }: Props) => {

  const handleChange = (value:string) => {
    // Actualiza el estado del componente padre con el valor del input
    if (id === "first_name") {
      updateState({ ...currentState, firstName: value }) // Copias todo el estado actual currentState y actualiza la propiedad firstName con el nuevo valor
    }
    if (id === "second_name") {
      updateState({ ...currentState, secondName: value })
    }
    if (id === "email") {
      updateState({ ...currentState, email: value })
    }
  }

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
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};
