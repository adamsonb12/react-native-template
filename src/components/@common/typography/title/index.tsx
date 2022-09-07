import { ReactNode } from "react";
import { Text } from "react-native-paper";

export const Title = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <Text variant="titleMedium" {...props}>
      {children}
    </Text>
  );
};

export const TitleLarge = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <Text variant="titleLarge" {...props}>
      {children}
    </Text>
  );
};

export const TitleSmall = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <Text variant="titleSmall" {...props}>
      {children}
    </Text>
  );
};
