import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";
import { businessPillars } from "@/data/business-pillars";
import {
  Target,
  Compass,
  HeartHandshake,
  Scale,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Inclusive Market Limited (IML)",
  description:
    "Learn about Inclusive Market Limited (IML), a Nigerian private corporate enterprise incorporated under CAMA 2020 with diversified capabilities across commerce, logistics, technology, and business services.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-accent/40 to-background border-b border-border/60">
        <Container size="wide">
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">
              About Inclusive Market Limited
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Institutional Foundation. Diversified Commercial Vision.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Inclusive Market Limited is an incorporated corporate entity designed to bridge commercial supply chains, modern storage infrastructure, multimodal logistics, and digital systems across Nigeria and beyond.
            </p>
          </div>
        </Container>
      </section>

      {/* Corporate Overview & Legal Context */}
      <section className="py-16 sm:py-20 bg-background">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-6 flex flex-col space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Who We Are
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
                  Bridging Market Opportunities with Operational Rigor
                </h2>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Founded under the <strong>Companies and Allied Matters Act, 2020 (CAMA)</strong> as a private company limited by shares, Inclusive Market Limited (IML) operates with a mandate that spans six synergistic business sectors.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We believe that modern commerce in expanding economies requires an integrated approach. By aligning product sourcing with secure storage, dependable transit logistics, and digital automation, we provide an operational ecosystem that enables businesses to thrive.
              </p>

              <div className="p-5 rounded-xl border border-border bg-card shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-primary" />
                  <span>Statutory Corporate Profile</span>
                </h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <dt className="text-muted-foreground">Entity Name:</dt>
                    <dd className="font-semibold text-foreground mt-0.5">{companyData.legalName}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Legal Form:</dt>
                    <dd className="font-semibold text-foreground mt-0.5">{companyData.incorporationDetails.entityType}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Statutory Authority:</dt>
                    <dd className="font-semibold text-foreground mt-0.5">{companyData.incorporationDetails.act}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Nominal Share Capital:</dt>
                    <dd className="font-semibold text-foreground mt-0.5">{companyData.incorporationDetails.shareCapital}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="md:col-span-6">
              <ImagePlaceholder
                src="/images/corporate-profile-iml.jpg"
                alt="Inclusive Market Limited Corporate Profile, Leadership and Infrastructure"
                label="ABOUT IML — CORPORATE OVERVIEW"
                description="Replace with approved high-resolution corporate office, boardroom, or institutional operations asset."
                aspectRatio="landscape"
                className="shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Vision, Mission, Values (Factually Defensible Placeholders) */}
      <section className="py-16 sm:py-20 bg-secondary/30 border-y border-border/80">
        <Container size="wide">
          <SectionHeader
            badge="Guiding Direction"
            title="Vision, Mission & Corporate Values"
            description="Our organizational direction is anchored on delivering dependable, long-term commercial value to partners and stakeholders."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-3xl liquid-glass text-card-foreground flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Corporate Vision</h3>
                <div className="p-4 rounded-xl bg-muted/60 border border-border/80 text-xs text-muted-foreground italic leading-relaxed">
                  &ldquo;To be a premier integrated commercial and service gateway, establishing dependable trade corridors, modern storage infrastructure, and technological excellence across regional markets.&rdquo;
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-[11px] text-muted-foreground/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                <span>Approved Corporate Direction Slot</span>
              </div>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-3xl liquid-glass text-card-foreground flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Corporate Mission</h3>
                <div className="p-4 rounded-xl bg-muted/60 border border-border/80 text-xs text-muted-foreground italic leading-relaxed">
                  &ldquo;To connect producers, businesses, and markets through structured sourcing, resilient logistics networks, purpose-built warehousing, and digital solutions executed with commercial integrity.&rdquo;
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-[11px] text-muted-foreground/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                <span>Approved Corporate Mission Slot</span>
              </div>
            </div>

            {/* Core Values */}
            <div className="p-8 rounded-3xl liquid-glass text-card-foreground flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Operating Principles</h3>
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Integrity:</strong> Upholding contractual commitments and regulatory compliance in every trade exchange.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Integration:</strong> Unifying supply, storage, and transport into a cohesive delivery system.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Excellence:</strong> Delivering predictable timelines and high operational standards.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-[11px] text-muted-foreground/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                <span>Official IML Brand Values Slot</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Corporate Scope from MEMART */}
      <section className="py-16 sm:py-20 bg-background">
        <Container size="wide">
          <SectionHeader
            badge="Statutory Scope"
            title="Verified Business Scope"
            description="Our Memorandum and Articles of Association (MEMART) authorizes active commercial and service operations across six strategic pillars:"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 sm:p-7 rounded-3xl liquid-glass-card"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded-lg bg-accent">
                    {pillar.number}
                  </span>
                  <h3 className="font-bold text-base text-foreground">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.shortDescription}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-accent/30 border-t border-border">
        <Container size="default" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Partner with Inclusive Market Limited
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you are seeking a wholesale commercial distributor, specialized freight partner, or digital ICT infrastructure, we welcome strategic collaboration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              <span>Submit Business Enquiry</span>
            </Button>
            <Button href="/what-we-do" variant="outline" size="lg">
              <span>View Detailed Capabilities</span>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
