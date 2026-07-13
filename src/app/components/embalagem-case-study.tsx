import image_edc27bfe9b1ee230fcb913bae501ad53dab530c8 from 'figma:asset/edc27bfe9b1ee230fcb913bae501ad53dab530c8.png';
import image_1ea050c547594933567793181e676175d207d65f from 'figma:asset/1ea050c547594933567793181e676175d207d65f.png';
import image_0453a7200ec3f4c22af337509f5e342683345497 from 'figma:asset/0453a7200ec3f4c22af337509f5e342683345497.png';
import image_973c5e4363d9b17bc1bd8af36f8e412fb7bed5b4 from 'figma:asset/973c5e4363d9b17bc1bd8af36f8e412fb7bed5b4.png';
import image_d02d138d57b6cf54d92a5020dfbebf3fa2f662b4 from 'figma:asset/d02d138d57b6cf54d92a5020dfbebf3fa2f662b4.png';
import { X, ExternalLink, ArrowLeft, Package, ShoppingCart, Eye, Target, Layers, TrendingUp } from 'lucide-react';

interface EmbalagemCaseStudyProps {
  onClose: () => void;
  onBack: () => void;
}

export function EmbalagemCaseStudy({ onClose, onBack }: EmbalagemCaseStudyProps) {
  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
      <div className="min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Voltar aos projetos</span>
              <span className="sm:hidden">Voltar</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16">
          {/* 1. Hero Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <span className="text-accent text-xs tracking-wider uppercase">Product Design + Embalagem</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl">Design de Embalagem — Sacos de Lixo em Rolo</h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Product Design orientado à decisão de compra no varejo e e-commerce
              </p>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
              Projeto de embalagem desenvolvido para uma fábrica de sacos de lixo, com foco em legibilidade, 
              diferenciação e conversão no ponto de venda físico e digital.
            </p>
            
            {/* Key Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-accent text-xs tracking-wider uppercase mb-2">Tipo</div>
                <div className="text-sm">Product Design + Embalagem + Estratégia de Vendas</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-accent text-xs tracking-wider uppercase mb-2">Mercado</div>
                <div className="text-sm">Varejo Físico + E-commerce (Shopee)</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-accent text-xs tracking-wider uppercase mb-2">Escala</div>
                <div className="text-sm">Industrial / Produção em Massa</div>
              </div>
            </div>
          </div>

          {/* 2. Contexto de Mercado */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">Contexto de Mercado</h2>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground">
                O mercado de sacos de lixo é altamente competitivo, com produtos visualmente semelhantes 
                disputando atenção em prateleiras e marketplaces. O consumidor toma decisões rápidas, 
                comparando principalmente três fatores: preço, litragem e resistência.
              </p>
              <div className="bg-card border border-border rounded-lg p-4 sm:p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <ShoppingCart className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-sm mb-1">Decisão em Segundos</h4>
                    <p className="text-sm text-muted-foreground">
                      No varejo físico, o consumidor decide em média 3-5 segundos ao observar a prateleira.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-sm mb-1">E-commerce Visual</h4>
                    <p className="text-sm text-muted-foreground">
                      Em marketplaces como Shopee, a miniatura da embalagem é o primeiro contato com o produto.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-sm mb-1">Embalagem como Interface</h4>
                    <p className="text-sm text-muted-foreground">
                      A embalagem é o principal ponto de contato entre marca e consumidor neste segmento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. O Problema */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">O Problema</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-5 space-y-2">
                <h4 className="text-sm text-accent">01. Diferenciação</h4>
                <p className="text-sm text-muted-foreground">
                  Dificuldade de se destacar em meio a dezenas de produtos similares na prateleira.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-5 space-y-2">
                <h4 className="text-sm text-accent">02. Clareza de Informação</h4>
                <p className="text-sm text-muted-foreground">
                  Embalagens confusas com excesso de informação ou dados essenciais pouco visíveis.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-5 space-y-2">
                <h4 className="text-sm text-accent">03. Identificação Rápida</h4>
                <p className="text-sm text-muted-foreground">
                  Falta de clareza sobre litragem, peso exato e indicação de uso (pia, banheiro, geral).
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-5 space-y-2">
                <h4 className="text-sm text-accent">04. Competição Digital</h4>
                <p className="text-sm text-muted-foreground">
                  Concorrência forte em marketplaces onde a embalagem precisa converter em miniatura.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Objetivos do Produto */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">Objetivos do Produto</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <Target className="text-accent mt-1 flex-shrink-0" size={20} />
                <div className="space-y-1">
                  <h4 className="text-sm">Facilitar a leitura rápida das informações</h4>
                  <p className="text-sm text-muted-foreground">
                    Hierarquia visual clara para identificação imediata da litragem e quantidade.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <Eye className="text-accent mt-1 flex-shrink-0" size={20} />
                <div className="space-y-1">
                  <h4 className="text-sm">Destacar litragem e quantidade de sacos</h4>
                  <p className="text-sm text-muted-foreground">
                    Informação mais procurada pelo consumidor deve ser a mais visível.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <TrendingUp className="text-accent mt-1 flex-shrink-0" size={20} />
                <div className="space-y-1">
                  <h4 className="text-sm">Transmitir sensação de qualidade e resistência</h4>
                  <p className="text-sm text-muted-foreground">
                    Design profissional que comunica confiança e durabilidade do produto.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <Layers className="text-accent mt-1 flex-shrink-0" size={20} />
                <div className="space-y-1">
                  <h4 className="text-sm">Criar identidade visual reconhecível</h4>
                  <p className="text-sm text-muted-foreground">
                    Sistema visual consistente que facilite recompra e crie lembrança de marca.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <ShoppingCart className="text-accent mt-1 flex-shrink-0" size={20} />
                <div className="space-y-1">
                  <h4 className="text-sm">Funcionar bem em físico e digital</h4>
                  <p className="text-sm text-muted-foreground">
                    Design otimizado tanto para prateleira quanto para miniatura em e-commerce.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Estratégia de UX Aplicada à Embalagem */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">Estratégia de UX Aplicada à Embalagem</h2>
            <p className="text-muted-foreground">
              Embalagem como interface física: aplicando princípios de UX/UI design ao produto tangível.
            </p>
            
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 space-y-4">
              <h4 className="text-sm">Princípios Aplicados</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-accent text-xs tracking-wider uppercase mb-1">Hierarquia Visual</div>
                  <p className="text-sm text-muted-foreground">
                    Informação mais importante (litragem) possui maior contraste e tamanho, seguida pela 
                    quantidade de sacos e indicação de uso.
                  </p>
                </div>
                <div>
                  <div className="text-accent text-xs tracking-wider uppercase mb-1">Diferenciação por Cor</div>
                  <p className="text-sm text-muted-foreground">
                    Sistema de cores distingue rapidamente as variantes (preto, azul, transparente), 
                    funcionando como navegação visual na prateleira.
                  </p>
                </div>
                <div>
                  <div className="text-accent text-xs tracking-wider uppercase mb-1">Legibilidade à Distância</div>
                  <p className="text-sm text-muted-foreground">
                    Tipografia e contraste pensados para leitura a 2-3 metros de distância no varejo.
                  </p>
                </div>
                <div>
                  <div className="text-accent text-xs tracking-wider uppercase mb-1">Decisão em Poucos Segundos</div>
                  <p className="text-sm text-muted-foreground">
                    Layout estruturado para que o consumidor encontre todas as informações essenciais 
                    em uma única olhada.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Arquitetura da Informação */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">Arquitetura da Informação</h2>
            <p className="text-muted-foreground">
              Organização estratégica dos elementos para facilitar a compreensão e decisão de compra.
            </p>

            <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
              <h4 className="text-sm mb-4">Hierarquia de Informações</h4>
              <div className="space-y-6">
                {/* Nível 1 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs">
                      1
                    </div>
                    <span className="text-sm">Litragem (15L, 30L, 50L, 100L, 200L)</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-10">
                    Maior destaque visual — informação primária de decisão
                  </p>
                </div>

                {/* Nível 2 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs">
                      2
                    </div>
                    <span className="text-sm">Cor/Tipo (Preto, Azul, Transparente)</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-10">
                    Diferenciação visual imediata através da cor da embalagem
                  </p>
                </div>

                {/* Nível 3 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs">
                      3
                    </div>
                    <span className="text-sm">Uso Indicado (Pia, Banheiro, Geral)</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-10">
                    Ajuda o consumidor a escolher o tamanho ideal para sua necessidade
                  </p>
                </div>

                {/* Nível 4 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs">
                      4
                    </div>
                    <span className="text-sm">Diferenciais (Resistência, Qualidade)</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-10">
                    Informação secundária que agrega valor percebido
                  </p>
                </div>
              </div>
            </div>

            {/* Variantes */}
            <div>
              <h4 className="text-sm mb-3">Linha de Produtos</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <div className="bg-card border border-border rounded-lg p-3 text-center">
                  <div className="text-accent text-xs tracking-wider uppercase mb-1">15 Litros</div>
                  <div className="text-xs text-muted-foreground">Pia / Banheiro</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-3 text-center">
                  <div className="text-accent text-xs tracking-wider uppercase mb-1">30 Litros</div>
                  <div className="text-xs text-muted-foreground">Pia / Banheiro</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-3 text-center">
                  <div className="text-accent text-xs tracking-wider uppercase mb-1">50 Litros</div>
                  <div className="text-xs text-muted-foreground">Uso Geral</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-3 text-center">
                  <div className="text-accent text-xs tracking-wider uppercase mb-1">100 Litros</div>
                  <div className="text-xs text-muted-foreground">Uso Geral</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-3 text-center">
                  <div className="text-accent text-xs tracking-wider uppercase mb-1">200 Litros</div>
                  <div className="text-xs text-muted-foreground">Uso Geral</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                * Disponíveis nas cores: Preto, Azul e Transparente
              </p>
            </div>
          </div>

          {/* 7. UI Design da Embalagem */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">UI Design da Embalagem</h2>
            <p className="text-muted-foreground">
              Sistema visual pensado para máxima legibilidade e impacto em ambientes físicos e digitais.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Paleta de Cores */}
              <div className="bg-card border border-border rounded-lg p-5 space-y-4">
                <h4 className="text-sm">Paleta de Cores</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-black border border-border"></div>
                    <div>
                      <div className="text-xs">Preto</div>
                      <div className="text-xs text-muted-foreground">Uso geral / resistente</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-600"></div>
                    <div>
                      <div className="text-xs">Azul</div>
                      <div className="text-xs text-muted-foreground">Diferenciação intermediária</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/10 border border-border"></div>
                    <div>
                      <div className="text-xs">Transparente</div>
                      <div className="text-xs text-muted-foreground">Visualização do conteúdo</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Cores vibrantes e contrastantes garantem identificação rápida na prateleira.
                </p>
              </div>

              {/* Tipografia */}
              <div className="bg-card border border-border rounded-lg p-5 space-y-4">
                <h4 className="text-sm">Tipografia</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-3xl mb-1">50L</div>
                    <div className="text-xs text-muted-foreground">Litragem — Bold, Alto Contraste</div>
                  </div>
                  <div>
                    <div className="text-sm mb-1">Sacos de Lixo em Rolo</div>
                    <div className="text-xs text-muted-foreground">Categoria — Regular, Legível</div>
                  </div>
                  <div>
                    <div className="text-xs mb-1">20 unidades</div>
                    <div className="text-xs text-muted-foreground">Informações secundárias</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Hierarquia tipográfica clara facilita escaneabilidade visual rápida.
                </p>
              </div>
            </div>

            {/* Elementos Gráficos */}
            <div className="bg-card border border-border rounded-lg p-5 space-y-3">
              <h4 className="text-sm">Elementos Gráficos</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="text-accent text-xs tracking-wider uppercase">Ícones Simples</div>
                  <p className="text-xs text-muted-foreground">
                    Pictogramas diretos indicando uso (pia, banheiro, geral) sem necessidade de leitura.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-accent text-xs tracking-wider uppercase">Alto Contraste</div>
                  <p className="text-xs text-muted-foreground">
                    Cores saturadas sobre fundo neutro garantem legibilidade mesmo em miniaturas.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-accent text-xs tracking-wider uppercase">Layout Limpo</div>
                  <p className="text-xs text-muted-foreground">
                    Espaçamento generoso entre elementos evita poluição visual e facilita leitura.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 8. Diferenciação por Variante */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">Diferenciação por Variante</h2>
            <p className="text-muted-foreground">
              Sistema de cores como navegação visual: o consumidor identifica rapidamente o produto correto.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Versão Preta */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-white text-center space-y-2">
                    <div className="text-4xl">50L</div>
                    <div className="text-sm opacity-80">PRETO</div>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="text-sm">Versão Preta</h4>
                  <p className="text-xs text-muted-foreground">
                    Cor mais procurada, associada a resistência e uso geral. Maior volume de vendas.
                  </p>
                </div>
              </div>

              {/* Versão Azul */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <div className="text-white text-center space-y-2">
                    <div className="text-4xl">30L</div>
                    <div className="text-sm opacity-80">AZUL</div>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="text-sm">Versão Azul</h4>
                  <p className="text-xs text-muted-foreground">
                    Diferenciação intermediária, ideal para consumidores que buscam organização por cores.
                  </p>
                </div>
              </div>

              {/* Versão Transparente */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-white/5 to-white/10 border-2 border-dashed border-border flex items-center justify-center">
                  <div className="text-white text-center space-y-2">
                    <div className="text-4xl">15L</div>
                    <div className="text-sm opacity-80">TRANSPARENTE</div>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="text-sm">Versão Transparente</h4>
                  <p className="text-xs text-muted-foreground">
                    Permite visualização do conteúdo, ideal para pia e banheiro onde a estética importa.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <h4 className="text-sm mb-3">Estratégia de Cores</h4>
              <p className="text-sm text-muted-foreground mb-3">
                A diferenciação por cor funciona como um sistema de navegação visual que:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Facilita a recompra (cliente lembra da cor, não apenas da litragem)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Reduz tempo de decisão na prateleira</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Melhora a apresentação visual em miniaturas de e-commerce</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Cria identidade visual consistente em toda a linha de produtos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 9. Mockups & Aplicação */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">Mockups & Aplicação</h2>
            <p className="text-muted-foreground">
              Visualização do produto em diferentes contextos de uso e venda.
            </p>

            {/* Mockup em Rolo */}
            <div className="space-y-3">
              <h4 className="text-sm">Produto em Formato de Rolo</h4>
              <div className="bg-card rounded-lg border border-border p-4">
                <img
                  src={image_edc27bfe9b1ee230fcb913bae501ad53dab530c8}
                  alt="Mockup de embalagem em rolo"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Embalagem em formato de rolo com todas as informações visíveis em múltiplas faces, 
                otimizando a comunicação independente do ângulo de visualização.
              </p>
            </div>

            {/* Aplicação em Prateleira */}
            <div className="space-y-3">
              <h4 className="text-sm">Contexto de Varejo Físico</h4>
              <div className="bg-card rounded-lg border border-border p-4">
                <img
                  src={image_d02d138d57b6cf54d92a5020dfbebf3fa2f662b4}
                  alt="Produtos em prateleira de supermercado"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Em prateleiras de supermercado, a hierarquia visual e diferenciação por cores permitem 
                identificação rápida mesmo a distância.
              </p>
            </div>

            {/* E-commerce */}
            <div className="space-y-3">
              <h4 className="text-sm">Visualização E-commerce (Shopee)</h4>
              <div className="bg-card rounded-lg border border-border p-4">
                <img
                  src={image_973c5e4363d9b17bc1bd8af36f8e412fb7bed5b4}
                  alt="Fotografia de produto para e-commerce"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Embalagem otimizada para miniaturas em marketplaces: informação essencial legível 
                mesmo em tamanhos reduzidos de 200x200px.
              </p>
            </div>

            {/* Detalhes */}
            <div className="space-y-3">
              <h4 className="text-sm">Detalhes e Acabamento</h4>
              <div className="bg-card rounded-lg border border-border p-4">
                <img
                  src={image_1ea050c547594933567793181e676175d207d65f}
                  alt="Detalhes de embalagem plástica"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Material resistente com impressão de alta qualidade garante durabilidade da embalagem 
                durante transporte e armazenamento.
              </p>
            </div>
          </div>

          {/* 10. Resultado & Impacto */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">Resultado & Impacto</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h4 className="text-sm text-accent">Mercado Físico</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Produto comercializado em redes de supermercados e mercados locais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Embalagem clara facilita decisão de compra e reduz dúvidas no PDV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Diferenciação visual melhora percepção de qualidade frente à concorrência</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h4 className="text-sm text-accent">E-commerce</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Presença ativa em marketplaces como Shopee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Miniaturas com informação legível aumentam taxa de clique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Sistema visual consistente facilita navegação entre variantes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card border border-accent/20 rounded-lg p-6">
              <h4 className="text-sm mb-3">Conquistas do Projeto</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-2xl text-accent">Escala Industrial</div>
                  <p className="text-sm text-muted-foreground">
                    Embalagem produzida em larga escala com qualidade consistente
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl text-accent">Multi-canal</div>
                  <p className="text-sm text-muted-foreground">
                    Funciona perfeitamente em varejo físico e digital
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl text-accent">Competitivo</div>
                  <p className="text-sm text-muted-foreground">
                    Destaque visual em mercado altamente saturado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 11. Aprendizados como Product Designer */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">Aprendizados como Product Designer</h2>
            
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-5 space-y-2">
                <h4 className="text-sm text-accent">Embalagem como UX Físico</h4>
                <p className="text-sm text-muted-foreground">
                  Aplicar princípios de UX/UI design a produtos físicos demonstra que a experiência do 
                  usuário vai muito além de telas. A embalagem é uma interface tangível que precisa ser 
                  tão intuitiva quanto um aplicativo.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 space-y-2">
                <h4 className="text-sm text-accent">Design para Decisão Rápida</h4>
                <p className="text-sm text-muted-foreground">
                  No varejo, o tempo de decisão é extremamente curto. O design precisa comunicar 
                  instantaneamente as informações essenciais, priorizando clareza sobre complexidade.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 space-y-2">
                <h4 className="text-sm text-accent">Importância da Hierarquia Visual</h4>
                <p className="text-sm text-muted-foreground">
                  A hierarquia tipográfica e cromática não é apenas estética — é estratégica. Ela guia 
                  o olhar do consumidor exatamente para onde queremos, na ordem que importa.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 space-y-2">
                <h4 className="text-sm text-accent">Pensar Produto para Múltiplos Canais</h4>
                <p className="text-sm text-muted-foreground">
                  Um bom design de embalagem hoje precisa funcionar tanto na prateleira física quanto 
                  em miniatura digital. Testar em diferentes contextos é fundamental.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 space-y-2">
                <h4 className="text-sm text-accent">Cor como Sistema de Navegação</h4>
                <p className="text-sm text-muted-foreground">
                  Usar cores não apenas para estética, mas como ferramenta de organização e identificação 
                  rápida, cria uma experiência mais eficiente para o usuário.
                </p>
              </div>
            </div>
          </div>

          {/* 12. Encerramento */}
          <div className="space-y-4 sm:space-y-6 border-t border-border pt-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl mb-4">Conclusão</h2>
              <p className="text-muted-foreground text-lg">
                Este projeto reforça como o Product Design vai além do digital, atuando diretamente 
                na forma como pessoas escolhem, confiam e compram produtos no dia a dia.
              </p>
              <p className="text-muted-foreground mt-4">
                Embalagem não é apenas proteção — é comunicação, é interface, é experiência. E quando 
                bem projetada, ela se torna invisível: o consumidor simplesmente entende o que precisa 
                saber e toma sua decisão com confiança.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={onBack}
                className="px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
              >
                Ver outros projetos
              </button>
              <a
                href="mailto:marcellepaiva01@gmail.com"
                className="px-6 py-3 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}