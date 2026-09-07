import type { Metadata } from "next";
import { CorporateProfile } from "@/components/CorporateProfile";

export const metadata: Metadata = {
  title: "Corporate Profile | Inclusive Market Limited (IML)",
  description:
    "Official corporate profile of Inclusive Market Limited — a Nigerian brand alignment, strategic communications, and market access consultancy registered under CAMA 2020.",
};

export default function CorporateProfilePage() {
  return <CorporateProfile />;
}
