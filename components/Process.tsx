
import React from 'react';
import { PROCESS, CONTENT } from '../constants';
import FadeIn from './FadeIn';
import { Language } from '../types';

interface ProcessProps {
    lang: Language;
}

const Process: React.FC<ProcessProps> = ({ lang }) => {
  return (
    <section id="process" className="py-24 md:py-32 bg-white border-t border-cream scroll-mt-28">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
            <div className="text-center mb-24">
                 <span className="text-xs font-sans tracking-[0.25em] text-warmGray uppercase">Workflow</span>
                 <h2 className="font-serif text-3xl md:text-5xl font-light text-softBlack mt-4">
                    {CONTENT.nav.process[lang]}
                </h2>
            </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((step, index) => (
                <FadeIn key={step.id} delay={index * 150} className="h-full">
                    <div className="group h-full p-8 border border-warmGray/20 hover:border-warmGray/60 bg-cream/20 hover:bg-cream/40 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden">
                        
                        {/* Number Background */}
                        <span className="font-serif text-9xl text-warmGray/10 absolute -top-4 -right-4 group-hover:text-warmGray/20 transition-colors duration-500 select-none">
                            0{step.id}
                        </span>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center h-full">
                            <div className="w-px h-12 bg-softBlack/20 mb-6 group-hover:bg-softBlack/50 transition-colors"></div>
                            
                            <h3 className="font-serif text-xl md:text-2xl text-softBlack mb-4 group-hover:text-softBlack/80 transition-colors">
                                {step.title[lang]}
                            </h3>
                            
                            <p className="font-sans font-light text-sm leading-relaxed text-warmGray group-hover:text-softBlack/70 transition-colors mt-auto">
                                {step.description[lang]}
                            </p>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
