import { Hero } from "@/components/home/Hero";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { BusinessPillarsSection } from "@/components/home/BusinessPillarsSection";
import { BusinessEcosystem } from "@/components/home/BusinessEcosystem";
import { WhyIML } from "@/components/home/WhyIML";
import { PartnershipsCTA } from "@/components/home/PartnershipsCTA";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <BusinessPillarsSection />
      <BusinessEcosystem />
      <WhyIML />
      <PartnershipsCTA />
      <ContactCTA />
    </>
  );
}
