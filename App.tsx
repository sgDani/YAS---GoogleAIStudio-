import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { Language, Project } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('de');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleBackToHome = () => {
    setSelectedProject(null);
  };

  return (
    <div className="antialiased text-softBlack bg-cream">
      {/* 
        Pass handleBackToHome to Navbar only if a project is selected. 
        This tells Navbar that a navigation click should reset the view to Home first.
      */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onNavigate={selectedProject ? handleBackToHome : undefined} 
      />
      
      <main>
        {selectedProject ? (
          <ProjectDetail 
            project={selectedProject} 
            lang={lang} 
            onBack={handleBackToHome} 
          />
        ) : (
          <>
            <Hero lang={lang} />
            <Services lang={lang} />
            <About lang={lang} />
            <Projects lang={lang} onProjectClick={setSelectedProject} />
            <Process lang={lang} />
            <Contact lang={lang} />
          </>
        )}
      </main>
    </div>
  );
};

export default App;