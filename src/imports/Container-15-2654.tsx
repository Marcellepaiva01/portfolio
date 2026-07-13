import svgPaths from "./svg-p7yp2bmybw";

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[32px] top-[32px] w-[868px]" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[20px] text-center">🚀 Site Funcionando</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[60px] left-[130px] top-[72px] w-[672px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[336.25px] not-italic text-[#a3a3a3] text-[14px] text-center top-[-1px] translate-x-[-50%] w-[650px]">Aplicação web totalmente funcional desenvolvida com Figma Make e Supabase. Explore todas as funcionalidades, incluindo cadastro de clientes, agendamentos, controle financeiro e relatórios em tempo real.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[216.91px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#10b981] h-[48px] left-[337.55px] rounded-[8px] top-[156px] w-[256.906px]" data-name="Link">
      <a className="absolute block css-g0mm18 font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[116.5px] not-italic text-[#0a0a0a] text-[16px] text-center top-[10px] translate-x-[-50%]" href="https://shown-elude-39515076.figma.site/">
        <p className="css-ew64yg cursor-pointer decoration-solid leading-[24px] underline">Acessar Site Funcionando</p>
      </a>
      <Icon />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-gradient-to-r border border-[rgba(16,185,129,0.3)] border-solid from-[rgba(16,185,129,0.1)] relative rounded-[8px] size-full to-[rgba(16,185,129,0.05)]" data-name="Container">
      <Heading />
      <Paragraph />
      <Link />
    </div>
  );
}