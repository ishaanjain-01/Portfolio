import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Instagram,
  Send, 
  Check, 
  Copy, 
  FileDown, 
  MapPin, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  onOpenAi: () => void;
  onOpenResumeSummary: () => void;
}

export const ContactAndFooter: React.FC<Props> = ({ onOpenAi, onOpenResumeSummary }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Collaboration / Strategic Role',
    message: ''
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    // In addition, prepare a mailto link fallback
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailto;
  };

  return (
    <footer id="contact" className="bg-[#080b12] border-t border-slate-800/80 pt-20 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Contact Details & Value Prop */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block mb-2">
                Let's Build Something Iconic
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
                Connect With <span className="italic font-normal text-indigo-300">Ishaan Jain</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed max-w-lg">
                Whether you are seeking a commercial growth leader, exploring international brand expansion, discussing venture collaborations, or looking for an accomplished Masters' Union scholar.
              </p>
            </div>

            {/* Direct Connect Options */}
            <div className="space-y-3 max-w-md">
              {/* Primary Email */}
              <div className="flex items-center justify-between p-3.5 bg-slate-900/80 border border-slate-800 rounded-2xl">
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] text-slate-400 block font-medium">Masters' Union Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  id="copy-mu-email-btn"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'mu-email')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0 ml-2"
                  title="Copy email"
                >
                  {copiedField === 'mu-email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-center justify-between p-3.5 bg-slate-900/80 border border-slate-800 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Phone & WhatsApp</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  id="copy-phone-btn"
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Profile */}
              <div className="flex items-center justify-between p-3.5 bg-slate-900/80 border border-slate-800 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">LinkedIn Network</span>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-sky-300 transition-colors flex items-center gap-1"
                    >
                      <span>Connect on LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <a
                  id="open-linkedin-link"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Open LinkedIn profile"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Instagram Profile */}
              <div className="flex items-center justify-between p-3.5 bg-slate-900/80 border border-slate-800 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400 shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Instagram</span>
                    <a
                      href={PERSONAL_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-pink-300 transition-colors flex items-center gap-1"
                    >
                      <span>Follow {PERSONAL_INFO.instagramHandle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <a
                  id="open-instagram-link"
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Open Instagram profile"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                id="footer-resume-summary-btn"
                onClick={onOpenResumeSummary}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                <span>View Full Executive Résumé</span>
              </button>

              <button
                id="footer-ask-ai-btn"
                onClick={onOpenAi}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 text-xs font-semibold transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Interview AI Assistant</span>
              </button>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Ingestion Note
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Messages will route immediately to Ishaan's inbox with pre-filled context.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Opening Email Client...</h4>
                <p className="text-xs text-slate-300">
                  Thank you! If your default mail client does not pop up automatically, you can always write directly to <strong className="text-white">{PERSONAL_INFO.email}</strong>.
                </p>
                <button
                  id="reset-form-btn"
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-emerald-400 font-semibold underline underline-offset-4"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Your Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. s.jenkins@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Objective / Topic
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="Commercial Leadership / Growth Role">Commercial Leadership / Growth Role</option>
                    <option value="International Export / Distributor Partnership">International Export / Distributor Partnership</option>
                    <option value="ORA Gourmand Perfumes Collaboration">ORA Gourmand Perfumes Collaboration</option>
                    <option value="Masters' Union Academic / Venture Connect">Masters' Union Academic / Venture Connect</option>
                    <option value="Other / General Inquiry">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly outline your project, opportunity, or idea..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  id="submit-contact-form-btn"
                  type="submit"
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">{PERSONAL_INFO.name}</span>
            <span>•</span>
            <span>Gurgaon, India (Hometown: Kolkata)</span>
          </div>
          <p className="text-center sm:text-right">
            Verified Academic Records, Corporate Appointment Letters & Turnitin Reports on file.
          </p>
        </div>
      </div>
    </footer>
  );
};
