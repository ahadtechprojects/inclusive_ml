import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShieldCheck, Network, Cpu, Briefcase } from "lucide-react";

const valuePillars = [
  {
    title: "Diverse Multi-Sector Capabilities",
    description: "Our corporate mandate spans commerce, haulage logistics, cold storage warehousing, software engineering, and consulting under one unified organizational structure.",
    icon: Network,
  },
  {
    title: "Integrated Supply Model",
    description: "Rather than treating storage, freight, and procurement as disconnected silos, we link capabilities together to minimize frictional overhead and preserve margin.",
    icon: Cpu,
  },
  {
    title: "Strategic Alliance Provisions",
    description: "Structured specifically under CAMA 2020 to participate in joint ventures, consortium models, and strategic long-term corporate partnerships across Nigeria.",
    icon: ShieldCheck,
  },
  {
    title: "Pragmatic Business Execution",
    description: "Focus on commercial reality, transparent operational standards, reliable delivery schedules, and data-informed execution for enterprise clients.",
    icon: Briefcase,
  },
];

export function WhyIML() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <Container size="wide">
        <SectionHeader
          badge="Institutional Strength"
          title="Why Work With Inclusive Market Limited"
          description="We combine structural integrity with multidisciplinary capabilities to deliver reliable solutions across regional markets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valuePillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl liquid-glass-card flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
