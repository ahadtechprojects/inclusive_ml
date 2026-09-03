"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Building2, Scale } from "lucide-react";
import { companyData } from "@/data/company";

export function WhoWeAre() {
  return (
    <section className="py-16 sm:py-24 border-y border-border/60 bg-secondary/30">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Visual Column */}
          <div className="md:col-span-5 order-2 md:order-1">
            <ImagePlaceholder
              src="/images/corporate-profile-iml.jpg"
              alt="Inclusive Market Limited Corporate Profile, Executive Leadership & Facilities"
              label="ABOUT IMAGE — CORPORATE PROFILE"
              description="Replace with approved IML executive leadership, corporate facility, or partnership operations imagery."
              aspectRatio="landscape"
              className="shadow-md"
            />
          </div>

          {/* Copy Column */}
          <div className="md:col-span-7 order-1 md:order-2 flex flex-col items-start">
            <Badge variant="primary" className="mb-3">
              Corporate Profile
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
              An Integrated Approach to Commerce & Modern Business Services
            </h2>

            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              <strong>{companyData.legalName}</strong> is a private company limited by shares, incorporated in the Federal Republic of Nigeria under the Companies and Allied Matters Act (CAMA 2020). 
            </p>

            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              We bridge traditional trade barriers by unifying procurement, multi-modal haulage, modern warehousing, and enterprise software systems. Our mandate is to create sustainable value for business partners, producers, suppliers, and institutional stakeholders across dynamic market channels.
            </p>

            {/* Incorporation Box */}
            <div className="mt-6 w-full p-6 rounded-2xl liquid-glass text-card-foreground shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-2">
                  <Scale className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground block">Incorporation Framework</span>
                    <span className="text-muted-foreground">Companies and Allied Matters Act, 2020</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground block">Authorized Share Capital</span>
                    <span className="text-muted-foreground">{companyData.incorporationDetails.shareCapital}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button href="/about" variant="secondary" className="gap-2">
                <span>Learn More About IML</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
