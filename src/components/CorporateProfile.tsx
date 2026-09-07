"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Compass,
  Target,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  ArrowRight,
  TrendingUp,
  FileText,
  Printer,
  Sparkles,
  Layers,
  Megaphone,
  Share2,
  GraduationCap,
  MapPin,
  ChevronRight,
} from "lucide-react";

export function CorporateProfile() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const capabilities = [
    {
      id: "3.1",
      title: "Brand Alignment & Positioning",
      icon: Layers,
      description:
        "We help organizations clarify their positioning, align their narrative, structure their authority, and translate strategy into culturally resonant communication.",
      deliverables: [
        "Brand strategy development",
        "Messaging frameworks",
        "Brand governance & consistency systems",
        "Narrative architecture",
      ],
    },
    {
      id: "3.2",
      title: "Strategic PR & Media Architecture",
      icon: Megaphone,
      description:
        "We design and execute PR campaigns that build credibility, influence, and trust across national and international media.",
      deliverables: [
        "Media relations & prime coverage",
        "Press release strategy & distribution",
        "Publicity campaign management",
        "Executive media training",
      ],
    },
    {
      id: "3.3",
      title: "Corporate & Marketing Communications",
      icon: Share2,
      description:
        "We ensure that every communication channel tells the same consistent story in a manner that commands trust and loyalty.",
      deliverables: [
        "Internal organizational communications",
        "External stakeholder engagement",
        "Corporate communication strategy",
        "Crisis preparedness & response protocols",
      ],
    },
    {
      id: "3.4",
      title: "Thought Leadership & Executive Positioning",
      icon: Award,
      description:
        "We position founders and C-suite executives as respected industry voices through strategic content, media, and LinkedIn authority.",
      deliverables: [
        "Executive profiling & media features",
        "LinkedIn thought leadership architecture",
        "Speaking engagement strategy",
        "Industry authority building",
      ],
    },
    {
      id: "3.5",
      title: "Digital Narrative Strategy",
      icon: Sparkles,
      description:
        "We design modern digital footprints that support sustained visibility, credibility, and brand authority.",
      deliverables: [
        "Social media strategy & execution",
        "High-conversion content marketing",
        "Website development (ICT infrastructure)",
        "E-commerce platform deployment",
      ],
    },
    {
      id: "3.6",
      title: "Market Access & Business Advisory",
      icon: TrendingUp,
      description:
        "Leveraging our extensive grassroots network and market intelligence, we help organizations enter and expand in Nigerian and African markets.",
      deliverables: [
        "Market research & consumer insights",
        "Customer acquisition services",
        "Sales & distribution support",
        "Strategic partnerships & market entry",
      ],
    },
    {
      id: "3.7",
      title: "Training & Human Capital Development",
      icon: GraduationCap,
      description:
        "We build capacity within organizations to sustain effective brand representation, team alignment, and executive messaging.",
      deliverables: [
        "Media engagement training",
        "Crisis communication training",
        "Brand ambassadorship programs",
        "Leadership communications",
      ],
    },
  ];

  const values = [
    {
      title: "Clarity First",
      subtitle: "Diagnose Before Deploy",
      description: "We diagnose before we deploy. Strategy always precedes execution.",
    },
    {
      title: "Alignment Above All",
      subtitle: "Deliberate Influence",
      description: "We believe influence is not accidental; it is deliberately aligned.",
    },
    {
      title: "Cultural Intelligence",
      subtitle: "Deep Market Terrain",
      description: "We understand the nuanced Nigerian and African market terrain deeply.",
    },
    {
      title: "Impact-Driven",
      subtitle: "Outcome-Based Success",
      description: "We measure success strictly by tangible results, not superficial activity.",
    },
    {
      title: "Integrity",
      subtitle: "Accountability & Trust",
      description: "We cultivate enduring institutional trust through transparency and accountability.",
    },
  ];

  const targetAudiences = [
    {
      number: "01",
      category: "Growth-Focused SMEs",
      description: "Enterprises that need operational structure and institutional positioning, not just superficial promotion.",
      focus: "Positioning architecture, governance frameworks, and sales acceleration.",
    },
    {
      number: "02",
      category: "Established Brands",
      description: "Mature organizations whose visibility has outpaced their narrative clarity and market perception.",
      focus: "Narrative alignment, executive profiling, and brand consistency systems.",
    },
    {
      number: "03",
      category: "Multinationals",
      description: "International corporations requiring deep cultural intelligence and grassroots distribution to succeed in African markets.",
      focus: "Market access, grassroots distribution, and regulatory/stakeholder communications.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Document Breadcrumb & Action Bar */}
      <section className="bg-card/40 border-b border-border py-4 print:hidden">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground font-semibold">Corporate Profile</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-medium text-foreground transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-primary" />
                <span>Print / Save PDF</span>
              </button>
              <Button href="/contact" size="sm" className="gap-1.5">
                <span>Engage Consultancy</span>
                <ArrowRight className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-accent/50 via-background to-background border-b border-border/80">
        <Container size="wide">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <Badge variant="primary" className="text-xs uppercase tracking-wider font-semibold">
                Official Corporate Profile
              </Badge>
              <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-mono">
                CAMA 2020 Registered
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              INCLUSIVE MARKET LIMITED
            </h1>

            <p className="mt-4 text-lg sm:text-2xl font-medium text-primary tracking-tight">
              Brand Alignment • Strategic Communications • Market Access
            </p>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              A Nigerian-based brand alignment and strategic communications consultancy built to help organizations turn visibility into authority, and authority into trust.
            </p>

            {/* Foundational Statement Callout */}
            <div className="mt-8 p-6 rounded-2xl liquid-glass border border-primary/20 bg-primary/5 dark:bg-primary/10 max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary block mb-1">
                Founding Statement of Intent
              </span>
              <p className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                &ldquo;Influence is not accidental. It is aligned.&rdquo;
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 1.0 About Us & Mandate */}
      <section className="py-16 sm:py-20 bg-background">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-4">
                <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded bg-accent">
                  Section 1.0
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                  About Us & Statutory Mandate
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Registered under the Companies and Allied Matters Act, 2020 (CAMA), Inclusive Market Limited operates as a private company limited by shares with a broad commercial and advisory mandate.
                </p>

                <div className="p-5 rounded-2xl bg-secondary/50 border border-border space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-bold text-foreground">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Statutory Objects:</span>
                  </div>
                  <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                    <li>Marketing Consultants</li>
                    <li>Business & Corporate Consultants</li>
                    <li>Market Research Specialists</li>
                    <li>Training & Human Capital Development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Our company objects explicitly authorize us to operate as marketing consultants, business consultants, market research consultants, and training and human capital development specialists; making us uniquely positioned to serve growth-focused SMEs, established brands, and multinationals operating in African markets.
              </p>

              <div className="p-6 sm:p-8 rounded-3xl liquid-glass text-card-foreground shadow-sm space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>The Founding Conviction</span>
                </h3>
                <p>
                  Most organizations today are not short on activity. Campaigns are running. Content is flowing. PR is happening. Yet something still feels off. Messaging is scattered. Teams communicate differently depending on who is speaking. Attention is not translating into authority.
                </p>
                <div className="p-4 rounded-xl bg-card border border-border/80 font-medium text-foreground">
                  That is not a marketing problem. It is an alignment problem.
                </div>
                <p className="text-xs text-muted-foreground">
                  This principle is the bedrock behind everything we build for our clients across public policy, commercial industry, and grassroots mobilization.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2.0 Our Philosophy */}
      <section className="py-16 sm:py-20 bg-secondary/30 border-y border-border/80">
        <Container size="wide">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded bg-accent">
              Section 2.0
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight mt-2">
              Our Operating Philosophy
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              How we diagnose, structure, and scale institutional authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 2.1 The Declaration Problem */}
            <div className="p-7 rounded-3xl liquid-glass flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-primary">2.1</span>
                <h3 className="text-lg font-bold text-foreground mt-1 mb-3">
                  The Declaration Problem
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Nigerian companies do not have a brand problem. They have a <strong>declaration problem</strong>. Most organizations we meet have already done the hard work. They have the results, the relationships, the proof. What they have not done is align how they communicate that work with what it actually deserves.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-xs font-semibold text-primary">
                That is the gap Inclusive Market Limited exists to close.
              </div>
            </div>

            {/* 2.2 Alignment-First Approach */}
            <div className="p-7 rounded-3xl liquid-glass flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-primary">2.2</span>
                <h3 className="text-lg font-bold text-foreground mt-1 mb-3">
                  Alignment-First Approach
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                  Rather than starting with campaigns, we start with clarity. Before amplification, we diagnose how aligned a brand&apos;s positioning, narrative, and execution already are.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-destructive/10 text-destructive dark:text-red-400 font-medium">
                    Weak Alignment: PR creates noise, digital activity creates confusion, short spikes.
                  </div>
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary font-medium">
                    Strong Alignment: Visibility builds credibility, messaging builds trust, influence compounds.
                  </div>
                </div>
              </div>
            </div>

            {/* 2.3 We Don't Chase Trends */}
            <div className="p-7 rounded-3xl liquid-glass flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-primary">2.3</span>
                <h3 className="text-lg font-bold text-foreground mt-1 mb-3">
                  We Don&apos;t Chase Trends
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We don&apos;t deploy before we diagnose. Our clients don&apos;t come to us for noise. They come for clarity, structure, and long-term influence.
                </p>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-card border border-border/80 text-xs text-foreground/90 font-medium">
                Clarity • Structure • Sustainable Authority
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3.0 What We Do (7 Capability Pillars) */}
      <section className="py-16 sm:py-24 bg-background">
        <Container size="wide">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded bg-accent">
              Section 3.0
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight mt-2">
              Comprehensive Service Architecture
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
              Inclusive Market Limited offers a full-spectrum suite of services spanning strategic communications, brand alignment, reputation management, and market access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="p-7 rounded-3xl liquid-glass-card flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-accent text-accent-foreground flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-mono font-bold text-primary px-2 py-0.5 rounded bg-accent">
                        {cap.id}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                      {cap.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-2">
                      Scope of Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-foreground/80">
                      {cap.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4.0 Our Unique Advantage */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-secondary/40 via-accent/20 to-background border-t border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded bg-accent">
              Section 4.0
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight mt-2">
              Our Unique Institutional Advantage
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              Unrivaled grassroots scale, government alignment, and proven operational models.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 4.1 The Grassroots Network */}
            <div className="p-8 rounded-3xl liquid-glass text-card-foreground shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-primary">4.1</span>
                <h3 className="text-xl font-bold text-foreground mt-1 mb-3">
                  The Grassroots Network
                </h3>
                <div className="p-4 rounded-xl bg-card border border-border/80 mb-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary">774,000</div>
                  <div className="text-xs font-medium text-muted-foreground mt-0.5">
                    Verified Women Petty Traders across all 774 LGAs
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Inclusive Market Limited is uniquely positioned with access to a verified network of <strong>774,000 women petty traders</strong> across Nigeria&apos;s 774 Local Government Areas through our flagship <strong>Renewed Hope Market Outreach (RHMO)</strong> program. This is a direct-to-consumer distribution and influence channel that no other PR or communications consultancy in Nigeria can match.
                </p>
              </div>
            </div>

            {/* 4.2 Credibility and Trust */}
            <div className="p-8 rounded-3xl liquid-glass text-card-foreground shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-primary">4.2</span>
                <h3 className="text-xl font-bold text-foreground mt-1 mb-3">
                  Credibility and Trust
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  Our alignment with the <strong>Renewed Hope Agenda of President Bola Ahmed Tinubu, GCFR</strong>, gives us unparalleled credibility in government, public policy, and corporate social responsibility spaces.
                </p>
                <div className="p-4 rounded-xl bg-muted/60 border border-border text-xs italic text-foreground/90 leading-relaxed">
                  &ldquo;The Renewed Hope Initiative (RHI), championed by the First Lady, Senator Oluremi Tinubu, continues to transform lives and expand economic opportunities for women across Nigeria.&rdquo;
                </div>
              </div>
            </div>

            {/* 4.3 Real-World Impact */}
            <div className="p-8 rounded-3xl liquid-glass text-card-foreground shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-primary">4.3</span>
                <h3 className="text-xl font-bold text-foreground mt-1 mb-3">
                  Real-World Impact
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We don&apos;t just talk about impact; we deliver it. The RHMO program, building on the proven <strong>Governor Ododo Business Outreach (GOBO)</strong> model, has demonstrated that targeted financial empowerment and training can transform livelihoods at the grassroots level. This experience informs our understanding of what works in the Nigerian market and what doesn&apos;t.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-xs font-semibold text-primary">
                Ground-truth intelligence grounded in verified execution.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5.0 Who We Serve */}
      <section className="py-16 sm:py-20 bg-background">
        <Container size="wide">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded bg-accent">
              Section 5.0
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight mt-2">
              Who We Serve
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              We work with three distinct tiers of growth-oriented organizations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {targetAudiences.map((target) => (
              <div
                key={target.number}
                className="p-8 rounded-3xl liquid-glass-card flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-primary mb-3 block">
                    {target.number}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {target.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {target.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-border/60 text-xs text-foreground/80 font-medium">
                  <strong className="text-primary block mb-0.5">Core Focus:</strong>
                  {target.focus}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6.0 Our Values */}
      <section className="py-16 sm:py-20 bg-secondary/30 border-y border-border/80">
        <Container size="wide">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded bg-accent">
              Section 6.0
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight mt-2">
              Our Core Institutional Values
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              The fundamental tenets guiding our consultations, campaigns, and commercial partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl liquid-glass text-card-foreground flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="text-xs font-mono text-primary font-bold">0{i + 1}</span>
                  <h3 className="font-bold text-base text-foreground mt-1 mb-1">
                    {v.title}
                  </h3>
                  <span className="text-[11px] font-medium text-primary block mb-2">
                    {v.subtitle}
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7.0 Vision & Mission */}
      <section className="py-16 sm:py-24 bg-background">
        <Container size="wide">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded bg-accent">
              Section 7.0
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight mt-2">
              Vision & Mission Framework
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              Our long-term national trajectory for socio-economic empowerment and data-driven market integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Statement */}
            <div className="p-8 sm:p-10 rounded-3xl liquid-glass text-card-foreground shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                  Vision Statement
                </span>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Building Nigeria&apos;s Largest Verified Database of Women Entrepreneurs
                </h3>
                <div className="p-5 rounded-2xl bg-muted/60 border border-border text-sm sm:text-base text-foreground italic leading-relaxed">
                  &ldquo;To build Nigeria&apos;s largest verified database of women entrepreneurs, creating a data-driven ecosystem that bridges economic inclusion, political engagement, and sustainable national development.&rdquo;
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="p-8 sm:p-10 rounded-3xl liquid-glass text-card-foreground shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                  Mission Statement
                </span>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Deploying Scalable Models to Empower 1,000,000 Petty Traders
                </h3>
                <div className="p-5 rounded-2xl bg-muted/60 border border-border text-sm sm:text-base text-foreground italic leading-relaxed">
                  &ldquo;To deploy a scalable, technology-enabled model that empowers one million women petty traders through cash grants, capacity building, and digital registration, while generating actionable data for inclusive policy-making and grassroots mobilization.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8.0 Contact & Official Engagement */}
      <section className="py-16 sm:py-20 bg-accent/30 border-t border-border">
        <Container size="default" className="text-center">
          <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded bg-accent">
            Section 8.0
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Engage Inclusive Market Limited
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
            Whether structuring high-impact brand alignment, corporate PR architecture, or nationwide market access:
          </p>

          <div className="inline-flex items-center gap-2 p-3 px-5 rounded-full bg-card border border-border text-xs text-foreground mb-8">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span>No. 2, Amazon River Close, Maitama, Abuja, Nigeria</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" className="shadow-md gap-2">
              <span>Submit Official Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/what-we-do" variant="outline" size="lg">
              <span>Explore Operational Pillars</span>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
