import { createI18n } from "vue-i18n";
import { translations } from "./translations";

export const i18n = createI18n({
  legacy: false,
  locale: "pt",
  fallbackLocale: "en",
  messages: translations,
});
