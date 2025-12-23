import React from 'react';
import { SERVICES } from '../constants';
import FadeIn from './FadeIn';
import { Language } from '../types';

interface ServicesProps {
    lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  return (
    <section id="services" className="py-24 bg-cream text-softBlack scroll-mt-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center">
            <FadeIn>
                <div className="w-px h-16 bg-softBlack mb-8 mx-auto"></div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 w-full max-w-5xl text-center">
                {SERVICES.map((service, index) => (
                    <FadeIn key={service.id} delay={index * 100} className="flex flex-col items-center">
                        <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-softBlack/90 hover:text-warmGray transition-colors cursor-default">
                            {service.title[lang]}
                        </h3>
                    </FadeIn>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;