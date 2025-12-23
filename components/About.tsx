import React from 'react';
import { CONTENT } from '../constants';
import FadeIn from './FadeIn';
import { Language } from '../types';

interface AboutProps {
    lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white scroll-mt-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          
          <div className="w-full md:w-5/12">
             <FadeIn>
                <div className="relative aspect-[3/4] overflow-hidden bg-warmGray/20">
                    <img 
                        src={CONTENT.about.image} 
                        alt="Yanelle Schwarz" 
                        className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-700"
                    />
                </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-7/12">
            <FadeIn delay={200}>
                <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 text-softBlack">
                    {CONTENT.about.title[lang]}
                </h2>
            </FadeIn>
            
            <div className="space-y-8">
                {CONTENT.about.paragraphs.map((para, index) => (
                    <FadeIn key={index} delay={300 + (index * 100)}>
                        <p className="font-sans font-light text-lg leading-relaxed text-softBlack/80 max-w-xl">
                            {para[lang]}
                        </p>
                    </FadeIn>
                ))}
            </div>

            <FadeIn delay={600}>
                <div className="mt-16">
                    <img src={CONTENT.about.signature} alt="Signature" className="h-12 opacity-60" />
                </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;