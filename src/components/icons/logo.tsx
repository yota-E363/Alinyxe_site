'use client'

import { Icon } from "@/components/icons";

interface LogoProps {
  showText?: boolean;
  className?: string;
  size?: number;
}

export function Logo({
  showText = true,
  className = "",
  size = 36,
}: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      <Icon size={size} />

      {showText && (
        <span className="text-2xl font-bold tracking-tight">
          <span className="text-primary dark:text-foreground">
            Ali
          </span>
          <span className="text-primary">
            nyxe
          </span>
        </span>
      )}
    </div>
  );
}

export default Logo;