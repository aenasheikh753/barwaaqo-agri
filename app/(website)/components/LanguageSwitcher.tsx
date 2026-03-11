"use client";

import React, { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage, LOCALES, type LocaleCode } from "../../context/LanguageContext";

type Variant = "header" | "footer" | "mobileNav";

export function LanguageSwitcher({ variant = "header", isScrolled }: { variant?: Variant; isScrolled?: boolean }) {
  const { locale, setLocale, t, currentFlag } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = LOCALES.find((l) => l.code === locale);

  if (variant === "header") {
    const iconColor = isScrolled ? "text-custom-charcoal" : "text-white";
    return (
      <div className="relative" ref={ref}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`xl:flex hidden items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isScrolled ? "bg-custom-light-bg text-custom-primary hover:bg-custom-sand/20" : "bg-white/20 text-white backdrop-blur-lg hover:bg-white/30 border border-white/30"}`}
          aria-label={t("language")}
          aria-expanded={open ? "true" : "false"}
        >
          <Globe className={`w-5 h-5 ${iconColor}`} strokeWidth={2} />
        </button>
        {open && (
          <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-custom-accent/20 overflow-hidden z-[3000] py-2">
            <div className="px-4 py-2 border-b border-custom-accent/10">
              <span className="text-xs font-bold text-custom-charcoal/60 uppercase tracking-widest">{t("language")}</span>
            </div>
            {LOCALES.map(({ code, name, flag }) => (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setLocale(code as LocaleCode);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-semibold transition-colors ${locale === code ? "bg-custom-sand/20 text-custom-primary" : "text-custom-charcoal hover:bg-custom-sand/10"}`}
              >
                <span className="w-8 shrink-0 flex items-center justify-center text-xl leading-none">{flag}</span>
                <span className="leading-none">{name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (variant === "mobileNav") {
    return (
      <div className="relative" ref={ref}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full min-h-[44px] text-left text-2xl font-bold transition-colors text-custom-primary hover:text-custom-olive"
          aria-label={t("language")}
          aria-expanded={open ? "true" : "false"}
        >
          <span className="inline-flex items-center gap-3 min-w-0">
            <Globe className="w-5 h-5 shrink-0" strokeWidth={2} />
            <span className="leading-none truncate">{t("language")}</span>
          </span>

          <svg
            className={`w-4 h-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.25 8.29a.75.75 0 0 1-.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {open && (
          <div className="mt-3 w-full bg-custom-light-bg rounded-2xl border border-custom-accent/20 overflow-hidden">
            {LOCALES.map(({ code, name, flag }) => (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setLocale(code as LocaleCode);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left text-base font-semibold transition-colors ${locale === code ? "bg-custom-sand/30 text-custom-primary" : "text-custom-charcoal hover:bg-custom-sand/10"}`}
              >
                <span className="w-8 shrink-0 flex items-center justify-center text-xl leading-none">{flag}</span>
                <span className="leading-none">{name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Footer variant: show current flag + label, same dropdown
  return (
    <div className="relative flex flex-col items-center md:items-start" ref={ref}>
      <span className="font-heading font-semibold text-lg mb-4 md:mb-6 text-custom-sand uppercase tracking-widest border-b border-custom-sand/20 pb-2 w-full text-center md:text-left">
        {t("language")}
      </span>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-left w-full max-w-[200px]"
        aria-label={t("language")}
        aria-expanded={open ? "true" : "false"}
      >
        <span className="w-8 shrink-0 flex items-center justify-center text-2xl leading-none">{currentFlag}</span>
        <span className="text-custom-light-bg font-body font-medium leading-none">{current?.name ?? locale}</span>
        <svg className={`w-4 h-4 ml-auto text-custom-sand transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.25 8.29a.75.75 0 0 1-.02-1.08z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 md:left-0 right-0 mx-auto md:mx-0 bottom-full mb-2 w-56 bg-custom-primary border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-[3000] py-2">
          {LOCALES.map(({ code, name, flag }) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setLocale(code as LocaleCode);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-semibold transition-colors ${locale === code ? "bg-custom-sand/30 text-custom-sand" : "text-custom-light-bg/90 hover:bg-white/10"}`}
            >
              <span className="w-8 shrink-0 flex items-center justify-center text-xl leading-none">{flag}</span>
              <span className="leading-none">{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
