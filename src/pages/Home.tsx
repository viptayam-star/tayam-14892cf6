import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Sparkles, Palette, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedBackground from '@/components/AnimatedBackground';
import TextReveal from '@/components/TextReveal';
import MagneticButton from '@/components/MagneticButton';
import ScrollReveal from '@/components/ScrollReveal';
import heroVideo from '@/assets/hero-bg.mp4';

const Home = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const floatingIcons = [
    { Icon: Sparkles, delay: 0, x: '10%', y: '20%' },
    { Icon: Palette, delay: 0.5, x: '85%', y: '15%' },
    { Icon: Lightbulb, delay: 1, x: '15%', y: '75%' },
    { Icon: Sparkles, delay: 1.5, x: '80%', y: '70%' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        
        {/* Background Video - lazy loaded */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/40"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon size={40} />
          </motion.div>
        ))}
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                {language === 'ar' ? 'مرحباً بك في عالم الإبداع' : 'Welcome to Creative World'}
              </span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-tight">
              <TextReveal text={t('welcome')} staggerChildren={0.05} />
            </h1>
            
            {/* Subtitle */}
            <ScrollReveal delay={0.5}>
              <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('heroSubtitle')}
              </p>
            </ScrollReveal>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/portfolio">
                <MagneticButton>
                  <Button 
                    size="lg" 
                    className="relative overflow-hidden bg-primary text-primary-foreground px-10 py-7 text-xl font-bold rounded-full shadow-2xl shadow-primary/30 group"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {t('viewPortfolio')}
                      {isRTL ? (
                        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
                      ) : (
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      )}
                    </span>
                    
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Button>
                </MagneticButton>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { number: '35+', label: language === 'ar' ? 'مشروع' : 'Projects' },
                { number: '100+', label: language === 'ar' ? 'عميل سعيد' : 'Happy Clients' },
                { number: '5+', label: language === 'ar' ? 'سنوات خبرة' : 'Years Exp.' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-primary mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.2, type: 'spring' }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
