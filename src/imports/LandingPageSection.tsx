import imgContainer from "figma:asset/37a44c9ce1e62aff652c126bb678cdb050565fe2.png";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#fafafa] text-[30px] top-[-2px] tracking-[-0.3px]">Landing Page</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">Página desenvolvida para apresentar o app e facilitar o download, com CTA claro e informações objetivas.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[1228px] pointer-events-none relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden rounded-[8px]">
        <img alt="" className="absolute h-[243.96%] left-0 max-w-none top-[0.01%] w-full" src={imgContainer} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[12px] text-center">Landing page completa com hero section, benefícios, depoimentos e CTAs para download</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[122px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Paragraph1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[430px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

export default function LandingPageSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full" data-name="LandingPageSection">
      <Heading />
      <Paragraph />
      <Container2 />
    </div>
  );
}