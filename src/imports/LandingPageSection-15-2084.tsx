import imgContainer from "figma:asset/37a44c9ce1e62aff652c126bb678cdb050565fe2.png";

export default function LandingPageSection() {
  return (
    <div className="space-y-6 sm:space-y-8 w-full overflow-x-hidden">
      <h2 className="text-xl sm:text-3xl font-semibold text-white">Landing Page</h2>
      <p className="text-sm text-gray-400">
        Página desenvolvida para apresentar o app e facilitar o download, com CTA claro e informações objetivas.
      </p>

      <div className="space-y-4">
        <div className="relative w-full rounded-xl border border-[#262626] overflow-hidden">
          <img 
            alt="Landing Page Organizei" 
            className="w-full h-auto object-cover object-top max-h-[600px] sm:max-h-[800px]" 
            src={imgContainer} 
          />
        </div>
        <p className="text-xs sm:text-sm text-gray-400 text-center">
          Landing page completa com hero section, benefícios, depoimentos e CTAs para download
        </p>
      </div>
    </div>
  );
}
