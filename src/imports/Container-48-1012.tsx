function Icon() {
  return (
    <div className="absolute left-[12px] size-[15.989px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9892 15.9892">
        <g id="Icon">
          <path d="M3.33108 7.99458H12.6581" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33243" />
          <path d="M7.99458 3.33108V12.6581" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33243" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00bc7d] h-[36px] relative rounded-[8px] shrink-0 w-[187px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[94.46px] not-italic text-left text-white top-[8px] text-[12px]">Nova Transação</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Container">
      <Button />
    </div>
  );
}