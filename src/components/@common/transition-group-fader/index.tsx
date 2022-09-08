import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import styled from "styled-components";

const Container = styled(View)`
  height: 100%;
  width: 100%;
`;

interface Item {
  id: string;
  node: ReactNode;
}

export const TransitionGroupFader = ({
  items,
  delay = 5000,
  duration = 1000,
  ...props
}: {
  items: Item[];
  delay?: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  const animationValue = getAnimationValue(delay, duration, () => {
    setCount((prevCount) => (prevCount + 1 < items.length ? prevCount + 1 : 0));
  });

  return (
    <Container {...props}>
      <Animated.View
        style={[
          {
            opacity: animationValue.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0, 1, 0],
            }),
          },
        ]}
      >
        {items[count].node}
      </Animated.View>
    </Container>
  );
};

const getAnimationValue = (delay, duration, callBack) => {
  let isMounted = true;
  const animationValue = useRef(new Animated.Value(0)).current;
  const fadeInOut = () => {
    Animated.sequence([
      Animated.timing(animationValue, {
        delay: 200,
        duration: duration,
        toValue: 0.5,
        useNativeDriver: true,
      }),
      Animated.timing(animationValue, {
        delay: delay,
        duration: duration,
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (isMounted) {
        animationValue.setValue(0);
        callBack();
        fadeInOut();
      }
    });
  };
  useEffect(() => {
    fadeInOut();

    return () => {
      animationValue.stopAnimation();
      isMounted = false;
    };
  }, []);
  return animationValue;
};
