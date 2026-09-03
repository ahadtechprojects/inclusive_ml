import { PartnerCategory } from "@/types";

export const partnerCategories: PartnerCategory[] = [
  {
    id: "manufacturers",
    title: "Manufacturers & Producers",
    description: "Connect your production output directly with organized distribution channels, verified wholesale buyers, and regional market corridors.",
    iconName: "Factory",
    collaborationScope: [
      "Bulk off-take and long-term procurement agreements",
      "Regional market expansion and localized supply points",
      "Warehousing and climate-controlled storage integration",
      "Multi-channel route-to-market distribution"
    ]
  },
  {
    id: "suppliers",
    title: "Suppliers & Importers",
    description: "Optimize bulk commodity placement and commercial trade facilitation through our integrated logistical and commercial framework.",
    iconName: "Boxes",
    collaborationScope: [
      "Secured staging and warehousing inventory management",
      "Inter-state freight coordination and haulage scheduling",
      "Structured commercial distribution agreements",
      "Demand forecasting and inventory rotation advisory"
    ]
  },
  {
    id: "distributors",
    title: "Regional Distributors & Wholesalers",
    description: "Expand your product portfolio and secure consistent, transparent supply lines with coordinated delivery support.",
    iconName: "Network",
    collaborationScope: [
      "Reliable product replenishment schedules",
      "Consolidated multi-category order fulfillment",
      "Priority logistics routing and dispatch",
      "Trade financing and commercial terms coordination"
    ]
  },
  {
    id: "tech-partners",
    title: "Technology & Infrastructure Partners",
    description: "Collaborate on digital systems, logistics telemetry, software integrations, and enterprise enterprise infrastructure.",
    iconName: "Cpu",
    collaborationScope: [
      "Supply chain and operations software integration",
      "Data telemetry and workflow automation platforms",
      "Enterprise systems deployment and co-development",
      "Digital market infrastructure collaboration"
    ]
  },
  {
    id: "strategic-alliances",
    title: "Strategic & Institutional Alliances",
    description: "Pursue joint ventures, public-private partnerships, and strategic commercial initiatives across expanding sectors.",
    iconName: "Handshake",
    collaborationScope: [
      "Joint venture frameworks under CAMA 2020 provisions",
      "Consortium participation for major commercial tenders",
      "Shared infrastructure investment and management",
      "Regional economic corridor development projects"
    ]
  }
];

export const partnershipProcess = [
  {
    step: "01",
    title: "Initial Engagement",
    description: "Submit a structured partnership enquiry outlining your corporate background, capabilities, and proposed collaboration model."
  },
  {
    step: "02",
    title: "Strategic Alignment",
    description: "Our corporate strategy team conducts an assessment to align operational requirements, mutual value, and commercial objectives."
  },
  {
    step: "03",
    title: "Framework Structuring",
    description: "Define legal, logistical, and commercial terms under an agreed partnership memorandum or service-level framework."
  },
  {
    step: "04",
    title: "Operational Execution",
    description: "Integrate workflows across our commerce, warehousing, logistics, or technology channels with ongoing governance."
  }
];
