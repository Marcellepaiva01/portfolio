import svgPaths from '@/imports/svg-vfwp2z0slh';
import MobileNavigation from '@/imports/App-45-726';
import ButtonNovoAgendamento from '@/imports/Button';
import ButtonNovaTransacao from '@/imports/Container-48-1012';
import AgendamentoCard from '@/imports/Container-48-938';
import CalculadoraCard from '@/imports/Container-48-944';

export default function ComponentLibrarySection() {
  return (
    <div className="space-y-6 sm:space-y-8 w-full overflow-x-hidden">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-3xl font-semibold text-white">Biblioteca de Componentes</h2>
        <p className="text-sm text-gray-400">
          Componentes reutilizáveis desenvolvidos para construir a interface de forma consistente e eficiente.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Dashboard Cards */}
        <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 sm:p-6 space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-white">📊 Dashboard Cards</h3>
          
          {/* Mobile cards version */}
          <div className="space-y-3">
            <div className="bg-gradient-to-br from-[#00bc7d] to-[#096] rounded-2xl p-4 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm text-green-100">Total de Receitas</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d="M10 3v14M17 10H3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-white">R$ 320.00</p>
            </div>

            <div className="bg-gradient-to-br from-[#fb2c36] to-[#e7000b] rounded-2xl p-4 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm text-red-100">Total de Despesas</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d="M10 3v14M17 10H3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-white">R$ 75.00</p>
            </div>

            <div className="bg-gradient-to-br from-[#2b7fff] to-[#155dfc] rounded-2xl p-4 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm text-blue-100">Saldo</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d="M10 3v14M17 10H3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-white">R$ 245.00</p>
            </div>
          </div>

          {/* Small cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="bg-white border border-gray-200 rounded-xl p-3 space-y-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M8 2v12M14 8H2" stroke="#009966" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-600">Receitas</p>
                <p className="text-sm sm:text-base font-bold text-green-600">R$ 0.00</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-3 space-y-2">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M8 2v12M14 8H2" stroke="#e7000b" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-600">Despesas</p>
                <p className="text-sm sm:text-base font-bold text-red-600">R$ 25.00</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-3 space-y-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M8 2v12M14 8H2" stroke="#155dfc" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-600">Saldo</p>
                <p className="text-sm sm:text-base font-bold text-blue-600">R$ -25.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 sm:p-6 space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-white">📝 Campos de Entrada</h3>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs text-gray-400">Descrição</label>
              <input 
                type="text" 
                placeholder="Ex: Consulta online" 
                className="w-full bg-[#1a1a1a] border border-[#262626] rounded-lg px-4 py-2.5 text-sm text-gray-400 placeholder:text-gray-600"
                readOnly
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-gray-400">Valor</label>
              <input 
                type="text" 
                placeholder="R$ 0,00" 
                className="w-full bg-[#1a1a1a] border border-[#262626] rounded-lg px-4 py-2.5 text-sm text-gray-400 placeholder:text-gray-600"
                readOnly
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-gray-400">Data</label>
              <div className="w-full bg-[#1a1a1a] border border-[#262626] rounded-lg px-4 py-2.5 text-sm text-gray-600 h-[42px]"></div>
            </div>
          </div>
        </div>

        {/* Buttons & Calendar */}
        <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 sm:p-6 space-y-4 lg:col-span-2">
          <h3 className="text-base sm:text-lg font-semibold text-white">🔘 Botões e Calendário</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date filter card */}
            <div className="bg-gradient-to-br from-[#00bc7d] to-[#096] rounded-2xl p-4 shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/80">Data selecionada</p>
                  <p className="text-base sm:text-lg font-bold text-white">22 de janeiro de 2026</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button className="px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs sm:text-sm text-white transition-colors">
                  ← Anterior
                </button>
                <button className="px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs sm:text-sm text-white transition-colors">
                  Próximo →
                </button>
                <button className="px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm text-white transition-colors">
                  📅
                </button>
              </div>
            </div>

            {/* Navigation example */}
            
            {/* Imported Buttons */}
            <div className="space-y-4">
              <div className="space-y-3">
                <p className="text-xs text-gray-400">Botão Novo Agendamento</p>
                <div className="w-full max-w-[250px] h-[36px]">
                  <ButtonNovoAgendamento />
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-xs text-gray-400">Botão Nova Transação</p>
                <div className="w-full max-w-[250px] h-[36px]">
                  <ButtonNovaTransacao />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}