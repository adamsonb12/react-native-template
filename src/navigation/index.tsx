import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { WelcomeScreen, HomeScreen } from "../screens";
import { Splash } from "../components/@common/loading/splash";

import { useAuthContext } from "../auth";
import {
  AuthenticatedParamList,
  RootStackParamList,
  UnauthenticatedParamList,
} from "./linking-configuration";
import { colors } from "../components/@common/theme";

const headerStyle = {
  backgroundColor: colors.background,
};

const headerTitleStyle = {
  fontFamily: "Gordita-Bold",
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigation = () => {
  const { isLoading, isAuthenticated } = useAuthContext();

  if (isLoading) {
    return <Splash />;
  }

  return (
    <RootStack.Navigator>
      {!isAuthenticated && (
        <RootStack.Screen
          name="UnauthenticatedRoot"
          component={UnauthenticatedRoot}
          options={{ headerShown: false }}
        />
      )}

      {isAuthenticated && (
        <RootStack.Screen
          name="AuthenticatedRoot"
          component={AuthenticatedRoot}
          options={{ headerShown: false }}
        />
      )}
    </RootStack.Navigator>
  );
};

// Unauthenticated Navigation Stack
const UnauthenticatedStack =
  createNativeStackNavigator<UnauthenticatedParamList>();

const UnauthenticatedRoot = () => {
  return (
    <UnauthenticatedStack.Navigator>
      <UnauthenticatedStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerStyle,
          headerTitleStyle,
        }}
      />
    </UnauthenticatedStack.Navigator>
  );
};

// Authenticated Navigation Stack
const AuthenticatedStack = createNativeStackNavigator<AuthenticatedParamList>();

const AuthenticatedRoot = () => {
  return (
    <AuthenticatedStack.Navigator>
      <AuthenticatedStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle,
          headerTitleStyle,
        }}
      />
    </AuthenticatedStack.Navigator>
  );
};
