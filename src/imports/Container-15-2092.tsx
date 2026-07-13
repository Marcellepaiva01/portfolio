export default function SolucaoDesenvolvidaSection() {
  const decisoesUX = [
    'Fluxos curtos e objetivos para registro rápido',
    'Dashboard com visão geral em cartões coloridos para rápida identificação',
    'Calculadora de precificação embutida com orientações contextuais',
    'Sincronização com Google Calendar para evitar duplicação de dados',
  ];

  const decisoesUI = [
    'Design system robusto com componentes reutilizáveis',
    'Paleta verde transmitindo crescimento e saúde financeira',
    'Interface dark para reduzir fadiga visual durante uso prolongado',
    'Iconografia consistente e intuitiva',
  ];

  const funcionalidades = [
    { titulo: 'Dashboard Financeiro', desc: 'Visão unificada de receitas, despesas e saldo' },
    { titulo: 'Agenda Integrada', desc: 'Sincronização com calendários e gestão de atendimentos' },
    { titulo: 'Calculadora Inteligente', desc: 'Precificação baseada em custos reais' },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 w-full">
        <div className="space-y-6 sm:space-y-8 w-full">
          {/* Title */}
          <h2 className="text-xl sm:text-3xl font-semibold text-white">Solução Desenvolvida</h2>
          
          {/* Description */}
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Com base nas pesquisas e priorização, desenvolvi uma plataforma que integra agenda e controle financeiro em uma única interface, automatizando processos e fornecendo visibilidade clara sobre a saúde financeira do profissional autônomo.
          </p>

          {/* UX/UI Decisions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
            {/* Decisões de UX */}
            <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 sm:p-6 w-full">
              <h3 className="text-base sm:text-lg font-semibold text-emerald-500 mb-4">Decisões de UX</h3>
              <ul className="space-y-2 sm:space-y-3 w-full">
                {decisoesUX.map((decisao, idx) => (
                  <li key={idx} className="flex gap-2 sm:gap-3 items-start w-full">
                    <span className="text-emerald-500 shrink-0 mt-0.5">•</span>
                    <span className="text-sm text-gray-300 leading-relaxed flex-1">{decisao}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decisões de UI */}
            <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 sm:p-6 w-full">
              <h3 className="text-base sm:text-lg font-semibold text-emerald-500 mb-4">Decisões de UI</h3>
              <ul className="space-y-2 sm:space-y-3 w-full">
                {decisoesUI.map((decisao, idx) => (
                  <li key={idx} className="flex gap-2 sm:gap-3 items-start w-full">
                    <span className="text-emerald-500 shrink-0 mt-0.5">•</span>
                    <span className="text-sm text-gray-300 leading-relaxed flex-1">{decisao}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Funcionalidades Principais */}
          <div className="w-full">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Funcionalidades Principais</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
              {funcionalidades.map((func, idx) => (
                <div key={idx} className="bg-[#121212] border border-[#262626] rounded-xl p-4 hover:border-emerald-500/50 transition-colors w-full">
                  <h4 className="text-sm font-semibold text-white mb-1">{func.titulo}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{func.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}