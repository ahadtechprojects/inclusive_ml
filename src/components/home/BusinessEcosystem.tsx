"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DynamicIcon } from "@/components/ui/IconHelper";
import { CheckCircle2, Layers, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NodeData {
  id: string;
  title: string;
  category: string;
  icon: string;
  role: string;
  interlinks: string[];
  description: string;
}

const ecosystemNodes: NodeData[] = [
  {
    id: "commerce",
    title: "Commerce & Trading",
    category: "Commercial Core",
    icon: "TrendingUp",
    role: "Demand Generation & Sourcing",
    interlinks: ["Warehousing & Storage", "Logistics & Distribution"],
    description:
      "Identifies regional market opportunities, aggregates B2B demand, and sources verified commodities and products across key Nigerian commercial corridors.",
  },
  {
    id: "warehousing",
    title: "Warehousing & Storage",
    category: "Physical Infrastructure",
    icon: "Warehouse",
    role: "Preservation & Staging",
    interlinks: ["Commerce & Trading", "Logistics & Distribution"],
    description:
      "Safeguards inventory value through secure dry storage and temperature-controlled cold chain facilities, staging commodities for scheduled dispatch.",
  },
  {
    id: "logistics",
    title: "Logistics & Distribution",
    category: "Mobility & Fulfillment",
    icon: "Truck",
    role: "Transit & Route Delivery",
    interlinks: ["Warehousing & Storage", "Technology & ICT"],
    description:
      "Executes inter-state haulage and regional last-mile distribution to ensure dependable, on-time delivery across domestic supply chains.",
  },
  {
    id: "technology",
    title: "Technology & ICT",
    category: "Digital Nervous System",
    icon: "Laptop",
    role: "Systems & Optimization",
    interlinks: ["Commerce & Trading", "Logistics & Distribution", "Business Services"],
    description:
      "Powers the entire ecosystem with automated digital workflows, inventory data visibility, and secure enterprise software architectures.",
  },
  {
    id: "services",
    title: "Marketing & Consulting",
    category: "Strategic Growth",
    icon: "Megaphone",
    role: "Expansion & Capacity",
    interlinks: ["Commerce & Trading", "Technology & ICT"],
    description:
      "Drives client acquisition, market research, and institutional workforce training to ensure scalable organizational execution.",
  },
];

export function BusinessEcosystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeNode = ecosystemNodes[activeIndex];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-secondary/40 via-background to-secondary/30 border-y border-border/80 relative">
      <Container size="wide">
        <SectionHeader
          badge="Integrated Ecosystem"
          title="The IML Business Ecosystem in Motion"
          description="Explore how our commercial, storage, freight, and digital infrastructure interconnect into a synchronized corporate value chain."
        />

        {/* =========================================================================
            DESKTOP & TABLET VIEW (No scroll hijacking, pure interactive click system)
            ========================================================================= */}
        <div className="hidden md:block">
          {/* Horizontal Interactive Flowchart */}
          <div className="mb-10 p-8 rounded-3xl liquid-glass shadow-xl">
            {/* Connecting Timeline Line */}
            <div className="relative mb-2">
              <div className="absolute top-1/2 left-16 right-16 h-1 bg-border/80 -translate-y-1/2 rounded-full overflow-hidden pointer-events-none">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${((activeIndex + 1) / ecosystemNodes.length) * 100}%`,
                  }}
                />
              </div>

              <div className="grid grid-cols-5 gap-4 relative z-10">
                {ecosystemNodes.map((node, index) => {
                  const isSelected = activeIndex === index;
                  const isPassed = index <= activeIndex;

                  return (
                    <div key={node.id} className="flex flex-col items-center">
                      <button
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`w-full p-5 rounded-2xl text-center flex flex-col items-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${
                          isSelected
                            ? "bg-primary text-primary-foreground shadow-xl scale-105 ring-4 ring-primary/20 -translate-y-1"
                            : isPassed
                            ? "liquid-glass-card text-foreground border-primary/30 hover:border-primary/60"
                            : "liquid-glass-card text-foreground/70 opacity-85 hover:opacity-100"
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                            isSelected
                              ? "bg-white/20 text-white scale-110"
                              : isPassed
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <DynamicIcon name={node.icon} className="w-6 h-6" />
                        </div>

                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                            isSelected ? "text-white/90" : "text-primary font-semibold"
                          }`}
                        >
                          Stage 0{index + 1}
                        </span>

                        <span className="text-xs font-bold leading-tight line-clamp-2">
                          {node.title}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Animated Detail Inspector Panel for Desktop */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="p-8 sm:p-10 rounded-3xl liquid-glass text-card-foreground shadow-xl border border-white/40 dark:border-white/10"
            >
              <div className="flex flex-row items-center justify-between gap-4 pb-6 border-b border-border/80">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                    <DynamicIcon name={activeNode.icon} className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {activeNode.category} • Stage 0{activeIndex + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {activeNode.title}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-accent text-accent-foreground text-xs font-semibold shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>Role: {activeNode.role}</span>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-6 pt-6 items-start">
                <div className="col-span-7">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Operational Function & Scope
                  </h4>
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                    {activeNode.description}
                  </p>
                </div>

                <div className="col-span-5 bg-secondary/60 p-5 rounded-2xl border border-border/80 shadow-xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-primary" />
                    <span>Integrated Synergies</span>
                  </h4>
                  <ul className="space-y-2">
                    {activeNode.interlinks.map((link, i) => (
                      <li key={i} className="text-xs text-foreground/90 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>Syncs with <strong>{link}</strong></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================================================================
            MOBILE VIEW ONLY (Stacked Cards Scroll Animation)
            ========================================================================= */}
        <div className="md:hidden relative flex flex-col gap-5 pt-2 pb-8">
          <div className="text-center mb-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Scroll down to explore the 5 stages
            </span>
          </div>

          {ecosystemNodes.map((node, index) => {
            // Progressive sticky top offset for clean mobile stacking
            const stickyTop = 76 + index * 18;

            return (
              <div
                key={node.id}
                style={{ top: `${stickyTop}px` }}
                className="sticky rounded-3xl p-6 liquid-glass shadow-2xl border border-white/50 dark:border-white/10 transition-transform"
              >
                {/* Stage Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-md shrink-0">
                      <DynamicIcon name={node.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">
                        Stage 0{index + 1} • {node.category}
                      </span>
                      <h3 className="text-base font-bold text-foreground leading-snug">
                        {node.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Role Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-accent text-[11px] font-semibold text-accent-foreground mb-3 shadow-2xs">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span>Role: {node.role}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {node.description}
                </p>

                {/* Interlinks */}
                <div className="pt-3 border-t border-border/70">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/70 block mb-2">
                    Integrated Synergies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {node.interlinks.map((link, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-secondary/80 text-foreground font-medium flex items-center gap-1.5 border border-border/60"
                      >
                        <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                        <span>{link}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
