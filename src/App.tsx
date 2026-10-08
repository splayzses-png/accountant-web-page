import { useState } from 'react';
import { Language } from './data/content';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutFirm } from './components/AboutFirm';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TaxDueDatesCalendar } from './components/TaxDueDatesCalendar';
import { QuickEstimator } from './components/QuickEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState<string | undefined>(undefined);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const openConsultationModal = (serviceId?: string) => {
    setActiveServiceId(serviceId);
    setIsConsultationModalOpen(true);
  };

  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <div className={`min-h-screen w-full max-w-full overflow-x-hidden bg-[#070E1A] text-slate-100 flex flex-col font-sans ${lang === 'hi' ? 'font-hindi' : ''}`}>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#D8B467] text-[#070E1A] text-xs font-semibold rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      {/* 3-Zone Top Bar */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenConsultationModal={() => openConsultationModal()}
      />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenConsultationModal={() => openConsultationModal()}
        />

        {/* About the Firm */}
        <AboutFirm
          lang={lang}
          onOpenConsultationModal={() => openConsultationModal()}
        />

        {/* 7 Core Services Bento & Checklist Inspector */}
        <ServicesSection
          lang={lang}
          onOpenConsultationModal={(sid) => openConsultationModal(sid)}
        />

        {/* Why Choose Us */}
        <WhyChooseUs
          lang={lang}
          onOpenConsultationModal={() => openConsultationModal()}
        />

        {/* Statutory Tax & Compliance Due Dates Radar */}
        <TaxDueDatesCalendar
          lang={lang}
          onOpenConsultationModal={(sid) => openConsultationModal(sid)}
        />

        {/* Interactive Readiness & Checklist Estimator */}
        <QuickEstimator
          lang={lang}
          onOpenConsultationModal={(sid) => openConsultationModal(sid)}
        />

        {/* Real Client Testimonials */}
        <TestimonialsSection lang={lang} />

        {/* Practical FAQs */}
        <FaqSection lang={lang} />

        {/* Office Location, Map & Direct Contact Desk */}
        <ContactLocation lang={lang} />
      </main>

      {/* Quiet Footer with ICAI Disclaimer & Full Info */}
      <Footer lang={lang} />

      {/* Interactive Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={closeConsultationModal}
        lang={lang}
        initialServiceId={activeServiceId}
      />

      {/* Mobile Sticky Action Bar (<15% viewport height) */}
      <MobileStickyBar
        lang={lang}
        onOpenConsultationModal={() => openConsultationModal()}
      />
    </div>
  );
}
