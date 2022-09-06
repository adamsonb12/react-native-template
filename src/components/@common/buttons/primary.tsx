import React, { ReactNode } from "react";
import { Button, useTheme } from "react-native-paper";

export const PrimaryButton = ({
  onPress,
  children,
  mode = "contained",
  disabled,
  ...props
}: {
  onPress: () => void;
  children: ReactNode;
  mode?: "text" | "outlined" | "contained";
  disabled?: boolean;
}) => {
  const { colors } = useTheme();

  return (
    <Button
      mode={mode}
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? colors.disabled : colors.primary,
        borderColor: disabled ? colors.disabled : colors.primary,
      }}
      labelStyle={colors.text}
      {...props}
    >
      {children}
    </Button>
  );
};
