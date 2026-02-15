import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, TrendingUp, UserCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section (keep as is) */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
        <div className="relative z-10 max-w-4xl text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Win More Gigs with<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              AI-Powered Proposals
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            GigYaar helps Pakistani freelancers crush Upwork & Fiverr with instant profile feedback, 
            winning proposals, and trending gig ideas — in English or Urdu.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Start Free Now <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* New Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Your Complete Freelance Toolkit
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <UserCheck className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Profile Analyzer</CardTitle>
                <CardDescription>Instant feedback on your Upwork/Fiverr profile</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Paste your profile → Get strengths, weaknesses, and 5 fixes in Urdu/English.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Proposal Generator</CardTitle>
                <CardDescription>Win more jobs with tailored cover letters</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Paste job description → Get a professional, personalized proposal instantly.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Gig Suggester</CardTitle>
                <CardDescription>Discover trending skills & gigs</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Input your skills → Get 2026 hot gigs with learning resources.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}