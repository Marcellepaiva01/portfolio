import { cn } from '@/app/components/ui/utils';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

const cardBase =
  'group relative rounded-lg border border-border bg-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/[0.03] hover:shadow-[0_12px_40px_rgba(16,185,129,0.1)] cursor-default overflow-hidden';

const cardShine =
  'after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 group-hover:after:opacity-100 after:bg-gradient-to-br after:from-accent/[0.07] after:via-transparent after:to-transparent after:pointer-events-none';

export function DcCard({
  children,
  className,
  padding = 'p-4',
}: {
  children: ReactNode;
  className?: string;
  padding?: string;
}) {
  return (
    <div className={cn(cardBase, cardShine, padding, className)}>
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

export function DcHighlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'group relative rounded-lg border border-accent/20 bg-accent/5 p-4 transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:border-accent/45 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/15 cursor-default overflow-hidden',
        cardShine,
        className
      )}
    >
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

export function DcStatCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'group rounded-lg border border-accent/20 bg-accent/5 p-4 text-center transition-all duration-300',
        'hover:scale-[1.04] hover:border-accent/55 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 cursor-default',
        className
      )}
    >
      {children}
    </div>
  );
}

export function DcSectionHeader({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) {
  return (
    <div className="group flex items-center gap-3">
      <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-accent/20">
        <Icon className="text-accent transition-transform duration-300 group-hover:rotate-3" size={24} />
      </div>
      <h2 className="text-2xl sm:text-3xl transition-colors duration-300 group-hover:text-accent/90">{title}</h2>
    </div>
  );
}

export function DcQuoteCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <blockquote
      className={cn(
        cardBase,
        cardShine,
        'p-4 hover:shadow-md',
        className
      )}
    >
      <div className="relative z-[1]">{children}</div>
    </blockquote>
  );
}

export function DcTableRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <tr
      className={cn(
        'border-b border-border last:border-0 transition-colors duration-200 hover:bg-accent/[0.05] cursor-default',
        className
      )}
    >
      {children}
    </tr>
  );
}
