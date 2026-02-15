import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
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
            <Button size="lg" variant="outline" className="text-white border-white">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
      {/* More sections coming soon */}
    </>
  );
}