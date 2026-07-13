import { Mail, Linkedin, Phone, ArrowRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="space-y-3">
            <span className="text-accent text-xs tracking-wider uppercase">Contato</span>
            <h2>Vamos criar algo incrível juntos?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Estou sempre aberta a novos projetos e oportunidades. Se você tem um desafio de design, ficarei feliz em ajudar.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <a
              href="mailto:marcellepaiva01@gmail.com"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-all"
            >
              <Mail size={16} />
              <span>Enviar e-mail</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-8">
            <a
              href="mailto:marcellepaiva01@gmail.com"
              className="group p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-all text-center"
            >
              <div className="mb-3 inline-flex p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Mail size={18} className="text-accent" />
              </div>
              <h4 className="text-sm mb-1">E-mail</h4>
              <p className="text-xs text-muted-foreground">marcellepaiva01@gmail.com</p>
            </a>

            <a
              href="tel:+5521998963621"
              className="group p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-all text-center"
            >
              <div className="mb-3 inline-flex p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Phone size={18} className="text-accent" />
              </div>
              <h4 className="text-sm mb-1">Telefone</h4>
              <p className="text-xs text-muted-foreground">(21) 998963621</p>
            </a>

            <a
              href="https://www.linkedin.com/in/marcelle-paiva-a542078a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-all text-center"
            >
              <div className="mb-3 inline-flex p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Linkedin size={18} className="text-accent" />
              </div>
              <h4 className="text-sm mb-1">LinkedIn</h4>
              <p className="text-xs text-muted-foreground">Marcelle Paiva</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}