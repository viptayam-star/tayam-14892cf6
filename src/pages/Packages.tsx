import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
const Packages = () => {
  const {
    t,
    language
  } = useLanguage();
  const packages = [{
    id: 'weekly',
    name: language === 'ar' ? 'الباقة الأسبوعية' : 'Weekly Package',
    price: language === 'ar' ? '1000 جنيه' : 'EGP 1000',
    features: [language === 'ar' ? 'تصاميم سوشيال ميديا' : 'Social Media Designs', language === 'ar' ? 'تغطية أسبوعية كاملة' : 'Full Week Coverage', language === 'ar' ? 'تصاميم احترافية' : 'Professional Designs', language === 'ar' ? 'تسليم سريع' : 'Fast Delivery'],
    popular: false
  }, {
    id: 'monthly',
    name: language === 'ar' ? 'الباقة الشهرية' : 'Monthly Package',
    price: language === 'ar' ? '10,000 جنيه' : 'EGP 10,000',
    features: [language === 'ar' ? 'تصاميم شهرية متكاملة' : 'Complete Monthly Designs', language === 'ar' ? 'محتوى سوشيال ميديا' : 'Social Media Content', language === 'ar' ? 'تصميم إعلانات' : 'Ad Designs', language === 'ar' ? 'دعم فني مستمر' : 'Continuous Support', language === 'ar' ? 'مراجعات مفتوحة' : 'Unlimited Revisions'],
    popular: true
  }, {
    id: 'yearly',
    name: language === 'ar' ? 'الباقة السنوية' : 'Yearly Package',
    price: language === 'ar' ? '18,500 جنيه' : 'EGP 18,500',
    originalPrice: language === 'ar' ? '20,000 جنيه' : 'EGP 20,000',
    features: [language === 'ar' ? 'تغطية سنوية كاملة' : 'Full Year Coverage', language === 'ar' ? 'هوية بصرية متكاملة' : 'Complete Brand Identity', language === 'ar' ? 'محتوى شهري منتظم' : 'Regular Monthly Content', language === 'ar' ? 'حملات إعلانية' : 'Marketing Campaigns', language === 'ar' ? 'أولوية في التنفيذ' : 'Priority Execution', language === 'ar' ? 'خصم 7.5%' : '7.5% Discount'],
    popular: false
  }];
  const handleContact = () => {
    const phoneNumber = '201022065189';
    const message = language === 'ar' ? 'مرحباً، أريد الاستفسار عن باقات التصميم' : 'Hello, I would like to inquire about design packages';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('packagesTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('packagesSubtitle')}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => <div key={pkg.id} className={`package-card animate-scale-in ${pkg.popular ? 'package-featured scale-105' : ''}`} style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Popular Badge */}
              {pkg.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  
                </div>}

              {/* Package Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div>
                  {pkg.originalPrice && <div className="text-xl text-muted-foreground line-through mb-1">
                      {pkg.originalPrice}
                    </div>}
                  <div className="text-4xl font-bold text-primary mb-2">
                    {pkg.price}
                  </div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>)}
              </ul>

              {/* CTA Button */}
              <Button onClick={handleContact} className={`w-full hover-glow ${pkg.popular ? 'btn-gradient text-white border-0' : ''}`} variant={pkg.popular ? 'default' : 'outline'} size="lg">
                {language === 'ar' ? 'تواصل الآن' : 'Contact Now'}
              </Button>
            </div>)}
        </div>
      </div>
    </div>;
};
export default Packages;