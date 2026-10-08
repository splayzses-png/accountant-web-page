import React, { useState } from 'react';
import { Language } from '../data/content';
import { FileCheck, Clock, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuickEstimatorProps {
  lang: Language;
  onOpenConsultationModal: (serviceId?: string) => void;
}

export const QuickEstimator: React.FC<QuickEstimatorProps> = ({
  lang,
  onOpenConsultationModal,
}) => {
  const [entityType, setEntityType] = useState<'individual' | 'doctor' | 'proprietor' | 'company'>('proprietor');
  const [serviceRequirement, setServiceRequirement] = useState<'gst' | 'itr' | 'audit' | 'incorporation' | 'cma'>('gst');

  const entities = [
    { id: 'individual', labelEn: 'Individual / Salaried', labelHi: 'वेतनभोगी / व्यक्ति' },
    { id: 'doctor', labelEn: 'Doctor / Clinic', labelHi: 'डॉक्टर / क्लिनिक' },
    { id: 'proprietor', labelEn: 'Trader / MSME', labelHi: 'व्यापारी / एमएसएमई' },
    { id: 'company', labelEn: 'Pvt Ltd / LLP', labelHi: 'कंपनी / एलएलपी' },
  ];

  const services = [
    { id: 'gst', labelEn: 'GST Filing & ITC', labelHi: 'जीएसटी रिटर्न', targetSid: 'gst' },
    { id: 'itr', labelEn: 'Income Tax Return', labelHi: 'आईटीआर फाइलिंग', targetSid: 'income-tax' },
    { id: 'audit', labelEn: 'Tax Audit (44AB)', labelHi: 'टैक्स ऑडिट', targetSid: 'audit' },
    { id: 'incorporation', labelEn: 'Company Setup', labelHi: 'कंपनी रजिस्ट्रेशन', targetSid: 'corporate-reg' },
    { id: 'cma', labelEn: 'Bank CMA Loan Data', labelHi: 'बैंक लोन प्रोजेक्ट रिपोर्ट', targetSid: 'business-advisory' },
  ];

  const getChecklist = () => {
    switch (serviceRequirement) {
      case 'gst':
        return [
          lang === 'en' ? 'Lucknow premises utility bill or rent deed' : 'लखनऊ स्थित प्रतिष्ठान का बिजली बिल या किरायानामा',
          lang === 'en' ? 'PAN & Aadhaar of all owners/partners' : 'मालिकों/साझेदारों के पैन व आधार',
          lang === 'en' ? 'Bank passbook / cancelled cheque' : 'बैंक पासबुक या कैंसिल्ड चेक',
        ];
      case 'itr':
        return [
          lang === 'en' ? 'Form 16 or Annual Bank Statements' : 'फॉर्म 16 या वार्षिक बैंक स्टेटमेंट',
          lang === 'en' ? 'Form 26AS, AIS & Capital Gains ledger' : 'फॉर्म 26AS, AIS एवं कैपिटल गेन विवरण',
          lang === 'en' ? 'Savings & Fixed Deposit interest summary' : 'बचत खाता व एफडी ब्याज विवरण',
        ];
      case 'audit':
        return [
          lang === 'en' ? 'Tally trial balance & ledger statement' : 'टैली बैकअप और ट्रायल बैलेंस',
          lang === 'en' ? 'GST turnover reconciliation statement' : 'जीएसटी टर्नओवर मिलान रिपोर्ट',
          lang === 'en' ? 'Physical closing stock valuation summary' : 'क्लोजिंग स्टॉक मूल्यांकन सारांश',
        ];
      case 'incorporation':
        return [
          lang === 'en' ? '2 Directors PAN & Aadhaar cards' : '2 निदेशकों के पैन व आधार कार्ड',
          lang === 'en' ? 'Bank statements (under 2 months old)' : 'अद्यतन बैंक स्टेटमेंट (2 माह से कम पुराना)',
          lang === 'en' ? 'Registered office utility bill & NOC' : 'पंजीकृत कार्यालय का बिजली बिल व एनओसी',
        ];
      default:
        return [
          lang === 'en' ? 'Past 3 years balance sheet & ITRs' : 'विगत 3 वर्षों की बैलेंस शीट व आईटीआर',
          lang === 'en' ? 'Existing bank loan sanction letters' : 'वर्तमान बैंक लोन स्वीकृति पत्र',
          lang === 'en' ? 'Machinery quotation & sales forecast' : 'मशीनरी कोटेशन एवं अनुमानित बिक्री आंकड़े',
        ];
    }
  };

  const currentServiceObj = services.find((s) => s.id === serviceRequirement);

  const handleWhatsAppSend = () => {
    const entLabel = entities.find((e) => e.id === entityType)?.labelEn;
    const srvLabel = currentServiceObj?.labelEn;
    const msg = encodeURIComponent(
      `Hello Awasthi & Associates, I am inquiring as a ${entLabel} for ${srvLabel}. Please share the consultation schedule.`
    );
    window.open(`https://wa.me/919899977123?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="estimator" className="py-24 bg-[#070E1A] text-white border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-amber-400/90 mb-3 block">
            {lang === 'en' ? 'Interactive Tool' : 'अनुपालन एवं दस्तावेज़ टूल'}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-white leading-tight mb-3"
            style={{ textWrap: 'balance' }}
          >
            {lang === 'en' ? (
              <>
                Document Checklist &{' '}
                <span className="gold-gradient-text italic font-normal">
                  Turnaround Estimator
                </span>
              </>
            ) : (
              <>
                दस्तावेज़ चेकलिस्ट एवं{' '}
                <span className="gold-gradient-text italic font-normal">
                  समय सीमा का त्वरित आंकलन
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm font-light">
            {lang === 'en'
              ? 'Select your legal entity and requirement to get an instant checklist verified by our Senior CA.'
              : 'अपना व्यवसाय प्रकार और सेवा चुनें ताकि आवश्यक दस्तावेज़ों की सूची तुरंत प्राप्त हो सके।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Selectors (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1 */}
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-slate-400 mb-2.5">
                {lang === 'en' ? '1. Your Entity Type' : '1. व्यवसाय का प्रकार'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {entities.map((ent) => (
                  <button
                    key={ent.id}
                    type="button"
                    onClick={() => setEntityType(ent.id as any)}
                    className={`p-3 text-left rounded-xl text-xs font-medium border transition-all ${
                      entityType === ent.id
                        ? 'border-amber-400/50 bg-amber-400/10 text-amber-200'
                        : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {lang === 'en' ? ent.labelEn : ent.labelHi}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-slate-400 mb-2.5">
                {lang === 'en' ? '2. Service Required' : '2. आवश्यक सेवा'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setServiceRequirement(srv.id as any)}
                    className={`p-3 text-left rounded-xl text-xs font-medium border transition-all ${
                      serviceRequirement === srv.id
                        ? 'border-amber-400/50 bg-amber-400/10 text-amber-200'
                        : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {lang === 'en' ? srv.labelEn : srv.labelHi}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box (Col 8-12) */}
          <div className="lg:col-span-5 bg-[#0A1322] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl">
            <div className="flex items-center gap-2 pb-3 border-b border-white/5 mb-4">
              <FileCheck className="w-5 h-5 text-amber-400" />
              <h4 className="text-sm font-serif-display font-medium text-white">
                {lang === 'en' ? 'Required Verification Checklist' : 'आवश्यक दस्तावेज़ों की सूची'}
              </h4>
            </div>

            <AnimatePresence mode="wait">
              <motion.ul
                key={serviceRequirement}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5 mb-6"
              >
                {getChecklist().map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>

            <div className="pt-4 border-t border-white/5 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'en' ? 'Typical Turnaround:' : 'अनुमानित समय सीमा:'}</span>
                </span>
                <span className="font-semibold text-white">
                  {serviceRequirement === 'incorporation' ? '5–7 Business Days' : '24–48 Hours'}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => onOpenConsultationModal(currentServiceObj?.targetSid)}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-[#F3E7C4] to-[#D8B467] text-[#070E1A] text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 shadow-md hover:brightness-105 transition-all"
                >
                  <span>{lang === 'en' ? 'Book with Checklist' : 'परामर्श बुक करें'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-emerald-400 transition-colors"
                  aria-label="Send via WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
