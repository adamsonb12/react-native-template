import { ReactNode } from "react";
import { Text } from "../text";

export const Headline = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <Text variant="headlineMedium" {...props}>
      {children}
    </Text>
  );
};

export const HeadlineLarge = ({
  children,
  ...props
}: {
  children: ReactNode;
}) => {
  return (
    <Text variant="headlineLarge" {...props}>
      {children}
    </Text>
  );
};

export const HeadlineSmall = ({
  children,
  ...props
}: {
  children: ReactNode;
}) => {
  return (
    <Text variant="headlineSmall" {...props}>
      {children}
    </Text>
  );
};
