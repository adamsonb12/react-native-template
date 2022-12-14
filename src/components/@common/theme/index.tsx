import { Platform } from "react-native";
import { DefaultTheme, configureFonts } from "react-native-paper";

import * as customTheme from "./theme.json";

// To know what colors and variables can be overwritten, go here => https://callstack.github.io/react-native-paper/theming.html
const customWhite = "#F2F7FB";
const customDark = "#004751";
const customNeutral = "#B0C4D7";

export const colors = {
  ...DefaultTheme.colors,
  ...customTheme,
  // custom overrides
  primary: customTheme["color-primary-500"],
  success: customTheme["color-success-500"],
  info: customTheme["color-info-500"],
  warning: customTheme["color-warning-500"],
  danger: customTheme["color-danger-500"],
  background: customWhite,
  surface: customWhite,
  accent: customTheme["color-info-500"],
  error: customTheme["color-danger-500"],
  text: customDark,
  textLight: customWhite,
  onSurface: customDark,
  disabled: customNeutral,
  placeholder: customNeutral,
  backdrop: customWhite,
  notification: customTheme["color-warning-500"],
  secondary: "#6B10FF",
  terciary: "#FFFC71",
  customWhite,
  white: "#FFF",
  dark: customDark,
  neutral: customNeutral,
};

// fonts
export const fontConfig = {
  web: {
    regular: {
      fontFamily: "Gordita-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Gordita-Medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "Gordita-Light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "Gordita-Light",
      fontWeight: "normal",
    },
  },
  ios: {
    regular: {
      fontFamily: "Gordita-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Gordita-Medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "Gordita-Light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "Gordita-Light",
      fontWeight: "normal",
    },
  },
  android: {
    regular: {
      fontFamily: "Gordita-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Gordita-Medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "Gordita-Light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "Gordita-Light",
      fontWeight: "normal",
    },
  },
};

export const theme = {
  ...DefaultTheme,
  colors,
  // @ts-ignore
  fonts: configureFonts(fontConfig),
  // additinal theme customizations
};

export type ThemeOverride = typeof theme;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNativePaper {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Theme extends ThemeOverride {}
  }
}

export const spacing2 = "2px";
export const spacing4 = "4px";
export const spacing8 = "8px";
export const spacing12 = "12px";
export const spacing16 = "16px";
export const spacing20 = "20px";
export const spacing24 = "24px";
export const spacing32 = "32px";
export const spacing48 = "48px";
export const spacing64 = "64px";
export const spacing80 = "80px";
export const spacing96 = "96px";
export const spacing128 = "128px";
export const spacing160 = "160px";
export const spacing192 = "192px";
export const spacing224 = "224px";
export const spacing256 = "256px";
export const spacing288 = "288px";
export const spacing320 = "320px";

// ios : android/web
export const fontSizeTitle = Platform.OS === "ios" ? "17px" : "20px";
export const fontSizeParagraph = Platform.OS === "ios" ? "17px" : "16px";
export const fontSizeSecondary = Platform.OS === "ios" ? "15px" : "14px";
// tertiary is for labels, captions, etc
export const fontSizeTertiary = Platform.OS === "ios" ? "13px" : "14px";
// Tiny is for the AppBar and maybe some other but few use cases
export const fontSizeTiny = Platform.OS === "ios" ? "10px" : "14px";
