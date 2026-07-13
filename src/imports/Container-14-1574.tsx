import { AlertCircle, Target, Lightbulb } from 'lucide-react';

export default function PrincipaisDescobertas() {
  const dores = [
    'Falta de cálculo preciso de custos e lucros reais',
    'Dificuldade em acompanhar pagamentos pendentes',
    'Desorganização na gestão de múltiplos clientes',
    'Perda de tempo com planilhas manuais',
  ];

  const necessidades = [
    'Visualização clara de receitas e despesas',
    'Cálculo automatizado de precificação justa',
    'Gestão integrada de agenda e clientes',
    'Relatórios financeiros simples e acessíveis',
  ];

  const oportunidades = [
    'Integração com calendários existentes',
    'Dashboard personalizado por tipo de profissional',
    'Notificações automáticas de pagamentos',
    'Educação financeira contextualizada',
  ];

  return (
    <div className="space-y-6 sm:space-y-8 w-full overflow-x-hidden">
      <h2 className="text-xl sm:text-3xl font-semibold text-white">Principais Descobertas</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Dores Identificadas */}
        <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <AlertCircle className="text-red-500 shrink-0" size={20} />
            <h3 className="text-base sm:text-lg font-semibold text-white">Dores Identificadas</h3>
          </div>
          <ul className="space-y-2 sm:space-y-3">
            {dores.map((dor, idx) => (
              <li key={idx} className="flex gap-2 sm:gap-3 text-sm text-gray-300">
                <span className="text-red-500 shrink-0">•</span>
                <span>{dor}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Necessidades */}
        <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <Target className="text-emerald-500 shrink-0" size={20} />
            <h3 className="text-base sm:text-lg font-semibold text-white">Necessidades</h3>
          </div>
          <ul className="space-y-2 sm:space-y-3">
            {necessidades.map((necessidade, idx) => (
              <li key={idx} className="flex gap-2 sm:gap-3 text-sm text-gray-300">
                <span className="text-emerald-500 shrink-0">•</span>
                <span>{necessidade}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Oportunidades */}
        <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <Lightbulb className="text-yellow-500 shrink-0" size={20} />
            <h3 className="text-base sm:text-lg font-semibold text-white">Oportunidades</h3>
          </div>
          <ul className="space-y-2 sm:space-y-3">
            {oportunidades.map((oportunidade, idx) => (
              <li key={idx} className="flex gap-2 sm:gap-3 text-sm text-gray-300">
                <span className="text-yellow-500 shrink-0">•</span>
                <span>{oportunidade}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
