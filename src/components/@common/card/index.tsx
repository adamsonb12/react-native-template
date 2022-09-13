import styled from "styled-components/native";
import { Card as PaperCard } from "react-native-paper";

import { colors, spacing16, spacing20 } from "../theme";
import { Platform } from "react-native";

export const Card = styled(PaperCard)`
  padding: ${spacing16} ${spacing20};
  background-color: ${colors.white};
  border-radius: ${Platform.OS === "android" ? 10 : "10px"};
`;
