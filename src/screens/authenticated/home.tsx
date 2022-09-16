import * as React from "react";

import { ScreenView } from "../../components/@common/layout";

import { useAuthContext } from "../../auth";
import { DangerButton } from "../../components/@common/buttons/danger";
import { useLocalizationContext } from "../../../localization";

export const HomeScreen = () => {
  const { signOut } = useAuthContext();
  const { getTranslation } = useLocalizationContext();

  return (
    <ScreenView>
      <DangerButton onPress={() => signOut()}>
        {getTranslation("logout")}
      </DangerButton>
    </ScreenView>
  );
};
