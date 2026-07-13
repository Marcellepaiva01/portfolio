import { X, ExternalLink, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { AVLCaseStudy } from './avl-case-study';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  link?: string;
  context: string;
  discovery: {
    title: string;
    content: string[];
    insights: string[];
  };
  problem: {
    title: string;
    statement: string;
  };
  solution: {
    title: string;
    approach: string;
    ux: string[];
    ui: string[];
  };
  results: {
    title: string;
    outcomes: string[];
  };
  learnings: {
    title: string;
    lessons: string[];
  };
}

const caseStudies: Record<string, CaseStudy> = {
  'organizei': {
    id: 'organizei',
    title: 'Organizei',
    subtitle: 'Aplicativo + Site',
    context: 'Organização financeira para profissionais autônomos',
    link: 'https://shown-elude-39515076.figma.site',
    discovery: {
      title: 'Pesquisa e Descoberta',
      content: [
        'O ponto de partida do projeto foi a identificação de uma dor recorrente entre profissionais autônomos: a dificuldade de organizar a vida financeira de forma simples, clara e adaptada à sua realidade.',
        'Durante a fase de descoberta, foram realizadas entrevistas com profissionais autônomos de diferentes áreas (saúde, motoristas, culinária e vendas), análise de aplicativos financeiros existentes no mercado e desk research sobre comportamento financeiro de trabalhadores autônomos.'
      ],
      insights: [
        'A maioria dos apps financeiros é complexa e pouco intuitiva para quem não tem familiaridade com finanças',
        'Falta de integração entre agenda de trabalho, ganhos e gastos',
        'Dificuldade em visualizar o dinheiro do dia a dia (quanto entrou, quanto saiu e o que ainda falta receber)',
        'Necessidade de personalização conforme a área de atuação do usuário'
      ]
    },
    problem: {
      title: 'Definição do Problema',
      statement: 'Profissionais autônomos precisam de uma ferramenta financeira que acompanhe sua rotina real, mas encontram soluções genéricas, confusas e pouco adaptáveis, o que gera desorganização, perda de controle financeiro e insegurança nas decisões.'
    },
    solution: {
      title: 'Estratégia e Solução',
      approach: 'A solução foi pensada a partir de um princípio central: clareza acima de tudo.',
      ux: [
        'Definição de fluxos curtos e objetivos',
        'Organização da arquitetura da informação para reduzir sobrecarga cognitiva',
        'Priorização de ações do dia a dia (registrar serviço, visualizar ganhos, verificar pagamentos)'
      ],
      ui: [
        'Visual clean e organizado',
        'Uso estratégico de cores para diferenciar status financeiros',
        'Hierarquia visual clara, facilitando a leitura rápida das informações'
      ]
    },
    results: {
      title: 'Solução Final',
      outcomes: [
        'Centraliza a vida financeira do autônomo',
        'Facilita o controle diário de ganhos e gastos',
        'Oferece uma experiência simples, intuitiva e adaptável',
        'Reduz a ansiedade causada pela falta de organização financeira'
      ]
    },
    learnings: {
      title: 'O Que Aprendi',
      lessons: [
        'Design centrado na rotina do usuário',
        'Importância da personalização',
        'Clareza como principal valor em produtos financeiros'
      ]
    }
  },
  'dieta-financeira': {
    id: 'dieta-financeira',
    title: 'Dieta Financeira',
    subtitle: 'Landing Page + Design Editorial',
    context: 'Educação financeira acessível',
    link: 'https://mpdesigner.org/dietafinanceira',
    discovery: {
      title: 'Pesquisa e Descoberta',
      content: [
        'O projeto teve início com o entendimento de um desafio comum na educação financeira: conteúdos importantes, porém densos, técnicos e pouco acessíveis para grande parte do público.',
        'Durante a fase de pesquisa, foram realizados estudo do público-alvo do livro, análise de materiais de educação financeira existentes, benchmark de projetos editoriais e landing pages educacionais, e avaliação de leitura, escaneabilidade e compreensão do conteúdo.'
      ],
      insights: [
        'O público sente dificuldade em manter a leitura quando o conteúdo é visualmente pesado',
        'Textos longos sem hierarquia visual afastam o leitor',
        'A landing page precisava educar e converter ao mesmo tempo'
      ]
    },
    problem: {
      title: 'Definição do Problema',
      statement: 'Como transformar um conteúdo financeiro denso em uma experiência de leitura leve, didática e visualmente acessível, sem perder profundidade e credibilidade?'
    },
    solution: {
      title: 'Estratégia e Solução',
      approach: 'A solução foi tratar o design como uma ferramenta de ensino.',
      ux: [
        'Estrutura focada em escaneabilidade',
        'Organização clara das informações',
        'Comunicação direta e acessível',
        'Destaque para os benefícios do conteúdo'
      ],
      ui: [
        'Uso de tipografia confortável para leitura',
        'Quebra de textos longos em blocos menores',
        'Hierarquia clara entre títulos, subtítulos e corpo de texto',
        'Uso de elementos visuais para guiar a leitura'
      ]
    },
    results: {
      title: 'Solução Final',
      outcomes: [
        'Um material educativo mais fácil de ler e compreender',
        'Maior engajamento com o conteúdo',
        'Comunicação clara e organizada',
        'Uma landing page alinhada com o propósito educativo do livro'
      ]
    },
    learnings: {
      title: 'O Que Aprendi',
      lessons: [
        'Design editorial como ferramenta de educação',
        'Importância da hierarquia visual em conteúdos densos',
        'Alinhamento entre conteúdo e design'
      ]
    }
  }
};

interface CaseStudyModalProps {
  projectId: string | null;
  onClose: () => void;
}

export function CaseStudyModal({ projectId, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (projectId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [projectId]);

  if (!projectId) return null;

  // Special case for AVL Suprimentos
  if (projectId === 'avl-suprimentos') {
    return <AVLCaseStudy onClose={onClose} />;
  }

  const caseStudy = caseStudies[projectId];
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-background overflow-y-auto">
      <div className="w-full min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-xl border-b border-border">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={16} />
                Voltar aos projetos
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-xs text-accent">{caseStudy.subtitle}</span>
            </div>
            <h1 className="text-4xl">{caseStudy.title}</h1>
            <p className="text-base text-muted-foreground">{caseStudy.context}</p>
            {caseStudy.link && (
              <a
                href={caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
              >
                Visitar projeto
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          {/* Discovery */}
          <div className="space-y-4">
            <h2 className="text-2xl">{caseStudy.discovery.title}</h2>
            <div className="space-y-3">
              {caseStudy.discovery.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 p-5 bg-card rounded-lg border border-border space-y-3">
              <h4>Principais insights:</h4>
              <ul className="space-y-2">
                {caseStudy.discovery.insights.map((insight, index) => (
                  <li key={index} className="flex gap-2 text-sm">
                    <span className="text-accent flex-shrink-0">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Problem */}
          <div className="space-y-4">
            <h2 className="text-2xl">{caseStudy.problem.title}</h2>
            <div className="p-5 bg-card rounded-lg border-l-2 border-accent">
              <p className="text-base italic">{caseStudy.problem.statement}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <h2 className="text-2xl">{caseStudy.solution.title}</h2>
            <p>{caseStudy.solution.approach}</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-card rounded-lg border border-border space-y-3">
                <h4>No UX:</h4>
                <ul className="space-y-2">
                  {caseStudy.solution.ux.map((item, index) => (
                    <li key={index} className="flex gap-2 text-sm">
                      <span className="text-accent flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 bg-card rounded-lg border border-border space-y-3">
                <h4>No UI:</h4>
                <ul className="space-y-2">
                  {caseStudy.solution.ui.map((item, index) => (
                    <li key={index} className="flex gap-2 text-sm">
                      <span className="text-accent flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <h2 className="text-2xl">{caseStudy.results.title}</h2>
            <div className="space-y-3">
              {caseStudy.results.outcomes.map((outcome, index) => (
                <div key={index} className="flex gap-3 items-start p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-xs">✓</span>
                  </div>
                  <p className="text-sm">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div className="space-y-4 pb-8">
            <h2 className="text-2xl">{caseStudy.learnings.title}</h2>
            <div className="space-y-2">
              {caseStudy.learnings.lessons.map((lesson, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <span className="text-accent mt-1 flex-shrink-0">→</span>
                  <p className="text-sm">{lesson}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="flex justify-center pt-6 border-t border-border">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Voltar aos projetos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
