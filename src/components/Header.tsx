import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Globe, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FIRM_DETAILS, Language } from '../data/content';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenConsultationModal: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onOpenConsultationModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: lang === 'en' ? 'About' : 'परिचय' },
    { href: '#services', label: lang === 'en' ? 'Services' : 'सेवाएं' },
    { href: '#calendar', label: lang === 'en' ? 'Due Dates' : 'अंतिम तिथियां' },
    { href: '#estimator', label: lang === 'en' ? 'Checklist' : 'चेकलिस्ट' },
    { href: '#reviews', label: lang === 'en' ? 'Reviews' : 'समीक्षाएं' },
    { href: '#contact', label: lang === 'en' ? 'Contact' : 'संपर्क' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#070E1A]/95 backdrop-blur-xl border-b border-white/[0.08] transition-colors w-full">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Zone 1: Brand Wordmark with responsive scaling */}
          <a
            href="#"
            className="flex items-center gap-2 group min-w-0"
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#D8B467] to-[#A07A2A] flex items-center justify-center text-[#070E1A] font-serif-display font-bold text-base sm:text-lg shadow-sm shrink-0">
              {FIRM_DETAILS.logoInitial}
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-lg md:text-xl font-serif-display font-semibold tracking-tight text-white group-hover:text-[#F3E7C4] transition-colors truncate">
                {lang === 'en' ? FIRM_DETAILS.shortName : FIRM_DETAILS.shortNameHi}
              </span>
              <span className="hidden xs:block text-[9px] sm:text-[10px] font-sans tracking-widest uppercase text-amber-200/70 font-medium truncate">
                {lang === 'en' ? 'Chartered Accountants' : 'चार्टर्ड अकाउंटेंट्स'}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide uppercase text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#F3E7C4] transition-colors py-1 relative hover:underline underline-offset-8 decoration-amber-400/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Mobile Optimized) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              type="button"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
              <span>{lang === 'en' ? 'हिन्दी' : 'EN'}</span>
            </button>

            {/* Direct Phone Action (Desktop / Tablet) */}
            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{FIRM_DETAILS.phoneDisplay}</span>
            </a>

            {/* Primary Action CTA (Hidden on Mobile to prevent overflow, visible on md+) */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenConsultationModal()}
              type="button"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#070E1A] bg-gradient-to-r from-[#F3E7C4] via-[#D8B467] to-[#C49B45] hover:brightness-105 rounded-full shadow-md transition-all whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#070E1A]" />
              <span>{lang === 'en' ? 'Book Consultation' : 'परामर्श बुक करें'}</span>
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Luxury Slide-down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#070E1A]/98 border-b border-white/10 px-5 pt-3 pb-6 space-y-3"
          >
            <div className="flex items-center justify-between py-2 border-b border-white/10 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{FIRM_DETAILS.googleRating}★ ({FIRM_DETAILS.googleReviewCount} Client Reviews)</span>
              </span>
              <span>{FIRM_DETAILS.city}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-xs font-medium text-slate-200 hover:text-amber-200 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${FIRM_DETAILS.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-white/10 border border-white/15 rounded-lg"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {FIRM_DETAILS.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
