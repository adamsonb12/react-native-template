import {
  LinkingOptions,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export const linkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [],
  config: {
    screens: {
      UnauthenticatedRoot: {
        screens: {
          Welcome: "Welcome",
        },
      },
      AuthenticatedRoot: {
        screens: {
          Home: "Home",
        },
      },
    },
  },
};

// navigation types config
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNativation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  AuthenticatedRoot: NavigatorScreenParams<AuthenticatedParamList> | undefined;
  UnauthenticatedRoot:
    | NavigatorScreenParams<UnauthenticatedParamList>
    | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type AuthenticatedParamList = {
  Home: undefined;
};

export type UnauthenticatedParamList = {
  Welcome: undefined;
};
