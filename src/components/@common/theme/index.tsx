import { DefaultTheme } from "react-native-paper";

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
};

export const theme = {
  ...DefaultTheme,
  colors,
  // additinal theme customizations
};

export type ThemeOverride = typeof theme;

declare global {
  namespace ReactNativePaper {
    interface Theme extends ThemeOverride {}
  }
}
