import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface FlowStep {
  id: string;
  emoji: string;
  title: string;
  description: string;
  actions: string[];
  color?: string;
}

const flowSteps: FlowStep[] = [
  {
    id: 'agendamento',
    emoji: '📅',
    title: 'Agendamento',
    description: 'Calendário',
    actions: ['Criar agendamento', 'Ver calendário', 'Notificações de clientes'],
    color: 'gray',
  },
  {
    id: 'transacoes',
    emoji: '💰',
    title: 'Transações',
    description: 'Despesas/Lucros',
    actions: ['Adicionar despesa', 'Registrar lucro', 'Vincular com agenda'],
    color: 'gray',
  },
  {
    id: 'relatorios',
    emoji: '📈',
    title: 'Relatórios',
    description: 'Análises',
    actions: ['Gráficos de lucro/despesa', 'Exportar dados', 'Análise por período'],
    color: 'gray',
  },
  {
    id: 'calculadora',
    emoji: '🧮',
    title: 'Calculadora',
    description: '% Vendas',
    actions: ['Calcular preço', 'Simular lucro'],
    color: 'gray',
  },
];

export default function FlowchartInteractive() {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);

  const toggleStep = (stepId: string) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Fluxograma Principal</h2>
        <p className="text-sm text-gray-400">
          Fluxo de navegação do aplicativo Organizei com as principais funcionalidades do sistema.
        </p>
      </div>

      {/* Flowchart */}
      <div className="relative space-y-6">
        {/* Step 1: Login/Cadastro */}
        <div className="w-full">
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-sm font-semibold text-emerald-400 text-center">Login / Cadastro</p>
          </div>
          {/* Connector line */}
          <div className="w-px h-6 bg-emerald-500/50 mx-auto"></div>
        </div>

        {/* Step 2: Dashboard */}
        <div className="w-full">
          <div className="bg-emerald-500 rounded-lg p-5 shadow-lg shadow-emerald-500/20">
            <p className="text-sm font-semibold text-black text-center">📊 Dashboard</p>
            <p className="text-xs text-black/80 text-center mt-1">
              Visão geral • Saldo total • Resumo financeiro
            </p>
          </div>
          {/* Connector line */}
          <div className="w-px h-6 bg-gray-600 mx-auto"></div>
        </div>

        {/* Step 3: Main Features Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {flowSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Main Feature Card */}
              <div
                onClick={() => toggleStep(step.id)}
                className={`bg-[#1a1a1a] border border-[#262626] rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                  expandedStep === step.id
                    ? 'ring-2 ring-emerald-500/50 border-emerald-500/30'
                    : 'hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-semibold text-white">
                    {step.emoji} {step.title}
                  </p>
                  {expandedStep === step.id ? (
                    <ChevronDown size={14} className="text-emerald-400" />
                  ) : (
                    <ChevronRight size={14} className="text-gray-400" />
                  )}
                </div>
                <p className="text-[9px] text-gray-400 text-center">{step.description}</p>
              </div>

              {/* Expanded Actions */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedStep === step.id ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-2">
                  {step.actions.map((action, actionIndex) => (
                    <div
                      key={actionIndex}
                      onMouseEnter={() => setHoveredAction(`${step.id}-${actionIndex}`)}
                      onMouseLeave={() => setHoveredAction(null)}
                      className={`bg-emerald-500/5 border border-emerald-500/20 rounded p-2 transition-all duration-300 ${
                        hoveredAction === `${step.id}-${actionIndex}`
                          ? 'bg-emerald-500/10 border-emerald-500/40 transform scale-105'
                          : ''
                      }`}
                    >
                      <p className="text-[9px] text-gray-300 text-center">{action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Info - Agenda → Relatórios */}
        <div className="relative">
          <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-emerald-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">📅</span>
                </div>
                <p className="text-xs font-semibold text-white">Agenda</p>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="h-px w-20 bg-emerald-500/30"></div>
                <div className="text-emerald-400 text-xs font-semibold">↔️</div>
                <div className="h-px w-20 bg-emerald-500/30"></div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">📈</span>
                </div>
                <p className="text-xs font-semibold text-white">Relatórios</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center mt-4">
              Os agendamentos da agenda são automaticamente vinculados aos relatórios de lucro e despesas
            </p>
          </div>
        </div>

        {/* Notification System */}
        <div className="relative">
          <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-2xl">🔔</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white mb-2">Sistema de Notificações</h3>
                <p className="text-xs text-gray-400 mb-4">
                  O aplicativo notifica automaticamente quando há clientes marcados na agenda
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded p-3 hover:bg-emerald-500/10 transition-all">
                    <p className="text-xs text-gray-300">✓ Lembrete de atendimento</p>
                  </div>
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded p-3 hover:bg-emerald-500/10 transition-all">
                    <p className="text-xs text-gray-300">✓ Alertas de pagamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Instructions */}
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-400">
            💡 <span className="text-emerald-400 font-semibold">Clique</span> nos cards principais para expandir as ações disponíveis
          </p>
        </div>
      </div>
    </div>
  );
}