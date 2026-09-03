export interface BusinessPillar {
  id: string;
  number: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  capabilities: string[];
  placeholderLabel: string;
  placeholderDescription: string;
  strategicValue: string;
  imageSrc?: string;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface CompanyInfo {
  legalName: string;
  shortName: string;
  tagline: string;
  incorporationDetails: {
    country: string;
    act: string;
    entityType: string;
    shareCapital: string;
  };
  contactPlaceholders: {
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    businessHoursLabel: string;
    socialChannelsNotice: string;
  };
}

export interface PartnerCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  collaborationScope: string[];
}

export interface ContactFormValues {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}
