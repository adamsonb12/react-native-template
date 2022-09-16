import { Platform, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import { Text } from "../../typography/text";

import styled from "styled-components/native";
import { colors, fontConfig, fontSizeTitle, spacing64 } from "../../theme";

const CharacterCell = styled(View)<{ isActive?: boolean; hasError?: boolean }>`
  background-color: ${colors.white};
  border: 1px solid ${(props) => (props.hasError ? colors.danger : colors.info)};
  border-radius: ${Platform.OS === "android" ? 15 : "15px"};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${spacing64};
  width: 50px;
`;

const CharacterCellText = styled(Text)`
  font-size: 36px;
  text-align: center;
  font-family: ${fontConfig.ios.light.fontFamily};
`;

export const ValidationCodeInput = ({
  value,
  onChange,
  disabled,
  characterCount = 6,
  ...props
}: {
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  characterCount?: number;
}) => {
  const ref = useBlurOnFulfill({ value, cellCount: characterCount });
  const [calculatedProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChange,
  });

  return (
    <CodeField
      ref={ref}
      {...calculatedProps}
      {...props}
      value={value}
      onChangeText={onChange}
      cellCount={characterCount}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      rootStyle={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      renderCell={({ index, symbol, isFocused }) => (
        <CharacterCell
          // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
          onLayout={getCellOnLayoutHandler(index)}
          key={index}
        >
          <CharacterCellText isActive={isFocused}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </CharacterCellText>
        </CharacterCell>
      )}
    />
  );
};
