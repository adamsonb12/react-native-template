import { format } from "date-fns";
import { enUS } from "date-fns/locale";

// TODO => this should automatically handle localization
export const formaDate = (date: Date) => {
  return format(date, "P", { locale: enUS });
};
