import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  color?: string;
  count?: number;
  speed?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ 
  color = '#00C2FF', 
  count = 50,
  speed = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      
      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * speed;
        this.speedY = (Math.random() - 0.5) * speed;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        const width = canvas?.width || window.innerWidth;
        const height = canvas?.height || window.innerHeight;
        
        // Wrap around edges
        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;
        
        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [color, count, speed]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 opacity-30"
    />
  );
};

export default ParticleBackground;
