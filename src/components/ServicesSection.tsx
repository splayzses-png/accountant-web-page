import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem, Language } from '../data/content';
import { ArrowRight, Check, Clock, Users, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesSectionProps {
  lang: Language;
  onOpenConsultationModal: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onOpenConsultationModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Practices', labelHi: 'सभी सेवाएं' },
    { id: 'tax', labelEn: 'Taxation & GST', labelHi: 'टैक्स एवं जीएसटी' },
    { id: 'audit', labelEn: 'Audit & Assurance', labelHi: 'ऑडिट एवं जांच' },
    { id: 'corporate', labelEn: 'Company Setup', labelHi: 'कंपनी रजिस्ट्रेशन' },
    { id: 'advisory', labelEn: 'Advisory & CMA', labelHi: 'प्रोजेक्ट रिपोर्ट व सीएमए' },
  ];

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services" className="py-24 bg-[#070E1A] text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-amber-400/90 mb-3 block">
            {lang === 'en' ? 'Core Practice Areas' : 'प्रमुख कार्यक्षेत्र'}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-white leading-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            {lang === 'en' ? (
              <>
                Comprehensive Counsel for{' '}
                <span className="gold-gradient-text italic font-normal">
                  Corporate & Personal Wealth
                </span>
              </>
            ) : (
              <>
                व्यापार एवं व्यक्तिगत संपत्ति हेतु{' '}
                <span className="gold-gradient-text italic font-normal">
                  सम्पूर्ण वित्तीय समाधान
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            {lang === 'en'
              ? 'Meticulous statutory adherence, tax optimization, and independent assurance across direct and indirect taxation.'
              : 'प्रत्यक्ष एवं अप्रत्यक्ष करों, वैधानिक ऑडिट और कंपनी मामलों में त्रुटिरहित कानूनी मार्गदर्शन।'}
          </p>

          {/* Clean Segmented Category Tabs with Motion */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.04] rounded-full mt-8 max-w-fit border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'text-[#070E1A]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="activeServiceTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#F3E7C4] to-[#D8B467] rounded-full shadow-sm"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">
                  {lang === 'en' ? cat.labelEn : cat.labelHi}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (Spacious, Uncluttered, Elegant) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedService(service)}
              className="cursor-pointer group flex flex-col justify-between p-7 rounded-2xl border border-white/[0.08] bg-[#0A1322] hover:border-amber-400/30 hover:bg-[#0D182B] transition-all duration-300 shadow-lg relative overflow-hidden"
            >
              <div>
                {/* Number & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-serif-display font-bold text-amber-300/80 group-hover:text-amber-200 transition-colors">
                    {service.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-serif-display font-medium text-white mb-3 group-hover:text-amber-200 transition-colors leading-snug">
                  {lang === 'en' ? service.titleEn : service.titleHi}
                </h3>

                {/* Crisp short description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-6">
                  {lang === 'en' ? service.shortDescEn : service.shortDescHi}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-amber-200/80 group-hover:text-amber-200 flex items-center gap-1 font-medium">
                  <span>{lang === 'en' ? 'Explore Scope' : 'विवरण देखें'}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>

                <span className="text-[11px] text-slate-500 font-mono">
                  {lang === 'en' ? 'Lucknow Practice' : 'लखनऊ'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service Modal with Clean Layout */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0A1322] text-white rounded-2xl max-w-xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 border border-white/10 shadow-2xl relative"
              >
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-xs font-mono text-amber-400/90 mb-1">
                  {selectedService.number} · {selectedService.category.toUpperCase()}
                </div>
                <h3 className="text-2xl font-serif-display font-medium text-white mb-3">
                  {lang === 'en' ? selectedService.titleEn : selectedService.titleHi}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-light">
                  {lang === 'en' ? selectedService.fullDescEn : selectedService.fullDescHi}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-amber-300/80 font-medium">
                    {lang === 'en' ? 'Deliverables & Practice Scope' : 'मुख्य सेवाएं एवं कार्यक्षेत्र'}
                  </h4>
                  <div className="space-y-2">
                    {(lang === 'en' ? selectedService.featuresEn : selectedService.featuresHi).map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-200 p-2.5 rounded-lg bg-white/[0.03] border border-white/5"
                      >
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 bg-white/[0.03] rounded-xl border border-white/5 mb-6 text-xs flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'en' ? 'Turnaround:' : 'समय सीमा:'}</span>
                  </span>
                  <span className="font-medium text-white">
                    {lang === 'en' ? selectedService.timelineEn : selectedService.timelineHi}
                  </span>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                  >
                    {lang === 'en' ? 'Close' : 'बंद करें'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const sid = selectedService.id;
                      setSelectedService(null);
                      onOpenConsultationModal(sid);
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-[#070E1A] bg-gradient-to-r from-[#F3E7C4] to-[#D8B467] rounded-full inline-flex items-center gap-1.5 shadow-md"
                  >
                    <span>{lang === 'en' ? 'Consult on this Service' : 'इस सेवा पर परामर्श लें'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
