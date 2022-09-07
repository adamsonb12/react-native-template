import { ReactNode } from "react";
import { Text } from "react-native-paper";

export const Label = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <Text variant="labelMedium" {...props}>
      {children}
    </Text>
  );
};

export const LabelLarge = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <Text variant="labelLarge" {...props}>
      {children}
    </Text>
  );
};

export const LabelSmall = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <Text variant="labelSmall" {...props}>
      {children}
    </Text>
  );
};
