import { useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import { storyData } from './lib/storyData';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 64, // Adjust for header height
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <ParticleBackground count={30} speed={0.5} />
      <Navigation />
      <HeroSection />
      
      {storyData.map((section, index) => (
        <StorySection 
          key={section.id} 
          section={section} 
          isEven={index % 2 === 0}
        />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
