import * as React from "react";
import { Dimensions, Image, View } from "react-native";
import { Headline } from "react-native-paper";
import { ICarouselInstance } from "react-native-reanimated-carousel";
import styled from "styled-components/native";

import {
  Carousel,
  CarouselProgressBar,
  ImageWrapper,
  ImageGradient,
  CarouselWrapper,
} from "../../components/@common/carousel";
import { Display } from "../../components/@common/typography/display";

import { spacing16, spacing32 } from "../../components/@common/theme";

const StyledDisplay = styled(Display)`
  text-align: center;
  padding-top: 10%;
`;

const StyledHeadline = styled(Headline)`
  text-align: center;
  padding: ${spacing16} 0 ${spacing32};
`;

const ProgressBar = styled(CarouselProgressBar)`
  flex-grow: 1;
`;

// this is designed for the screen's header to be hidden, adjust accordingly
export const CarouselExampleScreen = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const ref = React.useRef<ICarouselInstance>(null);

  interface Data {
    id: string;
    title: string;
    description: string;
  }
  const data: Data[] = [
    {
      id: "683c625f-46e7-4c77-bb4c-457ea1a41768",
      title: "Office 1",
      description: "so rad",
    },
    {
      id: "497a66b7-c407-490d-9478-489c09371d7d",
      title: "Office 2",
      description: "so rad",
    },
    {
      id: "f5a1d029-cd91-42c3-8433-bf9ae81794b2",
      title: "Office 3",
      description: "so rad",
    },
    {
      id: "c22f1f3b-946e-4a13-b20a-b58bc2935db5",
      title: "Office 4",
      description: "so rad",
    },
    {
      id: "0acbb41b-af00-4b21-b869-8a092a9b6908",
      title: "Office 5",
      description: "so rad",
    },
  ];

  return (
    <View
      style={{
        width,
        height,
      }}
    >
      <View
        style={{
          height: "85%",
          width: "100%",
        }}
      >
        <CarouselWrapper>
          <Carousel
            width={width}
            data={data}
            onSnapToItem={(index) => setActiveIndex(index)}
            loop={false}
            ref={ref}
            style={{
              alignItems: "center",
            }}
            renderItem={({ index }) => {
              return (
                <>
                  <StyledDisplay>{data[index].title}</StyledDisplay>
                  <StyledHeadline>{data[index].description}</StyledHeadline>
                  <ImageWrapper>
                    <Image
                      // source={require(`../../../assets/images/office1.jpeg`)}
                      source={{
                        uri: "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
                      }}
                      resizeMode="cover"
                      style={{
                        maxWidth: "100%",
                        height: "100%",
                      }}
                    />

                    <ImageGradient />
                  </ImageWrapper>
                </>
              );
            }}
          />
        </CarouselWrapper>
      </View>
      <ProgressBar totalStepsCount={data.length} activeIndex={activeIndex} />
    </View>
  );
};
