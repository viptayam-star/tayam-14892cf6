import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Card3D from '@/components/Card3D';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';
import AnimatedBackground from '@/components/AnimatedBackground';

// Import portfolio images
import sevenUpAd from '@/assets/portfolio/7up-ad.png';
import graphicDesignBg from '@/assets/portfolio/graphic-design-bg.jpeg';
import hgLogoBlack from '@/assets/portfolio/hg-logo-black.png';
import hgLogoYellow from '@/assets/portfolio/hg-logo-yellow.png';
import buffaloburger from '@/assets/portfolio/buffalo-burger.jpg';
import burgerAd from '@/assets/portfolio/burger-ad.png';
import tigerChips from '@/assets/portfolio/tiger-chips.png';
import coffeeAd from '@/assets/portfolio/coffee-ad.jpg';
import copaCaffe3d from '@/assets/portfolio/copa-caffe-3d.jpeg';
import hanyGalalJewelry from '@/assets/portfolio/hany-galal-jewelry.png';
import hgStoreBlack from '@/assets/portfolio/hg-store-logo-black.png';
import hgStoreWhite from '@/assets/portfolio/hg-store-logo-white.png';
import hgStorePink from '@/assets/portfolio/hg-store-logo-pink.png';
import hgJewelryAlt from '@/assets/portfolio/hg-jewelry-alt.png';
import hndRestaurant3d from '@/assets/portfolio/hnd-restaurant-3d.jpeg';
import hendDesertAd from '@/assets/portfolio/hend-desert-ad.png';
import photoshopTitoLogo from '@/assets/portfolio/photoshop-tito-logo.jpg';
import youtubeLogoDesign from '@/assets/portfolio/youtube-logo-design.png';
import juhaynaMangoAd from '@/assets/portfolio/juhayna-mango-ad.jpg';
import juhaynaTvCommercial from '@/assets/portfolio/juhayna-tv-commercial.jpg';
import dermaProduct from '@/assets/portfolio/derma-product.png';
import porsche911 from '@/assets/portfolio/porsche-911.png';
import pizzaTime from '@/assets/portfolio/pizza-time.png';
import burgerPromo from '@/assets/portfolio/burger-promo.png';
import chickenMenu from '@/assets/portfolio/chicken-menu.jpg';
import cranberryJuice from '@/assets/portfolio/cranberry-juice.png';
import decworLogo from '@/assets/portfolio/decwor-logo.png';
import dermaLogo from '@/assets/portfolio/derma-logo.png';
import pizzaDelicious from '@/assets/portfolio/pizza-delicious.png';
import fastFoodMenu from '@/assets/portfolio/fast-food-menu.png';
import pizzaElKing from '@/assets/portfolio/pizza-el-king.png';
import saladAd from '@/assets/portfolio/salad-ad.png';
import siroInternet from '@/assets/portfolio/siro-hadoum-internet.png';
import ferrariDesign from '@/assets/portfolio/ferrari-design.png';
import perfumeDesign from '@/assets/portfolio/perfume-design.png';

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: t('allWorks') },
    { key: 'logos', label: t('logos') },
    { key: 'social', label: t('socialMedia') },
    { key: 'branding', label: t('branding') },
  ];

  // Real portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: 'HG Jewelry Logo - Black Version',
      category: 'logos',
      image: hgLogoBlack,
      description: 'Elegant jewelry brand logo with crown and sophisticated typography on black background',
    },
    {
      id: 2,
      title: 'HG Jewelry Logo - Gold Version',
      category: 'logos',
      image: hgLogoYellow,
      description: 'Premium jewelry brand identity with royal crown and gold accents',
    },
    {
      id: 3,
      title: 'Hany Galal Jewelry Logo',
      category: 'logos',
      image: hanyGalalJewelry,
      description: 'Minimalist luxury jewelry brand logo with diamond ring icon',
    },
    {
      id: 4,
      title: 'HG Store Logo - Black Version',
      category: 'logos',
      image: hgStoreBlack,
      description: 'Modern store logo design with elegant typography and crown element',
    },
    {
      id: 5,
      title: 'HG Store Logo - White Version',
      category: 'logos',
      image: hgStoreWhite,
      description: 'Clean store logo with jewelry elements and sophisticated design',
    },
    {
      id: 6,
      title: 'HG Store Logo - Pink Version',
      category: 'logos',
      image: hgStorePink,
      description: 'Vibrant pink version of HG Store logo with royal crown',
    },
    {
      id: 7,
      title: 'HG Jewelry Alternative Logo',
      category: 'logos',
      image: hgJewelryAlt,
      description: 'Alternative version of Hany Galal Jewelry logo with ring and decorative elements',
    },
    {
      id: 8,
      title: 'Photoshop Tito Logo',
      category: 'logos',
      image: photoshopTitoLogo,
      description: 'Creative logo design featuring planet, typography and gaming elements',
    },
    {
      id: 9,
      title: 'YouTube Logo Design',
      category: 'logos',
      image: youtubeLogoDesign,
      description: 'YouTube logo with artistic brush stroke effect and modern typography',
    },
    {
      id: 10,
      title: '7UP Creative Advertisement',
      category: 'social',
      image: sevenUpAd,
      description: 'Creative social media advertisement featuring cartoon character with burger and 7UP',
    },
    {
      id: 11,
      title: 'Buffalo Burger Advertisement',
      category: 'social',
      image: buffaloburger,
      description: 'Eye-catching burger advertisement with 50% discount offer and flame effects',
    },
    {
      id: 12,
      title: 'Burger Restaurant Promotion',
      category: 'social',
      image: burgerAd,
      description: 'Professional burger restaurant advertisement with natural ingredients highlight',
    },
    {
      id: 13,
      title: 'Tiger Chips Product Design',
      category: 'social',
      image: tigerChips,
      description: 'Dynamic chips packaging advertisement with tomato flavor and splash effects',
    },
    {
      id: 14,
      title: 'Coffee Advertisement',
      category: 'social',
      image: coffeeAd,
      description: 'Premium coffee advertisement featuring layered latte with coffee beans',
    },
    {
      id: 15,
      title: 'Juhayna Mango Advertisement',
      category: 'social',
      image: juhaynaMangoAd,
      description: 'Creative Arabic mango juice advertisement with fresh fruit elements',
    },
    {
      id: 16,
      title: 'Juhayna TV Commercial',
      category: 'social',
      image: juhaynaTvCommercial,
      description: 'Professional TV commercial mockup for Juhayna mango juice',
    },
    {
      id: 17,
      title: 'HEND Desert Surreal Advertisement',
      category: 'social',
      image: hendDesertAd,
      description: 'Surreal advertisement featuring giant food container in desert landscape',
    },
    {
      id: 18,
      title: 'Copa Caffe 3D Visualization',
      category: 'branding',
      image: copaCaffe3d,
      description: '3D architectural visualization of Copa Caffe restaurant with giant burger roof',
    },
    {
      id: 19,
      title: 'HND Restaurant 3D Design',
      category: 'branding',
      image: hndRestaurant3d,
      description: '3D restaurant design and branding for HND Egyptian cuisine',
    },
    {
      id: 20,
      title: 'Graphic Design Illustration',
      category: 'branding',
      image: graphicDesignBg,
      description: 'Creative graphic design illustration showing design process and creativity',
    },
    {
      id: 21,
      title: 'DERMA Skincare Product',
      category: 'social',
      image: dermaProduct,
      description: 'Social media post for DERMA skincare brightening serum with elegant pink design',
    },
    {
      id: 22,
      title: 'Porsche 911 Design',
      category: 'social',
      image: porsche911,
      description: 'Minimalist automotive design featuring Porsche 911 with bold typography',
    },
    {
      id: 23,
      title: 'Pizza Time Promotion',
      category: 'social',
      image: pizzaTime,
      description: 'Fun and creative Pizza Hut promotion with cartoon pizza character',
    },
    {
      id: 24,
      title: 'Burger Restaurant Promotion',
      category: 'social',
      image: burgerPromo,
      description: 'Delicious burger advertisement with 10% discount and flame effects',
    },
    {
      id: 25,
      title: 'Chicken Restaurant Menu',
      category: 'social',
      image: chickenMenu,
      description: 'Arabic restaurant menu design featuring chicken dishes and pricing',
    },
    {
      id: 26,
      title: 'Cranberry Juice Advertisement',
      category: 'social',
      image: cranberryJuice,
      description: 'Modern beverage advertisement with repetitive typography pattern',
    },
    {
      id: 27,
      title: 'DECWOR Home Decor Logo',
      category: 'logos',
      image: decworLogo,
      description: 'Home decoration company logo with house shape and furniture icon',
    },
    {
      id: 28,
      title: 'DERMA Skincare Logo',
      category: 'logos',
      image: dermaLogo,
      description: 'Elegant skincare brand logo with botanical and feminine elements',
    },
    {
      id: 29,
      title: 'Super Delicious Pizza',
      category: 'social',
      image: pizzaDelicious,
      description: 'Appetizing pizza advertisement with fresh ingredients and order now call-to-action',
    },
    {
      id: 30,
      title: 'Fast Food Menu Design',
      category: 'social',
      image: fastFoodMenu,
      description: 'قائمة طعام سريع احترافية بتصميم عصري يعرض الساندويتشات والأطباق الرئيسية',
    },
    {
      id: 31,
      title: 'Pizza El King Promotion',
      category: 'social',
      image: pizzaElKing,
      description: 'إعلان بيتزا جذاب مع عرض خصم 20% وتصميم ناري مميز',
    },
    {
      id: 32,
      title: 'Fresh Salad Advertisement',
      category: 'social',
      image: saladAd,
      description: 'إعلان سلطة طازجة بتصميم حيوي وجذاب يبرز المكونات الصحية',
    },
    {
      id: 33,
      title: 'Siro Internet Service Advertisement',
      category: 'social',
      image: siroInternet,
      description: 'إعلان إبداعي لخدمة إنترنت سيرو هضوم بتصميم ثلاثي الأبعاد جذاب باللون البنفسجي',
    },
    {
      id: 34,
      title: 'Ferrari Racing Design',
      category: 'social',
      image: ferrariDesign,
      description: 'تصميم إبداعي لسيارة فيراري سباق مع تايبوغرافي جريء وخلفية حمراء ديناميكية',
    },
    {
      id: 35,
      title: 'GRD Royal Perfume',
      category: 'branding',
      image: perfumeDesign,
      description: 'تصميم منتج عطر فاخر مع تأثيرات ثلاثية الأبعاد وخلفية زرقاء أنيقة',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-20 pb-20 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              ✨ {t('portfolioTitle')}
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            <TextReveal text={t('portfolioTitle')} />
          </h1>
          
          <ScrollReveal delay={0.3}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('portfolioSubtitle')}
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <motion.div
                key={filter.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeFilter === filter.key ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`relative overflow-hidden ${
                    activeFilter === filter.key 
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                      : 'hover:border-primary/50 backdrop-blur-sm bg-background/50'
                  }`}
                >
                  <span className="relative z-10">{filter.label}</span>
                  {activeFilter === filter.key && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                      transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                </Button>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: 'spring',
                  bounce: 0.3
                }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer" style={{ perspective: '1000px' }}>
                      <Card3D>
                        <div className="bg-card rounded-xl overflow-hidden shadow-xl border border-border/50 backdrop-blur-sm group">
                          <div className="aspect-square bg-muted relative overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                            />
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8"
                            >
                              <motion.span 
                                className="text-foreground font-bold text-lg px-6 py-3 bg-primary/90 rounded-full backdrop-blur-sm"
                                initial={{ y: 20, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                              >
                                {t('viewPortfolio')} →
                              </motion.span>
                            </motion.div>
                            
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          </div>
                          <div className="p-5">
                            <h3 className="font-bold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {item.description}
                            </p>
                            <div className="mt-3 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                              <span className="text-xs text-muted-foreground">
                                {filters.find(f => f.key === item.category)?.label}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card3D>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-xl border-border/50">
                    <motion.div 
                      className="grid md:grid-cols-2 gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-4 flex flex-col justify-center">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            {filters.find(f => f.key === item.category)?.label}
                          </span>
                        </motion.div>
                        <motion.h2 
                          className="text-3xl font-bold text-foreground"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {item.title}
                        </motion.h2>
                        <motion.p 
                          className="text-muted-foreground text-lg"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {item.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
