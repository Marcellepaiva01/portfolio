import imgEssenceMockup from 'figma:asset/essence-parfum-mockup.png';
import {
  X, ExternalLink, ArrowLeft, Sparkles, Palette, Layers, Database,
  Github, Rocket, MessageCircle, Shield, CheckCircle2, Workflow,
  Bot, Figma, Code2, Globe, ShoppingBag, Settings
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useEffect } from 'react';

interface EssenceCaseStudyProps {
  onClose: () => void;
  onBack: () => void;
}

const PIPELINE_STEPS = [
  {
    step: '01',
    tool: 'Claude',
    icon: Bot,
    title: 'Briefing, prompt e design system',
    description:
      'Transformei o briefing do cliente em um prompt estruturado para IA: posicionamento de curadoria premium, tom editorial, arquitetura de informação e tokens visuais (neutros quentes, dourado, blush e tipografia sofisticada).',
    deliverables: ['Prompt mestre do projeto', 'Design system com tokens', 'Direção visual e tom de voz'],
  },
  {
    step: '02',
    tool: 'Figma Make',
    icon: Figma,
    title: 'Interface e experiência do site',
    description:
      'Com o design system como base, gerei no Figma Make a estrutura completa do site: home editorial, catálogo, drawer de fragrâncias, seções de confiança, FAQ e painel administrativo.',
    deliverables: ['Home com hero e storytelling', 'Catálogo com filtros', 'Componentes reutilizáveis', 'Fluxo admin'],
  },
  {
    step: '03',
    tool: 'Cursor',
    icon: Code2,
    title: 'Backend, versionamento e deploy',
    description:
      'Exportei o código para o Cursor e evoluí o protótipo para produto real: Supabase (Auth, RLS, Storage), seed de fragrâncias, integração WhatsApp, GitHub e pipeline de deploy na Vercel.',
    deliverables: ['Supabase Auth + RLS', 'Storage de imagens/vídeos', 'GitHub + CI/CD', 'Deploy em produção'],
  },
  {
    step: '04',
    tool: 'Vercel',
    icon: Rocket,
    title: 'Site no ar com domínio próprio',
    description:
      'Publicação contínua via Vercel com rewrites para React Router, variáveis de ambiente e domínio customizado — entregando um site funcional, responsivo e pronto para operação.',
    deliverables: ['Deploy automático', 'Subdomínio essence.mpdesigner.org', 'Performance e SEO básico', 'Site em produção'],
  },
];

const BRIEFING_REQUIREMENTS = [
  {
    title: 'Posicionamento de curadoria premium',
    met: 'Home editorial com storytelling, timeline da perfumaria e taxa de curadoria (top 5%)',
  },
  {
    title: 'Catálogo de fragrâncias com filtros avançados',
    met: 'Página /colecao com busca, categorias, família olfativa, concentração, preço e ordenação',
  },
  {
    title: 'Conversão via WhatsApp personalizado',
    met: 'CTAs contextuais com mensagens pré-preenchidas por fragrância e serviço',
  },
  {
    title: 'Painel admin para gestão do catálogo',
    met: 'Login seguro, CRUD de fragrâncias, publicar/pausar e upload de imagens',
  },
  {
    title: 'Autenticidade e confiança',
    met: 'Selos, FAQ, depoimentos e seções de garantia de originalidade',
  },
  {
    title: 'Experiência visual sofisticada',
    met: 'Design system dourado/cream, hero com vídeo, tipografia editorial e responsividade',
  },
];

const TECH_STACK = [
  { icon: Palette, label: 'Design System', value: 'Tokens CSS customizados (neutros, gold, blush)' },
  { icon: Layers, label: 'Frontend', value: 'React + Vite + Tailwind CSS + React Router' },
  { icon: Database, label: 'Backend', value: 'Supabase (PostgreSQL, Auth, RLS, Storage)' },
  { icon: Github, label: 'Repositório', value: 'github.com/Marcellepaiva01/essence-parfum-website-design' },
  { icon: Rocket, label: 'Deploy', value: 'Vercel — essence.mpdesigner.org' },
  { icon: MessageCircle, label: 'Conversão', value: 'WhatsApp com links contextuais' },
];

const AI_SKILLS = [
  'Engenharia de prompt a partir de briefing real',
  'Criação de design system orientado por IA',
  'Orquestração de ferramentas (Claude → Figma Make → Cursor)',
  'Validação crítica e refinamento do output da IA',
  'Integração de backend e deploy em produção',
  'Documentação e versionamento do processo',
];

export function EssenceCaseStudy({ onClose, onBack }: EssenceCaseStudyProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleContactClick = () => {
    onClose();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto overflow-x-hidden">
      {/* Background with gradient and texture - same as home */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:64px_64px]"></div>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="w-full min-h-screen relative z-10">
        <header className="sticky top-0 z-10 bg-white/10 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Voltar aos projetos</span>
              <span className="sm:hidden">Voltar</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-300 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16">
          {/* Hero */}
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/20">
              <Sparkles size={14} className="text-accent" />
              <span className="text-xs text-accent">UX/UI · IA · Full Stack · Deploy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl">Essence Parfum — Curadoria de Perfumes</h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Do briefing ao site em produção: uma jornada completa com IA, design system, backend e deploy
            </p>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
              Site de curadoria de fragrâncias de luxo construído com Claude (prompt + design system),
              Figma Make (interface), Cursor (Supabase + GitHub + Vercel) e publicado com domínio próprio.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://essence.mpdesigner.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
              >
                Ver site ao vivo
                <ExternalLink size={14} />
              </a>
              <a
                href="https://github.com/Marcellepaiva01/essence-parfum-website-design"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-accent/50 transition-colors text-sm"
              >
                <Github size={14} />
                Repositório
              </a>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-accent/50 transition-colors text-sm"
              >
                Entrar em contato
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-border mt-6 bg-card/50">
              <ImageWithFallback
                src={imgEssenceMockup}
                alt="Essence Parfum — mockup do site de curadoria de perfumes"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* O Desafio */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">O Desafio</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Criar um site de curadoria de perfumes de luxo que transmitisse sofisticação, confiança e exclusividade —
              sem parecer uma loja genérica. O briefing pedia uma experiência editorial, catálogo filtrável,
              conversão via WhatsApp e um painel para o cliente gerenciar fragrâncias de forma autônoma.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <ShoppingBag className="text-accent mb-2" size={20} />
                <h4 className="text-sm mb-1">Curadoria, não e-commerce</h4>
                <p className="text-xs text-muted-foreground">Posicionamento premium com storytelling e seleção rigorosa</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <MessageCircle className="text-accent mb-2" size={20} />
                <h4 className="text-sm mb-1">Conversão consultiva</h4>
                <p className="text-xs text-muted-foreground">WhatsApp como canal principal de venda e atendimento</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <Settings className="text-accent mb-2" size={20} />
                <h4 className="text-sm mb-1">Gestão autônoma</h4>
                <p className="text-xs text-muted-foreground">Admin para cadastrar, publicar e pausar fragrâncias</p>
              </div>
            </div>
          </div>

          {/* Pipeline IA */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <Workflow className="text-accent" size={24} />
              <h2 className="text-2xl sm:text-3xl">Pipeline: da IA ao deploy</h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Este projeto demonstra minha capacidade de orquestrar ferramentas de IA em cada etapa —
              do conceito à entrega em produção — com critério de design e visão de produto.
            </p>

            <div className="space-y-4">
              {PIPELINE_STEPS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="bg-card border border-border rounded-lg p-5 sm:p-6 space-y-3 hover:border-accent/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon size={18} className="text-accent" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs text-accent font-mono">{item.step}</span>
                          <span className="text-xs px-2 py-0.5 bg-secondary rounded border border-border">{item.tool}</span>
                        </div>
                        <h3 className="text-base sm:text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {item.deliverables.map((d) => (
                            <span key={d} className="text-xs px-2 py-1 bg-accent/5 border border-accent/20 rounded text-muted-foreground">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Briefing cumprido */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-accent" size={24} />
              <h2 className="text-2xl sm:text-3xl">Como o briefing foi cumprido</h2>
            </div>
            <div className="space-y-3">
              {BRIEFING_REQUIREMENTS.map((req) => (
                <div key={req.title} className="flex gap-3 p-4 bg-card border border-border rounded-lg">
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm mb-1">{req.title}</h4>
                    <p className="text-xs text-muted-foreground">{req.met}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design System */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">Design System</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Criado com Claude e aplicado no Figma Make e no código. Paleta inspirada em perfumaria de luxo:
              neutros quentes (cream, sand, taupe), dourado como accent e blush para detalhes femininos.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'Cream', hex: '#FBF7F0' },
                { name: 'Sand', hex: '#E8DCC8' },
                { name: 'Gold', hex: '#C9A24B' },
                { name: 'Ink', hex: '#1A1512' },
              ].map((color) => (
                <div key={color.name} className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="h-16" style={{ backgroundColor: color.hex }} />
                  <div className="p-3">
                    <p className="text-xs font-medium">{color.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stack técnica */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">Stack técnica</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {TECH_STACK.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-3 p-4 bg-card border border-border rounded-lg">
                    <Icon size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm mt-1">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Supabase */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="text-accent" size={24} />
              <h2 className="text-2xl sm:text-3xl">Backend com Supabase</h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              No Cursor, implementei a camada de dados completa: tabela de fragrâncias com 20+ campos,
              autenticação de admin, Row Level Security (público lê apenas publicados, admin tem CRUD),
              storage para imagens e vídeos do hero, e scripts de seed para popular o catálogo.
            </p>
            <div className="bg-card border border-border rounded-lg p-5 font-mono text-xs text-muted-foreground overflow-x-auto">
              <p className="text-accent mb-2">// Estrutura principal</p>
              <p>fragrances → catálogo completo (notas, preço, selos, status)</p>
              <p>profiles → admins vinculados ao auth.users</p>
              <p>RLS → anon: SELECT publicado | admin: CRUD</p>
              <p>storage → fragrance-images + video (público leitura)</p>
            </div>
          </div>

          {/* Competências IA */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="text-accent" size={24} />
              <h2 className="text-2xl sm:text-3xl">O que isso demonstra sobre meu uso de IA</h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Não uso IA apenas para gerar telas. Orquestro cada ferramenta no momento certo,
              valido o output com olhar de designer e levo o projeto até produção com backend real.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {AI_SKILLS.map((skill) => (
                <div key={skill} className="flex gap-2 items-start p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <span className="text-accent mt-0.5">→</span>
                  <p className="text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resultado */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <Globe className="text-accent" size={24} />
              <h2 className="text-2xl sm:text-3xl">Resultado</h2>
            </div>
            <div className="space-y-3">
              {[
                'Site publicado em essence.mpdesigner.org com deploy automático via Vercel',
                'Catálogo dinâmico alimentado por Supabase com painel admin funcional',
                'Experiência premium com hero em vídeo, filtros avançados e drawer de fragrâncias',
                'Conversão via WhatsApp integrada em todos os pontos de contato',
                'Repositório versionado no GitHub com histórico completo de evolução',
                'Processo documentado: briefing → IA → design → código → produção',
              ].map((outcome) => (
                <div key={outcome} className="flex gap-3 items-start p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-6 border-t border-border pb-8">
            <a
              href="https://essence.mpdesigner.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
            >
              <ExternalLink size={16} />
              Visitar Essence Parfum
            </a>
            <button
              onClick={onBack}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-accent/50 transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              Voltar aos projetos
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
