import svgPaths from "./svg-5ckchmss0b";
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[24px] text-white top-[-2px] tracking-[-0.3px] text-left">Metodologia de Pesquisa</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="w-6 h-6 shrink-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_2" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13e20900} id="Vector_4" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="flex items-start w-full" data-name="Container">
      <p className="text-xl sm:text-2xl font-['Inter:Bold',sans-serif] font-bold leading-tight text-white">50</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex items-start w-full" data-name="Container">
      <p className="text-xs font-['Inter:Regular',sans-serif] font-normal leading-tight text-[#99a1af]">Pesquisas quantitativas</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[12px] w-full overflow-hidden" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col gap-3 p-4 sm:p-5 w-full">
        <Icon />
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="w-6 h-6 shrink-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M8 2V6" id="Vector" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32f12c00} id="Vector_3" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex items-start w-full" data-name="Container">
      <p className="text-xl sm:text-2xl font-['Inter:Bold',sans-serif] font-bold leading-tight text-white">20</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex items-start w-full" data-name="Container">
      <p className="text-xs font-['Inter:Regular',sans-serif] font-normal leading-tight text-[#99a1af]">Entrevistas qualitativas</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[12px] w-full overflow-hidden" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col gap-3 p-4 sm:p-5 w-full">
        <Icon1 />
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="w-6 h-6 shrink-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3c6311f0} id="Vector_2" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d728000} id="Vector_3" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex items-start w-full" data-name="Container">
      <p className="text-xl sm:text-2xl font-['Inter:Bold',sans-serif] font-bold leading-tight text-white">2</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex items-start w-full" data-name="Container">
      <p className="text-xs font-['Inter:Regular',sans-serif] font-normal leading-tight text-[#99a1af]">Personas criadas</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[12px] w-full overflow-hidden" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col gap-3 p-4 sm:p-5 w-full">
        <Icon2 />
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="w-6 h-6 shrink-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f023100} id="Vector" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 11L12 14L22 4" id="Vector_2" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex items-start w-full" data-name="Container">
      <p className="text-xl sm:text-2xl font-['Inter:Bold',sans-serif] font-bold leading-tight text-white">45-60min</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex items-start w-full" data-name="Container">
      <p className="text-xs font-['Inter:Regular',sans-serif] font-normal leading-tight text-[#99a1af]">Por entrevista</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[12px] w-full overflow-hidden" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col gap-3 p-4 sm:p-5 w-full">
        <Icon3 />
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="gap-3 sm:gap-4 grid grid-cols-2 grid-rows-auto relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container5 />
      <Container8 />
      <Container11 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#fafafa] text-[18px] top-[-1px]">Perfil dos participantes</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">Profissões investigadas</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Nutricionistas</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Psicólogos</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Personal Trainers</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Fisioterapeutas</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Terapeutas ocupacionais</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[116px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[144px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <List />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">Critérios de seleção</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Mínimo 1 ano de atuação</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Atendimento presencial ou online</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Clientes fixos ou recorrentes</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Desafios na organização financeira</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[92px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <List1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[276px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`relative rounded-[8px] w-full transition-all duration-300 ${isExpanded ? 'bg-[#121212]' : ''}`} data-name="Container">
      {isExpanded && <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />}
      <div className="flex flex-col w-full">
        {/* Header - sempre visível */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between gap-4 p-4 sm:pt-[25px] sm:px-[25px] sm:pb-4 w-full hover:bg-white/5 transition-colors rounded-[8px]"
        >
          <div className="flex-1 text-left">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#fafafa] text-base sm:text-[18px]">Perfil dos participantes</p>
          </div>
          <ChevronDown 
            className={`text-emerald-500 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            size={20}
          />
        </button>
        
        {/* Content - expansível */}
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-4 sm:px-[25px] sm:pb-[25px] pt-0">
            <Container15 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#fafafa] text-[18px] top-[-1px]">Perguntas-chave das entrevistas</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="flex items-start w-full" data-name="List Item">
      <p className="text-sm sm:text-[14px] font-['Inter:Regular',sans-serif] font-normal leading-relaxed sm:leading-[20px] not-italic text-[#a3a3a3]">• Como você organiza sua agenda de atendimentos atualmente?</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="flex items-start w-full" data-name="List Item">
      <p className="text-sm sm:text-[14px] font-['Inter:Regular',sans-serif] font-normal leading-relaxed sm:leading-[20px] not-italic text-[#a3a3a3]">• Quais ferramentas usa para controle financeiro?</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="flex items-start w-full" data-name="List Item">
      <p className="text-sm sm:text-[14px] font-['Inter:Regular',sans-serif] font-normal leading-relaxed sm:leading-[20px] not-italic text-[#a3a3a3]">• Como calcula o valor dos seus serviços?</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="flex items-start w-full" data-name="List Item">
      <p className="text-sm sm:text-[14px] font-['Inter:Regular',sans-serif] font-normal leading-relaxed sm:leading-[20px] not-italic text-[#a3a3a3]">• Quais as maiores dificuldades na gestão financeira?</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="flex items-start w-full" data-name="List Item">
      <p className="text-sm sm:text-[14px] font-['Inter:Regular',sans-serif] font-normal leading-relaxed sm:leading-[20px] not-italic text-[#a3a3a3]">• Como acompanha pagamentos pendentes?</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="flex items-start w-full" data-name="List Item">
      <p className="text-sm sm:text-[14px] font-['Inter:Regular',sans-serif] font-normal leading-relaxed sm:leading-[20px] not-italic text-[#a3a3a3]">• Você consegue visualizar seu lucro real por cliente?</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="flex items-start w-full" data-name="List Item">
      <p className="text-sm sm:text-[14px] font-['Inter:Regular',sans-serif] font-normal leading-relaxed sm:leading-[20px] not-italic text-[#a3a3a3]">• Quais custos não são considerados na precificação?</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="flex items-start w-full" data-name="List Item">
      <p className="text-sm sm:text-[14px] font-['Inter:Regular',sans-serif] font-normal leading-relaxed sm:leading-[20px] not-italic text-[#a3a3a3]">• Como você lida com cobranças de clientes inadimplentes?</p>
    </div>
  );
}

function List2() {
  return (
    <div className="flex flex-col gap-3 sm:gap-[8px] w-full" data-name="List">
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
      <ListItem16 />
    </div>
  );
}

function Container17() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`col-[1] lg:col-[2] relative rounded-[8px] row-[1] w-full transition-all duration-300 ${isExpanded ? 'bg-[#121212]' : ''}`} data-name="Container">
      {isExpanded && <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />}
      <div className="flex flex-col w-full">
        {/* Header - sempre visível */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between gap-4 p-4 sm:pt-[25px] sm:px-[25px] sm:pb-4 w-full hover:bg-white/5 transition-colors rounded-[8px]"
        >
          <div className="flex-1 text-left">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#fafafa] text-base sm:text-[18px]">Perguntas-chave das entrevistas</p>
          </div>
          <ChevronDown 
            className={`text-emerald-500 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            size={20}
          />
        </button>
        
        {/* Content - expansível */}
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-4 sm:px-[25px] sm:pb-[25px] pt-0">
            <List2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="gap-4 sm:gap-6 grid grid-cols-1 lg:grid-cols-2 grid-rows-auto min-h-auto relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container16 />
    </div>
  );
}

export default function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-6 sm:gap-8 items-start relative w-full overflow-x-hidden" data-name="Container">
      <Heading />
      <Container12 />
    </div>
  );
}

// Export individual components for separate use
export function PerfilParticipantes() {
  return <Container16 />;
}

export function PerguntasChaveEntrevistas() {
  return <Container17 />;
}