
import React from 'react';
import { PROJECTS, CONTENT } from '../constants';
import FadeIn from './FadeIn';
import { Language, Project } from '../types';

interface ProjectsProps {
    lang: Language;
    onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ lang, onProjectClick }) => {

  return (
    <section id="projects" className="py-24 md:py-32 bg-cream scroll-mt-28">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
            <div className="mb-20 text-center">
                <span className="text-xs font-sans tracking-[0.25em] text-warmGray uppercase">Portfolio</span>
                <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 text-softBlack">
                    {CONTENT.nav.projects[lang]}
                </h2>
            </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100} className="group cursor-pointer">
              <div 
                onClick={() => onProjectClick(project)}
                className="block"
              >
                <div className="overflow-hidden mb-6 aspect-[3/4] relative">
                  <div className="absolute inset-0 bg-softBlack/0 group-hover:bg-softBlack/10 transition-colors duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title[lang]} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-serif text-2xl text-softBlack mb-2 group-hover:text-warmGray transition-colors">
                      {project.title[lang]}
                  </h3>
                  <p className="text-xs font-sans tracking-widest text-warmGray uppercase">
                      {project.category[lang]}
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

export default Projects;
