import styled from "styled-components/native";
import { Image, Platform, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { LinearGradient } from "expo-linear-gradient";

import { colors, spacing16, spacing20, spacing4 } from "../theme";
import { elevation4 as progressBarElevation } from "../elevation";
import React, { ReactElement, ReactNode } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const ImageWrapper = styled(View)`
  flex: 1;
  position: relative;
`;

export const ImageGradient = styled(LinearGradient).attrs({
  colors: ["transparent", colors.white],
})`
  position: absolute;
  width: 100%;
  height: 25%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const CarouselImage = styled(Image)``;

export { Carousel };

export const ProgressBarWrapper = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const ProgressBar = styled(View)`
  background-color: #fff;
  padding: ${spacing16} ${spacing20};
  border-radius: ${Platform.OS === "web" ? "20px" : 20};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 13px 34px rgba(0, 0, 0, 0.09);
`;

export { progressBarElevation };

export const Dot = styled(View)<{ isActive?: boolean }>`
  height: 7px;
  width: 7px;
  margin: 0 ${spacing4};
  border-radius: ${Platform.OS === "android" ? 50 : "50%"};
  background-color: ${(props) =>
    props.isActive ? colors.dark : colors.neutral};
`;

export const CarouselProgressBar = ({
  totalStepsCount,
  activeIndex,
  ...props
}: {
  totalStepsCount: number;
  activeIndex: number;
}) => {
  const steps = [...Array(totalStepsCount).keys()];

  return (
    <ProgressBarWrapper {...props}>
      <ProgressBar style={{ ...progressBarElevation }}>
        {steps.map((step, index) => (
          <Dot key={index} isActive={activeIndex === index} />
        ))}
      </ProgressBar>
    </ProgressBarWrapper>
  );
};

export const CarouselWrapper = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  if (Platform.OS === "web") {
    return children as ReactElement;
  }

  return <GestureHandlerRootView>{children}</GestureHandlerRootView>;
};
