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
        fontFamily: "Gordita-Regular",
        textTransform: "capitalize",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
