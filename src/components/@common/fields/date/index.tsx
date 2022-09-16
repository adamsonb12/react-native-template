import { Platform, TouchableOpacity, View } from "react-native";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import styled from "styled-components/native";

import {
  ErrorLabel,
  Field,
  FieldWrapper,
  StyledLabel,
  StyledLabelLarge,
} from "../field";
import { Text } from "../../typography/text";

import { colors, spacing16, spacing20, spacing4, spacing8 } from "../../theme";
import { formaDate } from "../../../../utils/dates";

const IOSDatePickerWrapper = styled(FieldWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FieldLabels = styled(View)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const IOSDatePicker = styled(DateTimePicker)`
  min-width: 40%;
`;

const AndroidDatePickerInput = styled(TouchableOpacity)`
  background: ${colors.white};
  border-color: ${(props) => (props.hasError ? colors.danger : "#67869e")};
  border-width: 1px;
  border-style: solid;
  padding: ${spacing20} ${spacing16} ${spacing16} ${spacing16};
  border-radius: ${Platform.OS === "android" ? 10 : "10px"};
  margin: ${spacing4} 0 ${spacing8};
`;

const StyledText = styled(Text)``;

export const DatePicker = ({
  date,
  onChange,
  maxDate,
  minDate,
  label,
  clarifier,
  errorMessage,
}: {
  date: Date;
  onChange: (date: Date) => void;
  maxDate?: Date;
  minDate?: Date;
  label?: string;
  clarifier?: string;
  errorMessage?: string;
}) => {
  const onShowAndroidPicker = () => {
    DateTimePickerAndroid.open({
      mode: "date",
      display: "default",
      value: date,
      onChange: (event, newDate) => {
        onChange(newDate);
        DateTimePickerAndroid.dismiss("date");
      },
      maximumDate: maxDate,
      minimumDate: minDate,
    });
  };

  // This uses the phone's native date picker, so it's not supported in web
  if (Platform.OS === "web") {
    return null;
  }

  if (Platform.OS === "ios") {
    return (
      <IOSDatePickerWrapper
        label={label}
        clarifier={clarifier}
        errorMessage={errorMessage}
      >
        <FieldLabels>
          {label && <StyledLabelLarge>{label}</StyledLabelLarge>}
          {clarifier && <StyledLabel>{`*${clarifier}`}</StyledLabel>}
          {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
        </FieldLabels>
        {/* <View style={{ minWidth: "50%" }> */}
        <IOSDatePicker
          value={date}
          style={{
            minWidth: "50%",
          }}
          mode="date"
          display="default"
          onChange={(event, newDate) => {
            onChange(newDate);
          }}
          maximumDate={maxDate}
          minimumDate={minDate}
        />
      </IOSDatePickerWrapper>
    );
  }

  if (Platform.OS === "android") {
    return (
      <Field label={label} clarifier={clarifier} errorMessage={errorMessage}>
        <AndroidDatePickerInput onPress={onShowAndroidPicker}>
          <StyledText>{formaDate(date)}</StyledText>
        </AndroidDatePickerInput>
      </Field>
    );
  }

  return null;
};
