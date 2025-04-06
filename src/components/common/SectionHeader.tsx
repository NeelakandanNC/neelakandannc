
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = false,
  className
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "mb-8 md:mb-12",
      centered ? "text-center" : "",
      className
    )}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold mb-4 heading-underline animate-on-scroll",
        centered ? "mx-auto after:left-1/2 after:-translate-x-1/2" : ""
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground mt-4 md:max-w-2xl animate-on-scroll">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
