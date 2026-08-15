import {
  X, ArrowLeft, ExternalLink, Target, Search, Users, Brain, Shield,
  CheckCircle2, XCircle, Lightbulb, Route, Palette, ClipboardCheck,
  TrendingUp, Quote, Bot, Layout, Smartphone, UserCheck
} from 'lucide-react';
import { useEffect } from 'react';
import { MobilePrototypeFrame } from '@/app/components/mobile-prototype-frame';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import {
  DcCard,
  DcHighlightCard,
  DcQuoteCard,
  DcSectionHeader,
  DcStatCard,
  DcTableRow,
} from '@/app/components/descomplica-interactive-ui';
import imgDescomplicaCover from 'figma:asset/descomplica-ai-cover.png';

const PROTOTYPE_URL = 'https://repeat-pin-23387564.figma.site/';

const RESEARCH_METHODS = [
  { step: '01', title: 'Desk Research', desc: 'Redes sociais, avaliações do app, Reclame Aqui, notícias e artigos do setor.' },
  { step: '02', title: 'Qualitativa', desc: '10 clientes ativos • 25-50 anos • entrevistas individuais remotas • 30-40 min.' },
  { step: '03', title: 'Quantitativa', desc: '50 respondentes • questionário online • perguntas fechadas e escalas Likert.' },
  { step: '04', title: 'Recrutamento', desc: 'Conveniência + snowball • clientes há ≥1 ano • renda própria • uso regular do app.' },
  { step: '05', title: 'Ética', desc: 'Participação voluntária • anonimato • consentimento • uso acadêmico dos dados.' },
  { step: '06', title: 'Síntese', desc: 'Padrões → highlights → insights → oportunidade de produto → protótipo.' },
];

const RESEARCH_STATS = [
  { value: '78%', label: 'sentem ansiedade ao lidar com dinheiro' },
  { value: '64%', label: 'não se consideram organizados financeiramente' },
  { value: '82%', label: 'gostariam de ajuda do banco para planejar a vida' },
  { value: '69%', label: 'veem o banco apenas como controlador financeiro' },
  { value: '88%', label: 'usariam um serviço Beyond Banking' },
];

const VOICES = [
  { quote: 'O aplicativo mostra tudo, mas não me ajuda a decidir o que fazer.', author: 'Lucas, 34' },
  { quote: 'Não sei por onde começar a me organizar financeiramente.', author: 'Mariana, 26' },
  { quote: 'Quero planejamento de vida, não apenas saldo bancário.', author: 'Carlos, 39' },
  { quote: 'Queria que o banco fosse mais parceiro e menos burocrático.', author: 'Juliana, 38' },
];

const JOURNEY_STEPS = [
  { step: '1', title: 'Percebe', desc: 'Tenho dinheiro sobrando, mas não sei o que fazer.' },
  { step: '2', title: 'Busca', desc: 'Abre o banco e procura orientação.' },
  { step: '3', title: 'Conversa', desc: 'Airone entende contexto e explica possibilidades.' },
  { step: '4', title: 'Organiza', desc: 'Reserva, objetivos e gastos ganham prioridade.' },
  { step: '5', title: 'Aprende', desc: 'Conceitos, riscos e liquidez em linguagem simples.' },
  { step: '6', title: 'Decide', desc: 'Avalia opções e mantém a decisão consigo.' },
];

const AIRONE_CAN = [
  'Explicar conceitos',
  'Organizar objetivos',
  'Criar simulações educativas',
  'Mostrar riscos e liquidez',
  'Ajudar a formular perguntas',
];

const AIRONE_CANNOT = [
  'Garantir rentabilidade',
  'Escolher investimento pelo usuário',
  'Prometer segurança',
  'Executar decisões',
  'Substituir profissional qualificado',
];

const DS_COLORS = [
  { name: 'Primary', hex: '#FF6200' },
  { name: 'Deep', hex: '#EC7000' },
  { name: 'Secondary', hex: '#000D3C' },
  { name: 'Success', hex: '#008717' },
  { name: 'Background', hex: '#F1F2F4' },
  { name: 'Text', hex: '#262626' },
];

const USABILITY_FINDINGS = [
  { type: 'positive' as const, title: 'Descoberta', desc: 'Proposta e CTA principal são reconhecidos rapidamente.' },
  { type: 'positive' as const, title: 'Transparência', desc: 'Aviso educativo e limites do assistente aparecem no fluxo.' },
  { type: 'positive' as const, title: 'Consistência', desc: 'Desktop e mobile mantêm linguagem e componentes.' },
  { type: 'negative' as const, title: 'Microcopy', desc: 'Alguns termos ainda podem sugerir prescrição financeira.' },
  { type: 'negative' as const, title: 'Densidade', desc: 'Home reúne muitas entradas e atalhos concorrentes.' },
  { type: 'negative' as const, title: 'Legibilidade', desc: 'Textos auxiliares mobile merecem revisão de tamanho/contraste.' },
];

const PRIORITIES = [
  { level: 'ALTA', title: 'Microcopy financeira', desc: 'Trocar linguagem que sugere segurança/recomendação por educação, risco e possibilidade.' },
  { level: 'MÉDIA', title: 'Hierarquia da home', desc: 'Reduzir competição entre atalhos, cards e destaques; reforçar uma ação primária.' },
  { level: 'MÉDIA', title: 'Mobile', desc: 'Aumentar legibilidade de textos auxiliares e áreas de toque quando necessário.' },
  { level: 'BAIXA', title: 'Transparência', desc: 'Manter o disclaimer e explicar claramente o que a IA pode e não pode fazer.' },
];

const ITERATIONS = [
  { before: 'Linguagem prescritiva “sugestão / aplicação”', after: '“exemplo educativo / possibilidade”' },
  { before: 'Confiança excessiva “invista com segurança”', after: '“entenda riscos e possibilidades”' },
  { before: 'IA pouco explicada — aviso genérico', after: 'o que Airone pode e não pode fazer' },
  { before: 'CTAs concorrentes — muitas entradas simultâneas', after: 'uma ação primária + atalhos secundários' },
  { before: 'Simulação — resultado sem contexto', after: 'valores ilustrativos e sem garantia' },
];

const WIREFRAME_DESKTOP_PRINCIPLES = [
  'Entrada principal clara',
  'Airone persistente sem competir com a home',
  'Cards financeiros como contexto, não como pressão',
  'Avisos educativos próximos das simulações',
];

const MODERATED_TEST_METRICS = [
  { value: '83%', label: 'sucesso médio' },
  { value: '3m12s', label: 'tempo médio' },
  { value: '9', label: 'erros críticos' },
  { value: '4,5/5', label: 'clareza percebida' },
];

const MODERATED_TEST_TASKS = [
  { task: 'Entender o propósito do Airone', success: '100%', time: '0m48s', errors: '1', comment: 'Propósito reconhecido rapidamente como apoio educativo.' },
  { task: 'Iniciar conversa e fazer uma pergunta', success: '83%', time: '1m12s', errors: '2', comment: 'CTA claro; um participante buscou o chat no menu inferior.' },
  { task: 'Encontrar conteúdo sobre reserva', success: '67%', time: '2m05s', errors: '3', comment: 'Termos como liquidez ainda exigiram explicação.' },
  { task: 'Criar/entender plano educativo', success: '83%', time: '3m40s', errors: '2', comment: 'Divisão em etapas ajudou a organizar prioridades.' },
  { task: 'Identificar limites da IA', success: '83%', time: '1m31s', errors: '1', comment: 'Disclaimer gerou confiança, mas precisa aparecer antes da simulação.' },
];

const MODERATED_LEARNINGS = [
  'A proposta do Airone foi compreendida.',
  'Educação financeira precisa evitar termos técnicos isolados.',
  'Mobile exige textos menores em quantidade, mas maiores em legibilidade.',
  'Limites da IA devem aparecer antes da simulação para reduzir interpretação de recomendação.',
];

const MODERATED_ITERATIONS = [
  'Reescrever microcopy prescritiva',
  'Reforçar disclaimer no início do fluxo',
  'Simplificar cards mobile',
  'Transformar termos técnicos em explicações curtas',
];

const NEXT_STEPS = [
  { step: '01', title: 'Compreensão', desc: 'Medir se usuários distinguem educação financeira de recomendação personalizada.' },
  { step: '02', title: 'Conteúdo & compliance', desc: 'Revisar microcopy, disclaimers e simulações com especialistas.' },
  { step: '03', title: 'Métricas de produto', desc: 'Ativação do Airone, conclusão de planos, retorno e compreensão de conteúdos.' },
];

interface DescomplicaCaseStudyProps {
  onClose: () => void;
  onBack: () => void;
}

export function DescomplicaCaseStudy({ onClose, onBack }: DescomplicaCaseStudyProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleContactClick = () => {
    onClose();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:64px_64px]" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="w-full min-h-screen relative z-10">
        <header className="sticky top-0 z-10 bg-white/10 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <button onClick={onBack} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Voltar aos projetos</span>
              <span className="sm:hidden">Voltar</span>
            </button>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-300 hover:text-white">
              <X size={20} />
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16">
          {/* Hero */}
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/20">
              <Bot size={14} className="text-accent" />
              <span className="text-xs text-accent">UX/UI Design · Beyond Banking · IA Responsável</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl">Descomplica.AI</h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Beyond Banking — educação financeira com IA
            </p>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
              Projeto acadêmico de UX/UI Design desenvolvido no contexto Itaú + EBAC. Como o banco pode ir além das transações e apoiar decisões de vida com clareza, educação e autonomia?
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
              >
                Abrir protótipo
                <ExternalLink size={14} />
              </a>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 text-sm"
              >
                Entrar em contato
              </button>
            </div>

            <div className="group relative rounded-xl overflow-hidden border border-border mt-6 bg-card/50 transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-60" />
              <ImageWithFallback
                src={imgDescomplicaCover}
                alt="Descomplica.AI — usuário interagindo com o assistente Airone no desktop e mobile Itaú"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs text-white/90 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
                  Experiência multiplataforma · desktop + mobile · assistente Airone
                </p>
              </div>
            </div>
          </div>

          {/* O Desafio */}
          <section className="space-y-4 sm:space-y-6">
            <DcSectionHeader icon={Target} title="O desafio" />
            <p className="text-sm sm:text-base text-muted-foreground">
              Como o banco pode ir além das transações e apoiar decisões de vida? A pesquisa investigou dores, necessidades emocionais e comportamentais de clientes Itaú em relação à organização e ao planejamento financeiro.
            </p>
            <DcHighlightCard className="p-5 sm:p-6 border-l-4 border-l-accent">
              <p className="text-xs text-accent uppercase tracking-wider mb-2">Problema central</p>
              <p className="text-sm sm:text-base italic">
                Dificuldade em organizar e planejar a vida financeira de forma simples, personalizada e emocionalmente segura.
              </p>
            </DcHighlightCard>
          </section>

          {/* Metodologia */}
          <section className="space-y-4 sm:space-y-6">
            <DcSectionHeader icon={Search} title="Metodologia de pesquisa" />
            <p className="text-sm text-muted-foreground">Abordagem mista para profundidade qualitativa + validação quantitativa.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {RESEARCH_METHODS.map((item) => (
                <DcCard key={item.step} className="space-y-2">
                  <span className="text-xs text-accent font-mono">{item.step}</span>
                  <h3 className="text-sm font-medium transition-colors duration-300 group-hover:text-accent/90">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </DcCard>
              ))}
            </div>
          </section>

          {/* Desk Research */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl transition-colors duration-300 hover:text-accent/90 cursor-default">Desk Research</h2>
            <p className="text-sm text-muted-foreground">
              A necessidade não estava em “ver mais números”, mas em transformar informação em planejamento.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Fontes analisadas', text: 'Comentários em redes sociais, avaliações nas lojas digitais, Reclame Aqui e conteúdo do setor bancário.' },
                { title: 'Necessidade identificada', text: 'Organizar e planejar a vida financeira de modo simples, personalizado e emocionalmente seguro.' },
                { title: 'Insight central', text: 'Clientes percebem o banco mais como controlador do que parceiro; há espaço para facilitar decisões de vida.' },
              ].map((item) => (
                <DcCard key={item.title}>
                  <h4 className="text-sm mb-2 transition-colors duration-300 group-hover:text-accent/90">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.text}</p>
                </DcCard>
              ))}
            </div>
          </section>

          {/* Pesquisa quanti/quali */}
          <section className="space-y-4 sm:space-y-6">
            <DcSectionHeader icon={Users} title="Pesquisa com usuários" />
            <p className="text-sm text-muted-foreground">10 entrevistas qualitativas + 50 respostas quantitativas.</p>
            <DcCard className="text-sm text-muted-foreground space-y-1">
              <p><strong className="text-foreground">Público:</strong> clientes ativos do Itaú, 25-50 anos, renda própria e uso regular do aplicativo.</p>
              <p><strong className="text-foreground">Inclusão:</strong> cliente há pelo menos 1 ano.</p>
              <p><strong className="text-foreground">Exclusão:</strong> profissionais do setor bancário e pessoas que não utilizam canais digitais.</p>
            </DcCard>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {RESEARCH_STATS.map((stat) => (
                <DcStatCard key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-accent transition-transform duration-300 group-hover:scale-110">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-2">{stat.label}</p>
                </DcStatCard>
              ))}
            </div>
            <p className="text-xs text-muted-foreground italic">
              Padrões: ansiedade • pouca orientação prática • dificuldade de transformar dados em planejamento
            </p>
          </section>

          {/* Vozes */}
          <section className="space-y-4">
            <DcSectionHeader icon={Quote} title="Vozes da pesquisa" />
            <div className="grid sm:grid-cols-2 gap-4">
              {VOICES.map((voice) => (
                <DcQuoteCard key={voice.author}>
                  <p className="text-sm italic mb-3">&ldquo;{voice.quote}&rdquo;</p>
                  <footer className="text-xs text-accent">{voice.author}</footer>
                </DcQuoteCard>
              ))}
            </div>
          </section>

          {/* Highlights */}
          <section className="space-y-4">
            <DcSectionHeader icon={Lightbulb} title="Highlights & insights" />
            <div className="grid md:grid-cols-3 gap-4">
              <DcCard className="space-y-3">
                <h4 className="text-sm text-accent">Highlights</h4>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Forte relação emocional com o dinheiro</li>
                  <li>• Ansiedade recorrente ao lidar com finanças</li>
                  <li>• Falta de orientação prática para decisões de vida</li>
                  <li>• Dificuldade em transformar dados em planejamento</li>
                </ul>
              </DcCard>
              <DcCard className="space-y-3">
                <h4 className="text-sm text-accent">Insights</h4>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Clientes querem orientação, não apenas controle</li>
                  <li>• Vida financeira e bem-estar emocional estão conectados</li>
                  <li>• O banco pode atuar como facilitador de decisões</li>
                </ul>
              </DcCard>
              <DcHighlightCard className="space-y-3">
                <h4 className="text-sm text-accent">Oportunidade</h4>
                <p className="text-xs text-muted-foreground">
                  Criar uma experiência Beyond Banking que traduza dados financeiros em educação, organização e planejamento, preservando a autonomia do usuário.
                </p>
              </DcHighlightCard>
            </div>
          </section>

          {/* Persona */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl transition-colors duration-300 hover:text-accent/90 cursor-default">Persona</h2>
            <DcCard padding="p-5 sm:p-6" className="space-y-4">
              <div>
                <h3 className="text-xl transition-colors duration-300 group-hover:text-accent/90">Mariana, 32</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Profissional com renda própria e uso frequente do app. Vê saldo, fatura e investimentos, mas sente falta de orientação para transformar essas informações em próximos passos.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: 'Dores', items: ['ansiedade com dinheiro', 'dificuldade para priorizar', 'linguagem complexa'] },
                  { title: 'Objetivos', items: ['organizar o mês', 'criar reserva', 'planejar metas de vida'] },
                  { title: 'Necessidades', items: ['clareza', 'autonomia', 'orientação sem julgamento'] },
                ].map((col) => (
                  <div key={col.title} className="rounded-lg p-3 transition-colors duration-300 hover:bg-accent/[0.04]">
                    <h4 className="text-xs text-accent uppercase mb-2">{col.title}</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {col.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </DcCard>
          </section>

          {/* Mapa de empatia */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl transition-colors duration-300 hover:text-accent/90 cursor-default">Mapa de empatia</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Pensa e sente', text: '“Será que estou usando meu dinheiro da forma certa?” Ansiedade ao tomar decisões.' },
                { title: 'Vê', text: 'Números, produtos e conteúdos; pouca tradução para a própria vida.' },
                { title: 'Fala e faz', text: 'Consulta o app, tenta controlar gastos e pesquisa por conta própria.' },
                { title: 'Ouve', text: 'Recomendações genéricas, opiniões diferentes e termos técnicos.' },
                { title: 'Dores', text: 'Medo de errar • falta de direção • complexidade.' },
                { title: 'Ganhos', text: 'Entender opções • criar um plano • ganhar autonomia e confiança.' },
              ].map((item) => (
                <DcCard key={item.title}>
                  <h4 className="text-sm text-accent mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.text}</p>
                </DcCard>
              ))}
            </div>
          </section>

          {/* Jornada */}
          <section className="space-y-4">
            <DcSectionHeader icon={Route} title="Jornada do usuário" />
            <p className="text-sm text-muted-foreground">Da ansiedade à compreensão, sem retirar a autonomia.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {JOURNEY_STEPS.map((step) => (
                <DcCard key={step.step}>
                  <span className="text-xs text-accent font-mono">{step.step}</span>
                  <h4 className="text-sm font-medium mt-1 mb-2 transition-colors duration-300 group-hover:text-accent/90">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </DcCard>
              ))}
            </div>
            <p className="text-xs text-accent text-center">entender → organizar → planejar → aprender → explorar</p>
          </section>

          {/* Solução */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl transition-colors duration-300 hover:text-accent/90 cursor-default">A solução</h2>
            <p className="text-sm text-muted-foreground">
              Descomplica.AI + Airone: educação, organização e contexto dentro da experiência bancária.
            </p>
            <DcCard padding="p-5 sm:p-6" className="space-y-4">
              <h3 className="text-lg transition-colors duration-300 group-hover:text-accent/90">Airone</h3>
              <p className="text-sm text-muted-foreground">
                Assistente conversacional que explica conceitos, ajuda a organizar objetivos e cria simulações educativas — sem decidir pelo usuário.
              </p>
              <div className="flex flex-wrap gap-2">
                {['EDUCATIVO', 'ACOLHEDOR', 'TRANSPARENTE', 'NÃO JULGADOR', 'RESPONSÁVEL', 'CONVERSACIONAL'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-accent/10 border border-accent/20 rounded text-muted-foreground transition-all duration-300 hover:bg-accent/20 hover:border-accent/40 hover:scale-105 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </DcCard>
          </section>

          {/* IA responsável */}
          <section className="space-y-4">
            <DcSectionHeader icon={Shield} title="IA responsável" />
            <p className="text-sm text-muted-foreground">O assistente orienta e educa; a decisão financeira continua sendo do usuário.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <DcCard className="space-y-3">
                <h4 className="text-sm text-accent flex items-center gap-2"><CheckCircle2 size={16} /> Airone pode</h4>
                <ul className="space-y-2">
                  {AIRONE_CAN.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex gap-2 transition-colors duration-300 group-hover:text-foreground/80"><span className="text-accent">✓</span>{item}</li>
                  ))}
                </ul>
              </DcCard>
              <DcCard className="space-y-3">
                <h4 className="text-sm text-muted-foreground flex items-center gap-2"><XCircle size={16} /> Airone não pode</h4>
                <ul className="space-y-2">
                  {AIRONE_CANNOT.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex gap-2"><span className="text-red-400">×</span>{item}</li>
                  ))}
                </ul>
              </DcCard>
            </div>
          </section>

          {/* Design System */}
          <section className="space-y-4">
            <DcSectionHeader icon={Palette} title="Design System" />
            <p className="text-sm text-muted-foreground">Corporativo-acessível: robustez bancária + leveza conversacional.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {DS_COLORS.map((color) => (
                <div
                  key={color.name}
                  className="group bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 cursor-default"
                >
                  <div className="h-12 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: color.hex }} />
                  <div className="p-2">
                    <p className="text-[10px] font-medium transition-colors duration-300 group-hover:text-accent/90">{color.name}</p>
                    <p className="text-[10px] text-muted-foreground font-mono">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
            <DcCard className="space-y-2 text-xs text-muted-foreground">
              <p><strong className="text-foreground">Tipografia:</strong> Itaú Pro ou equivalente humanist sans • H1 30/800 • H2 19/600 • H3 16/500 • Body 14/400 • Caption 12/400</p>
              <p><strong className="text-foreground">Layout & UI:</strong> Grid desktop 12 colunas • mobile em stack vertical • radius 8/16/20/pill • spacing 4/8/16/24/32/48 • sombras suaves • laranja reservado para ação e destaque.</p>
            </DcCard>
          </section>

          {/* Wireframe desktop */}
          <section className="space-y-4 sm:space-y-6">
            <DcSectionHeader icon={Layout} title="Wireframe · desktop" />
            <p className="text-sm text-muted-foreground">
              Baixa fidelidade para validar estrutura, hierarquia e pontos de entrada do Airone antes da interface final.
            </p>
            <DcCard padding="p-4 sm:p-6" className="space-y-4">
              <div className="flex gap-1.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="text-[10px] text-muted-foreground ml-2">repeat-pin/descomplica-ai</span>
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] text-muted-foreground border-b border-border pb-3">
                {['Itaú', 'início', 'extrato', 'transações', 'pix', 'cartões', 'empréstimos', 'investimentos'].map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-secondary rounded transition-colors duration-300 hover:bg-accent/20 hover:text-accent cursor-default">{item}</span>
                ))}
              </div>
              <div className="grid lg:grid-cols-[1fr_220px] gap-4">
                <div className="space-y-3 p-4 border border-dashed border-border rounded-lg">
                  <p className="text-sm font-medium">Descomplica.AI</p>
                  <p className="text-xs text-muted-foreground">Seu assistente financeiro do Itaú</p>
                  <div className="inline-block px-3 py-1.5 bg-accent/20 border border-accent/30 rounded text-xs">começar agora</div>
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {['visão geral', 'cartões', 'investimentos'].map((card) => (
                      <div key={card} className="h-12 bg-secondary/80 border border-border rounded text-[10px] flex items-center justify-center text-muted-foreground">{card}</div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['educação financeira', 'meus objetivos', 'simulação educativa'].map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-1 border border-dashed border-border rounded text-muted-foreground">• {tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-3 border border-dashed border-accent/30 rounded-lg space-y-2 bg-accent/5">
                  <p className="text-xs text-accent font-medium">Airone · online</p>
                  <div className="h-8 bg-secondary/80 rounded text-[10px] flex items-center px-2 text-muted-foreground">Mensagem de acolhimento</div>
                  <div className="flex flex-wrap gap-1">
                    {['organizar mês', 'reserva', 'entender investimentos'].map((chip) => (
                      <span key={chip} className="text-[9px] px-1.5 py-0.5 bg-secondary rounded">{chip}</span>
                    ))}
                  </div>
                  <div className="h-6 bg-secondary/60 rounded text-[10px] flex items-center px-2 text-muted-foreground">campo de pergunta</div>
                </div>
              </div>
            </DcCard>
            <div className="grid md:grid-cols-2 gap-4">
              <DcCard className="space-y-3">
                <h4 className="text-sm text-accent">Princípios testados</h4>
                <ol className="space-y-2">
                  {WIREFRAME_DESKTOP_PRINCIPLES.map((item, i) => (
                    <li key={item} className="text-xs text-muted-foreground">{i + 1}. {item}</li>
                  ))}
                </ol>
              </DcCard>
              <div className="space-y-4">
                <DcHighlightCard>
                  <h4 className="text-sm text-accent mb-2">Hipótese</h4>
                  <p className="text-xs text-muted-foreground">
                    Usuários entendem melhor a proposta quando a primeira ação é conversar com o Airone e os atalhos ficam como apoio secundário.
                  </p>
                </DcHighlightCard>
                <DcCard>
                  <h4 className="text-sm mb-2">Observação de UX</h4>
                  <p className="text-xs text-muted-foreground">
                    Wireframe usado para discutir hierarquia, fluxo e microcopy antes do refinamento visual.
                  </p>
                </DcCard>
              </div>
            </div>
          </section>

          {/* Wireframe mobile */}
          <section className="space-y-4 sm:space-y-6">
            <DcSectionHeader icon={Smartphone} title="Wireframe · mobile" />
            <p className="text-sm text-muted-foreground">
              Versão mobile em fluxo linear: início, conversa, aprendizado e objetivos em uma navegação simples.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { title: 'Home', items: ['Descomplica.AI', 'começar agora', 'saldo + contexto', 'cards de apoio', 'nav inferior'] },
                { title: 'Airone', items: ['boas-vindas + limite da IA', 'pergunta do usuário', 'resposta educativa', 'chips de próxima ação'] },
                { title: 'Educação', items: ['Reserva de emergência', 'conceito simples', 'risco • liquidez • prazo', 'exemplo educativo'] },
                { title: 'Objetivos', items: ['Meus objetivos', 'Reserva 28%', 'Viagem 10%', 'Curso 20%', '+ adicionar'] },
              ].map((screen) => (
                <DcCard key={screen.title} padding="p-3" className="rounded-xl space-y-2">
                  <div className="mx-auto w-16 h-1 bg-secondary rounded-full mb-2 transition-colors duration-300 group-hover:bg-accent/50" />
                  <p className="text-xs font-medium text-center transition-colors duration-300 group-hover:text-accent/90">{screen.title}</p>
                  <div className="space-y-1.5 min-h-[140px]">
                    {screen.items.map((item) => (
                      <div key={item} className="h-7 bg-secondary/80 border border-dashed border-border rounded text-[9px] flex items-center justify-center text-muted-foreground px-1 text-center transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/[0.04]">
                        {item}
                      </div>
                    ))}
                  </div>
                </DcCard>
              ))}
            </div>
            <DcCard>
              <h4 className="text-sm mb-2">Decisão de interface</h4>
              <p className="text-xs text-muted-foreground">
                No mobile, o conteúdo aparece em etapas curtas para reduzir carga cognitiva e manter o usuário no controle da decisão.
              </p>
            </DcCard>
          </section>

          {/* Protótipo interativo */}
          <section className="space-y-4 sm:space-y-6">
            <DcSectionHeader icon={Smartphone} title="Protótipo interativo" />
            <p className="text-sm text-muted-foreground">
              Protótipo mobile do Descomplica.AI integrado ao app Itaú, com Airone e fluxos de educação financeira. Teste no frame abaixo.
            </p>
            <MobilePrototypeFrame src={PROTOTYPE_URL} title="Descomplica.AI — protótipo mobile interativo" />
            <div className="flex justify-center">
              <a
                href={PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 text-sm"
              >
                Abrir protótipo em tela cheia
                <ExternalLink size={14} />
              </a>
            </div>
          </section>

          {/* Teste de usabilidade */}
          <section className="space-y-4">
            <DcSectionHeader icon={ClipboardCheck} title="Teste heurístico" />
            <p className="text-sm text-muted-foreground">Avaliação heurística / walkthrough especialista da versão publicada do protótipo — etapa anterior ao teste moderado.</p>
            <DcCard className="text-xs text-muted-foreground space-y-2">
              <p><strong className="text-foreground">Escopo:</strong> Versão web publicada + telas desktop/mobile disponíveis.</p>
              <p><strong className="text-foreground">Tarefas:</strong> Entender o propósito do Airone • Iniciar conversa • Explorar educação financeira • Criar/entender plano • Identificar limites da IA</p>
            </DcCard>
            <div className="grid sm:grid-cols-2 gap-3">
              {USABILITY_FINDINGS.map((finding) =>
                finding.type === 'positive' ? (
                  <DcHighlightCard key={finding.title}>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={14} className="text-accent" />
                      <h4 className="text-sm">{finding.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">{finding.desc}</p>
                  </DcHighlightCard>
                ) : (
                  <DcCard key={finding.title}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-400 text-sm">△</span>
                      <h4 className="text-sm">{finding.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">{finding.desc}</p>
                  </DcCard>
                )
              )}
            </div>
          </section>

          {/* Teste moderado */}
          <section className="space-y-4 sm:space-y-6">
            <DcSectionHeader icon={UserCheck} title="Teste moderado com usuários" />
            <p className="text-sm text-muted-foreground">
              Sessões remotas com dados fictícios: 6 participantes do público-alvo, 35 minutos por sessão, protótipo desktop e mobile.
            </p>
            <DcCard className="text-xs text-muted-foreground space-y-1">
              <p><strong className="text-foreground">Amostra:</strong> 6 usuários • 25–47 anos • clientes Itaú ativos • renda própria • uso regular do app</p>
            </DcCard>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {MODERATED_TEST_METRICS.map((metric) => (
                <DcStatCard key={metric.label}>
                  <p className="text-xl sm:text-2xl font-bold text-accent transition-transform duration-300 group-hover:scale-110">{metric.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{metric.label}</p>
                </DcStatCard>
              ))}
            </div>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-xs min-w-[640px]">
                <thead>
                  <tr className="bg-card border-b border-border">
                    <th className="text-left p-3 text-muted-foreground font-normal">Tarefa</th>
                    <th className="text-left p-3 text-muted-foreground font-normal">Sucesso</th>
                    <th className="text-left p-3 text-muted-foreground font-normal">Tempo</th>
                    <th className="text-left p-3 text-muted-foreground font-normal">Erros</th>
                    <th className="text-left p-3 text-muted-foreground font-normal">Comentário</th>
                  </tr>
                </thead>
                <tbody>
                  {MODERATED_TEST_TASKS.map((row) => (
                    <DcTableRow key={row.task}>
                      <td className="p-3">{row.task}</td>
                      <td className="p-3 text-accent">{row.success}</td>
                      <td className="p-3 text-muted-foreground">{row.time}</td>
                      <td className="p-3 text-muted-foreground">{row.errors}</td>
                      <td className="p-3 text-muted-foreground">{row.comment}</td>
                    </DcTableRow>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <DcCard className="space-y-3">
                <h4 className="text-sm text-accent">Principais aprendizados</h4>
                <ul className="space-y-2">
                  {MODERATED_LEARNINGS.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex gap-2">
                      <span className="text-accent">•</span>{item}
                    </li>
                  ))}
                </ul>
              </DcCard>
              <DcCard className="space-y-3">
                <h4 className="text-sm text-accent">Iterações recomendadas</h4>
                <ol className="space-y-2">
                  {MODERATED_ITERATIONS.map((item, i) => (
                    <li key={item} className="text-xs text-muted-foreground">{i + 1}. {item}</li>
                  ))}
                </ol>
              </DcCard>
            </div>
            <p className="text-[10px] text-muted-foreground italic text-center">
              Nota: dados simulados para complementar a apresentação acadêmica.
            </p>
          </section>

          {/* Priorização */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl transition-colors duration-300 hover:text-accent/90 cursor-default">Achados e priorização</h2>
            <div className="space-y-3">
              {PRIORITIES.map((item) => (
                <DcCard key={item.title} className="flex gap-3">
                  <span className="text-xs font-mono text-accent flex-shrink-0 pt-0.5">{item.level}</span>
                  <div>
                    <h4 className="text-sm mb-1 transition-colors duration-300 group-hover:text-accent/90">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </DcCard>
              ))}
            </div>
          </section>

          {/* Iterações */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl transition-colors duration-300 hover:text-accent/90 cursor-default">Teste → achado → iteração</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="bg-card border-b border-border">
                    <th className="text-left p-3 text-muted-foreground font-normal">Antes</th>
                    <th className="text-left p-3 text-accent font-normal">Depois</th>
                  </tr>
                </thead>
                <tbody>
                  {ITERATIONS.map((row) => (
                    <DcTableRow key={row.before}>
                      <td className="p-3 text-muted-foreground">{row.before}</td>
                      <td className="p-3">{row.after}</td>
                    </DcTableRow>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Resultado */}
          <section className="space-y-4">
            <DcSectionHeader icon={Brain} title="Resultado" />
            <DcHighlightCard className="p-6 text-center space-y-4">
              <p className="text-base sm:text-lg italic max-w-xl mx-auto">
                &ldquo;Eu te ajudo a entender e organizar suas possibilidades. A decisão financeira continua sendo sua.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground">
                clareza • educação • autonomia • acessibilidade • confiança
              </p>
            </DcHighlightCard>
          </section>

          {/* Próximos passos */}
          <section className="space-y-4">
            <DcSectionHeader icon={TrendingUp} title="Próximos passos" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {NEXT_STEPS.map((item) => (
                <DcCard key={item.step}>
                  <span className="text-xs text-accent font-mono">{item.step}</span>
                  <h4 className="text-sm font-medium mt-1 mb-2 transition-colors duration-300 group-hover:text-accent/90">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </DcCard>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-6 border-t border-border pb-8">
            <a
              href={PROTOTYPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
            >
              <ExternalLink size={16} />
              Testar protótipo
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
