import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  description?: string;
  aspectRatio?: "wide" | "landscape" | "portrait" | "square" | "hero" | "banner";
  src?: string;
  alt?: string;
  priority?: boolean;
}

export function ImagePlaceholder({
  label,
  description,
  aspectRatio = "landscape",
  src,
  alt = "Inclusive Market Limited Corporate Asset",
  priority = false,
  className,
  ...props
}: ImagePlaceholderProps) {
  const aspectClasses = {
    wide: "aspect-[21/9]",
    landscape: "aspect-[16/10]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    hero: "aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/10]",
    banner: "aspect-[24/9] min-h-[220px]",
  }[aspectRatio];

  if (src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-border bg-muted shadow-sm",
          aspectClasses,
          className
        )}
        {...props}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-dashed border-border/80 bg-gradient-to-br from-secondary/80 via-muted/40 to-accent/20 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-primary/50 group select-none",
        aspectClasses,
        className
      )}
      {...props}
    >
      {/* Background subtle geometric grid motif */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px)`,
          backgroundSize: "20px 20px"
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-md px-4">
        <div className="w-12 h-12 rounded-xl bg-card/90 shadow-sm border border-border/60 flex items-center justify-center text-primary mb-3 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <ImageIcon className="w-6 h-6" />
        </div>
        
        <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
          {label}
        </span>
        
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description || "Replace with approved IML corporate imagery"}
        </p>

        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-background/80 backdrop-blur-sm border border-border text-foreground/70">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse" />
          Production Asset Slot
        </div>
      </div>
    </div>
  );
}
