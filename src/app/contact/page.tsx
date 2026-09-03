import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { companyData } from "@/data/company";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Inclusive Market Limited (IML)",
  description:
    "Contact Inclusive Market Limited for commercial trading enquiries, logistics support, warehousing facilities, ICT software services, and strategic partnerships.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-accent/40 to-background border-b border-border/60">
        <Container size="wide">
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Contact Inclusive Market Limited
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We welcome business enquiries, wholesale sourcing proposals, logistics contracts, and corporate partnership discussions.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-background">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Column: Form */}
            <div className="md:col-span-7">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  Send an Official Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Complete the form below and our team will route your message to the appropriate business division.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right Column: Verified Contact Information & Placeholders */}
            <div className="md:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl liquid-glass shadow-lg text-card-foreground">
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span>Corporate Contact Information</span>
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase text-foreground block">
                        Registered Office
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {companyData.contactPlaceholders.addressLabel}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase text-foreground block">
                        Corporate Communications
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {companyData.contactPlaceholders.emailLabel}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase text-foreground block">
                        Direct Inquiries
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {companyData.contactPlaceholders.phoneLabel}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase text-foreground block">
                        Operational Hours
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {companyData.contactPlaceholders.businessHoursLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Authenticity Notice */}
              <div className="p-6 rounded-2xl liquid-glass-panel text-secondary-foreground">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-foreground">
                      Corporate Communications Protocol
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Inclusive Market Limited communicates exclusively through officially registered corporate channels. Direct contact numbers and office coordinates will be updated as new operational facilities open.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
