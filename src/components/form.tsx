import { RadioInput } from "./radio-input"
import { TextInput } from "./text-input"

export const Form = () => {
  return (
    <form action="" className="bg-white w-150 m-auto p-8 rounded-2x1 flex flex-col gap-4">
      <h2 className="text-2x1 font-medium text-Grey-900-darker mb-2">Contact Us</h2>

      <div className="flex gap-4">
        <TextInput label="First Name" id="first_name" />
        <TextInput label="Second Name" id="second_name" />
      </div>

      <div className="">
        <TextInput label="Email Address" id="email" />
      </div>

      <div>
        <h3>Query Type</h3>
        <div className="flex gap-4">
          <RadioInput label="General Enquiry" id="general_enquiry" />
          <RadioInput label="Support Request" id="support_request" />
        </div>
      </div>

      <div>
        <label htmlFor="msg">Message</label>
        <textarea
          className="border border-Grey-500-medium w-full rounded-sm h-30"
          name=""
          id="msg"
        ></textarea>
      </div>

      <div className="flex gap-2 flex-row-reverse justify-end">
        <label htmlFor="consent">
          I consent to being contacted by the team
        </label>
        <input type="checkbox" name="consent" id="consent" />
      </div>

      <input
        type="submit"
        value="submit"
        className="bg-Green-600-medium w-full p-2 text-white font-bold rounded-md"
      />
    </form>
  );
};
