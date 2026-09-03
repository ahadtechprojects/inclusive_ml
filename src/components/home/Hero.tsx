"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-b from-accent/30 via-background to-background">
      {/* Decorative ambient gradients */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 -z-10 transform-gpu overflow-hidden blur-3xl opacity-20 dark:opacity-10 pointer-events-none"
      >
        <div 
          className="aspect-[1155/678] w-[45rem] bg-gradient-to-tr from-primary to-[#ff8f6b]"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 flex flex-col items-start"
          >
            {/* Regulatory Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-accent border border-accent-foreground/20 text-accent-foreground mb-6 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>Incorporated Corporate Entity • CAMA 2020</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              Building Connections. <br />
              <span className="text-primary">Enabling Commerce.</span> <br />
              Creating Opportunity.
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-normal">
              Inclusive Market Limited (IML) is a diversified commercial and services enterprise operating across trading, logistics, warehousing, digital ICT infrastructure, marketing, and corporate consulting.
            </p>

            {/* Value Points */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl text-sm font-medium text-foreground/90">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Integrated Commercial Ecosystem</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>End-to-End Logistics & Storage</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Modern Digital & ICT Solutions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Institutional Corporate Governance</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button href="/what-we-do" size="lg" className="w-full sm:w-auto gap-2 shadow-md">
                <span>Explore What We Do</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
                <span>Contact IML</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 w-full"
          >
            <div className="relative mx-auto max-w-lg md:max-w-none">
              <ImagePlaceholder
                src="/images/hero-iml.jpg"
                alt="Inclusive Market Limited Corporate Headquarters & Regional Logistics Operations"
                priority={true}
                label="HERO IMAGE — IML CORPORATE & OPERATIONS"
                description="Replace with approved high-resolution IML corporate headquarters, commercial operations, or regional logistics network asset."
                aspectRatio="hero"
                className="shadow-xl ring-1 ring-border/80"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-4 sm:left-6 bg-card/95 backdrop-blur-md border border-border p-4 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                  6
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Core Business Pillars</div>
                  <div className="text-[11px] text-muted-foreground">Unified corporate delivery model</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
