import image_f160e96d5758a30bc8acb5a1ebc0f1d0e8b67f64 from 'figma:asset/f160e96d5758a30bc8acb5a1ebc0f1d0e8b67f64.png';
import image_10694e5070cfa47dbdb4d86c685511d0d9c32183 from 'figma:asset/10694e5070cfa47dbdb4d86c685511d0d9c32183.png';
import image1 from 'figma:asset/f6b678094b1166236689b7c6a65e6744bd09bfad.png';
import image2 from 'figma:asset/10694e5070cfa47dbdb4d86c685511d0d9c32183.png';
import image3 from 'figma:asset/9b1a541af77498f2293c062eec4e8a5c38f71bf6.png';
import image4 from 'figma:asset/8ed8754ee95257de34f1cf3cda879fbfafd4e55b.png';
import image5 from 'figma:asset/570949dc157dbab68928fcf9fae5fcb8e20db164.png';
import image6 from 'figma:asset/b912fa0e682d934f67ecc4f924e1c05e0545246c.png';
import techCapa from 'figma:asset/0786f9f120d3680b54ce6f68b84c09d92a095e06.png';
import techProporcao from 'figma:asset/dd38ca18f257b01c4ea25563a48ceaf4d793cc3f.png';
import techMapa from 'figma:asset/013af85da50dcbbfdcac624d83c91119926619da.png';
import techTotem from 'figma:asset/0f9a45d818067a6579cddbee69c55e63a44f771a.png';
import techPlacas from 'figma:asset/892d56ffd2eb7782444eb729ff87b2040d5d766e.png';
import techChao from 'figma:asset/d1a9931f419f227658ca662da4c69f922ab77a6a.png';
import techSetores from 'figma:asset/9d11cdb047c76316379de180ce94e6126298fd08.png';
import { ArrowLeft, MapPin, Users, Heart, Target, Lightbulb, Layers, Palette, Package, TrendingUp, BookOpen, Navigation, Eye, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import pictogramas from 'figma:asset/31e11b9decd8a40fd3ccfbefd2985695ed411d06.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SignageCaseStudyProps {
  onBack: () => void;
  onContact: () => void;
}

// Componentes customizados para as setas do carrossel
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button 
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-full hover:bg-accent/20 transition-colors"
      style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
    >
      <ChevronLeft className="text-foreground" size={20} />
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button 
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-full hover:bg-accent/20 transition-colors"
      style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
    >
      <ChevronRight className="text-foreground" size={20} />
    </button>
  );
};

export function SignageCaseStudy({ onBack, onContact }: SignageCaseStudyProps) {
  const methodology = [
    'Research',
    'Análise',
    'Mapeamento',
    'Ideação',
    'Prototipação',
    'Testes',
    'Implementação'
  ];

  const personas = [
    {
      title: 'Visitante Casual',
      subtitle: 'Usuário Principal',
      age: 'Todas as idades',
      needs: ['Orientação espacial clara', 'Informações acessíveis', 'Experiência agradável'],
      goals: ['Conhecer o jardim histórico', 'Não se perder no espaço', 'Aprender sobre o local']
    },
    {
      title: 'Estudante/Pesquisador',
      subtitle: 'Usuário Especializado',
      age: 'Jovens e adultos',
      needs: ['Informações históricas detalhadas', 'Dados botânicos', 'Material educativo'],
      goals: ['Pesquisa acadêmica', 'Documentação', 'Conhecimento aprofundado']
    },
    {
      title: 'Turista',
      subtitle: 'Visitante Externo',
      age: 'Adultos',
      needs: ['Mapas e direções', 'Informações em múltiplos idiomas', 'Pontos de interesse'],
      goals: ['Conhecer patrimônio histórico', 'Registrar visita', 'Aproveitar o passeio']
    },
    {
      title: 'Educadores/Gestores',
      subtitle: 'Stakeholders',
      age: 'Profissionais',
      needs: ['Sistema escalável', 'Manutenção simples', 'Valor educativo'],
      goals: ['Facilitar visitas guiadas', 'Preservar patrimônio', 'Educar visitantes']
    }
  ];

  const signageTypes = [
    {
      type: 'Orientativa',
      description: 'Placas direcionais e mapas para navegação no espaço',
      icon: Navigation
    },
    {
      type: 'Informativa',
      description: 'Dados históricos, botânicos e contextuais sobre o jardim',
      icon: BookOpen
    },
    {
      type: 'Educativa',
      description: 'Conteúdo interpretativo sobre flora, fauna e história',
      icon: Lightbulb
    },
    {
      type: 'Reguladora',
      description: 'Orientações de comportamento e preservação',
      icon: Shield
    }
  ];

  const learnings = [
    {
      icon: Layers,
      title: 'UX além do digital',
      description: 'Aplicar princípios de experiência do usuário em ambientes físicos exige compreensão profunda de wayfinding e percepção espacial.'
    },
    {
      icon: Eye,
      title: 'Design para espaços públicos',
      description: 'Projetar para patrimônio histórico demanda equilíbrio entre inovação, respeito ao contexto e acessibilidade universal.'
    },
    {
      icon: Users,
      title: 'Acessibilidade ambiental',
      description: 'Considerar diversidade de públicos, níveis de escolaridade, idiomas e necessidades especiais foi fundamental.'
    },
    {
      icon: Target,
      title: 'Trabalho colaborativo',
      description: 'Projeto desenvolvido em parceria, com gestão multidisciplinar envolvendo design, arquitetura, história e educação.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Voltar aos projetos</span>
            <span className="sm:hidden">Voltar</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-accent text-xs tracking-wider uppercase">Case Study</span>
              <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs tracking-wider uppercase">
                Projeto em Parceria
              </span>
            </div>
            <h1 className="mt-4 mb-4 sm:mb-6 text-3xl sm:text-5xl md:text-6xl">Sinalização Ambiental — Jardim Histórico do Museu da República</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 sm:mb-6">
              UX/UI & Product Design aplicado a espaços culturais
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Projeto de sinalização ambiental desenvolvido em parceria para melhorar a experiência de visitação, 
              orientação e educação ambiental em um patrimônio histórico do Rio de Janeiro.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="relative rounded-lg overflow-hidden">
            <style>{`
              .signage-carousel .slick-prev,
              .signage-carousel .slick-next {
                width: 40px;
                height: 40px;
                z-index: 10;
              }
              .signage-carousel .slick-prev {
                left: 20px;
              }
              .signage-carousel .slick-next {
                right: 20px;
              }
              .signage-carousel .slick-prev:before,
              .signage-carousel .slick-next:before {
                display: none;
              }
              .signage-carousel .slick-dots {
                bottom: 20px;
              }
              .signage-carousel .slick-dots li button:before {
                color: white;
                opacity: 0.5;
                font-size: 10px;
              }
              .signage-carousel .slick-dots li.slick-active button:before {
                opacity: 1;
                color: white;
              }
            `}</style>
            
            <Slider
              className="signage-carousel"
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={true}
              prevArrow={<CustomPrevArrow />}
              nextArrow={<CustomNextArrow />}
            >
              <div>
                <div className="aspect-video bg-secondary">
                  <img 
                    src={image1} 
                    alt="Sistema de sinalização - Imagem 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-video bg-secondary">
                  <img 
                    src={image2} 
                    alt="Sistema de sinalização - Imagem 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-video bg-secondary">
                  <img 
                    src={image3} 
                    alt="Sistema de sinalização - Imagem 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-video bg-secondary">
                  <img 
                    src={image4} 
                    alt="Sistema de sinalização - Imagem 4" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-video bg-secondary">
                  <img 
                    src={image5} 
                    alt="Sistema de sinalização - Imagem 5" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-video bg-secondary">
                  <img 
                    src={image6} 
                    alt="Sistema de sinalização - Imagem 6" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Contexto do Projeto */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-accent text-xs tracking-wider uppercase">Contexto</span>
            <h2 className="mt-4 mb-6">Contexto do Projeto</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                O <strong className="text-foreground">Jardim Histórico do Museu da República</strong>, localizado no Rio de Janeiro, 
                é um patrimônio cultural de grande relevância histórica, botânica e arquitetônica. 
                Antigo jardim do Palácio do Catete, recebe milhares de visitantes anualmente.
              </p>
              <p>
                Com um <strong className="text-foreground">fluxo intenso e diversificado</strong> de público — turistas, 
                estudantes, pesquisadores, famílias e idosos —, o espaço demandava um sistema de sinalização 
                integrado que facilitasse a navegação, valorizasse o patrimônio e promovesse educação ambiental.
              </p>
              <p>
                O projeto foi desenvolvido em <strong className="text-foreground">parceria multidisciplinar</strong>, 
                com minha atuação focada em <strong className="text-foreground">UX/UI Design, pesquisa de usuário, 
                prototipagem e modelagem 3D de todas as placas</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Problema */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-xs tracking-wider uppercase">Problem Statement</span>
              <h2 className="mt-4 mb-6">O Problema</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  O jardim <strong className="text-foreground">não possuía um sistema de sinalização integrado</strong>, 
                  resultando em visitantes perdidos, desorientados e incapazes de compreender plenamente o valor 
                  histórico e ambiental do espaço.
                </p>
                <p>
                  A <strong className="text-foreground">falta de orientação espacial clara</strong> prejudicava 
                  a experiência de visitação, gerando frustração e impactando negativamente a percepção do museu 
                  como instituição cultural educativa.
                </p>
                <p>
                  Além disso, havia <strong className="text-foreground">pouca conexão emocional e informativa</strong> entre 
                  o visitante, a história do local e o meio ambiente, desperdiçando o potencial educativo do jardim.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
              <ImageWithFallback
                src={image_f160e96d5758a30bc8acb5a1ebc0f1d0e8b67f64}
                alt="Desafio de orientação em jardim histórico"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Desafio de UX */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-xs tracking-wider uppercase">UX Challenge</span>
            <h2 className="mt-4 mb-6">O Desafio de UX</h2>
            <p className="text-xl text-muted-foreground">
              Como criar um sistema de sinalização que <span className="text-accent">respeite o patrimônio histórico</span>, 
              seja acessível para públicos diversos e melhore significativamente a experiência do usuário 
              em um espaço aberto e cultural?
            </p>
          </div>
        </div>
      </section>

      {/* Objetivos do Produto */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Objetivos</span>
            <h2 className="mt-4 mb-3">Objetivos do Produto</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-background border border-border rounded-lg">
              <Navigation className="text-accent mb-4" size={24} />
              <h3 className="text-lg mb-2">Facilitar navegação</h3>
              <p className="text-sm text-muted-foreground">
                Criar sistema claro de wayfinding para orientação espacial eficiente no jardim.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <Heart className="text-accent mb-4" size={24} />
              <h3 className="text-lg mb-2">Melhorar experiência</h3>
              <p className="text-sm text-muted-foreground">
                Transformar a visita em experiência fluida, agradável e memorável.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <BookOpen className="text-accent mb-4" size={24} />
              <h3 className="text-lg mb-2">Educação ambiental</h3>
              <p className="text-sm text-muted-foreground">
                Promover aprendizado sobre história, botânica e preservação ambiental.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <Eye className="text-accent mb-4" size={24} />
              <h3 className="text-lg mb-2">Legibilidade universal</h3>
              <p className="text-sm text-muted-foreground">
                Garantir leitura fácil para todos os públicos, incluindo acessibilidade.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <Palette className="text-accent mb-4" size={24} />
              <h3 className="text-lg mb-2">Sistema visual integrado</h3>
              <p className="text-sm text-muted-foreground">
                Criar identidade coesa que respeite e valorize o contexto histórico.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <Shield className="text-accent mb-4" size={24} />
              <h3 className="text-lg mb-2">Preservação do patrimônio</h3>
              <p className="text-sm text-muted-foreground">
                Soluções não-invasivas que protejam a integridade do espaço.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-accent text-xs tracking-wider uppercase">Processo</span>
            <h2 className="mt-4 mb-3">Metodologia de Design</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Processo adaptado de Design Thinking e Environmental Graphic Design
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
              {methodology.map((step, index) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="w-full px-4 py-4 bg-card border border-border rounded-lg text-center hover:border-accent/50 transition-colors">
                    <div className="text-xs text-accent font-semibold mb-1">0{index + 1}</div>
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pesquisa & Diagnóstico */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Research</span>
            <h2 className="mt-4 mb-3">Pesquisa & Diagnóstico</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 border border-border rounded-lg">
                <MapPin className="text-accent mb-3" size={24} />
                <h3 className="text-lg mb-2">Observação em campo</h3>
                <p className="text-sm text-muted-foreground">
                  Análise comportamental de visitantes: pontos de confusão, perguntas frequentes, 
                  padrões de circulação e momentos de dúvida.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <Users className="text-accent mb-3" size={24} />
                <h3 className="text-lg mb-2">Análise de comportamento</h3>
                <p className="text-sm text-muted-foreground">
                  Mapeamento de fluxos de movimentação, tempo de permanência, áreas de maior interesse 
                  e pontos críticos de decisão.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 border border-border rounded-lg">
                <BookOpen className="text-accent mb-3" size={24} />
                <h3 className="text-lg mb-2">Levantamento informacional</h3>
                <p className="text-sm text-muted-foreground">
                  Identificação de necessidades de conteúdo: histórico, botânico, orientativo e educativo.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-background">
                <h3 className="text-lg mb-3 text-accent">Principais Insights</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Visitantes perdiam tempo procurando pontos de interesse</li>
                  <li>• Falta de informação gerava desconexão com a história do local</li>
                  <li>• Público diverso demandava linguagem acessível e múltiplos formatos</li>
                  <li>• Oportunidade de transformar visita em experiência educativa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">User Research</span>
            <h2 className="mt-4 mb-3">Personas</h2>
            <p className="text-muted-foreground max-w-2xl">
              Identificação dos principais perfis de visitantes e stakeholders
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personas.map((persona) => (
              <div key={persona.title} className="p-6 bg-card border border-border rounded-lg">
                <div className="mb-4">
                  <h3 className="text-lg mb-1">{persona.title}</h3>
                  <p className="text-xs text-accent uppercase tracking-wider">{persona.subtitle}</p>
                  <p className="text-sm text-muted-foreground mt-2">{persona.age}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Necessidades</h4>
                  <ul className="space-y-1">
                    {persona.needs.map((need) => (
                      <li key={need} className="text-xs text-muted-foreground">• {need}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Objetivos</h4>
                  <ul className="space-y-1">
                    {persona.goals.map((goal) => (
                      <li key={goal} className="text-xs text-muted-foreground">• {goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jornada do Usuário */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">User Journey</span>
            <h2 className="mt-4 mb-3">Jornada do Usuário no Espaço</h2>
            <p className="text-muted-foreground max-w-2xl">
              Mapeamento dos momentos-chave da experiência de visitação
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-accent font-bold">1</span>
              </div>
              <h3 className="text-lg mb-2">Entrada</h3>
              <p className="text-sm text-muted-foreground">
                Primeiro contato com o jardim. Necessidade de orientação geral e mapa do espaço.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-accent font-bold">2</span>
              </div>
              <h3 className="text-lg mb-2">Exploração</h3>
              <p className="text-sm text-muted-foreground">
                Navegação pelo espaço. Pontos de decisão exigem sinalização direcional clara.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-accent font-bold">3</span>
              </div>
              <h3 className="text-lg mb-2">Descoberta</h3>
              <p className="text-sm text-muted-foreground">
                Interação com placas informativas e educativas. Momento de aprendizado.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-accent font-bold">4</span>
              </div>
              <h3 className="text-lg mb-2">Saída</h3>
              <p className="text-sm text-muted-foreground">
                Conclusão da visita com compreensão completa e experiência memorável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Arquitetura da Informação Ambiental */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Information Architecture</span>
            <h2 className="mt-4 mb-3">Arquitetura da Informação Ambiental</h2>
            <p className="text-muted-foreground max-w-2xl">
              Organização estratégica das informações no espaço físico
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {signageTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.type} className="p-6 bg-card border border-border rounded-lg">
                  <Icon className="text-accent mb-4" size={24} />
                  <h3 className="text-lg mb-2">Sinalização {type.type}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 p-6 bg-card border border-accent/30 rounded-lg">
            <h3 className="text-lg mb-3 text-accent">Hierarquia Visual no Espaço</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A informação foi organizada em camadas de prioridade, aplicando princípios de UX 
              ao ambiente físico:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">Nível 1 (Crítico):</strong> Orientação e segurança</li>
              <li>• <strong className="text-foreground">Nível 2 (Importante):</strong> Pontos de interesse e direções</li>
              <li>• <strong className="text-foreground">Nível 3 (Complementar):</strong> Informações educativas e históricas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* UI Design & Sistema Visual */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Visual Design</span>
            <h2 className="mt-4 mb-3">UI Design & Sistema Visual</h2>
            <p className="text-muted-foreground max-w-2xl">
              Identidade visual integrada ao contexto histórico e natural do jardim
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Tipografia */}
            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="text-lg mb-3">Tipografia</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Família tipográfica <strong className="text-foreground">Helvetica</strong>, escolhida pela sua 
                excelente legibilidade, neutralidade e clareza em diferentes distâncias e condições de iluminação natural.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-border rounded">
                  <div className="text-xs text-muted-foreground mb-2">Helvetica Regular</div>
                  <div className="text-3xl" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 400 }}>
                    Aa Bb Cc Dd Ee
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Usado para textos corridos, legendas e informações complementares
                  </p>
                </div>
                <div className="p-4 border border-border rounded">
                  <div className="text-xs text-muted-foreground mb-2">Helvetica Bold</div>
                  <div className="text-3xl" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700 }}>
                    Aa Bb Cc Dd Ee
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Usado para títulos, destaques e hierarquia de informações
                  </p>
                </div>
              </div>
            </div>

            {/* Paleta Cromática com imagem */}
            <div className="p-6 bg-background border border-border rounded-lg">
              <Palette className="text-accent mb-4" size={24} />
              <h3 className="text-lg mb-3">Paleta Cromática</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sistema de cores vibrante e acessível, desenvolvido para facilitar a categorização de informações, 
                criar hierarquia visual e garantir legibilidade em ambiente externo.
              </p>
              
              {/* Cores detalhadas */}
              <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
                <div className="space-y-2">
                  <div className="w-full h-20 rounded bg-[#6C3704] border border-border"></div>
                  <div className="text-xs">
                    <div className="font-mono text-accent">#6C3704</div>
                    <div className="text-muted-foreground">Marrom</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-20 rounded bg-[#ADE523] border border-border"></div>
                  <div className="text-xs">
                    <div className="font-mono text-accent">#ADE523</div>
                    <div className="text-muted-foreground">Verde</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-20 rounded bg-[#479CFD] border border-border"></div>
                  <div className="text-xs">
                    <div className="font-mono text-accent">#479CFD</div>
                    <div className="text-muted-foreground">Azul</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-20 rounded bg-[#FF3036] border border-border"></div>
                  <div className="text-xs">
                    <div className="font-mono text-accent">#FF3036</div>
                    <div className="text-muted-foreground">Vermelho</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-20 rounded bg-[#F6E224] border border-border"></div>
                  <div className="text-xs">
                    <div className="font-mono text-accent">#F6E224</div>
                    <div className="text-muted-foreground">Amarelo</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-20 rounded bg-[#F68224] border border-border"></div>
                  <div className="text-xs">
                    <div className="font-mono text-accent">#F68224</div>
                    <div className="text-muted-foreground">Laranja</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-20 rounded bg-[#F0F0F0] border border-border"></div>
                  <div className="text-xs">
                    <div className="font-mono text-accent">#F0F0F0</div>
                    <div className="text-muted-foreground">Cinza</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outros elementos do sistema visual */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg mb-3">Iconografia</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sistema de pictogramas universais e intuitivos para wayfinding e orientação espacial.
                </p>
                <div className="flex gap-3 text-accent">
                  <Navigation size={28} />
                  <MapPin size={28} />
                  <BookOpen size={28} />
                  <Eye size={28} />
                </div>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg mb-3">Materiais</h3>
                <p className="text-sm text-muted-foreground">
                  Seleção de materiais duráveis, resistentes às intempéries e de baixo impacto ambiental: 
                  alumínio, ACM e madeira de reflorestamento.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg mb-3">Acabamentos</h3>
                <p className="text-sm text-muted-foreground">
                  Tratamento anti-reflexo para leitura em diferentes condições de luz e proteção UV 
                  para garantir durabilidade das cores.
                </p>
              </div>
            </div>

            {/* Sistema de Pictogramas */}
            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="text-lg mb-4">Sistema de Pictogramas</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Conjunto de 18 ícones desenvolvidos especificamente para o jardim histórico, garantindo 
                comunicação visual universal, legibilidade à distância e acessibilidade para todos os públicos.
              </p>
              
              {/* Imagem dos pictogramas */}
              <div className="mb-6 rounded-lg overflow-hidden border border-border bg-white p-8">
                <img 
                  src={pictogramas} 
                  alt="Sistema de pictogramas do projeto" 
                  className="w-full h-auto"
                />
              </div>

              {/* Legenda dos pictogramas */}
              <div className="grid md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Não Alimente os Animais</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Chafariz dos Leões</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Viveiro</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Coreto</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Sanitário Feminino</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Sanitário Masculino</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Não Pise na Grama</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Estacionamento</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Usina Elétrica</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Guarita / Entrada</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Parquinho Infantil</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Bebedouro</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Galeria</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Espaço de Educação</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Cinema</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Gruta</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Bistrô</span>
                </div>
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-muted-foreground">• Chafariz Nascimento de Vênus</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                <strong className="text-foreground">Princípios de design:</strong> Clareza visual, contraste, 
                simplicidade geométrica e reconhecimento imediato a 5-10 metros de distância.
              </p>
            </div>

            {/* Padronização */}
            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="text-lg mb-3">Sistema Modular e Escalável</h3>
              <p className="text-sm text-muted-foreground">
                O sistema de sinalização foi desenvolvido de forma modular, permitindo a adição de novas placas 
                mantendo consistência visual e funcional. Todas as peças seguem grid estrutural padronizado, 
                facilitando manutenção e expansão futura do projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prototipação & Solução Final */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Solution</span>
            <h2 className="mt-4 mb-3">Prototipação & Solução Final</h2>
            <p className="text-muted-foreground max-w-2xl">
              Minha atuação focada em UX/UI Design, pesquisa de usuário e modelagem 3D de todas as placas
            </p>
          </div>

          <div className="space-y-8">
            {/* Minha contribuição */}
            <div className="p-8 bg-accent/5 border border-accent/30 rounded-lg">
              <h3 className="text-xl mb-4 text-accent">Minha Contribuição no Projeto</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg mb-3">UX Research & Design</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pesquisa e análise comportamental de usuários</li>
                    <li>• Desenvolvimento de personas e jornadas</li>
                    <li>• Arquitetura da informação ambiental</li>
                    <li>• Testes de usabilidade e legibilidade</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg mb-3">UI Design & Prototipagem</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Design de interface visual de todas as placas</li>
                    <li>• Modelagem 3D completa das peças de sinalização</li>
                    <li>• Prototipagem e especificações técnicas</li>
                    <li>• Sistema de design escalável e documentação</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Componentes desenvolvidos */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg">
                <Package className="text-accent mb-3" size={24} />
                <h3 className="text-lg mb-2">Totens Informativos</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Estruturas verticais com mapas do jardim, informações históricas e direcionamentos principais.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Altura: 1,80m</li>
                  <li>• Material: ACM + alumínio</li>
                  <li>• Acessibilidade universal</li>
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <Package className="text-accent mb-3" size={24} />
                <h3 className="text-lg mb-2">Placas Direcionais</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sinalização de wayfinding posicionada em pontos estratégicos de decisão.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Altura: 1,40m</li>
                  <li>• Pictogramas + texto</li>
                  <li>• Visibilidade 360°</li>
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <Package className="text-accent mb-3" size={24} />
                <h3 className="text-lg mb-2">Placas Educativas</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Painéis interpretativos sobre flora, fauna e história do jardim.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Formato: A3 paisagem</li>
                  <li>• Conteúdo didático ilustrado</li>
                  <li>• QR codes para conteúdo extra</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detalhamento Técnico - Carrossel */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Technical Details</span>
            <h2 className="mt-4 mb-3">Detalhamento Técnico das Placas</h2>
            <p className="text-muted-foreground max-w-2xl">
              Especificações técnicas completas: dimensões, proporções, materiais e estruturas de cada tipo de sinalização
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <style>{`
              .tech-carousel .slick-prev,
              .tech-carousel .slick-next {
                width: 40px;
                height: 40px;
                z-index: 10;
              }
              .tech-carousel .slick-prev {
                left: 20px;
              }
              .tech-carousel .slick-next {
                right: 20px;
              }
              .tech-carousel .slick-prev:before,
              .tech-carousel .slick-next:before {
                display: none;
              }
              .tech-carousel .slick-dots {
                bottom: 20px;
              }
              .tech-carousel .slick-dots li button:before {
                color: #999;
                opacity: 0.5;
                font-size: 10px;
              }
              .tech-carousel .slick-dots li.slick-active button:before {
                opacity: 1;
                color: #999;
              }
            `}</style>
            
            <Slider
              className="tech-carousel"
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={true}
              prevArrow={<CustomPrevArrow />}
              nextArrow={<CustomNextArrow />}
            >
              <div>
                <div className="aspect-video bg-white rounded-lg overflow-hidden">
                  <img 
                    src={techCapa} 
                    alt="Detalhamento Técnico - Capa" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-video bg-white rounded-lg overflow-hidden">
                  <img 
                    src={techProporcao} 
                    alt="Detalhamento Técnico - Proporções" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-video bg-white rounded-lg overflow-hidden">
                  <img 
                    src={techMapa} 
                    alt="Detalhamento Técnico - Mapa do Local" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-video bg-white rounded-lg overflow-hidden">
                  <img 
                    src={techTotem} 
                    alt="Detalhamento Técnico - Totem e Sinalização Lateral" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-video bg-white rounded-lg overflow-hidden">
                  <img 
                    src={techPlacas} 
                    alt="Detalhamento Técnico - Placas de Escultura e Sinalização Suspensa" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-video bg-white rounded-lg overflow-hidden">
                  <img 
                    src={techChao} 
                    alt="Detalhamento Técnico - Sinalização de Chão e Móvel" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-video bg-white rounded-lg overflow-hidden">
                  <img 
                    src={techSetores} 
                    alt="Detalhamento Técnico - Totem de Setores" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </Slider>
          </div>

          {/* Informações técnicas complementares */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="text-lg mb-3 text-accent">Modelagem 3D</h3>
              <p className="text-sm text-muted-foreground">
                Todas as placas foram modeladas em 3D para validação estrutural, estudo de proporções 
                e visualização realista antes da produção.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="text-lg mb-3 text-accent">Especificações Técnicas</h3>
              <p className="text-sm text-muted-foreground">
                Documentação completa com medidas exatas, materiais, acabamentos, fixações 
                e orientações de instalação para cada tipo de placa.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="text-lg mb-3 text-accent">Produção e Montagem</h3>
              <p className="text-sm text-muted-foreground">
                Sistema projetado para facilitar a fabricação, transporte, instalação e manutenção 
                futura das peças de sinalização.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados & Impacto */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Impact</span>
            <h2 className="mt-4 mb-3">Resultados & Impacto</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-background border border-accent/50 rounded-lg">
              <Navigation className="text-accent mb-3" size={24} />
              <h3 className="text-lg mb-2">Melhoria na orientação</h3>
              <p className="text-sm text-muted-foreground">
                Visitantes agora navegam com autonomia e confiança, reduzindo tempo de procura 
                e aumentando a satisfação com a visita.
              </p>
            </div>

            <div className="p-6 bg-background border border-accent/50 rounded-lg">
              <BookOpen className="text-accent mb-3" size={24} />
              <h3 className="text-lg mb-2">Educação ambiental e histórica</h3>
              <p className="text-sm text-muted-foreground">
                O sistema promove consciência sobre preservação e contextualiza a relevância 
                histórica do espaço, ampliando o valor educativo.
              </p>
            </div>

            <div className="p-6 bg-background border border-accent/50 rounded-lg">
              <Heart className="text-accent mb-3" size={24} />
              <h3 className="text-lg mb-2">Valorização do espaço público</h3>
              <p className="text-sm text-muted-foreground">
                A sinalização profissional eleva a percepção de cuidado institucional e 
                fortalece a identidade do museu.
              </p>
            </div>

            <div className="p-6 bg-background border border-accent/50 rounded-lg">
              <TrendingUp className="text-accent mb-3" size={24} />
              <h3 className="text-lg mb-2">Impacto social e cultural</h3>
              <p className="text-sm text-muted-foreground">
                Democratização do acesso à cultura e história, tornando o patrimônio mais 
                inclusivo e compreensível para todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aprendizados */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Reflections</span>
            <h2 className="mt-4 mb-3">Aprendizados como UX/UI & Product Designer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {learnings.map((learning) => {
              const Icon = learning.icon;
              return (
                <div key={learning.title} className="p-6 bg-card border border-border rounded-lg">
                  <Icon className="text-accent mb-3" size={24} />
                  <h3 className="text-lg mb-2">{learning.title}</h3>
                  <p className="text-sm text-muted-foreground">{learning.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Encerramento */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Este projeto demonstra como o UX Design pode transformar a relação entre pessoas, espaços e cultura.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Aplicar princípios de experiência do usuário a um patrimônio histórico comprova que 
              design centrado no ser humano transcende plataformas digitais — ele pode enriquecer 
              nossa conexão com lugares, memórias e conhecimento.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={onBack}
                className="px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:border-accent/50 transition-colors"
              >
                Ver outros projetos
              </button>
              <button 
                onClick={onContact}
                className="px-6 py-3 bg-accent text-foreground rounded-lg hover:bg-accent/50 transition-colors"
              >
                Entrar em contato
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}