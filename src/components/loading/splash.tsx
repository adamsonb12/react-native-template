import React, { useRef } from "react";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

import { ScreenView } from "../@common/layout";

const StyledScreenContainer = styled(ScreenView)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Splash = () => {
  const animation = useRef(null);

  return (
    <StyledScreenContainer>
      <LottieView
        autoPlay
        ref={animation}
        source={require("../../../assets/animations/loading.json")}
      />
    </StyledScreenContainer>
  );
};
