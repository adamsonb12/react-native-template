import { isValidEmail as checkEmailValidation } from "../../../../utils/text-utils";
import { TextInput, TextInputProps } from "../text-input";

export const EmailInput = ({
  email,
  onChange,
}: {
  email: string;
  onChange: (text: string) => void;
} & Omit<TextInputProps, "value" | "onChange">) => {
  const isValidEmail = checkEmailValidation(email);
  return (
    <TextInput
      value={email}
      onChange={onChange}
      autoComplete="email"
      errorMessage={email && !isValidEmail ? "Invalid email" : null}
    />
  )
}
