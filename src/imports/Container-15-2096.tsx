import { CheckCircle } from 'lucide-react';

export default function ResultadosSection() {
  const resultados = [
    'Centraliza a vida financeira do autônomo em uma única plataforma',
    'Reduz tempo gasto com gestão financeira em até 70%',
    'Aumenta a precisão na precificação de serviços',
    'Melhora o controle sobre pagamentos pendentes',
    'Facilita a tomada de decisões baseada em dados reais',
    'Integração perfeita entre agenda e finanças',
  ];

  const metricas = [
    { numero: '85%', label: 'Satisfação dos usuários em testes' },
    { numero: '3min', label: 'Tempo médio para registrar uma transação' },
    { numero: '92%', label: 'Dos usuários conseguiram calcular preços corretamente' },
    { numero: '4.8/5', label: 'Avaliação média da interface' },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 w-full">
        <div className="space-y-6 sm:space-y-8 w-full">
          {/* Title */}
          <h2 className="text-xl sm:text-3xl font-semibold text-white">Resultados</h2>

          {/* Lista de resultados */}
          <div className="space-y-3 w-full">
            {resultados.map((resultado, idx) => (
              <div 
                key={idx} 
                className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-3 sm:p-4 flex items-start gap-3 hover:bg-emerald-500/10 transition-colors w-full"
              >
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="text-emerald-500" size={14} />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed flex-1">{resultado}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}