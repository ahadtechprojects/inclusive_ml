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
  ArrowRight,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Inclusive Market Limited (IML)",
  description:
    "Learn about Inclusive Market Limited (IML), a Nigerian brand alignment, strategic communications, and market access consultancy incorporated under CAMA 2020.",
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
              Inclusive Market Limited is a Nigerian-based brand alignment, strategic communications, and market access consultancy built to help organizations turn visibility into authority, and authority into trust.
            </p>

            {/* Direct Navigation to Corporate Profile */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button href="/corporate-profile" size="lg" className="shadow-md gap-2 justify-center">
                <FileText className="w-4 h-4" />
                <span>View Full Corporate Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/what-we-do" variant="outline" size="lg" className="justify-center">
                <span>Explore Capabilities</span>
              </Button>
            </div>
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
                  Turning Visibility into Authority, and Authority into Trust
                </h2>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Registered under the <strong>Companies and Allied Matters Act, 2020 (CAMA)</strong> as a private company limited by shares, Inclusive Market Limited (IML) operates with a mandate that spans strategic communications, market research, business advisory, and market access services.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our founding conviction is simple: most organizations today are not short on activity. Campaigns are running. Content is flowing. PR is happening. Yet something still feels off. That is not a marketing problem—it is an alignment problem. Influence is not accidental; it is aligned.
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

      {/* Vision, Mission, Values */}
      <section className="py-16 sm:py-20 bg-secondary/30 border-y border-border/80">
        <Container size="wide">
          <SectionHeader
            badge="Guiding Direction"
            title="Vision, Mission & Corporate Values"
            description="Our organizational direction is anchored on empowering grassroots commerce, building institutional authority, and delivering sustainable national impact."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-3xl liquid-glass text-card-foreground flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Corporate Vision</h3>
                <div className="p-4 rounded-xl bg-muted/60 border border-border/80 text-xs sm:text-sm text-foreground italic leading-relaxed">
                  &ldquo;To build Nigeria&apos;s largest verified database of women entrepreneurs, creating a data-driven ecosystem that bridges economic inclusion, political engagement, and sustainable national development.&rdquo;
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-[11px] text-muted-foreground flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>National Database & Ecosystem</span>
              </div>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-3xl liquid-glass text-card-foreground flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Corporate Mission</h3>
                <div className="p-4 rounded-xl bg-muted/60 border border-border/80 text-xs sm:text-sm text-foreground italic leading-relaxed">
                  &ldquo;To deploy a scalable, technology-enabled model that empowers one million women petty traders through cash grants, capacity building, and digital registration, while generating actionable data for inclusive policy-making and grassroots mobilization.&rdquo;
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-[11px] text-muted-foreground flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>1 Million Women Traders Target</span>
              </div>
            </div>

            {/* Core Values */}
            <div className="p-8 rounded-3xl liquid-glass text-card-foreground flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Institutional Values</h3>
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Clarity First:</strong> We diagnose before we deploy. Strategy before execution.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Alignment Above All:</strong> Influence is not accidental; it is aligned.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Cultural Intelligence:</strong> Deep understanding of the Nigerian and African market.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Impact-Driven:</strong> We measure success by tangible results, not activity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Integrity:</strong> Trust through transparency and accountability.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-[11px] text-muted-foreground flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>5 Core Operating Tenets</span>
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
