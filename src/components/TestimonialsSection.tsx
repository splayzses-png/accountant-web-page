import React, { useState } from 'react';
import { TESTIMONIALS_DATA, FIRM_DETAILS, Language } from '../data/content';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-[#070E1A] text-white border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-amber-400/90 mb-2">
              <span>{lang === 'en' ? 'Verified Social Proof' : 'सत्यापित ग्राहक अनुभव'}</span>
              <span>·</span>
              <span className="text-white">Google Reviews</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-serif-display font-medium text-white"
              style={{ textWrap: 'balance' }}
            >
              {lang === 'en' ? (
                <>
                  Endorsed by Lucknow’s{' '}
                  <span className="gold-gradient-text italic font-normal">
                    Medical & Business Leaders
                  </span>
                </>
              ) : (
                <>
                  लखनऊ के डॉक्टरों एवं उद्यमियों का{' '}
                  <span className="gold-gradient-text italic font-normal">
                    प्रमाणित विश्वास
                  </span>
                </>
              )}
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
              <div className="text-xl font-serif-display font-bold text-amber-300">
                {FIRM_DETAILS.googleRating}★
              </div>
              <div className="text-[11px] text-slate-400 leading-tight">
                <div>63 Verified Reviews</div>
                <a
                  href={FIRM_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400/90 hover:underline inline-flex items-center gap-0.5 mt-0.5"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Card with Motion */}
        <div className="relative bg-[#0A1322] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-1 text-amber-300">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-2xl font-serif-display font-normal text-slate-100 leading-relaxed italic">
                "{lang === 'en' ? current.reviewEn : current.reviewHi}"
              </blockquote>

              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white">
                    {current.author}
                  </div>
                  <div className="text-xs text-amber-300/80 mt-0.5">
                    {lang === 'en' ? current.roleEn : current.roleHi}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {lang === 'en' ? current.businessTypeEn : current.businessTypeHi} · {lang === 'en' ? current.locationEn : current.locationHi}
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={prevReview}
                    className="p-2.5 rounded-full border border-white/10 hover:border-white/30 text-slate-300 hover:text-white transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-slate-400 tabular-nums px-1">
                    {currentIndex + 1} / {TESTIMONIALS_DATA.length}
                  </span>
                  <button
                    type="button"
                    onClick={nextReview}
                    className="p-2.5 rounded-full border border-white/10 hover:border-white/30 text-slate-300 hover:text-white transition-colors"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
