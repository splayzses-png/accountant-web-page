import React from 'react';
import { WHY_CHOOSE_US_DATA, Language } from '../data/content';
import { Award, Clock, Star, Lock } from 'lucide-react';
import { motion } from 'motion/react';

interface WhyChooseUsProps {
  lang: Language;
  onOpenConsultationModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang, onOpenConsultationModal }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Award className="w-5 h-5 text-amber-400" />;
      case 1:
        return <Clock className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Star className="w-5 h-5 text-amber-300" />;
      default:
        return <Lock className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#0A1322] text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-amber-400/90 mb-3 block">
            {lang === 'en' ? 'The Firm Difference' : 'हमारा विशिष्ट दृष्टिकोण'}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-white leading-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            {lang === 'en' ? (
              <>
                Engineered for{' '}
                <span className="gold-gradient-text italic font-normal">
                  Absolute Financial Peace of Mind
                </span>
              </>
            ) : (
              <>
                सर्वोच्च व्यावसायिक स्तर एवं{' '}
                <span className="gold-gradient-text italic font-normal">
                  पूर्ण वित्तीय सुरक्षा
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            {lang === 'en'
              ? 'We eliminate regulatory ambiguity and late penalty risks through disciplined senior-partner execution.'
              : 'अनुशासन, समयबद्धता और व्यक्तिगत ध्यान से आपके व्यापार की बैलेंस शीट को सुरक्षित एवं सशक्त बनाते हैं।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-[#070E1A] border border-white/[0.08] hover:border-amber-400/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center border border-white/5">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-base font-serif-display font-medium text-white mb-2.5">
                  {lang === 'en' ? item.titleEn : item.titleHi}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {lang === 'en' ? item.descEn : item.descHi}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                {lang === 'en' ? 'Verified ICAI Standard' : 'आईसीएआई मानक'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
