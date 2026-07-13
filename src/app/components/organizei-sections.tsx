import { CheckCircle, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function DesignSystemSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl">Design System</h2>
      <p className="text-sm text-muted-foreground">
        Sistema de design completo criado para garantir consistência visual e escalabilidade do produto.
      </p>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-xl">Paleta de Cores</h3>
        
        {/* Primary Colors */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Cores Principais</h4>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="w-full h-24 rounded-lg bg-white border-2 border-gray-200"></div>
              <div className="text-xs">
                <div className="font-semibold">Background</div>
                <div className="text-muted-foreground">#FFFFFF</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-lg border border-border" style={{ backgroundColor: '#030213' }}></div>
              <div className="text-xs">
                <div className="font-semibold">Primary</div>
                <div className="text-muted-foreground">#030213</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-lg border border-border" style={{ backgroundColor: '#ececf0' }}></div>
              <div className="text-xs">
                <div className="font-semibold">Muted</div>
                <div className="text-muted-foreground">#ECECF0</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-lg border border-border" style={{ backgroundColor: '#e9ebef' }}></div>
              <div className="text-xs">
                <div className="font-semibold">Accent</div>
                <div className="text-muted-foreground">#E9EBEF</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-lg bg-gray-50 border border-gray-300"></div>
              <div className="text-xs">
                <div className="font-semibold">Gray 50</div>
                <div className="text-muted-foreground">#F9FAFB</div>
              </div>
            </div>
          </div>
        </div>

        {/* Semantic Colors */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Cores Semânticas (Aplicação)</h4>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-24 rounded-lg bg-emerald-500 border border-border"></div>
              <div className="text-xs">
                <div className="font-semibold">Emerald 500</div>
                <div className="text-muted-foreground">#10B981</div>
                <div className="text-[10px] text-muted-foreground mt-1">Receitas / Success</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-lg bg-emerald-600 border border-border"></div>
              <div className="text-xs">
                <div className="font-semibold">Emerald 600</div>
                <div className="text-muted-foreground">#059669</div>
                <div className="text-[10px] text-muted-foreground mt-1">Botões / Gradientes</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-lg bg-red-500 border border-border"></div>
              <div className="text-xs">
                <div className="font-semibold">Red 500</div>
                <div className="text-muted-foreground">#EF4444</div>
                <div className="text-[10px] text-muted-foreground mt-1">Despesas / Danger</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-lg bg-blue-500 border border-border"></div>
              <div className="text-xs">
                <div className="font-semibold">Blue 500</div>
                <div className="text-muted-foreground">#3B82F6</div>
                <div className="text-[10px] text-muted-foreground mt-1">Saldo / Info</div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Colors */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Cores de Status</h4>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-24 rounded-lg bg-green-500 border border-border"></div>
              <div className="text-xs">
                <div className="font-semibold">Green 500</div>
                <div className="text-muted-foreground">#22C55E</div>
                <div className="text-[10px] text-muted-foreground mt-1">Pago</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-lg bg-yellow-500 border border-border"></div>
              <div className="text-xs">
                <div className="font-semibold">Yellow 500</div>
                <div className="text-muted-foreground">#EAB308</div>
                <div className="text-[10px] text-muted-foreground mt-1">Pendente</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-lg bg-red-500 border border-border"></div>
              <div className="text-xs">
                <div className="font-semibold">Red 500</div>
                <div className="text-muted-foreground">#EF4444</div>
                <div className="text-[10px] text-muted-foreground mt-1">Atrasado</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-lg bg-blue-500 border border-border"></div>
              <div className="text-xs">
                <div className="font-semibold">Blue 500</div>
                <div className="text-muted-foreground">#3B82F6</div>
                <div className="text-[10px] text-muted-foreground mt-1">Agendado</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="space-y-4">
        <h3 className="text-xl">Tipografia</h3>
        <div className="p-6 bg-card rounded-lg border border-border space-y-4">
          <div>
            <div className="text-4xl mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Arial</div>
            <p className="text-sm text-muted-foreground">Fonte principal para interface e corpo de texto</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-2xl mb-1">Heading 1</div>
              <div className="text-xs text-muted-foreground">32px / Bold / 40px line-height</div>
            </div>
            <div>
              <div className="text-xl mb-1">Heading 2</div>
              <div className="text-xs text-muted-foreground">24px / Semibold / 32px line-height</div>
            </div>
            <div>
              <div className="text-base mb-1">Body</div>
              <div className="text-xs text-muted-foreground">16px / Regular / 24px line-height</div>
            </div>
            <div>
              <div className="text-sm mb-1">Caption</div>
              <div className="text-xs text-muted-foreground">14px / Regular / 20px line-height</div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing */}
      <div className="space-y-4">
        <h3 className="text-xl">Espaçamento</h3>
        <div className="p-6 bg-card rounded-lg border border-border">
          <div className="flex items-end gap-3">
            <div className="text-center">
              <div className="w-2 h-8 bg-accent mb-2"></div>
              <div className="text-xs">4px</div>
            </div>
            <div className="text-center">
              <div className="w-4 h-12 bg-accent mb-2"></div>
              <div className="text-xs">8px</div>
            </div>
            <div className="text-center">
              <div className="w-6 h-16 bg-accent mb-2"></div>
              <div className="text-xs">12px</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-20 bg-accent mb-2"></div>
              <div className="text-xs">16px</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-24 bg-accent mb-2"></div>
              <div className="text-xs">24px</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-32 bg-accent mb-2"></div>
              <div className="text-xs">32px</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-40 bg-accent mb-2"></div>
              <div className="text-xs">48px</div>
            </div>
          </div>
        </div>
      </div>

      {/* Border Radius */}
      <div className="space-y-4">
        <h3 className="text-xl">Cantos Arredondados</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 bg-card border border-border rounded-sm text-center">
            <div className="text-xs text-muted-foreground">Small / 4px</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-md text-center">
            <div className="text-xs text-muted-foreground">Medium / 8px</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg text-center">
            <div className="text-xs text-muted-foreground">Large / 12px</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-full text-center">
            <div className="text-xs text-muted-foreground">Full / 9999px</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ComponentLibrarySection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl">Biblioteca de Componentes</h2>
      <p className="text-sm text-muted-foreground">
        Componentes reutilizáveis desenvolvidos para construir a interface de forma consistente e eficiente.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Dashboard Cards */}
        <div className="p-6 bg-card rounded-lg border border-border space-y-4">
          <h3 className="text-lg">📊 Dashboard Cards</h3>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-xs text-gray-600 mb-1">Saldo Total</div>
              <div className="text-xl font-bold text-blue-600">R$ 12.450,00</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-xs text-emerald-600 mb-1">Receitas</div>
              <div className="text-xl font-bold text-emerald-600">R$ 8.200,00</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-xs text-red-600 mb-1">Despesas</div>
              <div className="text-xl font-bold text-red-600">R$ 3.500,00</div>
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="p-6 bg-card rounded-lg border border-border space-y-4">
          <h3 className="text-lg">📝 Campos de Entrada</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Descrição</label>
              <input 
                type="text" 
                placeholder="Ex: Consulta online" 
                className="w-full px-4 py-2.5 bg-secondary border border-border rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Valor</label>
              <input 
                type="text" 
                placeholder="R$ 0,00" 
                className="w-full px-4 py-2.5 bg-secondary border border-border rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Data</label>
              <input 
                type="date" 
                className="w-full px-4 py-2.5 bg-secondary border border-border rounded-lg text-sm"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="p-6 bg-card rounded-lg border border-border space-y-4">
          <h3 className="text-lg">🔘 Botões</h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-sm hover:opacity-90 transition-opacity">
              ➕ Adicionar Transação
            </button>
            <button className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 rounded-lg text-sm font-medium flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition-colors">
              📅 Agendar Consulta
            </button>
            <button className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
              📊 Ver Relatórios
            </button>
          </div>
          
          {/* Navigation Icons - Mobile Bottom Bar */}
          <div className="mt-6 pt-4 border-t border-border">
            <h4 className="text-xs font-semibold mb-3 text-muted-foreground">Navegação Mobile</h4>
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-3 shadow-lg">
              <div className="grid grid-cols-5 gap-2">
                <div className="flex flex-col items-center py-2 text-emerald-50">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mb-1">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[9px] font-semibold">Início</span>
                </div>
                <div className="flex flex-col items-center py-2 text-emerald-50">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mb-1">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-[9px] font-semibold">Agenda</span>
                </div>
                <div className="flex flex-col items-center py-2 text-emerald-50">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mb-1">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[9px] font-semibold">Relatórios</span>
                </div>
                <div className="flex flex-col items-center py-2 text-emerald-50">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mb-1">
                    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-[9px] font-semibold">Calc</span>
                </div>
                <div className="flex flex-col items-center py-2 text-emerald-50">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mb-1">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[9px] font-semibold">Perfil</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction List Item */}
        <div className="p-6 bg-card rounded-lg border border-border space-y-4">
          <h3 className="text-lg">📋 Item de Transação</h3>
          <div className="space-y-3">
            <div className="p-3 bg-secondary rounded-lg border border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-500">💰</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Consulta online</div>
                  <div className="text-xs text-muted-foreground">15/01/2026</div>
                </div>
              </div>
              <div className="text-sm font-semibold text-green-500">+R$ 150,00</div>
            </div>
            <div className="p-3 bg-secondary rounded-lg border border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-red-500">💸</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Combustível</div>
                  <div className="text-xs text-muted-foreground">14/01/2026</div>
                </div>
              </div>
              <div className="text-sm font-semibold text-red-500">-R$ 85,00</div>
            </div>
          </div>
        </div>

        {/* Calendar Component */}
        <div className="p-6 bg-card rounded-lg border border-border space-y-4">
          <h3 className="text-lg">📅 Calendário</h3>
          <div className="space-y-3">
            <div className="grid grid-cols-7 gap-1 text-center">
              {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
                <div key={i} className="text-xs text-muted-foreground py-2">{day}</div>
              ))}
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <div key={num} className="text-xs py-2 bg-secondary rounded">{num}</div>
              ))}
            </div>
            <div className="p-3 bg-accent/10 rounded-lg border border-accent/30">
              <div className="text-xs text-accent mb-1">Agendamento</div>
              <div className="text-sm font-medium">10:00 - Consulta domiciliar</div>
            </div>
          </div>
        </div>

        {/* Calculator Component */}
        <div className="p-6 bg-card rounded-lg border border-border space-y-4">
          <h3 className="text-lg">🧮 Calculadora</h3>
          <div className="space-y-3">
            <div className="p-4 bg-secondary rounded-lg border border-border">
              <div className="text-xs text-muted-foreground mb-2">Valor base</div>
              <input 
                type="text" 
                placeholder="R$ 100,00" 
                className="w-full px-3 py-2 bg-card border border-border rounded text-sm mb-3"
              />
              <div className="text-xs text-muted-foreground mb-2">Porcentagem</div>
              <input 
                type="text" 
                placeholder="20%" 
                className="w-full px-3 py-2 bg-card border border-border rounded text-sm mb-3"
              />
              <div className="pt-3 border-t border-border">
                <div className="text-xs text-muted-foreground">Resultado</div>
                <div className="text-lg font-semibold text-accent">R$ 120,00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Icons Library */}
        <div className="p-6 bg-card rounded-lg border border-border space-y-4">
          <h3 className="text-lg">🎨 Biblioteca de Ícones</h3>
          <div className="grid grid-cols-5 gap-3 text-center">
            <div className="p-3 bg-secondary rounded-lg">
              <div className="text-2xl mb-1">📊</div>
              <div className="text-[9px] text-muted-foreground">Dashboard</div>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <div className="text-2xl mb-1">📅</div>
              <div className="text-[9px] text-muted-foreground">Agenda</div>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <div className="text-2xl mb-1">💰</div>
              <div className="text-[9px] text-muted-foreground">Transações</div>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <div className="text-2xl mb-1">📈</div>
              <div className="text-[9px] text-muted-foreground">Relatórios</div>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <div className="text-2xl mb-1">🧮</div>
              <div className="text-[9px] text-muted-foreground">Calculadora</div>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <div className="text-2xl mb-1">💸</div>
              <div className="text-[9px] text-muted-foreground">Despesa</div>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <div className="text-2xl mb-1">💵</div>
              <div className="text-[9px] text-muted-foreground">Lucro</div>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <div className="text-2xl mb-1">⛽</div>
              <div className="text-[9px] text-muted-foreground">Combustível</div>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <div className="text-2xl mb-1">✅</div>
              <div className="text-[9px] text-muted-foreground">Confirmar</div>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <div className="text-2xl mb-1">❌</div>
              <div className="text-[9px] text-muted-foreground">Cancelar</div>
            </div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="p-6 bg-card rounded-lg border border-border space-y-4">
          <h3 className="text-lg">🏷️ Indicadores de Status</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Pago</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Pendente</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm">Atrasado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Agendado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppScreensSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl">Aplicativo Desenvolvido</h2>
      <p className="text-sm text-muted-foreground">
        Interface mobile criada no Figma Make com foco em usabilidade e eficiência para o dia a dia do profissional.
      </p>

      {/* Technologies Stack */}
      <div className="p-6 bg-accent/5 rounded-lg border border-accent/30">
        <h3 className="text-lg font-semibold mb-4 text-accent">Stack Tecnológica</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <span className="text-xl">🎨</span>
            </div>
            <div>
              <div className="text-sm font-semibold">Figma</div>
              <div className="text-xs text-muted-foreground">Design & Prototipação</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>
            <div>
              <div className="text-sm font-semibold">Figma Make</div>
              <div className="text-xs text-muted-foreground">Desenvolvimento Web</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <span className="text-xl">🗄️</span>
            </div>
            <div>
              <div className="text-sm font-semibold">Supabase</div>
              <div className="text-xs text-muted-foreground">Backend & Database</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mockups - Desktop Version */}
      <div className="space-y-4">
        <h3 className="text-xl">Versão Desktop</h3>
        <div className="relative aspect-video bg-card rounded-lg border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1492448497576-45b1efcdc02c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwbW9ja3VwJTIwZGVza3xlbnwxfHx8fDE3NjkyMjk1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Organizei - Versão Desktop" 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Dashboard completo com visualização de métricas financeiras e agenda integrada
        </p>
      </div>

      {/* Mockups - Mobile Version */}
      <div className="space-y-4">
        <h3 className="text-xl">Versão Mobile</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="aspect-[9/19] bg-card rounded-3xl border-4 border-border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1629697777394-e0b3103903bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBtb2NrdXAlMjBoYW5kfGVufDF8fHx8MTc2OTIxMTc1NHww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Organizei Mobile - Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-semibold mb-1">Dashboard</h4>
              <p className="text-xs text-muted-foreground">Visão geral financeira</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="aspect-[9/19] bg-card rounded-3xl border-4 border-border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzY5MTQzOTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Organizei Mobile - Agenda" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-semibold mb-1">Agenda</h4>
              <p className="text-xs text-muted-foreground">Calendário integrado</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="aspect-[9/19] bg-card rounded-3xl border-4 border-border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1695973057042-300f5fabd862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMG1vY2t1cCUyMG1pbmltYWx8ZW58MXx8fHwxNzY5MjI5NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Organizei Mobile - Clientes" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-semibold mb-1">Clientes</h4>
              <p className="text-xs text-muted-foreground">Gestão de clientes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Screens Description */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-card rounded-lg border border-border space-y-3">
          <h4 className="text-lg font-semibold">Dashboard Principal</h4>
          <p className="text-sm text-muted-foreground">
            Visão geral completa com métricas financeiras, próximos atendimentos e alertas importantes. 
            Design clean com cartões informativos e acesso rápido às funcionalidades principais.
          </p>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Saldo do mês atual</li>
            <li>• Gráfico de receitas vs despesas</li>
            <li>• Lista de próximos atendimentos</li>
            <li>• Alertas de pagamentos pendentes</li>
          </ul>
        </div>

        <div className="p-6 bg-card rounded-lg border border-border space-y-3">
          <h4 className="text-lg font-semibold">Agenda Integrada</h4>
          <p className="text-sm text-muted-foreground">
            Calendário completo com visualização mensal e semanal, integrado ao sistema financeiro 
            para tracking automático de pagamentos.
          </p>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Visualização de calendário</li>
            <li>• Status de pagamento por atendimento</li>
            <li>• Informações detalhadas do cliente</li>
            <li>• Registro rápido de atendimento</li>
          </ul>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="p-5 bg-card rounded-lg border border-border">
          <CheckCircle className="text-accent mb-3" size={24} />
          <h4 className="text-sm font-semibold mb-2">Registro Rápido</h4>
          <p className="text-xs text-muted-foreground">Registre atendimentos e pagamentos em poucos toques</p>
        </div>
        <div className="p-5 bg-card rounded-lg border border-border">
          <CheckCircle className="text-accent mb-3" size={24} />
          <h4 className="text-sm font-semibold mb-2">Notificações Smart</h4>
          <p className="text-xs text-muted-foreground">Lembretes automáticos de atendimentos e cobranças</p>
        </div>
        <div className="p-5 bg-card rounded-lg border border-border">
          <CheckCircle className="text-accent mb-3" size={24} />
          <h4 className="text-sm font-semibold mb-2">Relatórios Visuais</h4>
          <p className="text-xs text-muted-foreground">Dashboards com lucro líquido e análise por cliente</p>
        </div>
      </div>

      {/* CTA to Live Site */}
      <div className="p-8 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/30 text-center">
        <h4 className="text-xl font-semibold mb-3">🚀 Site Funcionando</h4>
        <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
          Aplicação web totalmente funcional desenvolvida com Figma Make e Supabase. 
          Explore todas as funcionalidades, incluindo cadastro de clientes, agendamentos, 
          controle financeiro e relatórios em tempo real.
        </p>
        <a
          href="https://shown-elude-39515076.figma.site"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          Acessar Site Funcionando
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}

export function MockupsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl">Mockups</h2>
      <p className="text-sm text-muted-foreground">
        Apresentação do aplicativo em contextos reais de uso.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1639422633773-041d9fa609af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBtb2NrdXAlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5MjI4Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Mockup 1" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1639422633773-041d9fa609af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBtb2NrdXAlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5MjI4Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Mockup 2" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export function LandingPageSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl">Landing Page</h2>
      <p className="text-sm text-muted-foreground">
        Página desenvolvida para apresentar o app e facilitar o download, com CTA claro e informações objetivas.
      </p>

      <div className="space-y-6">
        {/* Landing Page Screenshot */}
        <div className="space-y-4">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <ImageWithFallback
              src="figma:asset/808764c9307d96c331669895fafbac878dc09a3d.png"
              alt="Landing Page Organizei" 
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Landing page completa com hero section, benefícios, depoimentos e CTAs para download
          </p>
        </div>

        {/* Landing Page Features */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 bg-card rounded-lg border border-border text-center">
            <div className="text-2xl mb-2">📱</div>
            <h4 className="text-sm font-semibold mb-1">Hero Section</h4>
            <p className="text-xs text-muted-foreground">Proposta de valor clara com mockup do app</p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border text-center">
            <div className="text-2xl mb-2">✨</div>
            <h4 className="text-sm font-semibold mb-1">Benefícios</h4>
            <p className="text-xs text-muted-foreground">Features principais com ícones</p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border text-center">
            <div className="text-2xl mb-2">💬</div>
            <h4 className="text-sm font-semibold mb-1">Depoimentos</h4>
            <p className="text-xs text-muted-foreground">Social proof e avaliações</p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border text-center">
            <div className="text-2xl mb-2">⬇️</div>
            <h4 className="text-sm font-semibold mb-1">CTA Download</h4>
            <p className="text-xs text-muted-foreground">Botões App Store e Google Play</p>
          </div>
        </div>

        {/* Landing Page Highlights */}
        <div className="p-6 bg-accent/5 rounded-lg border border-accent/30">
          <h4 className="text-sm font-semibold mb-3 text-accent">Destaques do Design</h4>
          <div className="grid md:grid-cols-2 gap-4 text-xs text-muted-foreground">
            <div className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Design responsivo para mobile e desktop</span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>CTAs destacados para download do app</span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Seção de depoimentos com social proof</span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Mockups do aplicativo em contexto real</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EmailTemplatesSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl">Templates de Email</h2>
      <p className="text-sm text-muted-foreground">
        Sistema de emails transacionais desenvolvido para notificações automáticas e comunicação com usuários.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Welcome Email */}
        <div className="space-y-3">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1683117927786-f146451082fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxjb21lJTIwZW1haWwlMjBuZXdzbGV0dGVyfGVufDF8fHx8MTc2OTIzMDAxMXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Email de Boas-vindas" 
              className="w-full h-auto"
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-1">Email de Boas-vindas</h4>
            <p className="text-xs text-muted-foreground">Enviado após cadastro com guia de primeiros passos e orientações sobre o uso do app</p>
          </div>
        </div>

        {/* Feedback Email */}
        <div className="space-y-3">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1576859933856-c07ec7ddfe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMHRlbXBsYXRlJTIwZGVzaWdufGVufDF8fHx8MTc2OTIyODY4OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Email de Feedback" 
              className="w-full h-auto"
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-1">Email de Feedback</h4>
            <p className="text-xs text-muted-foreground">Pesquisa de satisfação com sistema de avaliação por estrelas e oferta de premium</p>
          </div>
        </div>
      </div>

      {/* Email Features */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-5 bg-card rounded-lg border border-border">
          <h4 className="text-sm font-semibold mb-2 text-accent">📧 Emails Transacionais</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Confirmação de cadastro</li>
            <li>• Reset de senha</li>
            <li>• Confirmação de agendamento</li>
          </ul>
        </div>
        <div className="p-5 bg-card rounded-lg border border-border">
          <h4 className="text-sm font-semibold mb-2 text-accent">🔔 Lembretes</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Atendimento próximo</li>
            <li>• Pagamento pendente</li>
            <li>• Relatório mensal pronto</li>
          </ul>
        </div>
        <div className="p-5 bg-card rounded-lg border border-border">
          <h4 className="text-sm font-semibold mb-2 text-accent">📊 Engajamento</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Pesquisa de satisfação</li>
            <li>• Oferta de recursos premium</li>
            <li>• Dicas de otimização</li>
          </ul>
        </div>
      </div>

      {/* Email Design Highlights */}
      <div className="p-6 bg-accent/5 rounded-lg border border-accent/30">
        <h4 className="text-sm font-semibold mb-3 text-accent">Destaques do Design</h4>
        <div className="grid md:grid-cols-2 gap-4 text-xs text-muted-foreground">
          <div className="flex gap-2">
            <span className="text-accent">✓</span>
            <span>Design responsivo para todos os clientes de email</span>
          </div>
          <div className="flex gap-2">
            <span className="text-accent">✓</span>
            <span>Identidade visual consistente com o app</span>
          </div>
          <div className="flex gap-2">
            <span className="text-accent">✓</span>
            <span>CTAs claros e destacados</span>
          </div>
          <div className="flex gap-2">
            <span className="text-accent">✓</span>
            <span>Linguagem amigável e personalizada</span>
          </div>
        </div>
      </div>
    </div>
  );
}