import React, { useState } from 'react';
import { FIRM_DETAILS, Language } from '../data/content';
import { MapPin, Phone, Clock, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactLocationProps {
  lang: Language;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'GST Advisory & Filing',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg(lang === 'en' ? 'Please provide your name and phone number.' : 'कृपया अपना नाम और फोन नंबर दर्ज करें।');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg(lang === 'en' ? 'Please enter a valid 10-digit mobile number.' : 'कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello ${FIRM_DETAILS.shortName}, I am ${formData.name}. Inquiring regarding ${formData.service}. Mobile: ${formData.phone}. Note: ${formData.message || 'Please contact me.'}`
    );
    window.open(`https://wa.me/${FIRM_DETAILS.phoneRaw.replace('+', '')}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-[#0A1322] text-white border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-amber-400/90 mb-3 block">
            {lang === 'en' ? 'Direct Consultation Desk' : 'कार्यालय पता एवं संपर्क'}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-white leading-tight mb-3"
            style={{ textWrap: 'balance' }}
          >
            {lang === 'en' ? (
              <>
                Initiate Your{' '}
                <span className="gold-gradient-text italic font-normal">
                  Confidential Advisory
                </span>
              </>
            ) : (
              <>
                कार्यालय पधारें अथवा{' '}
                <span className="gold-gradient-text italic font-normal">
                  सीधा परामर्श बुक करें
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm font-light">
            {lang === 'en'
              ? `Visit our office in ${FIRM_DETAILS.city} or schedule a confidential advisory session.`
              : `${FIRM_DETAILS.city} स्थित कार्यालय में बैठक तय करें या सीधे फोन पर परामर्श लें।`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Office Details Card (Col 1-5) */}
          <div className="lg:col-span-5 bg-[#070E1A] border border-white/10 rounded-2xl p-7 shadow-xl space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    {lang === 'en' ? 'Lucknow Office' : 'कार्यालय का पता'}
                  </h4>
                  <p className="text-sm font-medium text-white mt-1 leading-relaxed">
                    {FIRM_DETAILS.address}
                  </p>
                  <p className="text-xs text-amber-300/80 font-normal mt-1">
                    {lang === 'en' ? `Landmark: ${FIRM_DETAILS.landmarkEn}` : `पहचान: ${FIRM_DETAILS.landmarkHi}`}
                  </p>
                  <a
                    href={FIRM_DETAILS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1 mt-2"
                  >
                    <span>{lang === 'en' ? 'Open in Google Maps' : 'गूगल मैप्स पर देखें'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-white/5">
                <div className="p-2.5 rounded-xl bg-emerald-400/10 text-emerald-400 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    {lang === 'en' ? 'Direct Hotline' : 'सीधा फोन नंबर'}
                  </h4>
                  <a
                    href={`tel:${FIRM_DETAILS.phoneRaw}`}
                    className="text-lg font-serif-display font-medium text-white hover:text-amber-200 transition-colors block mt-0.5"
                  >
                    {FIRM_DETAILS.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-white/5">
                <div className="p-2.5 rounded-xl bg-white/[0.04] text-slate-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    {lang === 'en' ? 'Hours' : 'समय'}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    {lang === 'en' ? FIRM_DETAILS.hoursEn : FIRM_DETAILS.hoursHi}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Form (Col 6-12) */}
          <div className="lg:col-span-7 bg-[#070E1A] border border-white/10 rounded-2xl p-7 sm:p-8 shadow-xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif-display font-medium text-white">
                  {lang === 'en' ? 'Inquiry Registered Successfully' : 'अनुरोध सफलतापूर्वक दर्ज हुआ'}
                </h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                  {lang === 'en'
                    ? `Thank you, ${formData.name}. Our Senior CA desk will contact you at ${formData.phone}.`
                    : `धन्यवाद, ${formData.name}। हमारी टीम आपसे ${formData.phone} पर शीघ्र संपर्क करेगी।`}
                </p>

                <div className="pt-3 flex flex-col sm:flex-row justify-center gap-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Forward to WhatsApp' : 'व्हाट्सएप पर भेजें'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', service: 'GST Advisory & Filing', message: '' });
                    }}
                    className="px-5 py-2.5 border border-white/10 text-slate-300 text-xs rounded-full hover:bg-white/5"
                  >
                    {lang === 'en' ? 'New Inquiry' : 'नया संदेश'}
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-300">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-1.5">
                      {lang === 'en' ? 'Your Name *' : 'आपका नाम *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'en' ? 'e.g. Ramesh Chandra' : 'उदा. रमेश चन्द्र'}
                      className="w-full px-4 py-3 text-xs rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-1.5">
                      {lang === 'en' ? 'Mobile Number *' : 'मोबाइल नंबर *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={lang === 'en' ? 'e.g. 98999 77123' : 'उदा. 98999 77123'}
                      className="w-full px-4 py-3 text-xs rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-1.5">
                    {lang === 'en' ? 'Service Required' : 'आवश्यक सेवा'}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 text-xs rounded-xl bg-[#0A1322] border border-white/10 text-white focus:outline-none focus:border-amber-400/50"
                  >
                    <option value="GST Advisory & Filing">GST Advisory, Return & Notice Resolution</option>
                    <option value="Income Tax Return & Notice Defense">Income Tax Return & Scrutiny Advisory</option>
                    <option value="Auditing & Assurance (44AB)">Auditing & Assurance (Statutory / Tax)</option>
                    <option value="Company / LLP Incorporation">Company, LLP & Startup Registration</option>
                    <option value="Accounting & Bookkeeping">Cloud Accounting & Virtual CFO</option>
                    <option value="Strategic Tax Planning">Strategic Tax Planning & Wealth Structuring</option>
                    <option value="CMA Data & Bank Project Reports">Bank CMA Data & Project Reports</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-1.5">
                    {lang === 'en' ? 'Brief Note (Optional)' : 'संक्षिप्त विवरण (वैकल्पिक)'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'en' ? 'Mention turnover, notice number, or questions...' : 'टर्नओवर, नोटिस या अन्य विवरण लिखें...'}
                    className="w-full px-4 py-3 text-xs rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50"
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-[#F3E7C4] to-[#D8B467] text-[#070E1A] text-xs font-semibold rounded-full flex items-center justify-center gap-2 shadow-md hover:brightness-105 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Submit Inquiry' : 'संदेश भेजें'}</span>
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
