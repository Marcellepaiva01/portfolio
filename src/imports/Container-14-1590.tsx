function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#fafafa] text-[30px] top-[-2px] tracking-[-0.3px]">Fluxograma Principal</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">Fluxo de navegação do aplicativo Organizei com as principais funcionalidades do sistema.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px] text-center">Login / Cadastro</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(16,185,129,0.1)] content-stretch flex flex-col h-[46px] items-start left-0 pb-px pt-[13px] px-[17px] rounded-[8px] top-0 w-[884px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[rgba(16,185,129,0.5)] h-[16px] left-[441.5px] top-[54px] w-px" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute h-[78px] left-0 top-0 w-[884px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[14px] text-center">📊 Dashboard</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[12px] text-[rgba(10,10,10,0.8)] text-center">Visão geral • Saldo total • Resumo financeiro</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#10b981] content-stretch flex flex-col gap-[4px] h-[64px] items-start left-0 pt-[12px] px-[16px] rounded-[8px] top-0 w-[884px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[#262626] h-[16px] left-[441.5px] top-[72px] w-px" data-name="Container" />;
}

function Container8() {
  return (
    <div className="absolute h-[96px] left-0 top-[90px] w-[884px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[12px] text-center">📅 Agendamento</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[11.25px] left-[98.2px] not-italic text-[#a3a3a3] text-[9px] text-center top-[-1px] translate-x-[-50%]">Calendário</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#1a1a1a] col-[1] css-por8k5 relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[11px] px-[9px] relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[12px] text-center">💰 Transações</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[11.25px] left-[98.36px] not-italic text-[#a3a3a3] text-[9px] text-center top-[-1px] translate-x-[-50%]">Despesas/Lucros</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#1a1a1a] col-[2] css-por8k5 relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[11px] px-[9px] relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[12px] text-center">📈 Relatórios</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[11.25px] left-[98.41px] not-italic text-[#a3a3a3] text-[9px] text-center top-[-1px] translate-x-[-50%]">Análises</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#1a1a1a] col-[3] css-por8k5 relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[11px] px-[9px] relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[12px] text-center">🧮 Calculadora</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[11.25px] left-[98.31px] not-italic text-[#a3a3a3] text-[9px] text-center top-[-1px] translate-x-[-50%]">% Vendas</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#1a1a1a] col-[4] css-por8k5 relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[11px] px-[9px] relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute gap-[8px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[53.25px] left-0 top-[198px] w-[884px]" data-name="Container">
      <Container11 />
      <Container14 />
      <Container17 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[11.25px] left-[100.25px] not-italic text-[#a3a3a3] text-[9px] text-center top-[-1px] translate-x-[-50%]">Criar agendamento</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] h-[25.25px] relative rounded-[4px] shrink-0 w-[215px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[7px] relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[11.25px] left-[100.75px] not-italic text-[#a3a3a3] text-[9px] text-center top-[-1px] translate-x-[-50%]">Ver calendário</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-[215px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[7px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[6px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container23 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[11.25px] left-[100.8px] not-italic text-[#a3a3a3] text-[9px] text-center top-[-1px] translate-x-[-50%]">Adicionar despesa</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] h-[25.25px] relative rounded-[4px] shrink-0 w-[215px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[7px] relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[11.25px] left-[100.84px] not-italic text-[#a3a3a3] text-[9px] text-center top-[-1px] translate-x-[-50%]">Registrar lucro</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-[215px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[7px] relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[6px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container28 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[11.25px] left-[100.42px] not-italic text-[#a3a3a3] text-[9px] text-center top-[-1px] translate-x-[-50%]">Gráficos</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] h-[25.25px] relative rounded-[4px] shrink-0 w-[215px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[7px] relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[11.25px] left-[100.56px] not-italic text-[#a3a3a3] text-[9px] text-center top-[-1px] translate-x-[-50%]">Exportar dados</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-[215px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[7px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="col-[3] content-stretch css-vsca90 flex flex-col gap-[6px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container33 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[11.25px] left-[100.56px] not-italic text-[#a3a3a3] text-[9px] text-center top-[-1px] translate-x-[-50%]">% para venda</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] h-[25.25px] relative rounded-[4px] shrink-0 w-[215px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[7px] relative size-full">
        <Container37 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[11.25px] left-[100.67px] not-italic text-[#a3a3a3] text-[9px] text-center top-[-1px] translate-x-[-50%]">% combustível</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-[215px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[7px] px-[7px] relative size-full">
        <Container39 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="col-[4] content-stretch css-vsca90 flex flex-col gap-[6px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container38 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute gap-[8px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[56.5px] left-0 top-[271.25px] w-[884px]" data-name="Container">
      <Container26 />
      <Container31 />
      <Container36 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return <div className="absolute bg-[#262626] h-[16px] left-[441.5px] top-0 w-px" data-name="Container" />;
}

function Container44() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px] text-center">↻ Retorno ao Dashboard com dados atualizados em tempo real</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[rgba(16,185,129,0.05)] content-stretch flex flex-col h-[34px] items-start left-0 pb-px pt-[9px] px-[17px] rounded-[8px] top-[24px] w-[884px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[58px] left-0 top-[355.75px] w-[884px]" data-name="Container">
      <Container43 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[413.75px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container8 />
      <Container21 />
      <Container42 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#121212] h-[463.75px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Container49() {
  return <div className="bg-[#10b981] rounded-[4px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[69.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#a3a3a3] text-[12px]">Tela principal</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex gap-[8px] h-[42px] items-center left-0 pl-[13px] pr-px py-px rounded-[8px] top-0 w-[303.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container49 />
      <Text />
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[139.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#a3a3a3] text-[12px]">Funcionalidades principais</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex gap-[8px] h-[42px] items-center left-[315.33px] pl-[13px] pr-px py-px rounded-[8px] top-0 w-[303.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container51 />
      <Text1 />
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[91.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#a3a3a3] text-[12px]">Ações específicas</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex gap-[8px] h-[42px] items-center left-[630.66px] pl-[13px] pr-px py-px rounded-[8px] top-0 w-[303.344px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container53 />
      <Text2 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container52 />
      <Container54 />
    </div>
  );
}

export default function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full" data-name="Container">
      <Heading />
      <Paragraph />
      <Container48 />
      <Container55 />
    </div>
  );
}