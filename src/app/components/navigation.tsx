import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-base tracking-tight hover:text-accent transition-colors"
          >
            MP Designer
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Processo
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm"
            >
              Contato
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-6 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Processo
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full px-4 py-2 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
