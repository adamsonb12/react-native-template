import { ReactNode } from "react";
import { Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import styled from "styled-components/native";
import { colors } from "../theme";

export const ImageWrapper = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const CarouselImage = styled(Image)``;

export { Carousel };

export const CarouselWrapper = styled(View)`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const ProgressBarWrapper = styled(View)`
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: red;
`;

export const ProgressBar = styled(View)`
  background-color: ${colors.white};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 13px 34px rgba(0, 0, 0, 0.09);
`;

export const Dot = styled(View)<{ isActive?: boolean }>`
  height: 7px;
  width: 7px;
  border-radius: 50%;
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
  return (
    <ProgressBarWrapper {...props}>
      <ProgressBar>
        {new Array(totalStepsCount).map((step, index) => (
          <Dot isActive={activeIndex === index} />
        ))}
      </ProgressBar>
    </ProgressBarWrapper>
  );
};

// a wrapper for the carousel with all the supporting components already attached
export const CarouselContainer = ({
  totalStepsCount,
  activeIndex,
  children,
  ...props
}: {
  totalStepsCount: number;
  activeIndex: number;
  // the carousel
  children: ReactNode;
}) => {
  return (
    <CarouselWrapper {...props}>
      {children}

      <CarouselProgressBar
        totalStepsCount={totalStepsCount}
        activeIndex={activeIndex}
      />
    </CarouselWrapper>
  );
};
