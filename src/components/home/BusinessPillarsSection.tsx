"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { DynamicIcon } from "@/components/ui/IconHelper";
import { businessPillars } from "@/data/business-pillars";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export function BusinessPillarsSection() {
  return (
    <section className="py-16 sm:py-24 bg-background" id="capabilities">
      <Container size="wide">
        <SectionHeader
          badge="Core Capabilities"
          title="Diversified Business Scope"
          description="Inclusive Market Limited operates across six interconnected business capabilities derived from our corporate mandate, creating seamless value from supply to distribution."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {businessPillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="h-full flex flex-col justify-between border-border/80 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-xs">
                      <DynamicIcon name={pillar.iconName} className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-muted-foreground/30 font-mono group-hover:text-primary/40 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <CardTitle className="group-hover:text-primary transition-colors text-xl font-bold">
                    {pillar.title}
                  </CardTitle>

                  <CardDescription className="pt-2 text-sm">
                    {pillar.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="pt-2 pb-1 border-t border-border/60">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2.5">
                      Key Capabilities:
                    </span>
                    <ul className="space-y-1.5">
                      {pillar.capabilities.slice(0, 3).map((cap, i) => (
                        <li key={i} className="text-xs text-foreground/80 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="pt-2 border-t border-border/40">
                  <Link
                    href={`/what-we-do#${pillar.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline w-full justify-between"
                  >
                    <span>Explore Capability Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
