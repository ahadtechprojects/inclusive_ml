import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, external, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none rounded-lg";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm hover:shadow",
      secondary: "bg-secondary text-secondary-foreground hover:bg-muted border border-border/80",
      outline: "border-2 border-primary/90 text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary",
      ghost: "text-foreground hover:bg-muted/70 hover:text-primary",
      link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 min-h-8 h-auto gap-1.5 leading-normal",
      md: "text-sm px-5 py-2.5 min-h-10 h-auto gap-2 leading-normal text-center",
      lg: "text-base px-6 py-3 min-h-12 h-auto gap-2.5 font-semibold leading-normal text-center",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
