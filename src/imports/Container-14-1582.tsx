import { useState } from "react";
import { ChevronDown } from "lucide-react";
import svgPaths from "./svg-a4jkh7bhwc";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#fafafa] text-[30px] top-[-2px] tracking-[-0.3px]">Mapas de Empatia</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pae3c380} id="Vector_4" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(16,185,129,0.2)] relative rounded-[33554400px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">💭 Pensa e Sente</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Será que estou cobrando o valor certo?"`}</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Tenho medo de esquecer de cobrar algum cliente"`}</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Preciso parecer mais profissional"`}</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Quero crescer, mas me sinto desorganizada"`}</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[17px] px-[17px] relative size-full">
        <Heading2 />
        <List />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">👁️ Vê</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Colegas mais experientes bem organizados</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Ferramentas complexas demais</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Planilhas confusas no Excel</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Contas de papel acumuladas</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[17px] px-[17px] relative size-full">
        <Heading3 />
        <List1 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">💬 Fala e Faz</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Usa agenda de papel e WhatsApp</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Registra pagamentos em caderno</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Pede indicação de ferramentas aos colegas</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Esquece de cobrar alguns clientes</p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[17px] px-[17px] relative size-full">
        <Heading4 />
        <List2 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">👂 Ouve</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Você precisa se organizar melhor"`}</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Use planilhas para controlar tudo"`}</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Contrate um contador"`}</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Colegas falando de ferramentas caras</p>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[17px] px-[17px] relative size-full">
        <Heading5 />
        <List3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="gap-[16px] grid grid-cols-1 md:grid-cols-2 relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#fb2c36] text-[14px]">😰 Dores</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Constrangimento ao cobrar clientes</p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Medo de errar na precificação</p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Insegurança financeira</p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Tempo perdido com organização manual</p>
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem16 />
      <ListItem17 />
      <ListItem18 />
      <ListItem19 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(251,44,54,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(251,44,54,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[17px] px-[17px] relative size-full">
        <Heading6 />
        <List4 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">✨ Ganhos</p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Ter tudo centralizado em um só lugar</p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Não esquecer de cobrar ninguém</p>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Passar imagem profissional</p>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Ter controle financeiro claro</p>
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem20 />
      <ListItem21 />
      <ListItem22 />
      <ListItem23 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[17px] px-[17px] relative size-full">
        <Heading7 />
        <List5 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="gap-[16px] grid grid-cols-1 md:grid-cols-2 relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-[#121212] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start relative size-full">
        {/* Header clicável */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="content-stretch flex gap-[12px] items-center justify-between relative w-full px-[25px] py-[20px] hover:bg-[#1a1a1a] transition-colors rounded-t-[8px]"
        >
          <div className="flex gap-[12px] items-center flex-1">
            <Container />
            <div className="relative shrink-0 flex-1">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
                <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#fafafa] text-[20px]">Ana Paula</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">Profissional Iniciante</p>
              </div>
            </div>
          </div>
          <ChevronDown 
            className={`w-5 h-5 text-[#10b981] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Conteúdo expansível */}
        <div 
          className={`overflow-hidden transition-all duration-300 w-full ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-[16px] items-start pb-[25px] px-[25px]">
            <Container6 />
            <Container9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_13_15561)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p240d7000} id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25499600} id="Vector_3" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_13_15561">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(16,185,129,0.2)] relative rounded-[33554400px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">💭 Pensa e Sente</p>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Preciso otimizar minha rentabilidade"`}</p>
    </div>
  );
}

function ListItem25() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Alguns clientes dão mais trabalho que lucro"`}</p>
    </div>
  );
}

function ListItem26() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Quero tomar decisões baseadas em dados"`}</p>
    </div>
  );
}

function ListItem27() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Tenho que escalar meu negócio"`}</p>
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem24 />
      <ListItem25 />
      <ListItem26 />
      <ListItem27 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[17px] px-[17px] relative size-full">
        <Heading9 />
        <List6 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">👁️ Vê</p>
    </div>
  );
}

function ListItem28() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Agenda sempre cheia mas lucro baixo</p>
    </div>
  );
}

function ListItem29() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Custos invisíveis (combustível, insumos)</p>
    </div>
  );
}

function ListItem30() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Falta de visão clara do negócio</p>
    </div>
  );
}

function ListItem31() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Outros profissionais crescendo mais rápido</p>
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem28 />
      <ListItem29 />
      <ListItem30 />
      <ListItem31 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[17px] px-[17px] relative size-full">
        <Heading10 />
        <List7 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">💬 Fala e Faz</p>
    </div>
  );
}

function ListItem32() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Usa múltiplas ferramentas diferentes</p>
    </div>
  );
}

function ListItem33() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Tenta calcular custos manualmente</p>
    </div>
  );
}

function ListItem34() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Busca por dashboards e relatórios</p>
    </div>
  );
}

function ListItem35() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Quer dados para tomar decisões</p>
    </div>
  );
}

function List8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem32 />
      <ListItem33 />
      <ListItem34 />
      <ListItem35 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[17px] px-[17px] relative size-full">
        <Heading11 />
        <List8 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">👂 Ouve</p>
    </div>
  );
}

function ListItem36() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Você precisa saber seu custo real"`}</p>
    </div>
  );
}

function ListItem37() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Alguns clientes não valem a pena"`}</p>
    </div>
  );
}

function ListItem38() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">{`• "Conte seus custos de deslocamento"`}</p>
    </div>
  );
}

function ListItem39() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Podcasts sobre gestão financeira</p>
    </div>
  );
}

function List9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem36 />
      <ListItem37 />
      <ListItem38 />
      <ListItem39 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[17px] px-[17px] relative size-full">
        <Heading12 />
        <List9 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="gap-[16px] grid grid-cols-1 md:grid-cols-2 relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#fb2c36] text-[14px]">😰 Dores</p>
    </div>
  );
}

function ListItem40() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Não sabe lucro real por cliente</p>
    </div>
  );
}

function ListItem41() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Custos ocultos prejudicam rentabilidade</p>
    </div>
  );
}

function ListItem42() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Falta de dados para decisões</p>
    </div>
  );
}

function ListItem43() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Tempo gasto com controles manuais</p>
    </div>
  );
}

function List10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem40 />
      <ListItem41 />
      <ListItem42 />
      <ListItem43 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[rgba(251,44,54,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(251,44,54,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[17px] px-[17px] relative size-full">
        <Heading13 />
        <List10 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">✨ Ganhos</p>
    </div>
  );
}

function ListItem44() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Visualizar lucro líquido por cliente</p>
    </div>
  );
}

function ListItem45() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Tomar decisões baseadas em dados</p>
    </div>
  );
}

function ListItem46() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Otimizar agenda para maior rentabilidade</p>
    </div>
  );
}

function ListItem47() {
  return (
    <div className="content-stretch flex min-h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Automatizar cálculos complexos</p>
    </div>
  );
}

function List11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem44 />
      <ListItem45 />
      <ListItem46 />
      <ListItem47 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[17px] px-[17px] relative size-full">
        <Heading14 />
        <List11 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="gap-[16px] grid grid-cols-1 md:grid-cols-2 relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container21() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-[#121212] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start relative size-full">
        {/* Header clicável */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="content-stretch flex gap-[12px] items-center justify-between relative w-full px-[25px] py-[20px] hover:bg-[#1a1a1a] transition-colors rounded-t-[8px]"
        >
          <div className="flex gap-[12px] items-center flex-1">
            <Container11 />
            <div className="relative shrink-0 flex-1">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
                <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#fafafa] text-[20px]">Carlos Eduardo</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">Profissional Experiente</p>
              </div>
            </div>
          </div>
          <ChevronDown 
            className={`w-5 h-5 text-[#10b981] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Conteúdo expansível */}
        <div 
          className={`overflow-hidden transition-all duration-300 w-full ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-[16px] items-start pb-[25px] px-[25px]">
            <Container17 />
            <Container20 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full" data-name="Container">
      <Heading />
      <Container10 />
      <Container21 />
    </div>
  );
}
