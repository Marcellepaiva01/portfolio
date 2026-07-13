import image_bb8025b5d5398b3b03e98992f6ed46a718259459 from 'figma:asset/bb8025b5d5398b3b03e98992f6ed46a718259459.png';
import image_928e1f3da39cbca89df7158a828f25f9f5adc4f6 from 'figma:asset/928e1f3da39cbca89df7158a828f25f9f5adc4f6.png';
import image_e57011a6f2ccc482ffc34151d97e1276a66f1434 from 'figma:asset/e57011a6f2ccc482ffc34151d97e1276a66f1434.png';
import image_b263136eebed1bd0fc6cc5701e3a62b5e233a3e5 from 'figma:asset/b263136eebed1bd0fc6cc5701e3a62b5e233a3e5.png';
import image_1192c6e45067ebb0af94ec8e74e39c48b0363a65 from 'figma:asset/1192c6e45067ebb0af94ec8e74e39c48b0363a65.png';
import image_b6f1e61c6bfb74e96a1f3e26a151cf803c762405 from 'figma:asset/b6f1e61c6bfb74e96a1f3e26a151cf803c762405.png';
import image_1a16f4cc9ab33e969ee7bcc57aeeade42aa4e15d from 'figma:asset/1a16f4cc9ab33e969ee7bcc57aeeade42aa4e15d.png';
import image_6f99c82af1e7a59f7be22e6efe0e2e91adbb5d9c from 'figma:asset/6f99c82af1e7a59f7be22e6efe0e2e91adbb5d9c.png';
import { ArrowLeft, ArrowRight, Users, Heart, Target, Lightbulb, Layers, Palette, Package, TrendingUp, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';

interface ExplorerCaseStudyProps {
  onBack: () => void;
  onContact: () => void;
}

export function ExplorerCaseStudy({ onBack, onContact }: ExplorerCaseStudyProps) {
  const methodology = [
    'Research',
    'Define',
    'Ideate',
    'Prototype',
    'Test',
    'Iterate',
    'Deliver'
  ];

  const personas = [
    {
      title: 'Criança',
      subtitle: 'Usuário Principal',
      age: '5-12 anos',
      needs: ['Expressar emoções de forma lúdica', 'Sentir-se segura ao compartilhar', 'Entender seus próprios sentimentos'],
      goals: ['Brincar e aprender', 'Ser ouvida e compreendida', 'Desenvolver inteligência emocional']
    },
    {
      title: 'Psicóloga Infantil',
      subtitle: 'Usuário Mediador',
      age: 'Profissional',
      needs: ['Ferramenta eficaz para sessões', 'Facilitar diálogo sobre emoções', 'Gerar insights sobre pacientes'],
      goals: ['Ajudar crianças no desenvolvimento', 'Tornar sessões mais produtivas', 'Criar vínculo terapêutico']
    },
    {
      title: 'Pais & Educadores',
      subtitle: 'Stakeholders',
      age: 'Adultos',
      needs: ['Compreender emoções da criança', 'Apoiar desenvolvimento emocional', 'Ferramenta complementar'],
      goals: ['Criança emocionalmente saudável', 'Melhor comunicação familiar', 'Educação socioemocional']
    }
  ];

  const colors = [
    { color: 'Amarelo', meaning: 'Alegria, otimismo, energia', hex: '#FFD700' },
    { color: 'Azul', meaning: 'Calma, segurança, tristeza', hex: '#4A90E2' },
    { color: 'Vermelho', meaning: 'Raiva, paixão, intensidade', hex: '#E74C3C' },
    { color: 'Verde', meaning: 'Esperança, equilíbrio, crescimento', hex: '#2ECC71' },
    { color: 'Roxo', meaning: 'Medo, mistério, introspecção', hex: '#9B59B6' },
    { color: 'Laranja', meaning: 'Entusiasmo, criatividade, surpresa', hex: '#F39C12' }
  ];

  const learnings = [
    {
      icon: Layers,
      title: 'UX além do digital',
      description: 'Aplicar princípios de experiência do usuário em produtos físicos requer adaptação de métodos e foco na interação tátil.'
    },
    {
      icon: Heart,
      title: 'Design emocional',
      description: 'Trabalhar com emoções como conteúdo exige sensibilidade, pesquisa profunda e validação com especialistas.'
    },
    {
      icon: Users,
      title: 'Acessibilidade cognitiva',
      description: 'Projetar para crianças de diferentes idades demanda simplicidade, clareza visual e linguagem apropriada.'
    },
    {
      icon: Target,
      title: 'Produto centrado no usuário infantil',
      description: 'Considerar limitações cognitivas, necessidades emocionais e contexto terapêutico foi essencial para o sucesso.'
    }
  ];

  const carouselImages = [
    { src: image_b263136eebed1bd0fc6cc5701e3a62b5e233a3e5, alt: 'Explorador de Emoções - Visão completa' },
    { src: image_1192c6e45067ebb0af94ec8e74e39c48b0363a65, alt: 'Explorador de Emoções - Tabuleiro' },
    { src: image_b6f1e61c6bfb74e96a1f3e26a151cf803c762405, alt: 'Explorador de Emoções - Cartas' },
    { src: image_928e1f3da39cbca89df7158a828f25f9f5adc4f6, alt: 'Explorador de Emoções - Dois Baralhos' },
    { src: image_1a16f4cc9ab33e969ee7bcc57aeeade42aa4e15d, alt: 'Explorador de Emoções - Embalagem' }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    adaptiveHeight: false
  };

  const [currentSlide, setCurrentSlide] = useState(0);

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
            <span className="text-accent text-xs tracking-wider uppercase">Case Study</span>
            <h1 className="mt-4 mb-4 sm:mb-6 text-3xl sm:text-5xl md:text-6xl">Explorador de Emoções</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 sm:mb-6">
              UX/UI & Product Design de um jogo terapêutico infantil
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Projeto desenvolvido para auxiliar psicólogas infantis no processo de identificação 
              e expressão emocional de crianças de 5 a 12 anos.
            </p>
            <a 
              href="https://drive.google.com/file/d/1hBTNcDhkhjvO8o14MHb0o9W9ykMrtqNk/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
            >
              Ver estudo de caso completo
            </a>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary">
            <img
              src={image_e57011a6f2ccc482ffc34151d97e1276a66f1434}
              alt="Explorador de Emoções - Visão geral"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* O Problema */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-xs tracking-wider uppercase">Problem Statement</span>
              <h2 className="mt-4 mb-6">O Problema</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Crianças entre 5 e 12 anos frequentemente enfrentam <strong className="text-foreground">dificuldade 
                  em expressar emoções verbalmente</strong>, especialmente em contextos terapêuticos. 
                  A limitação do vocabulário emocional e o medo de julgamento criam barreiras significativas.
                </p>
                <p>
                  Ferramentas tradicionais usadas em sessões de psicologia infantil, como desenhos livres 
                  ou conversas diretas, nem sempre são suficientes para <strong className="text-foreground">engajar 
                  crianças de diferentes perfis e idades</strong>.
                </p>
                <p>
                  Havia uma clara necessidade de desenvolver uma solução <strong className="text-foreground">lúdica, 
                  acessível e emocionalmente segura</strong> que pudesse atuar como ponte entre a criança, 
                  suas emoções e a profissional de saúde mental.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
              <img
                src={image_bb8025b5d5398b3b03e98992f6ed46a718259459}
                alt="Problema - Expressão emocional infantil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Desafio de Design */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-xs tracking-wider uppercase">Design Challenge</span>
            <h2 className="mt-4 mb-6">O Desafio de Design</h2>
            <p className="text-xl text-muted-foreground">
              Como transformar <span className="text-accent">emoções abstratas</span> em uma experiência 
              compreensível, visual e interativa para crianças?
            </p>
          </div>
        </div>
      </section>

      {/* Objetivos do Produto */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Objetivos</span>
            <h2 className="mt-4 mb-3">Objetivos do Produto</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <Target className="text-accent mb-4" size={24} />
              <h3 className="text-lg mb-2">Facilitar a expressão emocional</h3>
              <p className="text-sm text-muted-foreground">
                Criar um ambiente seguro e lúdico onde crianças se sintam confortáveis para identificar 
                e nomear suas emoções.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <Users className="text-accent mb-4" size={24} />
              <h3 className="text-lg mb-2">Apoiar psicólogas infantis</h3>
              <p className="text-sm text-muted-foreground">
                Fornecer uma ferramenta prática que facilite o trabalho terapêutico e gere insights 
                valiosos sobre o estado emocional das crianças.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <Heart className="text-accent mb-4" size={24} />
              <h3 className="text-lg mb-2">Criar experiência intuitiva e segura</h3>
              <p className="text-sm text-muted-foreground">
                Desenvolver uma interface física que seja naturalmente compreensível, sem necessidade 
                de instruções complexas.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <Palette className="text-accent mb-4" size={24} />
              <h3 className="text-lg mb-2">Aplicar psicologia das cores</h3>
              <p className="text-sm text-muted-foreground">
                Utilizar princípios científicos de design emocional e psicologia das cores para 
                reforçar a compreensão das emoções.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia UX */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-accent text-xs tracking-wider uppercase">Processo</span>
            <h2 className="mt-4 mb-3">Metodologia UX</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aplicação rigorosa do processo de Design Thinking adaptado para produtos físicos
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
              {methodology.map((step, index) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="w-full px-4 py-4 bg-background border border-border rounded-lg text-center hover:border-accent/50 transition-colors">
                    <div className="text-xs text-accent font-semibold mb-1">0{index + 1}</div>
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                  {index < methodology.length - 1 && (
                    <ArrowRight className="hidden md:block absolute mt-6 ml-20 text-accent" size={16} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pesquisa & Insights */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Research</span>
            <h2 className="mt-4 mb-3">Pesquisa & Insights</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 border border-border rounded-lg">
                <BookOpen className="text-accent mb-3" size={24} />
                <h3 className="text-lg mb-2">Desenvolvimento emocional infantil</h3>
                <p className="text-sm text-muted-foreground">
                  Estudo sobre marcos do desenvolvimento socioemocional, vocabulário emocional por 
                  faixa etária e estratégias de comunicação infantil.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <Palette className="text-accent mb-3" size={24} />
                <h3 className="text-lg mb-2">Psicologia das cores</h3>
                <p className="text-sm text-muted-foreground">
                  Pesquisa sobre associações culturais e psicológicas entre cores e emoções, 
                  validadas com literatura científica.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 border border-border rounded-lg">
                <Lightbulb className="text-accent mb-3" size={24} />
                <h3 className="text-lg mb-2">Análise de jogos similares</h3>
                <p className="text-sm text-muted-foreground">
                  Benchmarking de jogos terapêuticos, educativos e emocionais existentes no mercado 
                  para identificar gaps e oportunidades.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg mb-3 text-accent">Principais Insights</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Crianças respondem melhor a metáforas visuais do que conceitos abstratos</li>
                  <li>• A gamificação reduz ansiedade em contextos terapêuticos</li>
                  <li>• Cores influenciam significativamente a compreensão emocional</li>
                  <li>• Autonomia de escolha aumenta o engajamento infantil</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">User Research</span>
            <h2 className="mt-4 mb-3">Personas</h2>
            <p className="text-muted-foreground max-w-2xl">
              Identificação dos três principais perfis de usuários e stakeholders do produto
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {personas.map((persona) => (
              <div key={persona.title} className="p-6 bg-background border border-border rounded-lg">
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

      {/* Conceito & Estratégia */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary mt-10">
              <img
                src={image_928e1f3da39cbca89df7158a828f25f9f5adc4f6}
                alt="Conceito - Jogo terapêutico"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-accent text-xs tracking-wider uppercase">Conceito</span>
              <h2 className="mt-4 mb-6">Conceito & Estratégia de Produto</h2>
              <div className="space-y-4">
                <div className="p-4 bg-card border border-border rounded-lg">
                  <h3 className="text-sm font-medium mb-2">Metáfora da exploração emocional</h3>
                  <p className="text-sm text-muted-foreground">
                    A criança se torna uma "exploradora" navegando por ilhas emocionais, 
                    transformando o processo terapêutico em uma aventura.
                  </p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <h3 className="text-sm font-medium mb-2">Arquétipo do explorador</h3>
                  <p className="text-sm text-muted-foreground">
                    Uso intencional do arquétipo junguiano do explorador para empoderar a criança 
                    e incentivar descoberta autônoma.
                  </p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <h3 className="text-sm font-medium mb-2">Jornada como aventura guiada</h3>
                  <p className="text-sm text-muted-foreground">
                    A experiência de uso segue uma narrativa clara: partida, exploração, descoberta 
                    e retorno com aprendizado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arquitetura da Experiência */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">UX Architecture</span>
            <h2 className="mt-4 mb-3">Arquitetura da Experiência (UX)</h2>
            <p className="text-muted-foreground max-w-2xl">
              Estrutura do produto pensada como um fluxo de experiência intuitivo
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg mb-2">Tabuleiro como fluxo</h3>
                  <p className="text-sm text-muted-foreground">
                    O tabuleiro representa visualmente o mapa emocional, com caminhos e ilhas que 
                    guiam naturalmente a jornada da criança.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg mb-2">Ilhas como categorias emocionais</h3>
                  <p className="text-sm text-muted-foreground">
                    Cada ilha representa uma família de emoções (alegria, tristeza, raiva, medo, etc.), 
                    com cores e formas distintas.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg mb-2">Cartas como gatilhos de conversa</h3>
                  <p className="text-sm text-muted-foreground">
                    Cada carta apresenta situações cotidianas que facilitam a identificação e 
                    expressão de sentimentos pela criança.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg mb-2">Recompensa como reforço positivo</h3>
                  <p className="text-sm text-muted-foreground">
                    Ao explorar emoções, a criança coleciona "descobertas", criando senso de 
                    progresso e conquista emocional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Design & Identidade Visual */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Visual Design</span>
            <h2 className="mt-4 mb-3">UI Design & Identidade Visual</h2>
            <p className="text-muted-foreground max-w-2xl">
              Sistema visual baseado em psicologia das cores e design emocional
            </p>
          </div>
          
          {/* Paleta de Cores */}
          <div className="mb-12">
            <h3 className="text-lg mb-6">Paleta de cores e significados emocionais</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {colors.map((item) => (
                <div key={item.color} className="space-y-3 flex flex-col items-center text-center">
                  <div 
                    className="aspect-square rounded-lg border border-border w-20 h-20"
                    style={{ backgroundColor: item.hex }}
                  />
                  <div>
                    <h4 className="text-sm font-medium mb-1">{item.color}</h4>
                    <p className="text-xs text-muted-foreground leading-tight">{item.meaning}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Princípios de Design */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-lg mb-3">Tipografia</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Fonte sans-serif arredondada, amigável e legível para crianças em diferentes 
                níveis de alfabetização.
              </p>
              <div className="text-2xl font-bold">Aa Bb Cc</div>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-lg mb-3">Estilo ilustrativo</h3>
              <p className="text-sm text-muted-foreground">
                Ilustrações minimalistas, coloridas e expressivas que representam emoções de 
                forma clara e não-ameaçadora.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-lg mb-3">Consistência visual</h3>
              <p className="text-sm text-muted-foreground">
                Sistema de design aplicado consistentemente em todos os elementos: tabuleiro, 
                cartas, peões e embalagem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prototipação & Produto Final */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Deliverables</span>
            <h2 className="mt-4 mb-3">Prototipação & Produto Final</h2>
            <p className="text-muted-foreground max-w-2xl">
              Desenvolvimento físico do produto com atenção a materiais, usabilidade e segurança
            </p>
          </div>

          <div className="space-y-8">
            {/* Componentes do produto */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background border border-border rounded-lg">
                <Package className="text-accent mb-3" size={24} />
                <h3 className="text-lg mb-2">Tabuleiro</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Material cartonado de alta gramatura, resistente e com acabamento plastificado. 
                  Dimensões pensadas para uso em consultórios.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Dimensões: 60x60cm quando aberto</li>
                  <li>• Material: Cartão duplex 350g/m²</li>
                  <li>• Dobrável para facilitar armazenamento</li>
                </ul>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <Package className="text-accent mb-3" size={24} />
                <h3 className="text-lg mb-2">Cartas</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  60 cartas ilustradas com situações cotidianas, divididas por categorias emocionais 
                  e faixas etárias.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Dimensões: 8,8 x 6,3cm (tamanho padrão)</li>
                  <li>• Material: Papel couché 300g/m²</li>
                  <li>• Cantos arredondados para segurança</li>
                </ul>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <Package className="text-accent mb-3" size={24} />
                <h3 className="text-lg mb-2">Peões & Elementos 3D</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Peças tridimensionais em plástico atóxico, com formas ergonômicas para mãos infantis. 
                  Modelagem 3D completa realizada para validação estrutural e fabricação.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• 6 peões em diferentes cores</li>
                  <li>• Ilhas em relevo</li>
                  <li>• Dados personalizados</li>
                  <li>• Modelagem 3D para prototipagem</li>
                </ul>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <Package className="text-accent mb-3" size={24} />
                <h3 className="text-lg mb-2">Embalagem</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Caixa robusta e atrativa que comunica visualmente o propósito terapêutico do jogo.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Caixa rígida com divisórias internas</li>
                  <li>• Design institucional profissional</li>
                  <li>• Manual de instruções para profissionais</li>
                </ul>
              </div>
            </div>

            {/* Imagem do produto */}
            <div className="relative rounded-lg overflow-hidden bg-secondary">
              <div className="relative aspect-video">
                <img
                  src={carouselImages[currentSlide].src}
                  alt={carouselImages[currentSlide].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                {/* Botões de navegação */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-colors backdrop-blur-sm border border-border"
                >
                  <ChevronLeft size={20} className="text-foreground" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-colors backdrop-blur-sm border border-border"
                >
                  <ChevronRight size={20} className="text-foreground" />
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? 'bg-accent w-6' : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo 3D Interativo */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-accent text-xs tracking-wider uppercase">Interactive 3D Model</span>
            <h2 className="mt-4 mb-3">Explore uma das Ilhas do Jogo em 3D</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modelo tridimensional interativo de uma das ilhas emocionais do tabuleiro. 
              Você pode rotacionar, aproximar e explorar os detalhes.
            </p>
          </div>
          
          <div className="relative rounded-lg overflow-hidden bg-secondary border border-border">
            <div className="relative aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true" 
                allow="autoplay; xr-spatial-tracking" 
                src="https://sketchfab.com/models/81cff580dde6467bb69ec54f3036b63b/embed"
                sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              🖱️ Use o mouse para rotacionar • 🔍 Scroll para aproximar • ⚡ Clique e arraste para mover
            </p>
          </div>
        </div>
      </section>

      {/* Resultado & Impacto */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Impact</span>
            <h2 className="mt-4 mb-3">Resultado & Impacto</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-accent/50 rounded-lg">
              <TrendingUp className="text-accent mb-3" size={24} />
              <h3 className="text-lg mb-2">Benefícios para crianças</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Maior facilidade em identificar e nomear emoções</li>
                <li>• Redução da ansiedade em contexto terapêutico</li>
                <li>• Desenvolvimento de vocabulário emocional</li>
                <li>• Experiência lúdica e engajadora</li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-accent/50 rounded-lg">
              <Users className="text-accent mb-3" size={24} />
              <h3 className="text-lg mb-2">Benefícios para psicólogas</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ferramenta estruturada para sessões</li>
                <li>• Acesso mais rápido ao mundo emocional da criança</li>
                <li>• Recurso adaptável a diferentes perfis e idades</li>
                <li>• Elemento facilitador do vínculo terapêutico</li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <Heart className="text-accent mb-3" size={24} />
              <h3 className="text-lg mb-2">Valor emocional do produto</h3>
              <p className="text-sm text-muted-foreground">
                O jogo transcende sua funcionalidade prática: torna-se um espaço seguro onde crianças 
                aprendem que todas as emoções são válidas e podem ser expressas sem julgamento.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <Target className="text-accent mb-3" size={24} />
              <h3 className="text-lg mb-2">Potencial de uso real</h3>
              <p className="text-sm text-muted-foreground">
                Produto aplicável em consultórios de psicologia, escolas, ONGs e ambientes familiares, 
                com potencial de impacto social significativo na saúde mental infantil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aprendizados */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-accent text-xs tracking-wider uppercase">Reflections</span>
            <h2 className="mt-4 mb-3">Aprendizados como UX/UI Designer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {learnings.map((learning) => {
              const Icon = learning.icon;
              return (
                <div key={learning.title} className="p-6 bg-background border border-border rounded-lg">
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
            <h2 className="mb-6">Explorador de Emoções demonstra como o design pode atuar como ponte entre emoção, experiência e cuidado.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Este projeto reforça minha convicção de que o design centrado no ser humano vai muito 
              além de interfaces digitais — ele pode transformar vidas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={onContact}
                className="px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
              >
                Entrar em contato
              </button>
              <button 
                onClick={onBack}
                className="px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:border-accent/50 transition-colors"
              >
                Ver outros projetos
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}