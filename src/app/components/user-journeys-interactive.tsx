import { useState } from 'react';
import { Users } from 'lucide-react';

interface JourneyStep {
  title: string;
  subtitle: string;
  actions: string;
  emotion: string;
  pain: string;
  highlight?: boolean;
}

interface Journey {
  id: string;
  name: string;
  description: string;
  color: string;
  steps: JourneyStep[];
  opportunities: string[];
}

const journeys: Journey[] = [
  {
    id: 'ana-paula',
    name: 'Jornada de Ana Paula',
    description: 'Organizando seus primeiros clientes',
    color: 'emerald',
    steps: [
      {
        title: 'Novo Cliente',
        subtitle: 'Primeiro contato',
        actions: 'Anota dados em papel, combina valor',
        emotion: 'Animada mas insegura 😊😰',
        pain: 'Medo de esquecer informações',
        highlight: true,
      },
      {
        title: 'Agendamento',
        subtitle: 'Marca atendimento',
        actions: 'Registra em agenda de papel',
        emotion: 'Confusa 😕',
        pain: 'Sem lembretes automáticos',
      },
      {
        title: 'Atendimento',
        subtitle: 'Realiza consulta',
        actions: 'Atende, anota observações',
        emotion: 'Focada 😌',
        pain: 'Esquece custos extras',
      },
      {
        title: 'Cobrança',
        subtitle: 'Hora de receber',
        actions: 'Espera ou manda mensagem',
        emotion: 'Constrangida 😰😞',
        pain: 'Vergonha de cobrar',
      },
      {
        title: 'Controle',
        subtitle: 'Registro financeiro',
        actions: 'Anota em caderno',
        emotion: 'Cansada 😫',
        pain: 'Processo manual e lento',
      },
    ],
    opportunities: [
      'Cadastro simples de clientes',
      'Lembretes automáticos',
      'Cobrança sem constrangimento',
      'Registro em um clique',
    ],
  },
  {
    id: 'carlos-eduardo',
    name: 'Jornada de Carlos Eduardo',
    description: 'Otimizando rentabilidade',
    color: 'cyan',
    steps: [
      {
        title: 'Análise',
        subtitle: 'Revisão mensal',
        actions: 'Calcula lucro em planilhas',
        emotion: 'Frustrado 😤',
        pain: 'Não vê lucro real',
        highlight: true,
      },
      {
        title: 'Custos',
        subtitle: 'Identificação',
        actions: 'Tenta mapear custos',
        emotion: 'Confuso 😕',
        pain: 'Custos invisíveis',
      },
      {
        title: 'Decisão',
        subtitle: 'Otimização',
        actions: 'Decide quais clientes manter',
        emotion: 'Inseguro 😰',
        pain: 'Sem dados confiáveis',
      },
      {
        title: 'Ajuste',
        subtitle: 'Precificação',
        actions: 'Reajusta por feeling',
        emotion: 'Receoso 😟',
        pain: 'Medo de perder clientes',
      },
      {
        title: 'Resultado',
        subtitle: 'Acompanhamento',
        actions: 'Monitora se melhorou',
        emotion: 'Sem clareza 😕',
        pain: 'Não sabe se funcionou',
      },
    ],
    opportunities: [
      'Cálculo automático de custos por cliente',
      'Dashboard com lucro líquido real',
      'Alertas de baixa rentabilidade',
      'Relatórios para decisão',
    ],
  },
];

export default function UserJourneysInteractive() {
  const [activeJourneyId, setActiveJourneyId] = useState<string>('ana-paula');
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const activeJourney = journeys.find((j) => j.id === activeJourneyId) || journeys[0];

  const getColorClasses = (color: string, variant: 'bg' | 'border' | 'text' | 'hover') => {
    const colors: Record<string, Record<typeof variant, string>> = {
      emerald: {
        bg: 'bg-emerald-500/20',
        border: 'border-emerald-500/30',
        text: 'text-emerald-400',
        hover: 'hover:bg-emerald-500/30',
      },
      cyan: {
        bg: 'bg-cyan-500/20',
        border: 'border-cyan-500/30',
        text: 'text-cyan-400',
        hover: 'hover:bg-cyan-500/30',
      },
    };
    return colors[color][variant];
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <h2 className="text-3xl font-bold text-white">Jornadas de Usuário</h2>

      {/* Journey Selector */}
      <div className="flex gap-3">
        {journeys.map((journey) => (
          <button
            key={journey.id}
            onClick={() => setActiveJourneyId(journey.id)}
            className={`flex-1 p-3 rounded-lg border transition-all duration-300 ${
              activeJourneyId === journey.id
                ? `${getColorClasses(journey.color, 'bg')} ${getColorClasses(journey.color, 'border')} scale-105`
                : 'bg-white/5 border-white/10 hover:bg-white/10'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activeJourneyId === journey.id ? getColorClasses(journey.color, 'bg') : 'bg-white/10'
                }`}
              >
                <Users size={16} className={activeJourneyId === journey.id ? getColorClasses(journey.color, 'text') : 'text-gray-400'} />
              </div>
              <div className="text-left">
                <h3 className={`text-sm font-semibold ${activeJourneyId === journey.id ? 'text-white' : 'text-gray-300'}`}>
                  {journey.name}
                </h3>
                <p className="text-[10px] text-gray-400">{journey.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Journey Steps */}
      <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 opacity-5 ${getColorClasses(activeJourney.color, 'bg')} transition-opacity duration-500`}
        ></div>

        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30">
            <div className="inline-flex gap-4 min-w-full pb-4">
              {activeJourney.steps.map((step, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`flex-shrink-0 w-[280px] p-5 rounded-lg transition-all duration-300 ${
                    step.highlight
                      ? `${getColorClasses(activeJourney.color, 'bg')} border ${getColorClasses(activeJourney.color, 'border')}`
                      : 'bg-[#1a1a1a] border border-[#262626]'
                  } ${hoveredStep === index ? 'ring-2 ring-white/20 scale-[1.05]' : ''}`}
                >
                  {/* Etapa */}
                  <div className="text-center mb-4 pb-4 border-b border-white/10">
                    <h4 className="text-base font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-xs text-gray-400">{step.subtitle}</p>
                  </div>

                  {/* Ações */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-emerald-400 mb-2">✓ Ações</div>
                    <p className="text-xs text-gray-300 leading-relaxed">{step.actions}</p>
                  </div>

                  {/* Emoção */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-red-400 mb-2">❤️ Emoção</div>
                    <p className="text-xs text-gray-300 leading-relaxed">{step.emotion}</p>
                  </div>

                  {/* Dor */}
                  <div>
                    <div className="text-xs font-semibold text-amber-400 mb-2">⚠️ Dor</div>
                    <p className="text-xs text-gray-300 leading-relaxed">{step.pain}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div
            className={`mt-6 p-5 rounded-lg border transition-all duration-500 ${getColorClasses(activeJourney.color, 'bg')} ${getColorClasses(activeJourney.color, 'border')}`}
          >
            <h4 className={`text-sm font-semibold mb-3 ${getColorClasses(activeJourney.color, 'text')}`}>
              💡 Oportunidades:
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {activeJourney.opportunities.map((opp, index) => (
                <li
                  key={index}
                  className="text-xs text-gray-300 flex items-start gap-2"
                >
                  <span className={getColorClasses(activeJourney.color, 'text')}>•</span>
                  {opp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}