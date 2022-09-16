import * as React from "react";
import { View } from "react-native";

import { useAuthContext } from "../../auth";
import { DangerButton } from "../../components/@common/buttons/danger";
import { useLocalizationContext } from "../../../localization";

export const HomeScreen = () => {
  const { signOut } = useAuthContext();
  const { localization } = useLocalizationContext();

  return (
    <View>
      <DangerButton onPress={() => signOut()}>
        {localization.t("logout")}
      </DangerButton>
    </View>
  );
};
