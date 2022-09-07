import { ReactNode } from "react";
import { Text } from "react-native-paper";

export const Paragraph = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <Text variant="bodyMedium" {...props}>
      {children}
    </Text>
  );
};

export const ParagraphLarge = ({
  children,
  ...props
}: {
  children: ReactNode;
}) => {
  return (
    <Text variant="bodyLarge" {...props}>
      {children}
    </Text>
  );
};

export const ParagraphSmall = ({
  children,
  ...props
}: {
  children: ReactNode;
}) => {
  return (
    <Text variant="bodySmall" {...props}>
      {children}
    </Text>
  );
};
