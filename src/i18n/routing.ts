import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ro", "en"],

  // Used when no locale matches
  defaultLocale: "ro",
});

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
