import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";

import { AppNavigation } from "./src/navigation";
import { AuthProvider } from "./src/auth";
import { linkingConfiguration } from "./src/navigation/linking-configuration";
import { theme } from "./src/components/@common/theme";
import { Splash } from "./src/components/loading/splash";
import { ApolloProvider } from "./config/apollo";

export default function App({ navigation }) {
  // custom font
  const [fontsLoaded] = useFonts({
    "Gordita-Black": require("./assets/fonts/gordita-black.otf"),
    "Gordita-Bold": require("./assets/fonts/gordita-bold.otf"),
    "Gordita-Light": require("./assets/fonts/gordita-light.otf"),
    "Gordita-Medium": require("./assets/fonts/gordita-medium.otf"),
    "Gordita-Regular": require("./assets/fonts/gordita-regular.otf"),
  });

  if (!fontsLoaded) {
    return <Splash />;
  }

  return (
    // Providers & Content Providers
    <PaperProvider theme={theme}>
      <AuthProvider>
        <ApolloProvider>
          <NavigationContainer linking={linkingConfiguration}>
            {/* Actual App */}
            <AppNavigation />
          </NavigationContainer>
        </ApolloProvider>
      </AuthProvider>
    </PaperProvider>
  );
}
