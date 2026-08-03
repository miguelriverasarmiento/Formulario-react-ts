import { RequiredSign } from "../required-sign";
import { type FormValues } from "../../types/form";

interface Props {
  updateState: React.Dispatch<React.SetStateAction<FormValues>>;
  currentState: FormValues;
}

export const MessageInput = ({ updateState, currentState }: Props) => {

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      updateState({ ...currentState, message: event.target.value });
    }

  return (
    <div>
      <label htmlFor="msg" className="mb-2 block">
        Message
        <RequiredSign />
      </label>
      <textarea
        className="border border-Grey-500-medium w-full px-2.5 rounded-sm h-40 md:h-30"
        name="msg"
        id="msg"
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(event)}
      ></textarea>
    </div>
  );
};
