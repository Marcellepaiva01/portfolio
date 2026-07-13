import svgPaths from "./svg-3llutw0mvg";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#fafafa] text-[30px] top-[-2px] tracking-[-0.3px]">Personas</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p184ba090} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p5d36b00} id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2f1426c0} id="Vector_3" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p25f79f00} id="Vector_4" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(16,185,129,0.2)] relative rounded-[33554400px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[20px]">Ana Paula</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">Profissional Iniciante</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="min-h-[52px] relative shrink-0 flex-1" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[14px]">Perfil</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="min-h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#a3a3a3] text-[14px] w-full">Profissional que está começando sua jornada autônoma e precisa estabelecer uma rotina organizada.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] min-h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">Need Statement</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] min-h-[86px] relative rounded-[4px] shrink-0 w-full p-3" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="css-4hzbpn font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] text-[#a3a3a3] text-[14px]">{`"Preciso de uma forma simples e centralizada de organizar atendimentos e pagamentos, para evitar esquecimentos e constrangimentos ao cobrar clientes."`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] min-h-[114px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[14px]">Necessidades</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Ferramenta simples e rápida</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Agenda integrada com notificações</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Controle de pagamentos e pendentes</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Lembretes automáticos</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] min-h-[92px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] min-h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <List />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] min-h-[326px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#121212] css-por8k5 relative rounded-[8px] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container2 />
        <Container6 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1fa66600} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p190dabf0} id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2a9abe70} id="Vector_3" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(16,185,129,0.2)] relative rounded-[33554400px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#fafafa] text-[20px]">Carlos Eduardo</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">Profissional Experiente</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="min-h-[52px] relative shrink-0 flex-1" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading5 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[14px]">Perfil</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="min-h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#a3a3a3] text-[14px] w-full">Profissional estabelecido que busca otimizar sua rentabilidade e tomar decisões baseadas em dados.</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] min-h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph4 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">Need Statement</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] min-h-[86px] relative rounded-[4px] shrink-0 w-full p-3" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="css-4hzbpn font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] text-[#a3a3a3] text-[14px]">{`"Preciso visualizar meu lucro líquido por cliente de forma clara, incluindo custos de deslocamento e insumos, para tomar decisões mais assertivas sobre minha agenda."`}</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] min-h-[114px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Paragraph5 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[14px]">Necessidades</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Cálculo automático de custos</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Relatório de lucro líquido</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Controle de estoque e insumos</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">• Alertas de rentabilidade</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] min-h-[92px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] min-h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <List1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] min-h-[326px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#121212] css-por8k5 relative rounded-[8px] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container10 />
        <Container14 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 w-full" data-name="Container">
      <Container7 />
      <Container15 />
    </div>
  );
}

export default function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full" data-name="Container">
      <Heading />
      <Container16 />
    </div>
  );
}