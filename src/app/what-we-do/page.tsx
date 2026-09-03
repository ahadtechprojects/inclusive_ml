import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { DynamicIcon } from "@/components/ui/IconHelper";
import { businessPillars } from "@/data/business-pillars";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "What We Do | Inclusive Market Limited (IML)",
  description:
    "Explore Inclusive Market Limited's six core business pillars: Commerce & Trading, Logistics & Distribution, Warehousing & Storage, Technology & ICT, Marketing & Business Services, and Consulting.",
};

export default function WhatWeDoPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-accent/40 to-background border-b border-border/60">
        <Container size="wide">
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">
              Comprehensive Capabilities
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Six Interconnected Pillars of Commercial Execution
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Inclusive Market Limited delivers integrated solutions across physical trade, supply chain infrastructure, and enterprise technology to support businesses and expanding regional economies.
            </p>
          </div>
        </Container>
      </section>

      {/* Pillars Breakdown */}
      <section className="py-16 sm:py-24 bg-background">
        <Container size="wide">
          <div className="space-y-24 sm:space-y-32">
            {businessPillars.map((pillar, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={pillar.id}
                  id={pillar.slug}
                  className="scroll-mt-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
                >
                  {/* Visual Column */}
                  <div
                    className={`md:col-span-6 ${isEven ? "md:order-2" : "md:order-1"
                      }`}
                  >
                    <ImagePlaceholder
                      src={pillar.imageSrc}
                      alt={`Inclusive Market Limited - ${pillar.title}`}
                      label={pillar.placeholderLabel}
                      description={pillar.placeholderDescription}
                      aspectRatio="landscape"
                      className="shadow-md"
                    />
                  </div>

                  {/* Copy Column */}
                  <div
                    className={`md:col-span-6 flex flex-col items-start ${isEven ? "md:order-1" : "md:order-2"
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center">
                        <DynamicIcon name={pillar.iconName} className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded bg-accent">
                        Pillar {pillar.number}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                      {pillar.title}
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {pillar.fullDescription}
                    </p>

                    {/* Strategic Value Card */}
                    <div className="mt-6 w-full p-4 rounded-xl bg-secondary/50 border border-border">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                        Strategic Ecosystem Value
                      </span>
                      <p className="text-xs text-foreground/80 leading-relaxed">
                        {pillar.strategicValue}
                      </p>
                    </div>

                    {/* Key Capabilities */}
                    <div className="mt-6 w-full">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                        Operational Scope & Deliverables
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {pillar.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                      <Button href="/contact" size="md" className="w-full sm:w-auto justify-center">
                        <span>Enquire About {pillar.title}</span>
                      </Button>
                      <Button href="/partnerships" variant="outline" size="md" className="w-full sm:w-auto justify-center">
                        <span>Partner With This Division</span>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-secondary/40 border-t border-border">
        <Container size="default" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Need a Multi-Pillar Integrated Solution?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Our teams routinely configure cross-functional engagements combining procurement, storage facilities, freight routing, and custom software.
          </p>
          <Button href="/contact" size="lg" className="gap-2">
            <span>Speak with our Operations Lead</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Container>
      </section>
    </div>
  );
}
