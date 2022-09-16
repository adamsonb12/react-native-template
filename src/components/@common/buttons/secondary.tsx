import React, { ReactNode } from "react";
import { Button, useTheme } from "react-native-paper";

export const SecondaryButton = ({
  onPress,
  children,
  disabled,
  ...props
}: {
  onPress: () => void;
  children: ReactNode;
  disabled?: boolean;
}) => {
  const { colors } = useTheme();

  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={{
        backgroundColor: colors.secondary,
      }}
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
