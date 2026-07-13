import imgImageEmailDeBoasVindas from "figma:asset/ea59e196031dbca1458385084fafc2dbf23971f8.png";
import imgImageEmailDeFeedback from "figma:asset/a7ec01b0b0eff844fd2e597320a3a8383062f6ac.png";

export default function EmailTemplatesSection() {
  return (
    <div className="space-y-6 sm:space-y-8 w-full overflow-x-hidden">
      <h2 className="text-xl sm:text-3xl font-semibold text-white">Templates de Email</h2>
      <p className="text-sm text-gray-400">
        Sistema de emails transacionais desenvolvido para notificações automáticas e comunicação com usuários.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Email de Boas-vindas */}
        <div className="space-y-3">
          <div className="bg-[#121212] border border-[#262626] rounded-xl overflow-hidden">
            <img 
              alt="Email de Boas-vindas" 
              className="w-full h-auto object-cover object-top max-h-[400px]" 
              src={imgImageEmailDeBoasVindas} 
            />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">Email de Boas-vindas</h4>
            <p className="text-xs text-gray-400">
              Enviado após cadastro com guia de primeiros passos e orientações sobre o uso do app
            </p>
          </div>
        </div>

        {/* Email de Feedback */}
        <div className="space-y-3">
          <div className="bg-[#121212] border border-[#262626] rounded-xl overflow-hidden">
            <img 
              alt="Email de Feedback" 
              className="w-full h-auto object-cover object-top max-h-[400px]" 
              src={imgImageEmailDeFeedback} 
            />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">Email de Feedback</h4>
            <p className="text-xs text-gray-400">
              Solicitação de avaliação enviada após 30 dias de uso ativo do aplicativo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
