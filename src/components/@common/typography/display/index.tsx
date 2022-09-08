import { ReactNode } from "react";
import { Text } from "../text";

export const Display = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <Text variant="displayMedium" {...props}>
      {children}
    </Text>
  );
};

export const DisplayLarge = ({
  children,
  ...props
}: {
  children: ReactNode;
}) => {
  return (
    <Text variant="displayLarge" {...props}>
      {children}
    </Text>
  );
};

export const DisplaySmall = ({
  children,
  ...props
}: {
  children: ReactNode;
}) => {
  return (
    <Text variant="displaySmall" {...props}>
      {children}
    </Text>
  );
};
