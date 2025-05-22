import React from 'react';
import { storyData } from '../lib/storyData';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-blue-400 font-bold text-xl">SudoCat</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {storyData.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
