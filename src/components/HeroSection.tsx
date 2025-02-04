import { Button } from "@/components/ui/button";
import { Users, Clock, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#111] flex items-center">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <div className="mb-6">
            <span className="bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-medium">
              AI-powered indie hacking
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Find your next
            <br />
            big idea{" "}
            <span className="relative">
              <span className="relative z-10 text-yellow-500">faster</span>
              <svg
                className="absolute bottom-0 left-0 w-full h-3 text-yellow-500/20"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,10 Q50,20 100,10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-xl">
            Connect with verified indie hackers to build your next project. Smart matching, 
            secure communication, and all the tools you need to succeed.
          </p>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                View Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span>Save hours on development</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-500" />
                <span>100% verified profiles</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-500" />
                <span>136 active users this week</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent blur-xl rounded-xl"></div>
            <img
              src="/placeholder.svg"
              alt="Demo Screenshot"
              className="relative rounded-xl border border-gray-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;