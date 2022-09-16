import * as React from "react";
import { View } from "react-native";
import { useLocalizationContext } from "../../../localization";
import { useAuthContext } from "../../auth";

import { PrimaryButton } from "../../components/@common/buttons/primary";

export const WelcomeScreen = () => {
  const { signIn } = useAuthContext();
  const { localization } = useLocalizationContext();

  return (
    <View>
      <PrimaryButton
        onPress={() => signIn({ username: "user", password: "password" })}
      >
        {localization.t("login")}
      </PrimaryButton>
    </View>
  );
};
