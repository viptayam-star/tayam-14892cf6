import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

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
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('portfolioTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('portfolioSubtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.key)}
              className={`hover-glow ${
                activeFilter === filter.key 
                  ? 'btn-gradient text-white border-0' 
                  : ''
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  className="portfolio-card cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-square bg-muted relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {t('viewPortfolio')}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {filters.find(f => f.key === item.category)?.label}
                      </span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;