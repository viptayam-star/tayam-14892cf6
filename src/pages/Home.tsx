import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroVideo from '@/assets/hero-bg.mp4';

const Home = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              {t('welcome')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
            
            <Link to="/portfolio">
              <Button 
                size="lg" 
                className="btn-gradient text-white border-0 px-8 py-6 text-lg font-semibold hover-glow animate-scale-in"
              >
                {t('viewPortfolio')}
                {isRTL ? (
                  <ArrowLeft className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
                ) : (
                  <ArrowRight className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Design Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-bounce opacity-60" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/30 rounded-full animate-pulse opacity-40" />
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-primary/25 rounded-full animate-ping opacity-30" />
      </section>
    </div>
  );
};

export default Home;