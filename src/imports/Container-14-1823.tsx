import imgImageOrganizeiVersaoDesktop from "figma:asset/a2716d6dda35f9782f20b26bfeeaa2c38b13d776.png";

export default function DesktopVersionSection() {
  return (
    <div className="space-y-3 sm:space-y-4 w-full overflow-x-hidden">
      <h3 className="text-lg sm:text-xl font-semibold text-white">Versão Desktop</h3>
      
      <div className="bg-[#121212] border border-[#262626] rounded-xl overflow-hidden">
        <img 
          alt="Organizei - Versão Desktop" 
          className="w-full h-auto object-cover" 
          src={imgImageOrganizeiVersaoDesktop} 
        />
      </div>
      
      <p className="text-xs sm:text-sm text-gray-400 text-center">
        Dashboard completo com visualização de métricas financeiras e agenda integrada
      </p>
    </div>
  );
}
