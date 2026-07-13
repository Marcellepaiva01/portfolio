import svgPaths from "./svg-gtflnthzt3";

function Icon() {
  return (
    <div className="absolute left-[12px] size-[15.989px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9892 15.9892">
        <g clipPath="url(#clip0_48_839)" id="Icon">
          <path d="M5.32972 1.33243V3.99729" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33243" />
          <path d="M10.6594 1.33243V3.99729" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33243" />
          <path d={svgPaths.p202baf80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33243" />
          <path d="M1.99865 6.66215H13.9905" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33243" />
        </g>
        <defs>
          <clipPath id="clip0_48_839">
            <rect fill="white" height="15.9892" width="15.9892" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#2b7fff] relative rounded-[8px] size-full" data-name="Button">
      <Icon />
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[107.96px] not-italic text-[14px] text-center text-white top-[5.98px]">Novo Agendamento</p>
    </div>
  );
}