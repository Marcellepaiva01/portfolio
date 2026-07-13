function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#fafafa] text-[18px] top-[-1px]">Dashboard Principal</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#a3a3a3] text-[14px] top-[-1px] w-[384px]">Visão geral completa com métricas financeiras, próximos atendimentos e alertas importantes. Design clean com cartões informativos e acesso rápido às funcionalidades principais.</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Saldo do mês atual</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Gráfico de receitas vs despesas</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Lista de próximos atendimentos</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Alertas de pagamentos pendentes</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[76px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#121212] col-[1] css-por8k5 relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[19px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Heading />
        <Paragraph />
        <List />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#fafafa] text-[18px] top-[-1px]">Agenda Integrada</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#a3a3a3] text-[14px] top-[-1px] w-[373px]">Calendário completo com visualização mensal e semanal, integrado ao sistema financeiro para tracking automático de pagamentos.</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Visualização de calendário</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Status de pagamento por atendimento</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Informações detalhadas do cliente</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Registro rápido de atendimento</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[76px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#121212] col-[2] css-por8k5 relative rounded-[8px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Heading1 />
        <Paragraph1 />
        <List1 />
      </div>
    </div>
  );
}

export default function Container2() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] relative size-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}