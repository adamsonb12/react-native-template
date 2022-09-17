import { useState } from "react";
import MaskedInput from "react-native-mask-input";
import styled from "styled-components/native";

import { Field } from "../field";
import { TextInput } from "../text-input";

import { isValidSSN } from "../../../../utils/numbers";
import { colors, spacing16, spacing20, spacing4, spacing8 } from "../../theme";
import { Platform } from "react-native";

const maskArray = [
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const StyledInput = styled(MaskedInput)`
  background: ${colors.white};
  border-color: ${(props) => (props.hasError ? colors.danger : "#67869e")};
  border-width: 1px;
  border-style: solid;
  padding: ${spacing20} ${spacing16} ${spacing16} ${spacing16};
  border-radius: ${Platform.OS === "android" ? 10 : "10px"};
  margin: ${spacing4} 0 ${spacing8};
`;

export const SocialSecurityNumberInput = ({
  ssn,
  onChange,
}: {
  ssn: number;
  onChange: (ssn: number) => void;
}) => {
  const [maskedValue, setMaskedValue] = useState("");

  return (
    <Field
      label="Social Security Number"
      clarifier="we encrypt sensitive information"
      errorMessage={maskedValue && !isValidSSN(ssn) ? "Invalid SSN" : undefined}
    >
      <StyledInput
        value={maskedValue ?? String(ssn)}
        onChangeText={(masked, unmasked) => {
          onChange(Number(unmasked));
          setMaskedValue(masked);
        }}
        mask={maskArray}
      />
    </Field>
  );
};
