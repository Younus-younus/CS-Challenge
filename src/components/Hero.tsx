import { ChevronDown, Code, Sparkles } from 'lucide-react';
import React from 'react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('platforms');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white opacity-5 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-gradient-x">
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Younus
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Freelancer <span className="mx-2">|</span> Full Stack Developer <span className="mx-2">|</span> Blockchain Developer <span className="mx-2">|</span> Cloud Engineer <span className="mx-2">|</span> Google Cloud Arcade Facilitator <span className="mx-2">|</span> Researcher
          </p>
          <div className="flex justify-center items-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-opacity-40 hover:scale-105">
              <Code className="w-5 h-5" />
              <span className="text-sm font-medium">Developer</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-opacity-40 hover:scale-105">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Creator</span>
            </div>
          </div>
        </div>
        
        <button
          onClick={scrollToNext}
          className="scroll-indicator inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-white"
          aria-label="Scroll to platforms"
        >
          <ChevronDown className="w-7 h-7 text-white animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;