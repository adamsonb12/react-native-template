import * as React from "react";
import { Dimensions, View } from "react-native";
import { useAuthContext } from "../../auth";

import { PrimaryButton } from "../../components/@common/buttons/primary";
import {
  Carousel,
  ImageWrapper,
  CarouselImage,
  CarouselContainer,
} from "../../components/@common/carousel";
import { Display } from "../../components/@common/typography/display";
import { isWholeNumber } from "../../utils/numbers";

export const WelcomeScreen = () => {
  const { signIn } = useAuthContext();
  const width = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = React.useState(0);

  const images = [
    "../../../assets/images/gun1.jpeg",
    "../../../assets/images/gun2.jpeg",
    "../../../assets/images/gun2.jpeg",
    "../../../assets/images/gun2.jpeg",
    "../../../assets/images/gun2.jpeg",
    "../../../assets/images/gun2.jpeg",
  ];
  const data = console.log(
    "🚀 ~ file: welcome.tsx ~ line 12 ~ WelcomeScreen ~ images",
    images
  );

  return (
    <View>
      <PrimaryButton
        onPress={() => signIn({ username: "user", password: "password" })}
      >
        Login
      </PrimaryButton>
      <View
        style={{
          height: 300,
          width: 200,
          backgroundColor: "cyan",
        }}
      >
        <CarouselContainer
          totalStepsCount={images.length}
          activeIndex={activeIndex}
        >
          <Carousel
            width={width}
            data={images}
            style={{
              zIndex: 1,
            }}
            onProgressChange={(off, abs) => {
              if (isWholeNumber(abs)) {
                setActiveIndex(abs);
              }
            }}
            renderItem={(item, index) => {
              return (
                <View>
                  <Display></Display>
                </View>
              );
            }}
          />
        </CarouselContainer>
      </View>
    </View>
  );
};
