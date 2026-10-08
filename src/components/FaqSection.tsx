import React, { useState } from 'react';
import { FAQS_DATA, Language } from '../data/content';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#070E1A] text-white border-b border-white/5 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-amber-400/90 mb-3 block">
            {lang === 'en' ? 'Common Inquiries' : 'प्रश्नोत्तर'}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-serif-display font-medium text-white leading-tight mb-3"
            style={{ textWrap: 'balance' }}
          >
            {lang === 'en' ? (
              <>
                Frequently Asked{' '}
                <span className="gold-gradient-text italic font-normal">
                  Questions
                </span>
              </>
            ) : (
              <>
                अक्सर पूछे जाने वाले{' '}
                <span className="gold-gradient-text italic font-normal">
                  महत्वपूर्ण प्रश्न
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm font-light">
            {lang === 'en'
              ? 'Key answers regarding our practice, compliance timelines, and office location in Lucknow.'
              : 'अवस्थी & एसोसिएट्स के कार्यक्षेत्र एवं कार्यालय से संबंधित जरूरी जानकारियां।'}
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-[#0A1322] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm sm:text-base font-serif-display font-medium text-white">
                    {lang === 'en' ? faq.qEn : faq.qHi}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 font-light">
                        {lang === 'en' ? faq.aEn : faq.aHi}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
