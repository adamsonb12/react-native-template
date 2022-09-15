import { ReactNode } from "react";
import { Platform, View, TextInput } from "react-native";
// import { TextInput } from "react-native-paper";
import styled from "styled-components/native";

import { Label, LabelLarge, LabelSmall } from "../typography/label";

import { colors, spacing16, spacing20, spacing4, spacing8 } from "../theme";

export const FieldWrapper = styled(View)`
  display: flex;
  flex-direction: column;
`;

export const ErrorLabel = styled(LabelSmall)`
  color: ${colors.danger};
  padding-left: ${spacing8};
  text-align: center;
`;

export const StyledLabelLarge = styled(LabelLarge)`
  padding-left: ${spacing8};
  font-family: "Gordita-Medium-Italic";
`;

export const StyledLabel = styled(Label)`
  padding-left: ${spacing8};
`;

export const Field = ({
  children,
  label,
  clarifier,
  errorMessage,
}: {
  children: ReactNode;
  label?: string;
  clarifier?: string;
  errorMessage?: string;
}) => {
  return (
    <FieldWrapper>
      {label && <StyledLabelLarge>{label}</StyledLabelLarge>}
      {children}
      {clarifier && !errorMessage && (
        <StyledLabel>{`*${clarifier}`}</StyledLabel>
      )}
      {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
    </FieldWrapper>
  );
};

export const StyledTextInput = styled(TextInput).attrs({
  placeholderTextColor: colors.neutral,
})<{ hasError?: boolean }>`
  background: ${colors.white};
  border-color: ${(props) => (props.hasError ? colors.danger : "#67869e")};
  border-width: 1px;
  border-style: solid;
  padding: ${spacing20} ${spacing16} ${spacing16} ${spacing16};
  border-radius: ${Platform.OS === "android" ? 10 : "10px"};
  margin: ${spacing4} 0 ${spacing8};
`;
