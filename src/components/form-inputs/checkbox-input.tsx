import { type FormValues } from "../../types/form";

interface Props {
  updateState: React.Dispatch<React.SetStateAction<FormValues>>;
  currentState: FormValues;
}

export const CheckboxInput = ({ updateState, currentState }: Props) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateState({ ...currentState, consent: event.target.checked });
  }

  return (
    <div className="flex items-center gap-2 flex-row-reverse justify-end my-4">
      <label htmlFor="consent">I consent to being contacted by the team</label>
      <input
        type="checkbox"
        name="consent"
        id="consent"
        className="h-4 w-4 rounded border border-Grey-500-medium accent-Green-600-medium"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
      />
    </div>
  );
};
