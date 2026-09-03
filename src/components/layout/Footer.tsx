import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { footerCompanyLinks, footerPillarLinks } from "@/data/navigation";
import { companyData } from "@/data/company";
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Clock } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-border bg-card/60 backdrop-blur-sm text-card-foreground">
      <Container size="wide" className="pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-border">
          {/* Company identity column */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 relative flex items-center justify-center font-extrabold text-lg tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-200">
                <Image src="/images/IML-LOGO.png" alt="IML Logo" width={40} height={40} className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight">
                  {companyData.legalName}
                </span>
                <span className="text-[11px] font-medium tracking-wider uppercase text-muted-foreground">
                  Nigeria • CAMA 2020
                </span>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm pt-2">
              A diversified Nigerian corporate enterprise operating across commercial trading, logistics, warehousing, digital ICT infrastructure, marketing, and human capital consulting.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-foreground/80 font-medium">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Incorporated under CAMA 2020</span>
            </div>

            {/* Social media channels */}
            <div className="pt-2 flex flex-col space-y-2">
              <span className="text-xs font-semibold text-foreground/90 uppercase tracking-wider">
                Official Channels
              </span>
              <SocialLinks size="sm" />
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2 flex flex-col space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Capabilities */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Business Capabilities
            </h3>
            <ul className="space-y-2.5">
              {footerPillarLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact Details Notice & Placeholders */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Corporate Enquiries
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              For structured trading, logistics contracts, or corporate partnership engagements:
            </p>

            <div className="space-y-2.5 pt-1 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{companyData.contactPlaceholders.addressLabel}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{companyData.contactPlaceholders.emailLabel}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{companyData.contactPlaceholders.businessHoursLabel}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>Submit Official Enquiry Form</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {currentYear} {companyData.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px]">
              Authorized Nominal Share Capital: {companyData.incorporationDetails.shareCapital}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
