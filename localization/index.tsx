import { createContext, ReactNode, useContext } from "react";
import { I18n } from "i18n-js";
import * as Localization from "expo-localization";

import { translations } from "./translations";

export interface LocalizationContext {
  localization: I18n;
}

const LocalizationContext = createContext<LocalizationContext>({
  localization: new I18n(translations),
});

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const i18n = new I18n(translations);

  i18n.locale = Localization.locale;
  i18n.enableFallback = true;

  return (
    <LocalizationContext.Provider value={{ localization: i18n }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalizationContext = () => {
  return useContext(LocalizationContext);
};
