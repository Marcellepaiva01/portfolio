function Heading() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#10b981] text-[14px]">Destaques do Design</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#10b981] text-[12px]">✓</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[218.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#a3a3a3] text-[12px]">Design responsivo para mobile e desktop</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#10b981] text-[12px]">✓</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[212.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#a3a3a3] text-[12px]">CTAs destacados para download do app</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#10b981] text-[12px]">✓</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[212.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#a3a3a3] text-[12px]">Seção de depoimentos com social proof</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex gap-[8px] items-start relative row-[2] self-stretch shrink-0" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#10b981] text-[12px]">✓</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[211.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#a3a3a3] text-[12px]">Mockups do aplicativo em contexto real</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex gap-[8px] items-start relative row-[2] self-stretch shrink-0" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(2,_minmax(0,_1fr))] h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

export default function Container5() {
  return (
    <div className="bg-[rgba(16,185,129,0.05)] content-stretch flex flex-col gap-[12px] items-start pb-px pt-[25px] px-[25px] relative rounded-[8px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Heading />
      <Container4 />
    </div>
  );
}