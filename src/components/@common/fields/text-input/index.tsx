import { TextInputProps } from "react-native-paper";
import { Field, StyledTextInput } from "../field";

export const TextInput = ({
  value,
  onChange,
  label,
  clarifier,
  errorMessage,
  placeholder,
  ...props
}: {
  value: string;
  onChange: (v: string) => void;
  label?: string;
  clarifier?: string;
  errorMessage?: string;
  placeholder?: string;
} & Partial<TextInputProps>) => {
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
