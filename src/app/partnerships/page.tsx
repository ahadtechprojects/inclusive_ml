import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { DynamicIcon } from "@/components/ui/IconHelper";
import { partnerCategories, partnershipProcess } from "@/data/partnerships";
import { ArrowRight, CheckCircle2, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Partnerships | Inclusive Market Limited (IML)",
  description:
    "Partner with Inclusive Market Limited. Explore collaborative models for manufacturers, suppliers, regional distributors, technology leaders, and strategic alliances.",
};

export default function PartnershipsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-accent/40 to-background border-b border-border/60">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7">
              <Badge variant="primary" className="mb-4">
                Strategic Collaboration
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Collaborate with an Integrated Commercial Platform
              </h1>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                We work alongside manufacturers, regional producers, bulk distributors, and technology developers to create resilient trade corridors and high-performance supply operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#partner-categories" size="lg">
                  <span>Explore Partner Categories</span>
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  <span>Initiate Partnership Discussion</span>
                </Button>
              </div>
            </div>

            <div className="md:col-span-5">
              <ImagePlaceholder
                src="/images/strategic-collaboration-iml.jpg"
                alt="Inclusive Market Limited Strategic Collaboration, Corporate Alliances and Joint Ventures"
                label="PARTNERSHIP HERO — STRATEGIC ALLIANCES"
                description="Replace with approved IML corporate alliance, trade negotiation, or institutional partner collaboration asset."
                aspectRatio="landscape"
                className="shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Partner Categories */}
      <section className="py-16 sm:py-24 bg-background" id="partner-categories">
        <Container size="wide">
          <SectionHeader
            badge="Collaboration Models"
            title="Who We Work With"
            description="We structure collaborative frameworks tailored to the specific operating realities and strategic priorities of diverse enterprise partners."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerCategories.map((category) => (
              <div
                key={category.id}
                className="p-8 rounded-3xl liquid-glass-card flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <DynamicIcon name={category.iconName} className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <div className="pt-4 border-t border-border/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2.5">
                      Scope of Collaboration:
                    </span>
                    <ul className="space-y-2">
                      {category.collaborationScope.map((scope, i) => (
                        <li key={i} className="text-xs text-foreground/80 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{scope}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/40">
                  <Button
                    href="/contact"
                    variant="outline"
                    size="sm"
                    className="w-full justify-between"
                  >
                    <span>Partner with IML</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4-Step Process */}
      <section className="py-16 sm:py-24 bg-secondary/30 border-y border-border/80">
        <Container size="wide">
          <SectionHeader
            badge="Clear Engagement Roadmap"
            title="The Partnership Journey"
            description="Our structured engagement model ensures clarity, legal compliance under CAMA 2020, and swift operational rollout."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {partnershipProcess.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-3xl liquid-glass relative shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground font-mono font-bold text-base flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-accent/30">
        <Container size="default" className="text-center">
          <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Handshake className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to Explore a Strategic Alliance?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Reach out to our strategic partnerships team to schedule a preliminary discovery call or submit a formal partnership brief.
          </p>
          <Button href="/contact" size="lg" className="gap-2">
            <span>Submit Partnership Brief</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Container>
      </section>
    </div>
  );
}
