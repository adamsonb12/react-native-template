import * as React from "react";
import { Text, View } from "react-native";
import { useAuthContext } from "../../auth";

import { DangerButton } from "../../components/@common/buttons/danger";

export const HomeScreen = () => {
  const { signOut } = useAuthContext();
  return (
    <View>
      <DangerButton onPress={() => signOut()}>Logout</DangerButton>
    </View>
  );
};
