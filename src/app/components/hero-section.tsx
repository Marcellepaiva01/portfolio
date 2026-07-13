import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onViewProjects: () => void;
  onContact: () => void;
}

export function HeroSection({ onViewProjects, onContact }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs text-accent">UX/UI & Product Design</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl">
            Marcelle Paiva<br />
            <span className="text-accent text-[36px] p-[5px] mx-[0px] my-[5px]">Design que resolve problemas reais</span>
          </h1>
          
          <p className="text-base md:text-lg max-w-2xl text-muted-foreground">
            Transformo ideias complexas em experiências digitais simples, intuitivas e centradas no usuário.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button 
              onClick={onViewProjects}
              className="group px-6 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
            >
              Ver projetos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onContact}
              className="px-6 py-3 border border-border rounded-lg hover:border-accent transition-colors"
            >
              Entrar em contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}