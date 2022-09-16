import React, { ReactNode } from "react";
import { Button, useTheme } from "react-native-paper";
import { fontConfig } from "../theme";

export const PrimaryButton = ({
  onPress,
  children,
  mode = "contained",
  disabled,
  ...props
}: {
  onPress: () => void;
  children: ReactNode;
  mode?: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  disabled?: boolean;
}) => {
  const { colors } = useTheme();

  return (
    <Button
      style={{
        backgroundColor: disabled ? colors.disabled : colors.primary,
      }}
      mode={mode}
      onPress={onPress}
      disabled={disabled}
      textColor={colors.textLight}
      labelStyle={{
        fontFamily: fontConfig.ios.regular.fontFamily,
        textTransform: "capitalize",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
