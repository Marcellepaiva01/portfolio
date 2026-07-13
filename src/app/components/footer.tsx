export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-sm mb-1">MP Designer</div>
            <p className="text-xs text-muted-foreground">UX/UI & Product Design</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Projetos
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('process');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Processo
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </button>
          </div>

          <div className="text-xs text-muted-foreground text-center md:text-right">
            © {currentYear} MP Designer
          </div>
        </div>
      </div>
    </footer>
  );
}
