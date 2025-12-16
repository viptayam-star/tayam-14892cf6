import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Instagram, Twitter, Dribbble, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const {
    t,
    language
  } = useLanguage();
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: language === 'ar' ? 'خطأ' : 'Error',
        description: language === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill all fields',
        variant: 'destructive'
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: language === 'ar' ? 'تم الإرسال' : 'Message Sent',
      description: language === 'ar' ? 'تم إرسال رسالتك بنجاح' : 'Your message has been sent successfully'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  const contactInfo = [{
    icon: Mail,
    label: t('email'),
    value: 'viptayam@gmail.com',
    href: 'mailto:viptayam@gmail.com'
  }, {
    icon: Phone,
    label: t('phone'),
    value: '01022065189',
    href: 'tel:+201022065189'
  }];
  const socialLinks = [{
    icon: Instagram,
    href: '#',
    label: 'Instagram'
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter'
  }, {
    icon: Dribbble,
    href: '#',
    label: 'Dribbble'
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  }];
  return <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl my-[18px] py-0 mx-[39px] px-[19px]">
          {/* Contact Form */}
          

          {/* Contact Information */}
          <div className="animate-slide-up space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => <a key={index} href={info.href} className="flex items-center gap-4 p-4 bg-card rounded-lg hover-glow transition-all duration-300 hover:scale-105 mx-[23px] my-[47px]">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>)}
            </div>

            {/* Social Media */}
            <div>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover-glow transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;