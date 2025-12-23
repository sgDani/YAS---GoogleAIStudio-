import React from 'react';
import { Instagram } from 'lucide-react';
import { CONTENT } from '../constants';
import FadeIn from './FadeIn';
import { Language } from '../types';

interface ContactProps {
    lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  return (
    <section id="contact" className="bg-cream pt-24 pb-12 scroll-mt-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeIn>
                <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 text-softBlack">
                    {CONTENT.contact.title[lang]}
                </h2>
                <a href={`mailto:${CONTENT.contact.email}`} className="text-lg md:text-xl font-sans font-light text-softBlack hover:text-warmGray transition-colors border-b border-softBlack/20 pb-1">
                    {CONTENT.contact.email}
                </a>
            </FadeIn>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto mb-20">
             <FadeIn delay={200}>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group">
                            <label className="block text-xs uppercase tracking-widest text-warmGray mb-3">{CONTENT.contact.formName[lang]}</label>
                            <input 
                                type="text" 
                                className="w-full bg-transparent border-b border-warmGray/50 py-2 focus:outline-none focus:border-softBlack transition-colors text-softBlack font-light"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-xs uppercase tracking-widest text-warmGray mb-3">{CONTENT.contact.formEmail[lang]}</label>
                            <input 
                                type="email" 
                                className="w-full bg-transparent border-b border-warmGray/50 py-2 focus:outline-none focus:border-softBlack transition-colors text-softBlack font-light"
                            />
                        </div>
                    </div>
                    
                    <div className="group">
                        <label className="block text-xs uppercase tracking-widest text-warmGray mb-3">{CONTENT.contact.formMessage[lang]}</label>
                        <textarea 
                            rows={4}
                            className="w-full bg-transparent border-b border-warmGray/50 py-2 focus:outline-none focus:border-softBlack transition-colors resize-none text-softBlack font-light"
                        ></textarea>
                    </div>

                    <div className="text-center pt-8">
                        <button 
                            type="submit" 
                            className="bg-softBlack text-cream px-12 py-4 text-xs uppercase tracking-[0.2em] hover:bg-warmGray hover:text-white transition-all duration-300"
                        >
                            {CONTENT.contact.formButton[lang]}
                        </button>
                    </div>
                </form>
            </FadeIn>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-warmGray/30 flex flex-col md:flex-row justify-between items-center text-xs text-warmGray tracking-wider uppercase font-sans">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
             <a href={CONTENT.contact.instagram} target="_blank" rel="noreferrer" className="hover:text-softBlack transition-colors">
                <Instagram className="w-4 h-4" />
             </a>
             <span>{CONTENT.contact.address}</span>
          </div>
          
          <div className="flex gap-6">
            <span className="hover:text-softBlack cursor-pointer transition-colors">{CONTENT.footer.legal[lang]}</span>
            <span className="hover:text-softBlack cursor-pointer transition-colors">{CONTENT.footer.privacy[lang]}</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;