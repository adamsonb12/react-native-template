import React, { ReactNode } from "react";
import { Button, useTheme } from "react-native-paper";
import { fontConfig } from "../theme";

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
        fontFamily: fontConfig.ios.regular.fontFamily,
        textTransform: "capitalize",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
