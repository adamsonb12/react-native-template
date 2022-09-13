import { ReactNode } from "react";
import { Platform, View } from "react-native";
import styled from "styled-components/native";

import { colors, fontSizeSecondary, spacing12, spacing8 } from "../theme";
import { LabelLarge } from "../typography/label";

export const StyledBadge = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${Platform.OS === "android" ? 8 : "8px"};
  padding: ${spacing8} ${spacing12};
  background-color: ${colors.neutral};
  align-self: flex-start;
`;

export const BadgeLabel = styled(LabelLarge)`
  font-size: ${fontSizeSecondary};
  line-height: ${fontSizeSecondary};
`;

export const Badge = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <StyledBadge>
      <BadgeLabel {...props}>{children}</BadgeLabel>
    </StyledBadge>
  );
};

export const PrimaryBadge = styled(Badge)`
  color: ${colors.primary};
`;
