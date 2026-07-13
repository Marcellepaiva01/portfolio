function Heading() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">📧 Emails Transacionais</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Confirmação de cadastro</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Reset de senha</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Confirmação de agendamento</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col gap-[8px] h-[126px] items-start left-0 pb-px pt-[21px] px-[21px] rounded-[8px] top-0 w-[300.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Heading />
      <List />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">🔔 Lembretes</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Atendimento próximo</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Pagamento pendente</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Relatório mensal pronto</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col gap-[8px] h-[126px] items-start left-[316.66px] pb-px pt-[21px] px-[21px] rounded-[8px] top-0 w-[300.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Heading1 />
      <List1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">📊 Engajamento</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Pesquisa de satisfação</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Oferta de recursos premium</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px]">• Dicas de otimização</p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col gap-[8px] h-[126px] items-start left-[633.33px] pb-px pt-[21px] px-[21px] rounded-[8px] top-0 w-[300.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Heading2 />
      <List2 />
    </div>
  );
}

export default function Container3() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}