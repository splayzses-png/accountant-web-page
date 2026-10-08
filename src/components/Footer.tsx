import React from 'react';
import { FIRM_DETAILS, Language } from '../data/content';
import { MapPin, Phone, Star } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-[#050A12] text-slate-400 pt-16 pb-24 lg:pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Identity (Col 1-5) */}
          <div className="lg:col-span-5 space-y-3">
            <a href="#" className="text-xl font-serif-display font-medium text-white block">
              {lang === 'en' ? FIRM_DETAILS.nameEn : FIRM_DETAILS.nameHi}
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
              {lang === 'en'
                ? `Chartered Accountancy practice in ${FIRM_DETAILS.city}. Providing statutory tax filing, audit assurance, entity registration, and financial advisory.`
                : `${FIRM_DETAILS.city} स्थित प्रमुख चार्टर्ड अकाउंटेंसी फर्म। जीएसटी, आयकर, वैधानिक ऑडिट, कंपनी इनकॉरपोरेशन एवं प्रोजेक्ट रिपोर्ट में विश्वसनीय मार्गदर्शन।`}
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300/90 pt-1">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span className="font-semibold text-white">{FIRM_DETAILS.googleRating} / 5.0</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">{FIRM_DETAILS.googleReviewCount}+ Verified Reviews</span>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider text-slate-300 font-medium">
              {lang === 'en' ? 'Core Practices' : 'प्रमुख सेवाएं'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-light">
              <li>
                <a href="#services" className="hover:text-amber-200 transition-colors">
                  GST Registration & Returns
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-200 transition-colors">
                  Income Tax & Scrutiny Defense
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-200 transition-colors">
                  Statutory & Tax Audit (44AB)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-200 transition-colors">
                  Company & LLP Registration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-200 transition-colors">
                  Bank CMA Reports & Project Data
                </a>
              </li>
            </ul>
          </div>

          {/* Office & Direct Contact (Col 9-12) */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider text-slate-300 font-medium">
              {lang === 'en' ? 'Lucknow Office' : 'कार्यालय'}
            </h4>
            <div className="space-y-2 text-xs text-slate-400 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{FIRM_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${FIRM_DETAILS.phoneRaw}`} className="text-white hover:text-amber-200 font-medium">
                  {FIRM_DETAILS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ICAI Regulatory Disclaimer */}
        <div className="py-5 border-b border-white/5 text-[11px] text-slate-500 leading-relaxed font-light text-justify">
          <p>
            {lang === 'en'
              ? 'ICAI Statutory Disclaimer: As per the guidelines issued by the Institute of Chartered Accountants of India (ICAI), this website is intended solely for informational purposes to provide general awareness regarding statutory compliance and our practice areas. It does not constitute advertising, client solicitation, or formal legal advice.'
              : 'आईसीएआई विधिक प्रकटीकरण: भारतीय सनदी लेखाकार संस्थान (ICAI) के दिशा-निर्देशों के अनुसार यह वेबसाइट केवल सामान्य सूचनात्मक उद्देश्यों के लिए है। यह किसी भी प्रकार का विज्ञापन अथवा ग्राहक जुटाने का प्रयास नहीं है।'}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} {FIRM_DETAILS.nameEn}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-300 transition-colors">
              {lang === 'en' ? 'About' : 'परिचय'}
            </a>
            <span aria-hidden="true">·</span>
            <a href="#services" className="hover:text-slate-300 transition-colors">
              {lang === 'en' ? 'Services' : 'सेवाएं'}
            </a>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              {lang === 'en' ? 'Contact' : 'संपर्क'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
