import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";

import { AppNavigation } from "./src/navigation";
import { ApolloProvider } from "./config/apollo";
import { AuthProvider } from "./src/auth";
import { linkingConfiguration } from "./src/navigation/linking-configuration";
import { LocalizationProvider } from "./localization";
import { Splash } from "./src/components/@common/loading/splash";
import { theme } from "./src/components/@common/theme";

export default function App({ navigation }) {
  // custom font
  const [fontsLoaded] = useFonts({
    "Gordita-Black": require("./assets/fonts/gordita-black.otf"),
    "Gordita-Bold": require("./assets/fonts/gordita-bold.otf"),
    "Gordita-Light": require("./assets/fonts/gordita-light.otf"),
    "Gordita-Medium": require("./assets/fonts/gordita-medium.otf"),
    "Gordita-Regular": require("./assets/fonts/gordita-regular.otf"),
    "Gordita-Bold-Italic": require("./assets/fonts/gordita-bold-italic.otf"),
    "Gordita-Light-Italic": require("./assets/fonts/gordita-light-italic.otf"),
    "Gordita-Medium-Italic": require("./assets/fonts/gordita-medium-italic.otf"),
    "Gordita-Regular-Italic": require("./assets/fonts/gordita-regular-italic.otf"),
  });

  if (!fontsLoaded) {
    return <Splash />;
  }

  return (
    // Providers & Content Providers
    <PaperProvider theme={theme}>
      <AuthProvider>
        <ApolloProvider>
          <LocalizationProvider>
            <NavigationContainer linking={linkingConfiguration}>
              {/* Actual App */}
              <AppNavigation />
            </NavigationContainer>
          </LocalizationProvider>
        </ApolloProvider>
      </AuthProvider>
    </PaperProvider>
  );
}
