import { ExternalLink } from 'lucide-react';

interface MobilePrototypeFrameProps {
  src: string;
  title: string;
}

export function MobilePrototypeFrame({ src, title }: MobilePrototypeFrameProps) {
  return (
    <div className="space-y-4">
      <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px]">
        {/* Phone shell */}
        <div className="relative rounded-[2.5rem] bg-gray-900 border-[3px] border-gray-700 shadow-2xl shadow-black/40 p-2 sm:p-2.5">
          {/* Side buttons */}
          <div className="absolute -left-[5px] top-24 w-[3px] h-10 bg-gray-600 rounded-l-sm hidden sm:block" />
          <div className="absolute -left-[5px] top-36 w-[3px] h-14 bg-gray-600 rounded-l-sm hidden sm:block" />
          <div className="absolute -right-[5px] top-28 w-[3px] h-16 bg-gray-600 rounded-r-sm hidden sm:block" />

          {/* Screen bezel */}
          <div className="relative rounded-[2rem] overflow-hidden bg-black border border-white/5">
            {/* Dynamic island / notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-24 sm:w-28 h-6 bg-black rounded-full border border-white/10 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-800" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
            </div>

            {/* Status bar hint */}
            <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-6 pt-3 pb-1 pointer-events-none">
              <span className="text-[9px] text-white/40 font-medium">9:41</span>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors pointer-events-auto"
                aria-label="Abrir protótipo em nova aba"
              >
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Iframe — mobile aspect */}
            <div className="relative aspect-[9/19.5] bg-white">
              <iframe
                src={src}
                title={title}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox"
              />
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-28 h-1 bg-white/30 rounded-full pointer-events-none" />
          </div>
        </div>

        {/* URL label */}
        <p className="text-[10px] sm:text-xs text-muted-foreground text-center mt-4 truncate px-4">
          repeat-pin-23387564.figma.site
        </p>
      </div>

      <p className="text-xs sm:text-sm text-muted-foreground text-center max-w-md mx-auto">
        Navegue pelo protótipo mobile diretamente no telefone acima ou abra em tela cheia pelo ícone no canto superior.
      </p>
    </div>
  );
}
