import React, { useState, useEffect } from 'react';
import { FIRM_DETAILS, SERVICES_DATA, Language } from '../data/content';
import { X, MapPin, Phone, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialServiceId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialServiceId,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceId, setServiceId] = useState(initialServiceId || 'gst');
  const [meetingMode, setMeetingMode] = useState<'office' | 'telephonic'>('office');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM – 01:00 PM');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      setServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setPreferredDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg(lang === 'en' ? 'Please provide your name and phone number.' : 'कृपया अपना नाम एवं फोन नंबर दर्ज करें।');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg(lang === 'en' ? 'Please enter a valid 10-digit mobile number.' : 'कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const selectedSrv = SERVICES_DATA.find((s) => s.id === serviceId);
    const srvName = selectedSrv ? selectedSrv.titleEn : 'Chartered Accountancy Consultation';
    const msg = encodeURIComponent(
      `Hello ${FIRM_DETAILS.shortName}, I would like to book a consultation slot.\nName: ${name}\nPhone: ${phone}\nService: ${srvName}\nMode: ${meetingMode === 'office' ? `In-Office (${FIRM_DETAILS.city})` : 'Telephonic'}\nPreferred Date: ${preferredDate}\nPreferred Slot: ${timeSlot}`
    );
    window.open(`https://wa.me/${FIRM_DETAILS.phoneRaw.replace('+', '')}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="bg-[#0A1322] text-white rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 border border-white/10 shadow-2xl relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[10px] font-medium tracking-widest uppercase text-amber-400/90 mb-1 block">
            {lang === 'en' ? 'Senior CA Desk' : 'वरिष्ठ सीए अपॉइंटमेंट'}
          </span>
          <h3 className="text-2xl font-serif-display font-medium text-white">
            {lang === 'en' ? 'Book a Private Consultation' : 'चार्टर्ड अकाउंटेंट से परामर्श बुक करें'}
          </h3>
          <p className="text-xs text-slate-400 mt-1 font-light">
            {lang === 'en'
              ? `Meet at our ${FIRM_DETAILS.city} office or schedule a direct telephonic session.`
              : `${FIRM_DETAILS.city} कार्यालय में मिलें अथवा सीधे फोन पर बात करें।`}
          </p>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-serif-display font-medium text-white">
              {lang === 'en' ? 'Appointment Request Confirmed' : 'परामर्श अनुरोध प्राप्त हुआ'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto font-light">
              {lang === 'en'
                ? `Thank you, ${name}. Our practice coordinator will call you at ${phone} to confirm your slot for ${preferredDate}.`
                : `धन्यवाद, ${name}। हमारी टीम आपसे ${phone} पर ${preferredDate} के समय की पुष्टि के लिए शीघ्र संपर्क करेगी।`}
            </p>

            <div className="pt-3 flex flex-col sm:flex-row justify-center gap-2">
              <button
                type="button"
                onClick={handleWhatsAppForward}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'en' ? 'Sync to WhatsApp' : 'व्हाट्सएप पर भेजें'}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 border border-white/10 text-slate-300 text-xs rounded-full hover:bg-white/5"
              >
                {lang === 'en' ? 'Done' : 'पूर्ण'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-300">
                {errorMsg}
              </div>
            )}

            {/* Mode Selector */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setMeetingMode('office')}
                className={`p-3 text-xs rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                  meetingMode === 'office'
                    ? 'border-amber-400/50 bg-amber-400/10 text-amber-200'
                    : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white'
                }`}
              >
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium">{lang === 'en' ? 'In-Office' : 'कार्यालय'}</span>
                  <span className="text-[10px] text-slate-400 font-light">{FIRM_DETAILS.city}</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setMeetingMode('telephonic')}
                className={`p-3 text-xs rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                  meetingMode === 'telephonic'
                    ? 'border-amber-400/50 bg-amber-400/10 text-amber-200'
                    : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium">{lang === 'en' ? 'Direct Call' : 'फोन पर'}</span>
                  <span className="text-[10px] text-slate-400 font-light">{FIRM_DETAILS.phoneDisplay}</span>
                </div>
              </button>
            </div>

            {/* Service */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-1.5">
                {lang === 'en' ? 'Service Required' : 'आवश्यक सेवा'}
              </label>
              <select
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="w-full px-4 py-3 text-xs rounded-xl bg-[#070E1A] border border-white/10 text-white focus:outline-none focus:border-amber-400/50"
              >
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.number}. {lang === 'en' ? srv.titleEn : srv.titleHi}
                  </option>
                ))}
              </select>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-1.5">
                  {lang === 'en' ? 'Full Name *' : 'पूरा नाम *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'en' ? 'e.g. Alok Verma' : 'उदा. आलोक वर्मा'}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={lang === 'en' ? 'e.g. 98999 77123' : 'उदा. 98999 77123'}
                  className="w-full px-4 py-3 text-xs rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50"
                />
              </div>
            </div>

            {/* Date & Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-1.5">
                  {lang === 'en' ? 'Preferred Date' : 'तारीख'}
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-3 text-xs rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-amber-400/50"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-1.5">
                  {lang === 'en' ? 'Preferred Slot' : 'समय'}
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-3 text-xs rounded-xl bg-[#070E1A] border border-white/10 text-white focus:outline-none focus:border-amber-400/50"
                >
                  <option value="10:00 AM – 12:00 PM">Morning (10 AM – 12 PM)</option>
                  <option value="12:00 PM – 02:00 PM">Noon (12 PM – 2 PM)</option>
                  <option value="03:00 PM – 05:00 PM">Afternoon (3 PM – 5 PM)</option>
                  <option value="05:00 PM – 07:00 PM">Evening (5 PM – 7 PM)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full py-3.5 px-4 bg-gradient-to-r from-[#F3E7C4] to-[#D8B467] text-[#070E1A] text-xs font-semibold rounded-full shadow-md hover:brightness-105 transition-all flex items-center justify-center gap-1.5"
              >
                <span>{lang === 'en' ? 'Confirm Appointment Request' : 'परामर्श सुनिश्चित करें'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
