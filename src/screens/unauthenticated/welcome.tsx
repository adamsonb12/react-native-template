import * as React from "react";
import { useLocalizationContext } from "../../../localization";
import { useAuthContext } from "../../auth";

import { PrimaryButton } from "../../components/@common/buttons/primary";
import { ScreenView } from "../../components/@common/layout";

export const WelcomeScreen = () => {
  const { signIn } = useAuthContext();
  const { getTranslation } = useLocalizationContext();

  return (
    <ScreenView>
      <PrimaryButton
        onPress={() => signIn({ username: "user", password: "password" })}
      >
        {getTranslation("login")}
      </PrimaryButton>
    </ScreenView>
  );
};
