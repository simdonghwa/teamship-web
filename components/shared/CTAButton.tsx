import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'sage';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const variants: Record<Variant, string> = {
  primary:   'bg-[var(--rust)] text-white hover:bg-[#b0561f]',
  secondary: 'bg-[var(--navy)] text-white hover:bg-[#2d2010]',
  ghost:     'border border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--cream)]',
  sage:      'bg-[var(--sage)] text-white hover:bg-[#3d6349]',
};

const sizes = {
  sm: 'px-4 py-2 text-[12px]',
  md: 'px-6 py-2.5 text-[13px]',
  lg: 'px-8 py-3.5 text-[14px]',
};

export default function CTAButton({ href, children, variant = 'primary', className, size = 'md' }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-1.5 font-bold rounded-full transition-colors duration-150',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </Link>
  );
}
