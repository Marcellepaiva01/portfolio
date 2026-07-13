import { X, ArrowLeft, ExternalLink, Users, Calendar, Target, Lightbulb, CheckCircle, TrendingUp, AlertCircle, Heart, Briefcase, DollarSign, Clock, Star, Zap, Shield, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';
import UserJourneysInteractive from '@/app/components/user-journeys-interactive';
import DesktopFeaturesInteractive from '@/app/components/desktop-features-interactive';
import FlowchartInteractive from '@/app/components/flowchart-interactive';
import svgPaths from "@/imports/svg-bofr031yhl";
import DesignSystemSection from '@/imports/DesignSystemSection';
import ComponentLibrarySection from '@/imports/ComponentLibrarySection';
import MetodologiaPesquisa, { PerfilParticipantes, PerguntasChaveEntrevistas } from '@/imports/Container-14-1570';
import PrincipaisDescobertas from '@/imports/Container-14-1574';
import PersonasSection from '@/imports/Container-14-1578';
import MapaEmpatia from '@/imports/Container-14-1582';
import JornadaUsuario from '@/imports/Container-14-1586';
import FluxogramaPrincipal from '@/imports/Container-14-1590';
import MobileNavigation from '@/imports/App-14-1700';
import DesktopVersionSection from '@/imports/Container-14-1823';
import LandingPageSection from '@/imports/LandingPageSection-15-2084';
import EmailTemplatesSection from '@/imports/EmailTemplatesSection';
import SolucaoDesenvolvidaSection from '@/imports/Container-15-2092';
import ResultadosSection from '@/imports/Container-15-2096';
import LandingPageDestaquesSection from '@/imports/Container-15-2104';
import imgImageOrganizeiVersaoDesktop from "figma:asset/1ce00feffda371c0c37018da9a7f2c71dd8a456e.png";
import imgImageOrganizeiMobileDashboard from "figma:asset/fe6fbbb595dbe093ee62c1897f815094040bb1f4.png";
import imgImageOrganizeiMobileAgenda from "figma:asset/dc9d4218326fd1585678c5c66de39433330d47e0.png";
import imgImageOrganizeiMobileClientes from "figma:asset/5e99af4d080c711a1b5bc6f29010a989dc579d46.png";
import imgContainer from "figma:asset/37a44c9ce1e62aff652c126bb678cdb050565fe2.png";
import imgImageEmailDeBoasVindas from "figma:asset/ea59e196031dbca1458385084fafc2dbf23971f8.png";
import imgImageEmailDeFeedback from "figma:asset/a7ec01b0b0eff844fd2e597320a3a8383062f6ac.png";
import imgContainer1 from "figma:asset/759c2d1a6e61ebd42b57df2174e681fac3e9e2c2.png";
import imgImageOrganizeiLogo from "figma:asset/3eaf0fc32b64112da3d1afaf42802b05921ab510.png";
import imgImageOrganizeiDesktopNova from "figma:asset/d19a621e1a6db30e6c35cbfe4b3ba3eaa2c2a51a.png";

interface CaseOrganizeiProps {
  onClose: () => void;
}

export function CaseOrganizei({ onClose }: CaseOrganizeiProps) {
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto overflow-x-hidden">
      {/* Background with gradient and texture */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:64px_64px]"></div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXhpIHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiLz48L3N2Zz4=')]\"></div>
      </div>

      <div className="w-full min-h-screen relative z-10 overflow-x-hidden">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-20 overflow-x-hidden">
          {/* Hero */}
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 rounded-full border border-emerald-500/30 backdrop-blur-sm">
              <span className="text-xs text-emerald-400 font-semibold">aplicativo + site + Landing page + email marketing</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <img src={imgImageOrganizeiLogo} alt="Organizei Logo" className="h-12 sm:h-20 w-auto object-contain" />
              <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent pb-2">Organizei</h1>
            </div>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Organização financeira para profissionais autônomos da saúde
            </p>
            <a
              href="https://shown-elude-39515076.figma.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Visitar projeto
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Overview / Context */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Contexto</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Profissionais autônomos da área da saúde enfrentam dificuldades significativas para organizar sua vida financeira. 
              Entre consultas, atendimentos domiciliares e gestão de múltiplos clientes, o controle de ganhos, gastos e 
              precificação adequada se torna um desafio constante que impacta diretamente na saúde financeira e tomada de decisões.
            </p>
          </div>

          {/* Metodologia de Pesquisa */}
          <div className="space-y-8">
            <MetodologiaPesquisa />
          </div>

          {/* Perfil dos Participantes */}
          <div className="space-y-8">
            <PerfilParticipantes />
          </div>

          {/* Perguntas-chave das Entrevistas */}
          <div className="space-y-8">
            <PerguntasChaveEntrevistas />
          </div>

          {/* Principais Descobertas */}
          <div className="space-y-8">
            <PrincipaisDescobertas />
          </div>

          {/* Double Diamond Process */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Double Diamond</h2>
            <p className="text-sm sm:text-base text-gray-300">
              Utilizamos o framework Double Diamond para estruturar nosso processo de design, garantindo que explorássemos amplamente o problema antes de convergir para soluções.
            </p>
            
            <div className="relative p-4 sm:p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              {/* Diamond visual representation */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-6 sm:mb-8">
                <div className="space-y-3 sm:space-y-4 text-center group">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-white text-sm sm:text-lg">Descobrir</h3>
                  <p className="text-xs text-gray-400">Pesquisas e entrevistas com profissionais da saúde autônomos</p>
                </div>
                <div className="space-y-3 sm:space-y-4 text-center group">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-white text-sm sm:text-lg">Definir</h3>
                  <p className="text-xs text-gray-400">Síntese dos problemas e criação de personas</p>
                </div>
                <div className="space-y-3 sm:space-y-4 text-center group">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lightbulb className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-white text-sm sm:text-lg">Desenvolver</h3>
                  <p className="text-xs text-gray-400">Ideação, prototipagem e testes iterativos</p>
                </div>
                <div className="space-y-3 sm:space-y-4 text-center group">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-white text-sm sm:text-lg">Entregar</h3>
                  <p className="text-xs text-gray-400">Validação final e implementação da solução</p>
                </div>
              </div>

              {/* Diamond shape connector */}
              <div className="hidden sm:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
            </div>
          </div>

          {/* Personas */}
          <div className="space-y-8">
            <PersonasSection />
          </div>

          {/* Mapa de Empatia */}
          <div className="space-y-8">
            <MapaEmpatia />
          </div>

          {/* Jornada do Usuário */}
          <div className="space-y-8">
            <UserJourneysInteractive />
          </div>

          {/* Priorização de Funcionalidades */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Priorização de Funcionalidades</h2>
            <p className="text-sm sm:text-base text-gray-300">
              Utilizamos a matriz de priorização baseada em impacto vs. esforço para definir o MVP.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Matriz visual */}
              <div className="relative aspect-square bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8">
                <div className="absolute inset-6 sm:inset-8 border-l-2 border-b-2 border-emerald-500/30"></div>
                
                {/* Labels */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-gray-400">Esforço</div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 text-xs text-gray-400">Impacto</div>
                
                {/* Quadrantes */}
                <div className="absolute top-8 sm:top-10 right-8 sm:right-10 text-xs font-semibold text-emerald-400">Alta Prioridade</div>
                <div className="absolute bottom-8 sm:bottom-10 right-8 sm:right-10 text-xs font-semibold text-yellow-400">Considerar</div>
                <div className="absolute top-8 sm:top-10 left-8 sm:left-10 text-xs font-semibold text-orange-400">Rápidas Vitórias</div>
                <div className="absolute bottom-8 sm:bottom-10 left-8 sm:left-10 text-xs font-semibold text-red-400">Baixa Prioridade</div>
                
                {/* Features plotadas */}
                <div className="absolute top-[20%] right-[25%]">
                  <div 
                    className="w-3 h-3 bg-emerald-400 rounded-full cursor-pointer hover:scale-150 transition-transform"
                    onClick={() => setSelectedPriority('dashboard')}
                  ></div>
                </div>
                <div className="absolute top-[30%] right-[20%]">
                  <div 
                    className="w-3 h-3 bg-emerald-400 rounded-full cursor-pointer hover:scale-150 transition-transform"
                    onClick={() => setSelectedPriority('agenda')}
                  ></div>
                </div>
                <div className="absolute top-[25%] left-[25%]">
                  <div 
                    className="w-3 h-3 bg-orange-400 rounded-full cursor-pointer hover:scale-150 transition-transform"
                    onClick={() => setSelectedPriority('relatorios')}
                  ></div>
                </div>
              </div>

              {/* Lista de funcionalidades */}
              <div className="space-y-3 sm:space-y-4">
                <div className={`p-3 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedPriority === 'dashboard' 
                    ? 'bg-emerald-500/20 border-emerald-500/50' 
                    : 'bg-white/5 border-white/10 hover:border-emerald-500/30'
                }`}
                onClick={() => setSelectedPriority('dashboard')}>
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <h4 className="text-sm sm:text-base font-semibold text-white">Dashboard Financeiro</h4>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">Alta</span>
                  </div>
                  <p className="text-xs text-gray-400">Visão geral de ganhos, gastos e saldo</p>
                </div>

                <div className={`p-3 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedPriority === 'agenda' 
                    ? 'bg-emerald-500/20 border-emerald-500/50' 
                    : 'bg-white/5 border-white/10 hover:border-emerald-500/30'
                }`}
                onClick={() => setSelectedPriority('agenda')}>
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <h4 className="text-sm sm:text-base font-semibold text-white">Agenda Integrada</h4>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">Alta</span>
                  </div>
                  <p className="text-xs text-gray-400">Calendário com sincronização de atendimentos</p>
                </div>

                <div className={`p-3 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedPriority === 'clientes' 
                    ? 'bg-emerald-500/20 border-emerald-500/50' 
                    : 'bg-white/5 border-white/10 hover:border-emerald-500/30'
                }`}
                onClick={() => setSelectedPriority('clientes')}>
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <h4 className="text-sm sm:text-base font-semibold text-white">Gestão de Clientes</h4>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">Alta</span>
                  </div>
                  <p className="text-xs text-gray-400">Cadastro e histórico de clientes</p>
                </div>

                <div className={`p-3 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedPriority === 'calculadora' 
                    ? 'bg-yellow-500/20 border-yellow-500/50' 
                    : 'bg-white/5 border-white/10 hover:border-yellow-500/30'
                }`}
                onClick={() => setSelectedPriority('calculadora')}>
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <h4 className="text-sm sm:text-base font-semibold text-white">Calculadora de Preços</h4>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Média</span>
                  </div>
                  <p className="text-xs text-gray-400">Ferramenta para calcular precificação justa</p>
                </div>

                <div className={`p-3 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedPriority === 'relatorios' 
                    ? 'bg-orange-500/20 border-orange-500/50' 
                    : 'bg-white/5 border-white/10 hover:border-orange-500/30'
                }`}
                onClick={() => setSelectedPriority('relatorios')}>
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <h4 className="text-sm sm:text-base font-semibold text-white">Relatórios Simples</h4>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">Rápida</span>
                  </div>
                  <p className="text-xs text-gray-400">Exportação de relatórios básicos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fluxograma Principal */}
          <div className="space-y-8">
            <FlowchartInteractive />
          </div>

          {/* Stack Tecnológica */}
          <div className="p-4 sm:p-6 bg-emerald-500/5 backdrop-blur-sm rounded-xl border border-emerald-500/30">
            <h3 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-4 sm:mb-6">Stack Tecnológica</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-xl shrink-0">
                  🎨
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Figma</div>
                  <div className="text-xs text-gray-400">Design & Prototipação</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-xl shrink-0">
                  ⚡
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Figma Make</div>
                  <div className="text-xs text-gray-400">Desenvolvimento Web</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-xl shrink-0">
                  🗄️
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Supabase</div>
                  <div className="text-xs text-gray-400">Backend & Database</div>
                </div>
              </div>
            </div>
          </div>

          {/* Versão Desktop */}
          <div className="space-y-4 sm:space-y-6">
            <DesktopVersionSection />
          </div>

          {/* Desktop Features Interactive */}
          <div className="space-y-6 sm:space-y-8">
            <DesktopFeaturesInteractive />
          </div>

          {/* Versão Mobile */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Versão Mobile</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="space-y-3 group">
                <div className="bg-[#121212] rounded-3xl border-4 border-gray-800 overflow-hidden p-1 hover:border-emerald-500/30 transition-all">
                  <img 
                    src={imgImageOrganizeiMobileDashboard} 
                    alt="Dashboard Mobile" 
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-white">Dashboard</div>
                  <div className="text-xs text-gray-400">Visão geral financeira</div>
                </div>
              </div>

              <div className="space-y-3 group">
                <div className="bg-[#121212] rounded-3xl border-4 border-gray-800 overflow-hidden p-1 hover:border-emerald-500/30 transition-all">
                  <img 
                    src={imgImageOrganizeiMobileAgenda} 
                    alt="Agenda Mobile" 
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-white">Agenda</div>
                  <div className="text-xs text-gray-400">Calendário integrado</div>
                </div>
              </div>

              <div className="space-y-3 group">
                <div className="bg-[#121212] rounded-3xl border-4 border-gray-800 overflow-hidden p-1 hover:border-emerald-500/30 transition-all">
                  <img 
                    src={imgImageOrganizeiMobileClientes} 
                    alt="Clientes Mobile" 
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-white">Calculadora</div>
                  <div className="text-xs text-gray-400">Precificação correta</div>
                </div>
              </div>
            </div>
          </div>

          {/* Design System */}
          <div className="space-y-6 sm:space-y-8">
            <DesignSystemSection />
          </div>

          {/* Component Library */}
          <div className="space-y-6 sm:space-y-8">
            <ComponentLibrarySection />
          </div>

          {/* Landing Page */}
          <div className="space-y-4 sm:space-y-6 w-full">
            <LandingPageSection />
          </div>

          {/* Email Templates */}
          <div className="space-y-4 sm:space-y-6 w-full">
            <EmailTemplatesSection />
          </div>

          {/* Solution Developed */}
          <div className="space-y-6 sm:space-y-8 w-full">
            <SolucaoDesenvolvidaSection />
          </div>

          {/* Detailed Results */}
          <div className="space-y-4 sm:space-y-6 w-full">
            <ResultadosSection />
          </div>
        </div>
      </div>
    </div>
  );
}