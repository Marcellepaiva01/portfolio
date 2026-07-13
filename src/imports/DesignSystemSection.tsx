export default function DesignSystemSection() {
  const coresPrincipais = [
    { name: 'Background', hex: '#FFFFFF', bg: 'bg-white', border: 'border-[#e5e7eb]' },
    { name: 'Primary', hex: '#030213', bg: 'bg-[#030213]', border: 'border-[#262626]' },
    { name: 'Muted', hex: '#ECECF0', bg: 'bg-[#ececf0]', border: 'border-[#262626]' },
    { name: 'Accent', hex: '#E9EBEF', bg: 'bg-[#e9ebef]', border: 'border-[#262626]' },
    { name: 'Gray 50', hex: '#F9FAFB', bg: 'bg-[#f9fafb]', border: 'border-[#d1d5dc]' },
  ];

  const coresSemanticas = [
    { name: 'Emerald 500', hex: '#10B981', bg: 'bg-[#10b981]', desc: 'Receitas / Success' },
    { name: 'Emerald 600', hex: '#059669', bg: 'bg-[#096]', desc: 'Botões / Gradientes' },
    { name: 'Red 500', hex: '#EF4444', bg: 'bg-[#ef4444]', desc: 'Despesas / Danger' },
    { name: 'Blue 500', hex: '#3B82F6', bg: 'bg-[#3b82f6]', desc: 'Saldo / Info' },
  ];

  const coresStatus = [
    { name: 'Green 500', hex: '#22C55E', bg: 'bg-[#22c55e]', desc: 'Pago' },
    { name: 'Yellow 500', hex: '#EAB308', bg: 'bg-[#eab308]', desc: 'Pendente' },
    { name: 'Red 500', hex: '#EF4444', bg: 'bg-[#ef4444]', desc: 'Atrasado' },
    { name: 'Blue 500', hex: '#3B82F6', bg: 'bg-[#3b82f6]', desc: 'Agendado' },
  ];

  const typography = [
    { name: 'Heading 1', size: '48px', weight: 'Bold', example: 'Organizei' },
    { name: 'Heading 2', size: '36px', weight: 'Semibold', example: 'Metodologia' },
    { name: 'Body', size: '16px', weight: 'Regular', example: 'Texto do corpo' },
    { name: 'Caption', size: '12px', weight: 'Regular', example: 'Legenda pequena' },
  ];

  const spacing = [
    { name: 'XS', value: '4px' },
    { name: 'SM', value: '8px' },
    { name: 'MD', value: '16px' },
    { name: 'LG', value: '24px' },
    { name: 'XL', value: '32px' },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 w-full overflow-x-hidden">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-3xl font-semibold text-white">Design System</h2>
        <p className="text-sm text-gray-400">
          Sistema de design completo criado para garantir consistência visual e escalabilidade do produto.
        </p>
      </div>

      {/* Color Palette */}
      <div className="space-y-4">
        <h3 className="text-base sm:text-xl font-semibold text-white">Paleta de Cores</h3>
        
        <div>
          <p className="text-sm text-gray-400 mb-3">Cores Principais</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
            {coresPrincipais.map((color, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className={`${color.bg} h-16 sm:h-24 rounded-lg border-2 ${color.border}`}></div>
                <div>
                  <p className="text-xs font-semibold text-white">{color.name}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-3">Cores Semânticas</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
            {coresSemanticas.map((color, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className={`${color.bg} h-16 sm:h-24 rounded-lg border-2 ${color.border}`}></div>
                <div>
                  <p className="text-xs font-semibold text-white">{color.name}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">{color.hex}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">{color.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-3">Cores de Status</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
            {coresStatus.map((color, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className={`${color.bg} h-16 sm:h-24 rounded-lg border-2 ${color.border}`}></div>
                <div>
                  <p className="text-xs font-semibold text-white">{color.name}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">{color.hex}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">{color.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="space-y-4">
        <h3 className="text-base sm:text-xl font-semibold text-white">Tipografia</h3>
        
        <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 sm:p-6 space-y-4">
          {typography.map((type, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 pb-4 border-b border-gray-800 last:border-0 last:pb-0">
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1">{type.name}</p>
                <p className={`text-white ${
                  type.name === 'Heading 1' ? 'text-2xl sm:text-4xl font-bold' :
                  type.name === 'Heading 2' ? 'text-xl sm:text-3xl font-semibold' :
                  type.name === 'Body' ? 'text-base' :
                  'text-xs'
                }`}>
                  {type.example}
                </p>
              </div>
              <div className="flex gap-4 text-xs text-gray-400">
                <span>{type.size}</span>
                <span>{type.weight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing System */}
      <div className="space-y-4">
        <h3 className="text-base sm:text-xl font-semibold text-white">Espaçamento</h3>
        
        <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 sm:p-6">
          <div className="space-y-3">
            {spacing.map((space, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-16 sm:w-20 text-xs text-gray-400">{space.name}</div>
                <div className="flex-1 h-8 bg-white/5 rounded flex items-center px-3">
                  <div className="bg-emerald-500 h-4 rounded" style={{ width: space.value }}></div>
                </div>
                <div className="w-12 text-xs text-gray-400 text-right">{space.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Border Radius */}
      <div className="space-y-4">
        <h3 className="text-base sm:text-xl font-semibold text-white">Border Radius</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 space-y-2 text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-500/20 border-2 border-emerald-500 rounded"></div>
            <p className="text-xs text-white font-semibold">None</p>
            <p className="text-xs text-gray-400">0px</p>
          </div>
          
          <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 space-y-2 text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-500/20 border-2 border-emerald-500 rounded-md"></div>
            <p className="text-xs text-white font-semibold">Small</p>
            <p className="text-xs text-gray-400">8px</p>
          </div>
          
          <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 space-y-2 text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-500/20 border-2 border-emerald-500 rounded-xl"></div>
            <p className="text-xs text-white font-semibold">Medium</p>
            <p className="text-xs text-gray-400">12px</p>
          </div>
          
          <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 space-y-2 text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-500/20 border-2 border-emerald-500 rounded-full"></div>
            <p className="text-xs text-white font-semibold">Full</p>
            <p className="text-xs text-gray-400">999px</p>
          </div>
        </div>
      </div>
    </div>
  );
}