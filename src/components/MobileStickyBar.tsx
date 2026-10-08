import React from 'react';
import { Phone, Calendar, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { FIRM_DETAILS, Language } from '../data/content';

interface MobileStickyBarProps {
  lang: Language;
  onOpenConsultationModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  lang,
  onOpenConsultationModal,
}) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070E1A]/95 backdrop-blur-xl border-t border-white/10 px-4 py-2.5 shadow-2xl max-h-[64px]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${FIRM_DETAILS.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium rounded-full whitespace-nowrap active:scale-[0.98] transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>{lang === 'en' ? 'Call Now' : 'कॉल करें'}</span>
        </a>

        {/* WhatsApp Icon */}
        <a
          href={FIRM_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 rounded-full active:scale-[0.98] transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        {/* Book Consultation Modal trigger */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={onOpenConsultationModal}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-gradient-to-r from-[#F3E7C4] to-[#D8B467] text-[#070E1A] text-xs font-semibold rounded-full whitespace-nowrap shadow-md"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0 text-[#070E1A]" />
          <span>{lang === 'en' ? 'Book Slot' : 'परामर्श'}</span>
        </motion.button>
      </div>
    </aside>
  );
};
