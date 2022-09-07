import styled from "styled-components";
import { colors } from "../theme";
import { PrimaryButton } from "./primary";

export const DangerButton = styled(PrimaryButton)`
  background-color: ${colors.danger};
`;
