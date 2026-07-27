import { useState } from "react"
import { RadioInput } from "./radio-input"
import { TextInput } from "./text-input"
import { RequiredSign } from "./required-sign"
import { type FormValues } from "../types/form"

export const Form = () => {

  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    secondName: "",
    email: ""
  })

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Form values", formValues)
  }

  return (
    <form 
      onSubmit={(event: React.SubmitEvent<HTMLFormElement>) => handleSubmit(event)} 
      action="" 
      className="bg-white w-150 m-auto p-8 rounded-2x1 flex flex-col gap-4"
    >
      
      <h2 className="text-2x1 font-medium text-Grey-900-darker mb-2">Contact Us</h2>

      <div className="flex flex-col md:flex-row gap-4">
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
          <RadioInput label="General Enquiry" id="general_enquiry" />
          <RadioInput label="Support Request" id="support_request" />
        </div>
      </div>

      <div>
        <label htmlFor="msg" className="mb-2 block">Message<RequiredSign /></label>
        <textarea
          className="border border-Grey-500-medium w-full rounded-sm h-40 md:h-30"
          name="msg"
          id="msg"
        ></textarea>
      </div>

      <div className="flex gap-2 flex-row-reverse justify-end my-4">
        <label htmlFor="consent">
          I consent to being contacted by the team
        </label>
        <input type="checkbox" name="consent" id="consent" />
      </div>

      <input
        type="submit"
        value="submit"
        className="bg-Green-600-medium w-full p-2 text-white font-bold rounded-md h-12 cursor-pointer hover:bg-Grey-900-darker"
      />
    </form>
  );
};
