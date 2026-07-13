import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import imgOrganizeiCover from 'figma:asset/a87cdf34db2c3056b771a46ab92376cf40af8114.png';
import imgDietaFinanceiraCover from 'figma:asset/73843acdb27d2912eacb5c64fec5cd078c28b224.png';
import imgExplorerCover from 'figma:asset/e57011a6f2ccc482ffc34151d97e1276a66f1434.png';
import imgAVLCover from 'figma:asset/abff0f006a4ceec8a21e14765bfe7da5fa3ca892.png';
import imgEmbalagemCover from 'figma:asset/1ea050c547594933567793181e676175d207d65f.png';
import imgEssenceCover from 'figma:asset/essence-parfum-mockup.png';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  imageClassName?: string;
}

const projects: Project[] = [
  {
    id: 'essence-parfum',
    title: 'Essence Parfum',
    subtitle: 'Curadoria de Perfumes · IA + Full Stack',
    description: 'Do briefing ao deploy: Claude, Figma Make, Cursor, Supabase e Vercel',
    tags: ['Inteligência Artificial', 'UX/UI Design', 'Design System', 'Supabase', 'Vercel', 'Product Design'],
    image: imgEssenceCover,
    imageClassName: 'object-cover object-top'
  },
  {
    id: 'organizei',
    title: 'Organizei',
    subtitle: 'Aplicativo + Site',
    description: 'Organização financeira para profissionais autônomos',
    tags: ['UX Research', 'UI Design', 'Product Design', 'Inteligência Artificial', 'Programação', 'Email Marketing', 'UX Writing', 'Prototipagem'],
    image: imgOrganizeiCover
  },
  {
    id: 'avl-suprimentos',
    title: 'AVL Suprimentos',
    subtitle: 'E-commerce',
    description: 'E-commerce completo com identidade visual, integração e marketing digital',
    tags: ['Identidade Visual', 'E-commerce', 'Marketing Digital', 'Nuvem Shop', 'Google Ads', 'Meta Business'],
    image: imgAVLCover
  },
  {
    id: 'dieta-financeira',
    title: 'Dieta Financeira',
    subtitle: 'Landing Page + Design Editorial',
    description: 'Educação financeira acessível através de design editorial',
    tags: ['Design Editorial', 'InDesign', 'Landing Page', 'Instagram', 'Hotmart', 'Web Design'],
    image: imgDietaFinanceiraCover
  },
  {
    id: 'sinalizacao-museu',
    title: 'Sinalização Ambiental — Museu da República',
    subtitle: 'Projeto em Parceria',
    description: 'Sistema de sinalização para jardim histórico cultural',
    tags: ['UX Research', 'UI Design', 'Wayfinding', 'Arquitetura da Informação', 'Modelagem 3D', 'Design Ambiental'],
    image: 'https://images.unsplash.com/photo-1717686961272-2a83500028b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBoaXN0b3JpYyUyMHBhcmt8ZW58MXx8fHwxNzY5NzU2MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'embalagem-sacos-lixo',
    title: 'Design de Embalagem — Sacos de Lixo',
    subtitle: 'Product Design + Embalagem',
    description: 'Design de embalagem orientado à decisão de compra no varejo e e-commerce',
    tags: ['Product Design', 'Design de Embalagem', 'Estratégia de Vendas', 'Varejo', 'E-commerce', 'Shopee'],
    image: imgEmbalagemCover
  },
  {
    id: 'explorador-emocoes',
    title: 'Explorador de Emoções',
    subtitle: 'Jogo Terapêutico Infantil',
    description: 'UX/UI & Product Design de um jogo para expressão emocional infantil',
    tags: ['UX Research', 'UI Design', 'Product Design', 'Design Emocional', 'Psicologia das Cores', 'Prototipagem Física'],
    image: imgExplorerCover
  }
];

interface ProjectsSectionProps {
  onProjectClick: (projectId: string) => void;
}

export function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-accent text-xs tracking-wider uppercase">Projetos</span>
          <h2 className="mt-2 mb-3">Cases de sucesso</h2>
          <p className="text-muted-foreground max-w-2xl">
            Soluções digitais centradas no usuário e nos objetivos de negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="group cursor-pointer bg-card rounded-lg border border-border hover:border-accent/50 transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${project.imageClassName ?? 'object-cover'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg">{project.title}</h3>
                    <ArrowUpRight 
                      size={16} 
                      className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                </div>
                
                <p className="text-sm text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary border border-border rounded text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}