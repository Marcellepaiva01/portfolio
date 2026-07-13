import svgPaths from "./svg-eyydvdy3z6";

function Icon() {
  return (
    <div className="absolute left-[20px] size-[24px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p180a8840} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 11L12 14L22 4" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[20px] top-[56px] w-[258.656px]" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[14px]">Registro Rápido</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[32px] left-[20px] top-[84px] w-[258.656px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#a3a3a3] text-[12px] top-0 w-[218px]">Registre atendimentos e pagamentos em poucos toques</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#121212] border border-[#262626] border-solid h-[138px] left-0 rounded-[8px] top-0 w-[300.656px]" data-name="Container">
      <Icon />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[20px] size-[24px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p28d7cb80} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 11L12 14L22 4" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[20px] top-[56px] w-[258.672px]" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[14px]">Notificações Smart</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[32px] left-[20px] top-[84px] w-[258.672px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#a3a3a3] text-[12px] top-0 w-[226px]">Lembretes automáticos de atendimentos e cobranças</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#121212] border border-[#262626] border-solid h-[138px] left-[316.66px] rounded-[8px] top-0 w-[300.672px]" data-name="Container">
      <Icon1 />
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[20px] size-[24px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d69fc52} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 11L12 14L22 4" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[20px] top-[56px] w-[258.656px]" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[14px]">Relatórios Visuais</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[32px] left-[20px] top-[84px] w-[258.656px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#a3a3a3] text-[12px] top-0 w-[230px]">Dashboards com lucro líquido e análise por cliente</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#121212] border border-[#262626] border-solid h-[138px] left-[633.33px] rounded-[8px] top-0 w-[300.656px]" data-name="Container">
      <Icon2 />
      <Heading2 />
      <Paragraph2 />
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