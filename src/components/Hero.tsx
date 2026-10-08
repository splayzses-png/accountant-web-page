import React from 'react';
import { Phone, ArrowRight, Star, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { FIRM_DETAILS, Language } from '../data/content';

interface HeroProps {
  lang: Language;
  onOpenConsultationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenConsultationModal }) => {
  return (
    <section className="relative overflow-hidden bg-[#070E1A] text-white pt-14 pb-20 lg:pt-24 lg:pb-32">
      {/* Background Ambience with Subtle Gradient & Office Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/ca_office_interior_1791453965197.jpg"
          alt="Awasthi & Associates Chartered Accountants Executive Office"
          className="w-full h-full object-cover object-center opacity-20 filter brightness-90"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        {/* Luxury radial vignette overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#070E1A]/80 to-[#070E1A]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Google Rating & Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-amber-400/25 backdrop-blur-md mb-8 text-xs text-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-1 text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span className="font-semibold text-white">{FIRM_DETAILS.googleRating}★</span>
          </div>
          <span className="text-white/20" aria-hidden="true">|</span>
          <span>{FIRM_DETAILS.googleReviewCount}+ Client Reviews</span>
          <span className="text-white/20 hidden sm:inline" aria-hidden="true">|</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
            <MapPin className="w-3 h-3 text-amber-400/80" />
            {FIRM_DETAILS.city}, {FIRM_DETAILS.state}
          </span>
        </motion.div>

        {/* Hero Headline with Editorial Elegance */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-display font-medium tracking-tight text-white leading-[1.12] mb-6"
          style={{ textWrap: 'balance' }}
        >
          {lang === 'en' ? (
            <>
              Chartered Accountancy with{' '}
              <span className="gold-gradient-text italic font-normal">
                Precision & Distinction
              </span>
            </>
          ) : (
            <>
              सत्यनिष्ठा एवं विशेषज्ञता के साथ{' '}
              <span className="gold-gradient-text italic font-normal">
                विश्वसनीय चार्टर्ड अकाउंटेंसी
              </span>
            </>
          )}
        </motion.h1>

        {/* Concise, impactful subtext (reduced by 60% for crisp reading) */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          {lang === 'en'
            ? 'Guiding Lucknow’s enterprises and professionals through rigorous GST compliance, strategic taxation, audits, and business incorporation. Zero penalty exposure.'
            : 'लखनऊ के व्यापारियों, डॉक्टरों और कंपनियों के लिए जीएसटी, आयकर, वैधानिक ऑडिट एवं कंपनी रजिस्ट्रेशन में वरिष्ठ चार्टर्ड अकाउंटेंट का प्रत्यक्ष मार्गदर्शन।'}
        </motion.p>

        {/* Focused CTAs with clean spacing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onOpenConsultationModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#070E1A] bg-gradient-to-r from-[#F3E7C4] via-[#D8B467] to-[#C49B45] hover:brightness-105 rounded-full shadow-lg transition-all"
          >
            <span>{lang === 'en' ? 'Book a Consultation' : 'परामर्श बुक करें'}</span>
            <ArrowRight className="w-4 h-4 text-[#070E1A]" />
          </motion.button>

          <a
            href={`tel:${FIRM_DETAILS.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-full backdrop-blur-md transition-all"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'en' ? `Call ${FIRM_DETAILS.phoneDisplay}` : `कॉल करें ${FIRM_DETAILS.phoneDisplay}`}</span>
          </a>
        </motion.div>

        {/* Refined Luxury Floating Metrics Ribbon (Single row, responsive) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto text-center"
        >
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif-display font-medium text-amber-200 tabular-nums">
              {FIRM_DETAILS.googleRating}★
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">
              {lang === 'en' ? `${FIRM_DETAILS.googleReviewCount}+ Verified Reviews` : `${FIRM_DETAILS.googleReviewCount}+ सत्यापित समीक्षाएं`}
            </div>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 sm:border-x border-white/10 pt-4 sm:pt-0">
            <div className="text-2xl sm:text-3xl font-serif-display font-medium text-white">
              Senior CA
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">
              {lang === 'en' ? 'Direct Consultation' : 'प्रत्यक्ष वरिष्ठ परामर्श'}
            </div>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 border-white/10 pt-4 sm:pt-0">
            <div className="text-2xl sm:text-3xl font-serif-display font-medium text-emerald-300">
              100%
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">
              {lang === 'en' ? 'Statutory Due Date Safety' : 'समयबद्ध वैधानिक सुरक्षा'}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
