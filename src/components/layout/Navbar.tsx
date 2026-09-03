"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "./MobileNav";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = React.useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled
          ? "liquid-glass border-b border-white/20 dark:border-white/10 shadow-sm"
          : "bg-background/60 backdrop-blur-md border-b border-border/40"
          }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-label="Inclusive Market Limited Home"
            >
              <div className="w-10 h-10 relative flex items-center justify-center font-extrabold text-lg tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-200">
                <Image src="/images/IML-LOGO.png" alt="IML Logo" width={40} height={40} className="object-contain" priority />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight">
                  Inclusive Market
                </span>
                <span className="text-[11px] font-medium tracking-wider uppercase text-muted-foreground">
                  Limited
                </span>
              </div>
            </Link>

            {/* Desktop Navigation (Tablets, Laptops & Desktops) */}
            <nav className="hidden md:flex items-center gap-1 xl:gap-2">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${isActive
                      ? "text-primary font-semibold bg-primary/5 dark:bg-primary/10"
                      : "text-foreground/80 hover:text-foreground hover:bg-muted/60"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Action Area */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              <ThemeToggle />
              <Button href="/contact" size="sm" className="gap-1.5 shadow-sm">
                <span>Partner with IML</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Mobile Actions (Mobile Phones only) */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Open main menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={handleClose}
      />
    </>
  );
}
