import React, { useState } from 'react';
import { COMPLIANCE_CALENDAR_DATA, Language } from '../data/content';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface TaxDueDatesCalendarProps {
  lang: Language;
  onOpenConsultationModal: (serviceId?: string) => void;
}

export const TaxDueDatesCalendar: React.FC<TaxDueDatesCalendarProps> = ({
  lang,
  onOpenConsultationModal,
}) => {
  const [filter, setFilter] = useState<'all' | 'gst' | 'income_tax' | 'tds'>('all');

  const filteredItems = COMPLIANCE_CALENDAR_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="calendar" className="py-24 bg-[#0A1322] text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-medium tracking-widest uppercase text-amber-400/90 mb-3 block">
              {lang === 'en' ? 'Statutory Compliance Timeline' : 'वैधानिक अंतिम तिथियां'}
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-white leading-tight mb-3"
              style={{ textWrap: 'balance' }}
            >
              {lang === 'en' ? (
                <>
                  Upcoming Tax &{' '}
                  <span className="gold-gradient-text italic font-normal">
                    Filing Deadlines
                  </span>
                </>
              ) : (
                <>
                  महत्वपूर्ण कर एवं{' '}
                  <span className="gold-gradient-text italic font-normal">
                    फाइलिंग समय सीमा
                  </span>
                </>
              )}
            </h2>
            <p className="text-slate-400 text-sm font-light">
              {lang === 'en'
                ? 'Prevent compounding interest under Section 234 and late fees under CGST. Proactive filing schedule.'
                : 'ब्याज और विलंब शुल्क से सुरक्षा। समय पर फाइलिंग का व्यवस्थित कैलेंडर।'}
            </p>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] rounded-full border border-white/10 max-w-fit">
            {(['all', 'gst', 'income_tax', 'tds'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  filter === tab ? 'text-[#070E1A]' : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter === tab && (
                  <motion.span
                    layoutId="activeCalendarFilter"
                    className="absolute inset-0 bg-gradient-to-r from-[#F3E7C4] to-[#D8B467] rounded-full shadow-xs"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">
                  {tab === 'all'
                    ? lang === 'en' ? 'All' : 'सभी'
                    : tab === 'income_tax'
                    ? lang === 'en' ? 'Income Tax' : 'आयकर'
                    : tab.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Due Dates Grid (Spacious, Clean) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="p-6 rounded-2xl border border-white/[0.08] bg-[#070E1A] hover:border-amber-400/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.month}</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-200 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-base font-serif-display font-medium text-white mb-2">
                  {lang === 'en' ? item.titleEn : item.titleHi}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
                  {lang === 'en' ? item.descriptionEn : item.descriptionHi}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => onOpenConsultationModal(item.category === 'gst' ? 'gst' : 'income-tax')}
                  className="w-full text-xs font-medium text-slate-300 hover:text-amber-200 flex items-center justify-between group transition-colors"
                >
                  <span>{lang === 'en' ? 'File Before Deadline' : 'समय पूर्व फाइल करें'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
