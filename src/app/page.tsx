"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, TrendingUp, UserCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
        <div className="relative z-10 max-w-4xl text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t("heroTitle")}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              AI-Powered Proposals
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("heroDesc")}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2">
              {t("startNow")} <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              {t("watchDemo")}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("featuresTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <UserCheck className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{t("profileTitle")}</CardTitle>
                <CardDescription>{t("profileDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t("profileDetail")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{t("proposalTitle")}</CardTitle>
                <CardDescription>{t("proposalDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t("proposalDetail")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{t("gigTitle")}</CardTitle>
                <CardDescription>{t("gigDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t("gigDetail")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}