import { useState } from 'react';
import { Navigation } from '@/app/components/navigation';
import { HeroSection } from '@/app/components/hero-section';
import { AboutSection } from '@/app/components/about-section';
import { ProjectsSection } from '@/app/components/projects-section';
import { CaseStudyModal } from '@/app/components/case-study-modal';
import { ProcessSection } from '@/app/components/process-section';
import { ContactSection } from '@/app/components/contact-section';
import { Footer } from '@/app/components/footer';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleProjectClick = (projectId: string) => {
    if (projectId === 'essence-parfum') {
      navigate('/case/essence-parfum');
    } else if (projectId === 'descomplica-ai') {
      navigate('/case/descomplica-ai');
    } else if (projectId === 'organizei') {
      navigate('/case/organizei');
    } else if (projectId === 'dieta-financeira') {
      navigate('/case/dieta-financeira');
    } else if (projectId === 'explorador-emocoes') {
      navigate('/case/explorador-emocoes');
    } else if (projectId === 'sinalizacao-museu') {
      navigate('/case/sinalizacao-museu');
    } else if (projectId === 'embalagem-sacos-lixo') {
      navigate('/case/embalagem-sacos-lixo');
    } else {
      setSelectedProject(projectId);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background with gradient and texture - same as case-organizei */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection 
          onViewProjects={() => scrollToSection('projects')}
          onContact={() => scrollToSection('contact')}
        />
        <AboutSection />
        <ProjectsSection onProjectClick={handleProjectClick} />
        <ProcessSection />
        <ContactSection />
        <Footer />
        
        {/* Generic modal for other projects */}
        <CaseStudyModal 
          projectId={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}