
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Project, Language } from '../types';
import FadeIn from './FadeIn';

interface ProjectDetailProps {
  project: Project;
  lang: Language;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, lang, onBack }) => {
  
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Back Button */}
        <FadeIn>
            <button 
                onClick={onBack}
                className="group flex items-center gap-3 text-sm font-sans tracking-widest uppercase text-softBlack hover:text-warmGray transition-colors mb-12"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                {lang === 'de' ? 'Zurück' : 'Volver'}
            </button>
        </FadeIn>

        {/* Header */}
        <div className="mb-16 md:mb-24">
            <FadeIn delay={100}>
                <span className="block text-xs font-sans tracking-[0.25em] text-warmGray uppercase mb-4">
                    {project.category[lang]}
                </span>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-softBlack">
                    {project.title[lang]}
                </h1>
            </FadeIn>
        </div>

        {/* Hero Image */}
        <FadeIn delay={200} className="w-full h-[50vh] md:h-[80vh] overflow-hidden mb-16 md:mb-24">
            <img 
                src={project.image} 
                alt={project.title[lang]} 
                className="w-full h-full object-cover"
            />
        </FadeIn>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24">
            {/* Sidebar Details */}
            <div className="md:col-span-4 lg:col-span-3 space-y-8">
                <FadeIn delay={300}>
                    <div>
                        <span className="block text-xs font-sans tracking-widest text-warmGray uppercase mb-2">
                            {lang === 'de' ? 'Standort' : 'Ubicación'}
                        </span>
                        <p className="font-serif text-xl text-softBlack">{project.location}</p>
                    </div>
                </FadeIn>
                <FadeIn delay={400}>
                    <div>
                        <span className="block text-xs font-sans tracking-widest text-warmGray uppercase mb-2">
                            {lang === 'de' ? 'Jahr' : 'Año'}
                        </span>
                        <p className="font-serif text-xl text-softBlack">{project.year}</p>
                    </div>
                </FadeIn>
            </div>

            {/* Description */}
            <div className="md:col-span-8 lg:col-span-7">
                <FadeIn delay={500}>
                    <p className="font-sans font-light text-lg md:text-xl leading-relaxed text-softBlack/90 whitespace-pre-wrap">
                        {project.description[lang]}
                    </p>
                </FadeIn>
            </div>
        </div>

        {/* Gallery */}
        <div className="space-y-12 md:space-y-24">
            {project.gallery.map((img, index) => (
                <FadeIn key={index} delay={200 + (index * 100)}>
                    <div className="w-full overflow-hidden">
                        <img 
                            src={img} 
                            alt={`${project.title[lang]} detail ${index + 1}`} 
                            className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </FadeIn>
            ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
