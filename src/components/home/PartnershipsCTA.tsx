import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ArrowRight, Handshake } from "lucide-react";

export function PartnershipsCTA() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/40 border-t border-border/80">
      <Container size="wide">
        <div className="p-8 sm:p-12 rounded-3xl liquid-glass text-card-foreground shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground mb-4">
                <Handshake className="w-3.5 h-3.5 text-primary" />
                <span>Strategic Collaboration</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Let&apos;s Build Something Resilient Together.
              </h2>

              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
                We partner with manufacturers, regional suppliers, commodity producers, distributors, and technology leaders to structure high-integrity commercial agreements and distribution networks.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/partnerships" size="lg" className="gap-2">
                  <span>Explore Partnership Models</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  <span>Contact Strategic Team</span>
                </Button>
              </div>
            </div>

            <div className="md:col-span-5 w-full">
              <ImagePlaceholder
                src="/images/strategic-collaboration-iml.jpg"
                alt="Inclusive Market Limited Strategic Collaboration, Corporate Alliances and Joint Ventures"
                label="PARTNERSHIPS — COLLABORATION IN ACTION"
                description="Replace with approved IML partnership signing, corporate alliance, or joint venture operations asset."
                aspectRatio="landscape"
                className="shadow-md"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
