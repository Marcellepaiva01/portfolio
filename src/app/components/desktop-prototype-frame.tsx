import { ExternalLink } from 'lucide-react';

interface DesktopPrototypeFrameProps {
  src: string;
  title: string;
}

export function DesktopPrototypeFrame({ src, title }: DesktopPrototypeFrameProps) {
  return (
    <div className="space-y-4">
      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-t-2xl bg-gray-800/90 border border-white/10 p-3 sm:p-4 shadow-2xl">
          <div className="flex items-center justify-between gap-3 mb-3 px-1">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[10px] sm:text-xs text-gray-400 truncate flex-1 text-center">
              repeat-pin-23387564.figma.site
            </span>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
              aria-label="Abrir protótipo em nova aba"
            >
              <ExternalLink size={14} />
            </a>
          </div>
          <div className="relative aspect-[16/10] bg-white rounded-lg overflow-hidden border border-white/5">
            <iframe
              src={src}
              title={title}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox"
            />
          </div>
        </div>
        <div className="mx-6 sm:mx-16 h-3 sm:h-4 bg-gray-700/90 rounded-b-xl border-x border-b border-white/10" />
        <div className="mx-12 sm:mx-32 h-1.5 bg-gray-600/80 rounded-full mt-1" />
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground text-center max-w-2xl mx-auto">
        Navegue pelo protótipo publicado diretamente no frame acima ou abra em tela cheia pelo ícone no canto.
      </p>
    </div>
  );
}
