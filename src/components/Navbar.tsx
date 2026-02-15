"use client";

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <h1 className="text-2xl font-bold text-primary">{t("title")}</h1>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "ur" : "en")}
            className="gap-2"
          >
            <Globe className="h-5 w-5" />
            {language === "en" ? "اردو" : "English"}
          </Button>
          <Button variant="outline">{t("signIn")}</Button>
          <Button>{t("getStarted")}</Button>
        </div>
      </div>
    </header>
  );
}