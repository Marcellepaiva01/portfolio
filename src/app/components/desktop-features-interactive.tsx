import { useState } from 'react';
import { Calendar, BarChart3, Bell, Zap, ExternalLink, ChevronRight, CheckCircle } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  color: string;
}

const features: Feature[] = [
  {
    id: 'dashboard',
    title: 'Dashboard Principal',
    description: 'Visão geral completa com métricas financeiras, próximos atendimentos e alertas importantes. Design clean com cartões informativos e acesso rápido às funcionalidades principais.',
    icon: <BarChart3 size={24} />,
    details: [
      'Saldo do mês atual',
      'Gráfico de receitas vs despesas',
      'Lista de próximos atendimentos',
      'Alertas de pagamentos pendentes',
    ],
    color: 'emerald',
  },
  {
    id: 'agenda',
    title: 'Agenda Integrada',
    description: 'Calendário completo com visualização mensal e semanal, integrado ao sistema financeiro para tracking automático de pagamentos.',
    icon: <Calendar size={24} />,
    details: [
      'Visualização de calendário',
      'Status de pagamento por atendimento',
      'Informações detalhadas do cliente',
      'Registro rápido de atendimento',
    ],
    color: 'emerald',
  },
  {
    id: 'registro',
    title: 'Registro Rápido',
    description: 'Registre atendimentos e pagamentos em poucos toques',
    icon: <Zap size={24} />,
    details: [
      'Interface simplificada',
      'Formulário otimizado',
      'Salvamento instantâneo',
      'Histórico automático',
    ],
    color: 'emerald',
  },
  {
    id: 'notificacoes',
    title: 'Notificações Smart',
    description: 'Lembretes automáticos de atendimentos e cobranças',
    icon: <Bell size={24} />,
    details: [
      'Alertas personalizados',
      'Lembretes programáveis',
      'Notificações push',
      'Central de avisos',
    ],
    color: 'emerald',
  },
  {
    id: 'relatorios',
    title: 'Relatórios Visuais',
    description: 'Dashboards com lucro líquido e análise por cliente',
    icon: <BarChart3 size={24} />,
    details: [
      'Gráficos interativos',
      'Exportação de dados',
      'Análise por período',
      'Métricas customizadas',
    ],
    color: 'emerald',
  },
];

export default function DesktopFeaturesInteractive() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const mainFeatures = features.slice(0, 2);
  const additionalFeatures = features.slice(2, 5);

  return (
    <div className="space-y-8">
      {/* Title */}
      <h3 className="text-2xl font-semibold text-white">Funcionalidades Principais</h3>
      
      {/* Main Features Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {mainFeatures.map((feature) => (
          <div
            key={feature.id}
            onMouseEnter={() => setHoveredCard(feature.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setSelectedFeature(selectedFeature === feature.id ? null : feature.id)}
            className={`bg-[#121212] border border-[#262626] rounded-lg p-6 cursor-pointer transition-all duration-300 ${
              hoveredCard === feature.id ? 'border-emerald-500/50 transform scale-[1.02] shadow-lg shadow-emerald-500/10' : ''
            } ${
              selectedFeature === feature.id ? 'ring-2 ring-emerald-500/50' : ''
            }`}
          >
            <div className="space-y-5">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === feature.id ? 'bg-emerald-500/30 scale-110' : ''
                  }`}>
                    <div className="text-emerald-400">{feature.icon}</div>
                  </div>
                  <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                </div>
                <ChevronRight
                  size={20}
                  className={`text-gray-400 transition-transform duration-300 ${
                    selectedFeature === feature.id ? 'rotate-90 text-emerald-400' : ''
                  }`}
                />
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>

              {/* Details List - Expandable */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  selectedFeature === feature.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 border-t border-gray-800 space-y-2">
                  {feature.details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs text-gray-300 animate-fadeIn"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Features - Horizontal Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {additionalFeatures.map((feature) => (
          <div
            key={feature.id}
            onMouseEnter={() => setHoveredCard(feature.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`bg-[#121212] border border-[#262626] rounded-lg p-5 transition-all duration-300 ${
              hoveredCard === feature.id ? 'border-emerald-500/50 transform scale-105 shadow-lg shadow-emerald-500/10' : ''
            }`}
          >
            <div className="space-y-3">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center transition-all duration-300 ${
                hoveredCard === feature.id ? 'bg-emerald-500/30 scale-110' : ''
              }`}>
                <div className="text-emerald-400">{feature.icon}</div>
              </div>

              {/* Title */}
              <h4 className="text-sm font-semibold text-white">{feature.title}</h4>

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner - Site Funcionando */}
      <div className="relative bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-lg p-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center space-y-4">
          {/* Emoji Icon */}
          <div className="inline-block text-5xl animate-bounce">🚀</div>
          
          {/* Title */}
          <h3 className="text-xl font-semibold text-white">Site Funcionando</h3>
          
          {/* Description */}
          <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Aplicação web totalmente funcional desenvolvida com Figma Make e Supabase. Explore todas as funcionalidades, 
            incluindo cadastro de clientes, agendamentos, controle financeiro e relatórios em tempo real.
          </p>

          {/* CTA Button */}
          <a
            href="https://shown-elude-39515076.figma.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/20"
          >
            Acessar Site Funcionando
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
