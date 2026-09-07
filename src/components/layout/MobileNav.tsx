"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const prevPathname = React.useRef(pathname);

  // Close menu on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close ONLY when pathname actually changes
  React.useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sheet / Drawer with motion from BELOW */}
          <motion.div
            initial={{ y: "100%", opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-50 w-full max-h-[85vh] rounded-t-3xl liquid-glass p-6 sm:p-8 shadow-2xl flex flex-col justify-between border-t border-x border-white/30 dark:border-white/10 overflow-y-auto"
          >
            {/* Grab handle indicator */}
            <div className="w-12 h-1.5 rounded-full bg-foreground/20 mx-auto mb-4" />

            <div>
              <div className="flex items-center justify-between pb-5 border-b border-border/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative flex items-center justify-center font-extrabold text-lg tracking-wider shadow-sm">
                    <Image src="/images/IML-LOGO.png" alt="IML Logo" width={40} height={40} className="object-contain" priority />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-foreground tracking-tight text-sm">
                      Inclusive Market
                    </span>
                    <span className="text-[11px] text-muted-foreground uppercase tracking-wider">
                      Limited
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-muted/80 text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2">
                {mainNavItems
                  .filter((item) => item.href !== "/contact")
                  .map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 + index * 0.04 }}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-all ${isActive
                            ? "bg-primary text-white font-semibold shadow-md ring-2 ring-primary/30"
                            : "liquid-glass-card text-foreground hover:border-primary/40"
                            }`}
                        >
                          <span>{item.label}</span>
                          <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "text-white" : "text-muted-foreground"}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
              </nav>
            </div>

            <div className="pt-6 mt-6 border-t border-border/80 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs text-muted-foreground font-medium">Appearance Theme</span>
                <ThemeToggle />
              </div>

              <Button
                href="/contact"
                className="w-full shadow-lg h-12 text-base font-semibold"
                size="lg"
                onClick={onClose}
              >
                Contact IML
              </Button>

              <div className="pt-2 flex flex-col items-center justify-center gap-2.5">
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                  Official Channels
                </span>
                <SocialLinks size="sm" className="justify-center" />
              </div>

              <p className="text-[11px] text-center text-muted-foreground">
                RC CAMA 2020 • Inclusive Market Limited
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
