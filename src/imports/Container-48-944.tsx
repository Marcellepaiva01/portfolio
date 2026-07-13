function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#fafafa] text-[18px] top-[-1px]">🧮 Calculadora</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[27.986px] items-start relative shrink-0 w-[293.959px]" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Arial:Bold',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#096] text-[20px] whitespace-pre-wrap">Calculadora de Combustível</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[40.002px] relative shrink-0 w-[293.959px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-2px] w-[254px] whitespace-pre-wrap">Calcule o custo de combustível para uma viagem</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="absolute content-stretch flex h-[14.003px] items-center left-0 top-0 w-[293.959px]" data-name="Primitive.label">
      <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Preço do Combustível (R$/litro)</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[35.99px] left-0 rounded-[8px] top-[14px] w-[293.959px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px]">5.50</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.246px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[49.993px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="absolute content-stretch flex h-[14.003px] items-center left-0 top-0 w-[293.959px]" data-name="Primitive.label">
      <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Distância Percorrida (km)</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[35.99px] left-0 rounded-[8px] top-[14px] w-[293.959px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px]">200</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.246px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[49.993px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="absolute content-stretch flex h-[14.003px] items-center left-0 top-0 w-[293.959px]" data-name="Primitive.label">
      <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Consumo do Veículo (km/l)</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[35.99px] left-0 rounded-[8px] top-[14px] w-[293.959px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px]">10</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.246px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[49.993px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel2 />
      <Input2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00bc7d] h-[35.99px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[146.7px] not-italic text-[14px] text-center text-white top-[5.98px]">Calcular</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[15.989px] h-[233.936px] items-start relative shrink-0 w-[293.959px]" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
      <Button />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center p-[24px] relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <Heading />
      <Paragraph />
      <Container2 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#121212] content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative rounded-[8px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Heading1 />
      <Container1 />
    </div>
  );
}