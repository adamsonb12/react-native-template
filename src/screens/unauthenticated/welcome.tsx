import * as React from "react";
import { View } from "react-native";
import { useAuthContext } from "../../auth";

import { PrimaryButton } from "../../components/@common/buttons/primary";

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
