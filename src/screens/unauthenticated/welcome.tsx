import * as React from "react";
import { Text, View } from "react-native";
import { useAuthContext } from "../../auth";

import { PrimaryButton } from "../../components/@common/buttons/primary";
import { TransitionGroupFader } from "../../components/@common/transition-group-fader";
import { DisplayLarge } from "../../components/@common/typography/display";

export const WelcomeScreen = () => {
  const { signIn } = useAuthContext();

  return (
    <View>
      <PrimaryButton
        onPress={() => signIn({ username: "user", password: "password" })}
      >
        Login
      </PrimaryButton>
    </View>
  );
};
