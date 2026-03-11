"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import en from "../../messages/en.json";

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
type MessagesDict = Record<string, unknown>;

const cache: Partial<Record<LocaleCode, MessagesDict>> = {
  en: en as unknown as MessagesDict,
};

async function loadMessages(code: LocaleCode): Promise<MessagesDict> {
  if (cache[code]) return cache[code]!;
  // Explicit imports keep each locale in its own chunk.
  let mod: { default: MessagesDict };
  switch (code) {
    case "so":
      mod = await import("../../messages/so.json");
      break;
    case "sw":
      mod = await import("../../messages/sw.json");
      break;
    case "ar":
      mod = await import("../../messages/ar.json");
      break;
    case "fr":
      mod = await import("../../messages/fr.json");
      break;
    case "it":
      mod = await import("../../messages/it.json");
      break;
    case "nl":
      mod = await import("../../messages/nl.json");
      break;
    case "en":
    default:
      mod = { default: en as unknown as MessagesDict };
      break;
  }
  cache[code] = mod.default;
  return mod.default;
}

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
  const [dict, setDict] = useState<MessagesDict>(cache.en!);

  useEffect(() => {
    let cancelled = false;
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
      const valid = stored && LOCALES.some((l) => l.code === stored);
      if (valid) setLocaleState(stored as LocaleCode);
    } catch {
      // ignore
    }

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    loadMessages(locale)
      .then((m) => {
        if (!cancelled) setDict(m);
      })
      .catch(() => {
        if (!cancelled) setDict(cache.en!);
      });
    return () => {
      cancelled = true;
    };
  }, [locale]);

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
      const fallback = cache.en!;
      return getValue(dict as Record<string, unknown>, key) ?? getValue(fallback as Record<string, unknown>, key) ?? key;
    },
    [dict]
  );

  const currentFlag = useMemo(() => LOCALES.find((l) => l.code === locale)?.flag ?? "🇬🇧", [locale]);
  const isRtl = useMemo(() => locale === "ar", [locale]);

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
