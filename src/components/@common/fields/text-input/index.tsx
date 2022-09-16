import { TextInputProps as PaperTextInputProps } from "react-native-paper";
import { Field, StyledTextInput } from "../field";

export type TextInputProps = {
  value: string;
  onChange: (v: string) => void;
  label?: string;
  clarifier?: string;
  errorMessage?: string;
  placeholder?: string;
} & Partial<Omit<PaperTextInputProps, "onChange">>

export const TextInput = ({
  value,
  onChange,
  label,
  clarifier,
  errorMessage,
  placeholder,
  ...props
}: TextInputProps) => {
  return (
    <Field label={label} clarifier={clarifier} errorMessage={errorMessage}>
      <StyledTextInput
        value={value}
        placeholder={placeholder}
        onChangeText={(text) => onChange(text)}
        mode="outlined"
        hasError={!!errorMessage}
        {...props}
      />
    </Field>
  );
};
