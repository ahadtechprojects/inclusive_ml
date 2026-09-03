import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MailCheck } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary via-[#a32a02] to-[#821f00] text-primary-foreground relative overflow-hidden">
      {/* Background motif */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <Container size="default" className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-sm mb-6">
          <MailCheck className="w-3.5 h-3.5" />
          <span>Direct Corporate Engagement</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-2xl mx-auto">
          Have a Commercial or Service Enquiry?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
          Connect directly with our commercial, logistics, or technology advisory teams to explore how Inclusive Market Limited can support your corporate objectives.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/contact"
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg gap-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </Button>
          <Button
            href="/about"
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/15 border border-white/20"
          >
            <span>Read Corporate Profile</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
