import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const AnimatedBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduce particles on mobile for better performance
  const particleCount = isMobile ? 8 : 20;
  
  const particles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 3,
  }));

  // Skip animations if reduced motion is preferred
  if (isReducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl" style={{ top: '10%', left: '10%' }} />
        <div className="absolute w-80 h-80 rounded-full bg-primary/3 blur-3xl" style={{ bottom: '10%', right: '10%' }} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient Orbs - simplified on mobile */}
      <motion.div
        className={`absolute rounded-full bg-primary/10 blur-3xl ${isMobile ? 'w-64 h-64' : 'w-96 h-96'}`}
        animate={isMobile ? {} : {
          x: ['-10%', '10%', '-10%'],
          y: ['-10%', '15%', '-10%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ top: '10%', left: '10%' }}
      />
      
      {!isMobile && (
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: ['10%', '-10%', '10%'],
            y: ['10%', '-10%', '10%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
      )}

      {/* Floating Particles - reduced on mobile */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Grid Pattern - only on desktop */}
      {!isMobile && (
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      )}
    </div>
  );
};

export default AnimatedBackground;
