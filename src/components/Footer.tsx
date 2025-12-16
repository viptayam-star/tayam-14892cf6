import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Twitter, Dribbble, Linkedin } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Dribbble, href: '#', label: 'Dribbble' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-secondary/50 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover-glow"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Certification */}
          <p className="text-sm text-foreground text-center font-medium">
            {language === 'ar'
              ? 'حاصل على شهادة معتمدة من Lumina Ai Academy'
              : 'Certified by Lumina Ai Academy'
            }
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            {language === 'ar' 
              ? '© 2024 جميع الحقوق محفوظة - Design Pulse'
              : '© 2024 All rights reserved - Design Pulse'
            }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;