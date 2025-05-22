import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(20, 241, 149, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 194, 255, 0.1) 0%, transparent 50%)'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-blue-400">SudoCat:</span> Guardian of Solana
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            The first all-in-one platform to play, trade, and earn on Solana.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Powered by advanced AI algorithms delivering real-time trading insights, 
            interactive play-to-earn features, and seamless earning opportunities.
          </p>
          <a 
            href="#intro" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Begin the Journey
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="animate-bounce">
          <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
