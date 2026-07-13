import image_076bdc24be14acf81e0b2a97970c220cf7a5877d from 'figma:asset/076bdc24be14acf81e0b2a97970c220cf7a5877d.png';
import { GraduationCap, Briefcase, Target, Users } from 'lucide-react';
import profileImage from 'figma:asset/076bdc24be14acf81e0b2a97970c220cf7a5877d.png';

export function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-accent text-xs tracking-wider uppercase block mb-6 text-left">Sobre</span>
        
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-4">
            {/* Header com foto e nome */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-4 mb-6 lg:mb-0">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-accent/20 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <img 
                    src={image_076bdc24be14acf81e0b2a97970c220cf7a5877d} 
                    alt="Marcelle Paiva" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="mb-2">Marcelle Paiva</h2>
                <h3 className="text-xl text-muted-foreground">Transformando complexidade em clareza</h3>
              </div>
            </div>
            
            <div className="space-y-4 pt-2">
              <p>
                Sou designer de produto com formação em Design Gráfico e pós-graduação em UX/UI Design e Design de Produto. 
                Minha jornada começou no design visual, mas descobri minha verdadeira paixão ao entender como o design pode 
                resolver problemas reais e impactar positivamente a vida das pessoas.
              </p>

              <p>
                Com formação acadêmica sólida e experiência prática, desenvolvo soluções digitais que equilibram estética, 
                usabilidade e objetivos de negócio. Meu olhar analítico e metodológico me permite ir além do visual, 
                criando experiências que realmente fazem sentido para quem usa.
              </p>

              <p>
                Trabalhei com sites institucionais e e-commerce, aplicativos mobile, landing pages, design editorial, 
                dashboards e sistemas complexos. Em cada projeto, priorizo a compreensão profunda do problema, pesquisa 
                com usuários, testes contínuos e decisões baseadas em dados.
              </p>

              <p>
                Acredito que bom design é simples, funcional e intuitivo. Meu processo é centrado no usuário, mas sempre 
                alinhado aos objetivos estratégicos do negócio. Design não é apenas sobre fazer bonito — é sobre criar 
                soluções que funcionam.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3 mt-8 lg:mt-0">
            <div className="p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm">Formação</h4>
                  <p className="text-[11px] md:text-xs text-muted-foreground">
                    Design Gráfico + Pós em UX/UI e Product Design
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Briefcase size={20} className="text-accent" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm">Experiência</h4>
                  <p className="text-[11px] md:text-xs text-muted-foreground">
                    Apps, sites, dashboards, design editorial e muito mais
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Target size={20} className="text-accent" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm">Abordagem</h4>
                  <p className="text-[11px] md:text-xs text-muted-foreground">
                    Pesquisa, dados e soluções centradas no usuário
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Users size={20} className="text-accent" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm">Foco</h4>
                  <p className="text-[11px] md:text-xs text-muted-foreground">
                    Usuário + objetivos de negócio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}