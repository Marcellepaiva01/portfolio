import image_73a5891ce28fd94431b26ab3685abe4cbd1f0e73 from 'figma:asset/73a5891ce28fd94431b26ab3685abe4cbd1f0e73.png';
import image_adb2cf06a701e156606a6c2260d7d5029deed2d8 from 'figma:asset/adb2cf06a701e156606a6c2260d7d5029deed2d8.png';
import { X, ExternalLink, ArrowLeft, Target, Users, Package, TrendingUp, BarChart3, Settings, Megaphone, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface AVLCaseStudyProps {
  onClose: () => void;
}

export function AVLCaseStudy({ onClose }: AVLCaseStudyProps) {
  const handleContactClick = () => {
    onClose();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-background overflow-y-auto">
      <div className="w-full min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-xl border-b border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
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
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-20">
          
          {/* 1. Hero Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-xs text-accent">UX/UI Product Design · E-commerce · Growth</span>
            </div>
            <h1 className="text-3xl sm:text-5xl">AVL Suprimentos</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
              UX/UI Product Design aplicado a e-commerce de suprimentos
            </p>
            <p className="text-base max-w-3xl">
              Projeto completo de identidade visual, design do site de vendas e estratégia de conversão para um e-commerce de materiais de limpeza e suprimentos, com foco em usabilidade, vendas e crescimento.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://avlsuprimentos.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors text-sm"
              >
                Acessar site
                <ExternalLink size={14} />
              </a>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-accent/50 transition-colors text-sm"
              >
                Entrar em contato
              </button>
            </div>
          </div>

          {/* 2. Contexto & Oportunidade */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl">Contexto & Oportunidade</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-card rounded-lg border border-border space-y-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Target size={20} className="text-accent" />
                </div>
                <h4 className="text-sm">Mercado Competitivo</h4>
                <p className="text-sm text-muted-foreground">
                  Mercado altamente competitivo de suprimentos e materiais de limpeza, exigindo diferenciação clara e proposta de valor forte.
                </p>
              </div>
              <div className="p-5 bg-card rounded-lg border border-border space-y-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users size={20} className="text-accent" />
                </div>
                <h4 className="text-sm">Consumidores Exigentes</h4>
                <p className="text-sm text-muted-foreground">
                  Consumidores sensíveis a preço, frete e confiabilidade, demandando experiências transparentes e eficientes.
                </p>
              </div>
              <div className="p-5 bg-card rounded-lg border border-border space-y-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Package size={20} className="text-accent" />
                </div>
                <h4 className="text-sm">Canal Digital</h4>
                <p className="text-sm text-muted-foreground">
                  Necessidade de um canal digital eficiente para atender B2B e B2C de forma escalável e sustentável.
                </p>
              </div>
              <div className="p-5 bg-card rounded-lg border border-border space-y-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp size={20} className="text-accent" />
                </div>
                <h4 className="text-sm">Escalabilidade</h4>
                <p className="text-sm text-muted-foreground">
                  Oportunidade de criar uma experiência simples, clara e escalável com foco em crescimento sustentável.
                </p>
              </div>
            </div>
          </div>

          {/* 3. O Problema */}
          <div className="space-y-4">
            <h2 className="text-3xl">O Problema</h2>
            <div className="p-6 bg-card rounded-lg border-l-4 border-accent space-y-4">
              <p>
                Como criar um e-commerce que atenda três públicos distintos (síndicos, pequenos empresários e consumidores domésticos), oferecendo experiência de compra otimizada, gestão eficiente de produtos e vendas, e presença digital estruturada?
              </p>
              <div className="grid md:grid-cols-2 gap-3 pt-2">
                <div className="flex gap-2 text-sm">
                  <span className="text-accent flex-shrink-0">•</span>
                  <span>Compras recorrentes, porém com tickets variados</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="text-accent flex-shrink-0">•</span>
                  <span>Dificuldade de fornecedores em atender pequenos compradores</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="text-accent flex-shrink-0">•</span>
                  <span>Experiências digitais confusas e pouco confiáveis</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="text-accent flex-shrink-0">•</span>
                  <span>Alto impacto do frete na decisão de compra</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Objetivos do Produto */}
          <div className="space-y-4">
            <h2 className="text-3xl">Objetivos do Produto</h2>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                'Criar um e-commerce simples, confiável e fácil de usar',
                'Aumentar taxa de conversão',
                'Incentivar aumento de ticket médio',
                'Facilitar compras recorrentes',
                'Reduzir atritos no checkout',
                'Integrar vendas, estoque e faturamento'
              ].map((objetivo, index) => (
                <div key={index} className="flex gap-2 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{objetivo}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Meu Papel no Projeto */}
          <div className="space-y-4">
            <h2 className="text-3xl">Meu Papel no Projeto</h2>
            <p className="text-muted-foreground">
              Atuei como Product Designer responsável pela concepção, execução e implementação completa do projeto:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Criação da identidade visual da marca',
                'UX/UI Design do e-commerce (desktop e mobile)',
                'Definição da arquitetura da informação',
                'Cadastro e organização de todos os produtos',
                'Implementação do site na Nuvemshop',
                'Integração com Bling para emissão de notas fiscais',
                'Configuração de domínio próprio',
                'Estruturação de campanhas digitais',
                'Monitoramento de métricas e funil de vendas'
              ].map((papel, index) => (
                <div key={index} className="flex gap-2 p-3 bg-secondary/50 rounded-lg">
                  <span className="text-accent flex-shrink-0">→</span>
                  <span className="text-sm">{papel}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Personas */}
          <div className="space-y-6">
            <h2 className="text-3xl">Personas</h2>
            <p className="text-muted-foreground">
              Definição de três personas principais para direcionar decisões de UX, UI e estratégia de marketing:
            </p>
            
            {/* Persona 1 - João */}
            <div className="p-6 bg-card rounded-lg border border-border space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl mb-1">João</h3>
                  <p className="text-sm text-accent">Síndico Profissional</p>
                  <p className="text-xs text-muted-foreground mt-1">35-55 anos · Rio de Janeiro</p>
                </div>
                <div className="px-3 py-1.5 bg-accent/10 rounded-full">
                  <span className="text-xs text-accent">B2B</span>
                </div>
              </div>
              <p className="text-sm">
                Administra 5 pequenos edifícios e costuma fazer compras em mercado pois o ticket de compra é baixo para comprar direto com fornecedores.
              </p>
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-muted-foreground">Comportamento de compra</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Compra em volume médio (fardo, pacote grande)</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Prefere fornecedores confiáveis com entrega rápida</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Preza por qualidade + custo-benefício</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Compra para todos os condomínios administrados</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-accent/5 rounded border border-accent/20">
                <p className="text-sm">
                  <strong className="text-accent">Frete grátis:</strong> O benefício de frete grátis acima de R$ 300 é muito relevante para ele, influenciando sua escolha pela AVL Suprimentos.
                </p>
              </div>
            </div>

            {/* Persona 2 - Clara */}
            <div className="p-6 bg-card rounded-lg border border-border space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl mb-1">Clara</h3>
                  <p className="text-sm text-accent">Pequena Empresária</p>
                  <p className="text-xs text-muted-foreground mt-1">30-50 anos · Rio de Janeiro</p>
                </div>
                <div className="px-3 py-1.5 bg-accent/10 rounded-full">
                  <span className="text-xs text-accent">B2B</span>
                </div>
              </div>
              <p className="text-sm">
                Dona ou gerente de pequeno negócio (restaurante, café, bar, loja, clínica, salão de beleza, sala comercial).
              </p>
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-muted-foreground">Objetivos e desafios</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Manter negócio limpo e bem-higienizado</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Controlar gastos sem comprometer margem</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Pedidos frequentes com volumes razoáveis</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Sensível a preço, mas valoriza confiabilidade</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-accent/5 rounded border border-accent/20">
                <p className="text-sm">
                  <strong className="text-accent">Frete grátis:</strong> Muito motivador — planeja compras para ultrapassar R$ 300 e evitar pagar frete.
                </p>
              </div>
            </div>

            {/* Persona 3 - Marina */}
            <div className="p-6 bg-card rounded-lg border border-border space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl mb-1">Marina</h3>
                  <p className="text-sm text-accent">Consumidora Doméstica</p>
                  <p className="text-xs text-muted-foreground mt-1">25-45 anos · Brasil</p>
                </div>
                <div className="px-3 py-1.5 bg-accent/10 rounded-full">
                  <span className="text-xs text-accent">B2C</span>
                </div>
              </div>
              <p className="text-sm">
                Trabalha em home office ou CLT, cuida da própria casa e faz compras do dia a dia pela internet. Busca praticidade e comodidade.
              </p>
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-muted-foreground">Dores e frustrações</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Não gosta de perder tempo indo ao mercado</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Dificuldade em encontrar produtos de qualidade</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Fica frustrada quando entrega é cara</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Detesta sites confusos ou inseguros</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-accent/5 rounded border border-accent/20">
                <p className="text-sm">
                  <strong className="text-accent">Mensagens-chave:</strong> "Entrega rápida em qualquer lugar do Brasil" · "Compre online sem sair de casa" · "Sacos de lixo reforçados que não rasgam"
                </p>
              </div>
            </div>
          </div>

          {/* 7. Estratégia de UX para Conversão */}
          <div className="space-y-4">
            <h2 className="text-3xl">Estratégia de UX para Conversão</h2>
            <p className="text-muted-foreground">
              Decisões de design orientadas a aumentar conversão e reduzir fricção na jornada de compra:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-card rounded-lg border border-border space-y-3">
                <h4 className="text-sm">Destaque para Frete Grátis</h4>
                <p className="text-sm text-muted-foreground">
                  Comunicação clara e constante do benefício de frete grátis acima de R$ 300 em todas as páginas principais.
                </p>
              </div>
              <div className="p-5 bg-card rounded-lg border border-border space-y-3">
                <h4 className="text-sm">Organização por Categorias</h4>
                <p className="text-sm text-muted-foreground">
                  Categorização clara de produtos facilitando a busca rápida e navegação intuitiva.
                </p>
              </div>
              <div className="p-5 bg-card rounded-lg border border-border space-y-3">
                <h4 className="text-sm">Navegação Simplificada</h4>
                <p className="text-sm text-muted-foreground">
                  Fluxos diretos e redução de passos até a finalização da compra.
                </p>
              </div>
              <div className="p-5 bg-card rounded-lg border border-border space-y-3">
                <h4 className="text-sm">Cross-selling</h4>
                <p className="text-sm text-muted-foreground">
                  Produtos complementares estrategicamente posicionados para aumentar ticket médio.
                </p>
              </div>
              <div className="p-5 bg-card rounded-lg border border-border space-y-3">
                <h4 className="text-sm">Linguagem Clara</h4>
                <p className="text-sm text-muted-foreground">
                  Comunicação objetiva e sem jargões, acessível para todos os públicos.
                </p>
              </div>
              <div className="p-5 bg-card rounded-lg border border-border space-y-3">
                <h4 className="text-sm">Checkout Otimizado</h4>
                <p className="text-sm text-muted-foreground">
                  Redução de fricção e campos desnecessários no processo de finalização.
                </p>
              </div>
            </div>
          </div>

          {/* 8. Arquitetura da Informação */}
          <div className="space-y-4">
            <h2 className="text-3xl">Arquitetura da Informação</h2>
            <p className="text-muted-foreground">
              Estrutura pensada para compras rápidas, recorrentes e intuitivas:
            </p>
            <div className="p-6 bg-card rounded-lg border border-border space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm text-accent">Categorias Principais</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Materiais de Limpeza</li>
                    <li>• Descartáveis</li>
                    <li>• Higiene Pessoal</li>
                    <li>• Suprimentos Gerais</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm text-accent">Filtros e Busca</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Busca por nome</li>
                    <li>• Filtro por preço</li>
                    <li>• Filtro por categoria</li>
                    <li>• Ordenação relevante</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm text-accent">Hierarquia Visual</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• CTAs destacados</li>
                    <li>• Promoções em destaque</li>
                    <li>• Informações essenciais</li>
                    <li>• Frete grátis visível</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 9. UI Design */}
          <div className="space-y-4">
            <h2 className="text-3xl">UI Design</h2>
            <p className="text-muted-foreground">
              Sistema visual profissional aplicado ao e-commerce:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Paleta de Cores', desc: 'Cores estratégicas para guiar ações, criar hierarquia e transmitir confiança' },
                { title: 'Tipografia Legível', desc: 'Fontes claras e bem hierarquizadas para facilitar leitura em todos os dispositivos' },
                { title: 'CTAs Destacados', desc: 'Botões de ação bem posicionados e com contraste adequado para conversão' },
                { title: 'Design Responsivo', desc: 'Interface otimizada para desktop e mobile, garantindo experiência fluida' }
              ].map((item, index) => (
                <div key={index} className="p-5 bg-card rounded-lg border border-border space-y-2">
                  <h4 className="text-sm">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 10. Prototipação */}
          <div className="space-y-6">
            <h2 className="text-3xl">Prototipação</h2>
            <p className="text-muted-foreground">
              Mockups completos desenvolvidos para desktop e mobile:
            </p>
            
            {/* Desktop Mockup */}
            <div className="space-y-3">
              <h4 className="text-sm">Desktop</h4>
              <div className="bg-card rounded-lg border border-border p-4">
                <img
                  src={image_adb2cf06a701e156606a6c2260d7d5029deed2d8}
                  alt="AVL Suprimentos - Mockup Desktop"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Interface completa otimizada para compras em tela grande, aproveitando espaço para produtos relacionados e informações complementares.
              </p>
            </div>

            {/* Mobile Mockup */}
            <div className="space-y-3">
              <h4 className="text-sm">Mobile-First</h4>
              <div className="bg-card rounded-lg border border-border p-8 flex justify-center">
                <img
                  src={image_73a5891ce28fd94431b26ab3685abe4cbd1f0e73}
                  alt="AVL Suprimentos - Mockup Mobile"
                  className="w-64 h-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Versão mobile otimizada para compras rápidas, com navegação por toque e checkout simplificado.
              </p>
            </div>
          </div>

          {/* 11. Implementação & Tecnologia */}
          <div className="space-y-4">
            <h2 className="text-3xl">Implementação & Tecnologia</h2>
            <div className="p-6 bg-card rounded-lg border border-border space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Settings size={20} className="text-accent" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm">Desenvolvido com Nuvemshop</h4>
                    <p className="text-sm text-muted-foreground">
                      E-commerce desenvolvido na plataforma Nuvemshop, garantindo escalabilidade e segurança.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Package size={20} className="text-accent" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm">Integrado com Bling</h4>
                    <p className="text-sm text-muted-foreground">
                      Integração com Bling para emissão automática de notas fiscais e gestão integrada de estoque e pedidos.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <ExternalLink size={20} className="text-accent" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm">Domínio Próprio</h4>
                    <p className="text-sm text-muted-foreground">
                      Configuração e registro do domínio avlsuprimentos.com.br para credibilidade.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Package size={20} className="text-accent" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm">Cadastro de Produtos</h4>
                    <p className="text-sm text-muted-foreground">
                      Cadastro completo de catálogo, com categorização, fotos e descrições otimizadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 12. Marketing & Growth */}
          <div className="space-y-4">
            <h2 className="text-3xl">Marketing & Growth</h2>
            <p className="text-muted-foreground">
              Presença digital estruturada para aquisição, conversão e retenção:
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { icon: Megaphone, title: 'Meta Business', desc: 'Cadastro e configuração completa para campanhas no Facebook e Instagram' },
                { icon: TrendingUp, title: 'Google Ads', desc: 'Estruturação de campanhas de busca e display para captação de clientes' },
                { icon: BarChart3, title: 'Google Analytics', desc: 'Monitoramento completo de acessos, conversões e comportamento do usuário' },
                { icon: Target, title: 'Search Console', desc: 'Otimização SEO e acompanhamento de performance em buscas orgânicas' },
                { icon: Users, title: 'Campanhas de Marketing', desc: 'Criação de campanhas em parceria com time de marketing' },
                { icon: TrendingUp, title: 'Funil de Vendas', desc: 'Acompanhamento ativo do funil de conversão e otimizações contínuas' }
              ].map((item, index) => (
                <div key={index} className="p-5 bg-card rounded-lg border border-border space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <h4 className="text-sm">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 13. Métricas & Resultados */}
          <div className="space-y-4">
            <h2 className="text-3xl">Métricas & Resultados</h2>
            <p className="text-muted-foreground">
              Acompanhamento contínuo de dados para decisões baseadas em evidências:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { metric: 'Monitoramento de Acessos', desc: 'Acompanhamento de tráfego, origem e comportamento dos visitantes' },
                { metric: 'Taxa de Conversão', desc: 'Análise contínua da conversão de visitantes em compradores' },
                { metric: 'Ticket Médio', desc: 'Monitoramento do valor médio de compra e estratégias de aumento' },
                { metric: 'Comportamento do Usuário', desc: 'Mapas de calor, jornadas e pontos de saída para otimizações' },
                { metric: 'Funil de Vendas', desc: 'Análise de cada etapa do funil para identificar gargalos' },
                { metric: 'Otimizações Contínuas', desc: 'Melhorias iterativas baseadas em dados reais de uso' }
              ].map((item, index) => (
                <div key={index} className="p-5 bg-card rounded-lg border border-border space-y-2">
                  <h4 className="text-sm text-accent">{item.metric}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 14. Aprendizados */}
          <div className="space-y-4">
            <h2 className="text-3xl">Aprendizados como UX/UI Product Designer</h2>
            <div className="space-y-3">
              {[
                'UX orientado a vendas: design como ferramenta direta de impacto em conversão e crescimento',
                'Design orientado a dados: decisões baseadas em métricas reais, não em achismos',
                'Importância da integração entre design, marketing e tecnologia para resultados sustentáveis',
                'E-commerce como produto vivo: necessidade de monitoramento e evolução contínua',
                'Personas bem definidas direcionam todas as decisões de produto e comunicação'
              ].map((learning, index) => (
                <div key={index} className="flex gap-3 p-4 bg-secondary/50 rounded-lg">
                  <span className="text-accent flex-shrink-0">→</span>
                  <span className="text-sm">{learning}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 15. Encerramento */}
          <div className="space-y-6 pt-8 border-t border-border">
            <p className="text-lg max-w-3xl">
              Este projeto demonstra como UX/UI Design pode atuar diretamente no crescimento de negócios, conectando estratégia, experiência do usuário e resultados mensuráveis.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-accent/50 transition-colors text-sm"
              >
                Ver outros projetos
              </button>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors text-sm"
              >
                Entrar em contato
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}