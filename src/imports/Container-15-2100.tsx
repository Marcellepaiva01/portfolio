function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#fafafa] text-[30px] top-[-2px] tracking-[-0.3px]">O Que Aprendi</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24px] left-0 top-[4px] w-[13.813px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#10b981] text-[16px] top-[-2px]">→</p>
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[248.359px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">Design centrado na rotina do usuário:</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[40px] left-[25.81px] top-0 w-[908.188px]" data-name="Paragraph">
      <BoldText />
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#a3a3a3] text-[14px] top-[-1px] w-[847px] text-left">Entender profundamente o dia a dia do profissional autônomo foi essencial para criar fluxos que realmente se encaixam na sua realidade.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full min-h-[40px]" data-name="Container">
      <Text />
      <Paragraph />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[24px] left-0 top-[4px] w-[13.813px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#10b981] text-[16px] top-[-2px]">→</p>
    </div>
  );
}

function BoldText1() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[205.516px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">Importância da personalização:</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[40px] left-[25.81px] top-0 w-[908.188px]" data-name="Paragraph">
      <BoldText1 />
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#a3a3a3] text-[14px] top-[-1px] w-[851px]">Diferentes perfis (iniciantes vs. experientes) têm necessidades distintas e exigem níveis de complexidade diferentes.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full min-h-[40px]" data-name="Container">
      <Text1 />
      <Paragraph1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-0 top-[4px] w-[13.813px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#10b981] text-[16px] top-[-2px]">→</p>
    </div>
  );
}

function BoldText2() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[190.719px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">Clareza como principal valor:</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20px] left-[25.81px] top-0 w-[819.125px]" data-name="Paragraph">
      <BoldText2 />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[190.72px] not-italic text-[#a3a3a3] text-[14px] top-[-1px]">Em produtos financeiros, simplicidade e clareza são mais importantes que ter muitas funcionalidades.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full min-h-[28px]" data-name="Container">
      <Text2 />
      <Paragraph2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

export default function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Container">
      <Heading />
      <Container3 />
    </div>
  );
}