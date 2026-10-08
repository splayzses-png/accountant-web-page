import React from 'react';
import { FIRM_DETAILS, Language } from '../data/content';
import { ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutFirmProps {
  lang: Language;
  onOpenConsultationModal: () => void;
}

export const AboutFirm: React.FC<AboutFirmProps> = ({ lang, onOpenConsultationModal }) => {
  return (
    <section id="about" className="py-24 bg-[#0A1322] text-white border-b border-white/5 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (Col 1-5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F1D33]">
              <img
                src="/src/assets/images/ca_consultation_desk_1791453981360.jpg"
                alt="Awasthi & Associates Consultation Desk"
                className="w-full h-[380px] sm:h-[420px] object-cover filter brightness-95"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1322] via-transparent to-transparent" />

              {/* Minimalist Floating Location Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#070E1A]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      {lang === 'en' ? 'Central Financial Practice' : 'मुख्य व्यावसायिक कार्यालय'}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                      {FIRM_DETAILS.landmarkEn}, {FIRM_DETAILS.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative Editorial Content (Col 6-12) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-amber-400/90 mb-3 block">
                {lang === 'en' ? 'About The Practice' : 'फर्म का परिचय'}
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-white leading-tight"
                style={{ textWrap: 'balance' }}
              >
                {lang === 'en' ? (
                  <>
                    Upholding the Highest Standards of{' '}
                    <span className="gold-gradient-text italic font-normal">
                      Financial Ethics & Rigor
                    </span>
                  </>
                ) : (
                  <>
                    सत्यनिष्ठा, पारदर्शिता एवं{' '}
                    <span className="gold-gradient-text italic font-normal">
                      कानूनी विशेषज्ञता की परंपरा
                    </span>
                  </>
                )}
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {lang === 'en'
                ? `Headquartered in ${FIRM_DETAILS.city}, ${FIRM_DETAILS.shortName} is dedicated to providing high-touch, senior-level Chartered Accountancy counsel to our business community, healthcare institutions, and private individuals.`
                : `${FIRM_DETAILS.city} में स्थित, ${FIRM_DETAILS.shortNameHi} व्यापारिक प्रतिष्ठानों, अस्पतालों, निर्माण ठेकेदारों और स्टार्टअप्स को सम्पूर्ण वित्तीय एवं कर परामर्श प्रदान करती है।`}
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              {lang === 'en'
                ? 'We eliminate the disconnect common in large automated firms. Here, your GST reconciliations, Income Tax scrutiny defense, and statutory audits are overseen by seasoned practitioners who understand both state regulations and commercial reality.'
                : 'हमारे यहाँ आपके महत्वपूर्ण वित्तीय दस्तावेज किसी जूनियर स्टाफ को नहीं सौंपे जाते, बल्कि अनुभवी चार्टर्ड अकाउंटेंट द्वारा व्यक्तिगत रूप से जांचे जाते हैं, जिससे त्रुटि और पेनल्टी की कोई गुंजाइश नहीं रहती।'}
            </p>

            {/* 3 Refined Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <ShieldCheck className="w-4 h-4 text-amber-400 mb-2" />
                <h4 className="text-xs font-semibold text-white mb-1">
                  {lang === 'en' ? 'ICAI Code' : 'आईसीएआई मानक'}
                </h4>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {lang === 'en' ? 'Absolute client data confidentiality' : 'पूर्ण डेटा गोपनीयता एवं आचार संहिता'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <Award className="w-4 h-4 text-emerald-400 mb-2" />
                <h4 className="text-xs font-semibold text-white mb-1">
                  {lang === 'en' ? 'Senior Oversight' : 'वरिष्ठ सीए समीक्षा'}
                </h4>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {lang === 'en' ? 'Direct access to senior partners' : 'सीधे वरिष्ठ पार्टनर से परामर्श'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mb-2" />
                <h4 className="text-xs font-semibold text-white mb-1">
                  {lang === 'en' ? 'Zero Penalty' : 'शून्य पेनल्टी'}
                </h4>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {lang === 'en' ? 'Proactive due-date monitoring' : 'समय से पूर्व अनुपालन सुनिश्चित'}
                </p>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onOpenConsultationModal}
                className="px-5 py-2.5 text-xs font-semibold text-[#070E1A] bg-gradient-to-r from-[#F3E7C4] to-[#D8B467] rounded-full shadow-md"
              >
                {lang === 'en' ? 'Schedule a Meeting' : 'कार्यालय में बैठक तय करें'}
              </motion.button>

              <a
                href={`tel:${FIRM_DETAILS.phoneRaw}`}
                className="text-xs text-slate-300 hover:text-white transition-colors"
              >
                {lang === 'en' ? `Call: ${FIRM_DETAILS.phoneDisplay} →` : `कॉल: ${FIRM_DETAILS.phoneDisplay} →`}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
