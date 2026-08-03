import { useState } from "react"
import { TextInput, RadioInput, MessageInput, CheckboxInput } from "./form-inputs"
import { RequiredSign } from "./required-sign"
import { type FormValues } from "../types/form"

export const Form = () => {

  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    secondName: "",
    email: "",
    queryType: "General Enquiry",
    message: "",
    consent: false
  })

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault() // Previene  que la pagina se recargue al enviar el formulario
    console.log("Form values", formValues)
  }

  return (
    <form 
      onSubmit={(event: React.SubmitEvent<HTMLFormElement>) => handleSubmit(event)} 
      action="" 
      className="bg-white max-w-167.5 m-auto p-8 rounded-2x1 flex-1 flex flex-col gap-5"
    >
      
      <h2 className="text-2x1 font-medium text-Grey-900-darker mb-2">Contact Us</h2>

      <div className="flex flex-col md:flex-row gap-5">
        <TextInput 
          label="First Name"
          id="first_name"
          updateState={setFormValues}
          currentState={formValues}
        />
        <TextInput 
          label="Second Name"
          id="second_name"
          updateState={setFormValues}
          currentState={formValues}
        />
      </div>

      <div className="">
        <TextInput
          label="Email Address"
          id="email"
          updateState={setFormValues}
          currentState={formValues}
        />
      </div>

      <div>
        <h3 className="mb-2">Query Type<RequiredSign /></h3>
        <div className="flex gap-4 flex-col md:flex-row">
          <RadioInput 
            label="General Enquiry" 
            id="general_enquiry"
            updateState={setFormValues}
            currentState={formValues}
          />
          <RadioInput 
            label="Support Request" 
            id="support_request" 
            updateState={setFormValues}
            currentState={formValues}
          />
        </div>
      </div>

      <MessageInput 
        updateState={setFormValues}
        currentState={formValues}
      />

      <CheckboxInput 
        updateState={setFormValues}
        currentState={formValues}
      />

      <input
        type="submit"
        value="submit"
        className="bg-Green-600-medium w-full p-2 text-white font-bold rounded-md h-12 cursor-pointer hover:bg-Grey-900-darker"
      />
    </form>
  );
};
