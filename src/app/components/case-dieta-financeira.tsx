import image_2d6e2de910533e7db2cff51e7e3aa119799e8804 from 'figma:asset/2d6e2de910533e7db2cff51e7e3aa119799e8804.png';
import image_d0a114819f2ab0a070566ac7bea40ade0245c737 from 'figma:asset/d0a114819f2ab0a070566ac7bea40ade0245c737.png';
import image_e82f79e9f17a20eb83c0789ebf7e2d8fa9422900 from 'figma:asset/e82f79e9f17a20eb83c0789ebf7e2d8fa9422900.png';
import image_7933444c29bac7b19a839173e3c2c0bbb1e8fc16 from 'figma:asset/7933444c29bac7b19a839173e3c2c0bbb1e8fc16.png';
import image_7d92b35778d41bec485a83842ade7aed9cc8add2 from 'figma:asset/7d92b35778d41bec485a83842ade7aed9cc8add2.png';
import image_adcf796447fb7a2719ae7440db1a9ad825d78ba0 from 'figma:asset/adcf796447fb7a2719ae7440db1a9ad825d78ba0.png';
import image_60a7fd07782276eb2602e3b3e9bd65457eb69825 from 'figma:asset/60a7fd07782276eb2602e3b3e9bd65457eb69825.png';
import image_54524138d75acc007b7346112af8a425394dd7f7 from 'figma:asset/54524138d75acc007b7346112af8a425394dd7f7.png';
import image_44832720a09b293c37a6f39e91d2424657d69446 from 'figma:asset/44832720a09b293c37a6f39e91d2424657d69446.png';
import { X, ArrowLeft, ExternalLink, BookOpen, Instagram, Globe, ShoppingCart, FileText, Palette, Layout, Users } from 'lucide-react';
import { useEffect } from 'react';
import Slider from 'react-slick';

interface CaseDietaFinanceiraProps {
  onClose: () => void;
}

export function CaseDietaFinanceira({ onClose }: CaseDietaFinanceiraProps) {
  const imgCapaLivro = image_d0a114819f2ab0a070566ac7bea40ade0245c737;
  const imgPaginasInternas = image_2d6e2de910533e7db2cff51e7e3aa119799e8804;
  const imgLandingPage = image_e82f79e9f17a20eb83c0789ebf7e2d8fa9422900;
  
  // Instagram Carousel Images
  const instagramSlide1 = image_7933444c29bac7b19a839173e3c2c0bbb1e8fc16;
  const instagramSlide2 = image_7d92b35778d41bec485a83842ade7aed9cc8add2;
  const instagramSlide3 = image_adcf796447fb7a2719ae7440db1a9ad825d78ba0;
  const instagramSlide4 = image_60a7fd07782276eb2602e3b3e9bd65457eb69825;
  const instagramSlide5 = image_54524138d75acc007b7346112af8a425394dd7f7;
  const instagramSlide6 = image_44832720a09b293c37a6f39e91d2424657d69446;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
      {/* Background with gradient and texture */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        {/* Animated gradient orbs - green theme */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:64px_64px]"></div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="w-full min-h-screen relative z-10">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/10 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft size={16} />
                <span className="hidden sm:inline">Voltar aos projetos</span>
                <span className="sm:hidden">Voltar</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-300 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-20">
          {/* Hero */}
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
              <span className="text-xs text-green-400 font-semibold">Design Editorial + Landing Page</span>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Title with Book Image */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent pb-2">
                  Dieta Financeira
                </h1>
                <div className="relative shrink-0">
                  <img 
                    src={imgCapaLivro} 
                    alt="Capa do livro Dieta Financeira" 
                    className="h-32 sm:h-48 w-auto object-contain drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-green-500/20 blur-3xl -z-10"></div>
                </div>
              </div>
              
              <p className="text-base sm:text-xl text-gray-300 leading-relaxed">
                Educação financeira acessível através de design editorial profissional e estratégia digital
              </p>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Users size={16} className="text-green-400" />
                  <span><span className="text-white font-semibold">Cliente:</span> Fernando Gadelha</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <BookOpen size={16} className="text-green-400" />
                  <span><span className="text-white font-semibold">Formato:</span> Livro + Landing Page + Marketing Digital</span>
                </div>
              </div>
              
              <a
                href="https://mpdesigner.org/dietafinanceira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg text-sm text-green-400 transition-all group"
              >
                <Globe size={16} />
                Visitar Landing Page
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#262626] rounded-xl p-5 sm:p-8 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Visão Geral</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Desenvolvimento completo de material editorial e estratégia digital para o livro "Dieta Financeira" do autor Fernando Gadelha. 
              O projeto envolveu desde a diagramação profissional do livro até a criação de uma landing page de vendas otimizada e conteúdo para redes sociais.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-5">
                <BookOpen className="text-green-400 mb-3" size={24} />
                <h3 className="text-white font-semibold mb-2">Design Editorial</h3>
                <p className="text-sm text-gray-400">Diagramação profissional completa do livro</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-5">
                <Globe className="text-green-400 mb-3" size={24} />
                <h3 className="text-white font-semibold mb-2">Landing Page</h3>
                <p className="text-sm text-gray-400">Página de vendas otimizada para conversão</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-5">
                <Instagram className="text-green-400 mb-3" size={24} />
                <h3 className="text-white font-semibold mb-2">Marketing Digital</h3>
                <p className="text-sm text-gray-400">Posts e estratégia para Instagram</p>
              </div>
            </div>
          </div>

          {/* Design Editorial Section */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-full border border-green-500/20 mb-4">
                <FileText size={14} className="text-green-400" />
                <span className="text-xs text-green-400 font-semibold">DESIGN EDITORIAL</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Diagramação no InDesign</h2>
              <p className="text-gray-400 max-w-3xl">
                Diagramação completa do livro utilizando Adobe InDesign, com foco em legibilidade, hierarquia tipográfica e 
                experiência de leitura. Layout profissional que equilibra texto e espaços em branco.
              </p>
            </div>

            {/* InDesign Features */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#1a1a1a]/50 border border-[#262626] rounded-lg p-5">
                <Layout className="text-green-400 mb-3" size={20} />
                <h3 className="text-white font-semibold mb-2 text-sm">Grid System</h3>
                <p className="text-xs text-gray-400">Sistema de grid consistente para organização do conteúdo</p>
              </div>
              <div className="bg-[#1a1a1a]/50 border border-[#262626] rounded-lg p-5">
                <Palette className="text-green-400 mb-3" size={20} />
                <h3 className="text-white font-semibold mb-2 text-sm">Tipografia</h3>
                <p className="text-xs text-gray-400">Hierarquia tipográfica clara e legível</p>
              </div>
              <div className="bg-[#1a1a1a]/50 border border-[#262626] rounded-lg p-5">
                <BookOpen className="text-green-400 mb-3" size={20} />
                <h3 className="text-white font-semibold mb-2 text-sm">Layout Profissional</h3>
                <p className="text-xs text-gray-400">Equilíbrio entre texto e espaços em branco</p>
              </div>
            </div>

            {/* Internal Pages Image */}
            <div className="bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#262626] rounded-xl p-8 flex justify-center">
              <img 
                src={imgPaginasInternas} 
                alt="Páginas internas do livro" 
                className="max-w-3xl h-auto object-contain rounded-lg"
              />
            </div>

            {/* Book Mockup - REMOVED */}
          </div>

          {/* Landing Page Section */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-full border border-green-500/20 mb-4">
                <Globe size={14} className="text-green-400" />
                <span className="text-xs text-green-400 font-semibold">LANDING PAGE</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Página de Vendas Otimizada</h2>
              <p className="text-gray-400 max-w-3xl mb-6">
                Desenvolvimento de landing page de vendas focada em conversão, com design atrativo que destaca os benefícios do livro 
                e facilita o processo de compra através da plataforma Hotmart.
              </p>
              <a
                href="https://mpdesigner.org/dietafinanceira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg text-sm transition-all group"
              >
                <Globe size={16} />
                Acessar Landing Page
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Landing Page Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a]/50 border border-[#262626] rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <Layout size={20} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Design Responsivo</h3>
                    <p className="text-sm text-gray-400">Layout adaptativo para todos os dispositivos</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a1a1a]/50 border border-[#262626] rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <ShoppingCart size={20} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Integração Hotmart</h3>
                    <p className="text-sm text-gray-400">Processo de compra otimizado e seguro</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Landing Page Screenshot */}
            <div className="bg-gradient-to-br from-[#1a1a1a]/50 to-[#0a0a0a]/50 backdrop-blur-sm border border-[#262626] rounded-xl p-8">
              <img 
                src={imgLandingPage} 
                alt="Landing page de vendas do livro" 
                className="w-full h-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Ferramentas Utilizadas</h2>
              <p className="text-gray-400 max-w-3xl">
                Conjunto de ferramentas profissionais para garantir qualidade e eficiência em todas as etapas do projeto.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#262626] rounded-lg p-6 hover:border-green-500/30 transition-all group">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <FileText size={24} className="text-green-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Adobe InDesign</h3>
                <p className="text-xs text-gray-400">Diagramação profissional do livro</p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#262626] rounded-lg p-6 hover:border-green-500/30 transition-all group">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <Globe size={24} className="text-green-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Web Design</h3>
                <p className="text-xs text-gray-400">Desenvolvimento da landing page</p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#262626] rounded-lg p-6 hover:border-green-500/30 transition-all group">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <Instagram size={24} className="text-green-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Instagram</h3>
                <p className="text-xs text-gray-400">Posts e estratégia de conteúdo</p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#262626] rounded-lg p-6 hover:border-green-500/30 transition-all group">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <ShoppingCart size={24} className="text-green-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Hotmart</h3>
                <p className="text-xs text-gray-400">Plataforma de vendas e pagamento</p>
              </div>
            </div>
          </div>

          {/* Instagram Marketing */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-full border border-green-500/20 mb-4">
                <Instagram size={14} className="text-green-400" />
                <span className="text-xs text-green-400 font-semibold">MARKETING DIGITAL</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Estratégia para Instagram</h2>
              <p className="text-gray-400 max-w-3xl">
                Criação de posts estratégicos para divulgação do livro nas redes sociais, com design consistente e mensagens 
                alinhadas ao público-alvo. Conteúdo focado em engajamento e conversão.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1a1a1a]/50 border border-[#262626] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3 text-sm">📱 Posts de Divulgação</h3>
                <p className="text-xs text-gray-400">Conteúdo visual atrativo para divulgar o livro</p>
              </div>
              <div className="bg-[#1a1a1a]/50 border border-[#262626] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3 text-sm">💡 Dicas Financeiras</h3>
                <p className="text-xs text-gray-400">Posts educativos com trechos do livro</p>
              </div>
              <div className="bg-[#1a1a1a]/50 border border-[#262626] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3 text-sm">🎯 Call to Action</h3>
                <p className="text-xs text-gray-400">Posts direcionando para a página de vendas</p>
              </div>
            </div>

            {/* Instagram Carousel */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                {/* Instagram Post Mockup */}
                <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
                  {/* Instagram Header */}
                  <div className="flex items-center gap-3 p-3 border-b border-gray-800">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">DF</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-semibold">dietafinanceira</p>
                    </div>
                    <button className="text-white">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="1.5"/>
                        <circle cx="12" cy="12" r="1.5"/>
                        <circle cx="12" cy="19" r="1.5"/>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Instagram Carousel */}
                  <div className="bg-[#1a1a1a]">
                    <Slider {...sliderSettings}>
                      <div className="aspect-square">
                        <img 
                          src={instagramSlide1} 
                          alt="Post de Instagram 1" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square">
                        <img 
                          src={instagramSlide2} 
                          alt="Post de Instagram 2" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square">
                        <img 
                          src={instagramSlide3} 
                          alt="Post de Instagram 3" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square">
                        <img 
                          src={instagramSlide4} 
                          alt="Post de Instagram 4" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square">
                        <img 
                          src={instagramSlide5} 
                          alt="Post de Instagram 5" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square">
                        <img 
                          src={instagramSlide6} 
                          alt="Post de Instagram 6" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Slider>
                  </div>
                  
                  {/* Instagram Actions */}
                  <div className="p-3 space-y-3 border-t border-gray-800">
                    <div className="flex items-center gap-4">
                      <button className="text-white hover:text-gray-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="text-white hover:text-gray-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </button>
                      <button className="text-white hover:text-gray-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                      <button className="ml-auto text-white hover:text-gray-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                    </div>
                    <div>
                      <p className="text-white text-sm">
                        <span className="font-semibold">dietafinanceira</span>{' '}
                        <span className="text-gray-300">
                          Transforme sua vida financeira! 💰 Acesse o link na bio.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Resultado do Projeto</h2>
            <p className="text-gray-300 leading-relaxed">
              Projeto completo entregue com sucesso, incluindo livro diagramado profissionalmente, landing page funcional integrada 
              com Hotmart e estratégia de marketing digital implementada. O cliente recebeu todos os materiais necessários para 
              comercializar o livro de forma eficiente e profissional.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <p className="text-sm text-gray-400">Design Editorial Completo</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1</div>
                <p className="text-sm text-gray-400">Landing Page Otimizada</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Multi</div>
                <p className="text-sm text-gray-400">Posts para Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}