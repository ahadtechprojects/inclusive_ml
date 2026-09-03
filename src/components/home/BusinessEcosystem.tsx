"use client";

import React, { useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DynamicIcon } from "@/components/ui/IconHelper";
import { ArrowDown, CheckCircle2, Layers, Sparkles, Activity } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

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
    description: "Identifies regional market opportunities, aggregates B2B demand, and sources verified commodities and products.",
  },
  {
    id: "warehousing",
    title: "Warehousing & Storage",
    category: "Physical Infrastructure",
    icon: "Warehouse",
    role: "Preservation & Staging",
    interlinks: ["Commerce & Trading", "Logistics & Distribution"],
    description: "Safeguards inventory value through dry storage and temperature-controlled cold chain facilities, preparing shipments for dispatch.",
  },
  {
    id: "logistics",
    title: "Logistics & Distribution",
    category: "Mobility & Fulfillment",
    icon: "Truck",
    role: "Transit & Route Delivery",
    interlinks: ["Warehousing & Storage", "Technology & ICT"],
    description: "Executes inter-state haulage and regional last-mile distribution to ensure rapid, dependable delivery.",
  },
  {
    id: "technology",
    title: "Technology & ICT",
    category: "Digital Nervous System",
    icon: "Laptop",
    role: "Systems & Optimization",
    interlinks: ["Commerce & Trading", "Logistics & Distribution", "Business Services"],
    description: "Powers the entire ecosystem with automated workflows, real-time data reporting, and modern digital platforms.",
  },
  {
    id: "services",
    title: "Marketing & Consulting",
    category: "Strategic Growth",
    icon: "Megaphone",
    role: "Expansion & Capacity",
    interlinks: ["Commerce & Trading", "Technology & ICT"],
    description: "Drives customer acquisition, brand presence, and workforce training to ensure scalable organizational execution.",
  },
];

export function BusinessEcosystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isAutoScrollActive, setIsAutoScrollActive] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isAutoScrollActive) return;
    
    // Map scroll progress (0 to 1) across the 5 nodes
    const index = Math.min(
      ecosystemNodes.length - 1,
      Math.max(0, Math.floor(latest * ecosystemNodes.length))
    );
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const activeNode = ecosystemNodes[activeIndex];

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setIsAutoScrollActive(false);

    // Re-enable auto scroll after 3.5s of manual interaction
    const timer = setTimeout(() => {
      setIsAutoScrollActive(true);
    }, 3500);
    return () => clearTimeout(timer);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-gradient-to-b from-secondary/40 via-background to-secondary/30 border-y border-border/80 relative"
    >
      <Container size="wide">
        <SectionHeader
          badge="Scroll-Activated Ecosystem"
          title="The IML Business Ecosystem in Motion"
          description="As you scroll, see how our commercial, storage, freight, and digital systems interconnect into a synchronized corporate value chain."
        />

        {/* Live Scroll Activity Indicator Bar */}
        <div className="max-w-md mx-auto mb-10 p-3 rounded-2xl liquid-glass flex items-center justify-between gap-3 text-xs font-semibold text-foreground/80 shadow-sm">
          <div className="flex items-center gap-2 text-primary">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>Active Stage: Stage 0{activeIndex + 1}</span>
          </div>
          <div className="flex items-center gap-1.5">
            {ecosystemNodes.map((_, i) => (
              <button
                key={i}
                onClick={() => handleManualSelect(i)}
                aria-label={`Jump to stage ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-primary shadow-sm"
                    : "w-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop & Tablet Interactive Flowchart */}
        <div className="hidden md:block mb-12">
          <div className="relative p-8 rounded-3xl liquid-glass shadow-xl">
            {/* Animated Connecting Timeline Bar */}
            <div className="absolute top-1/2 left-16 right-16 h-1 bg-border/80 -translate-y-8 rounded-full overflow-hidden pointer-events-none">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-[#d94411] to-primary rounded-full"
                animate={{
                  width: `${((activeIndex + 1) / ecosystemNodes.length) * 100}%`,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <div className="grid grid-cols-5 gap-4 relative z-10">
              {ecosystemNodes.map((node, index) => {
                const isSelected = activeIndex === index;
                const isPassed = index <= activeIndex;

                return (
                  <div key={node.id} className="flex flex-col items-center">
                    <button
                      onClick={() => handleManualSelect(index)}
                      className={`w-full p-5 rounded-2xl text-center flex flex-col items-center transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-xl scale-105 ring-4 ring-primary/20 -translate-y-2"
                          : isPassed
                          ? "liquid-glass-card text-foreground border-primary/30"
                          : "liquid-glass-card text-foreground/70 opacity-80"
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

        {/* Mobile Vertical Flowchart (Mobile Phones only) */}
        <div className="md:hidden flex flex-col gap-3 mb-8">
          {ecosystemNodes.map((node, index) => {
            const isSelected = activeIndex === index;
            const isPassed = index <= activeIndex;

            return (
              <React.Fragment key={node.id}>
                <button
                  onClick={() => handleManualSelect(index)}
                  className={`w-full p-4 rounded-2xl flex items-center gap-4 text-left transition-all duration-300 ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-lg ring-2 ring-primary/40 scale-[1.02]"
                      : isPassed
                      ? "liquid-glass-card text-foreground border-primary/40"
                      : "liquid-glass-card text-foreground/70"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : isPassed
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <DynamicIcon name={node.icon} className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider block ${
                        isSelected ? "text-white/85" : "text-primary"
                      }`}
                    >
                      Stage 0{index + 1} • {node.category}
                    </span>
                    <span className="text-sm font-bold block">
                      {node.title}
                    </span>
                  </div>
                </button>
                {index < ecosystemNodes.length - 1 && (
                  <div className="flex justify-center text-primary/50">
                    <ArrowDown className={`w-4 h-4 transition-transform ${isPassed ? "text-primary scale-110" : ""}`} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Animated Detail Inspector Panel with Morphing Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="p-6 sm:p-10 rounded-3xl liquid-glass text-card-foreground shadow-xl border border-white/40 dark:border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/80">
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

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-accent text-accent-foreground text-xs font-semibold self-start md:self-auto shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Role: {activeNode.role}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-start">
              <div className="md:col-span-7">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Operational Function & Scope
                </h4>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                  {activeNode.description}
                </p>
              </div>

              <div className="md:col-span-5 bg-secondary/60 p-5 rounded-2xl border border-border/80 shadow-xs">
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
      </Container>
    </section>
  );
}
