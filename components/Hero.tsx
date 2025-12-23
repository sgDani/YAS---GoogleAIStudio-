
import React from 'react';
import { CONTENT } from '../constants';
import FadeIn from './FadeIn';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to ensure Title Case if the constant is Uppercase
  const formatName = (name: string) => {
    return name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#E6E4DC]">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
             {/* The Image with Blur */}
            <img 
                src={CONTENT.hero.image} 
                alt="Yanelle Schwarz Interior" 
                className="w-full h-full object-cover opacity-60 blur-[2px] scale-105" 
            />
            {/* Overlay to unify color and ensure text contrast - Updated to match new theme */}
            <div className="absolute inset-0 bg-[#EFEDE6]/40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#EFEDE6]/30 via-transparent to-[#EFEDE6]"></div>
        </div>

        {/* Content Layer */}
        <div className="container relative z-10 px-6 md:px-12 flex flex-col items-center text-center justify-center h-full pt-20">
            
            <FadeIn>
                 {/* Main Title / Name - Smaller size */}
                <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-softBlack mb-8 tracking-tight opacity-90">
                    {formatName(CONTENT.hero.name)}
                </h1>
            </FadeIn>

            <FadeIn delay={200}>
                {/* Role / Subtitle */}
                <div className="flex items-center gap-4 mb-10 opacity-70">
                    <div className="w-8 h-px bg-softBlack"></div>
                    <span className="text-xs md:text-sm font-sans tracking-[0.3em] text-softBlack uppercase">
                        {CONTENT.hero.role[lang]}
                    </span>
                    <div className="w-8 h-px bg-softBlack"></div>
                </div>
            </FadeIn>
            
            <FadeIn delay={400}>
                 {/* Claim */}
                <h2 className="font-serif text-3xl md:text-5xl font-light text-softBlack mb-16 max-w-4xl leading-tight">
                    {CONTENT.hero.claim[lang]}
                </h2>
            </FadeIn>

            <FadeIn delay={600}>
                {/* CTA Button - Elegant & Minimal */}
                <a 
                    href="#projects" 
                    onClick={scrollToProjects}
                    className="group inline-flex flex-col items-center text-xs font-sans font-medium uppercase tracking-[0.2em] text-softBlack/80 hover:text-softBlack transition-colors"
                >
                    <span className="mb-2 border-b border-softBlack/20 pb-1 group-hover:border-softBlack transition-colors">
                        {CONTENT.hero.cta[lang]}
                    </span>
                    <span className="text-lg group-hover:translate-y-1 transition-transform duration-500">↓</span>
                </a>
            </FadeIn>

        </div>
    </section>
  );
};

export default Hero;
