"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "../../messages/en.json";
import so from "../../messages/so.json";
import sw from "../../messages/sw.json";
import ar from "../../messages/ar.json";
import fr from "../../messages/fr.json";
import it from "../../messages/it.json";
import nl from "../../messages/nl.json";

const messages: Record<string, Record<string, unknown>> = { en, so, sw, ar, fr, it, nl };

export const LOCALES = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "so", name: "Soomaali", flag: "🇸🇴" },
  { code: "sw", name: "Kiswahili", flag: "🇹🇿" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
] as const;

export type LocaleCode = (typeof LOCALES)[number]["code"];

const STORAGE_KEY = "barwaaqo-locale";

function getValue(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : undefined;
}

type LanguageContextType = {
  locale: LocaleCode;
  setLocale: (code: LocaleCode) => void;
  t: (key: string) => string;
  isRtl: boolean;
  currentFlag: string;
};

const defaultLocale: LocaleCode = "en";

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
      if (stored && messages[stored]) setLocaleState(stored);
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((code: LocaleCode) => {
    setLocaleState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      if (!mounted) return key;
      const msg = messages[locale];
      const fallback = messages.en;
      return getValue(msg as Record<string, unknown>, key) ?? getValue(fallback as Record<string, unknown>, key) ?? key;
    },
    [locale, mounted]
  );

  const currentFlag = LOCALES.find((l) => l.code === locale)?.flag ?? "🇬🇧";
  const isRtl = locale === "ar";

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isRtl, currentFlag }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
