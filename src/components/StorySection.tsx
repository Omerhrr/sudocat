import React from 'react';
import { StorySection as StorySectionType } from '../lib/storyData';

interface StorySectionProps {
  section: StorySectionType;
  isEven: boolean;
}

const StorySection: React.FC<StorySectionProps> = ({ section, isEven }) => {
  return (
    <section 
      id={section.id} 
      className={`min-h-screen flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-8 ${
        isEven ? 'bg-slate-900' : 'bg-slate-950'
      }`}
    >
      <div className={`container mx-auto flex flex-col ${
        isEven ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-8 items-center`}>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:scale-105">
            <img 
              src={`/src/assets/images/${section.image}`} 
              alt={section.title} 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">{section.title}</h2>
          <div className="space-y-4">
            {section.content.map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
