"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ur";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    title: "GigYaar",
    signIn: "Sign In",
    getStarted: "Get Started Free",
    heroTitle: "Win More Gigs with AI-Powered Proposals",
    heroDesc: "GigYaar helps Pakistani freelancers crush Upwork & Fiverr with instant profile feedback, winning proposals, and trending gig ideas — in English or Urdu.",
    startNow: "Start Free Now",
    watchDemo: "Watch Demo",
    featuresTitle: "Your Complete Freelance Toolkit",
    profileTitle: "Profile Analyzer",
    profileDesc: "Instant feedback on your Upwork/Fiverr profile",
    profileDetail: "Paste your profile → Get strengths, weaknesses, and 5 fixes in Urdu/English.",
    proposalTitle: "Proposal Generator",
    proposalDesc: "Win more jobs with tailored cover letters",
    proposalDetail: "Paste job description → Get a professional, personalized proposal instantly.",
    gigTitle: "Gig Suggester",
    gigDesc: "Discover trending skills & gigs",
    gigDetail: "Input your skills → Get 2026 hot gigs with learning resources.",
  },
  ur: {
    title: "گگ یار",
    signIn: "سائن ان",
    getStarted: "مفت شروع کریں",
    heroTitle: "اے آئی سے پروپوزلز کے ساتھ زیادہ گگز جیتیں",
    heroDesc: "گگ یار پاکستانی فری لانسرز کو اپ ورک اور فائیور پر فوری پروفائل فیڈبیک، جیتنے والی پروپوزلز، اور ٹرینڈنگ گگ آئیڈیاز دیتا ہے — انگریزی یا اردو میں۔",
    startNow: "ابھی مفت شروع کریں",
    watchDemo: "ڈیمو دیکھیں",
    featuresTitle: "آپ کا مکمل فری لانس ٹول کٹ",
    profileTitle: "پروفائل اینالائزر",
    profileDesc: "اپ ورک/فائیور پروفائل پر فوری فیڈبیک",
    profileDetail: "پروفائل پیسٹ کریں → طاقتیں، کمزوریاں، اور 5 اصلاحات اردو/انگریزی میں حاصل کریں۔",
    proposalTitle: "پروپوزل جنریٹر",
    proposalDesc: "تیلرڈ کور لیٹرز سے زیادہ جابز جیتیں",
    proposalDetail: "جاب ڈسکرپشن پیسٹ کریں → فوری پروفیشنل، پرسنلائزڈ پروپوزل حاصل کریں۔",
    gigTitle: "گگ سجیسٹر",
    gigDesc: "ٹرینڈنگ سکلز اور گگز دریافت کریں",
    gigDetail: "اپنی سکلز ان پٹ کریں → 2026 کے ہاٹ گگز اور لرننگ ریسورسز حاصل کریں۔",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}