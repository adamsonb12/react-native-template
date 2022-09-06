import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import { AppNavigation } from "./src/navigation";
import { AuthProvider, useAuthContext } from "./src/auth";
import { linkingConfiguration } from "./src/navigation/linking-configuration";
import { theme } from "./src/components/@common/theme";

export default function App({ navigation }) {
  // Connect to DB here

  return (
    // Providers & Content Providers
    <PaperProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer linking={linkingConfiguration}>
          {/* Actual App */}
          <AppNavigation />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
}
