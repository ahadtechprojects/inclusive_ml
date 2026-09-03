PRODUCT REQUIREMENTS DOCUMENT

Inclusive Market Limited (IML) Corporate Website — Version 1.0

Corporate Website • Brand Awareness • Business Enquiries • No E-commerce
in V1

1.  Product Overview

Inclusive Market Limited needs a professional corporate website that
serves as its official digital identity. The website will help visitors
understand who IML is, what the company does, its capabilities, and how
to engage with the company.

The first release is intentionally informational. It will not implement
the e-commerce, marketplace, customer-account, inventory, payment,
wholesale, or shipment-tracking functionality that may be introduced in
future phases.

2.  Source Context

This PRD is based on the uploaded Memorandum and Articles of Association
(MEMART) of Inclusive Market Limited. The document identifies IML as a
private company limited by shares incorporated in Nigeria under the
Companies and Allied Matters Act, 2020 (CAMA).

Company name: Inclusive Market Limited.

Private company limited by shares.

Nominal share capital: ₦1,000,000 divided into 1,000,000 ordinary shares
of ₦1 each.

Business scope includes commerce/general trading, distribution,
logistics, warehousing/cold storage, ICT/software/web services,
marketing, consulting, training and related activities.

The MEMART also provides for partnerships, joint ventures and strategic
alliances.

Source: uploaded IML MEMART.

3.  Problem Statement

IML has a broad business scope, but potential customers, partners,
suppliers and other stakeholders need a clear digital representation of
the company. The website should communicate IML’s identity and
capabilities without attempting to implement the full business ecosystem
at launch.

4.  Product Vision

The long-term vision is for the website to become the digital gateway to
IML’s wider business ecosystem. For V1, the core journey is:

Discover IML.

Understand IML.

Explore IML’s capabilities.

Build trust.

Contact IML.

5.  Target Audience

6.  Goals

Establish IML’s official online presence.

Clearly communicate the company’s capabilities.

Build corporate credibility and trust.

Generate business, service and partnership enquiries.

Create a scalable technical foundation for future digital products.

7.  Non-Goals for V1

8.  Website Information Architecture

Recommended V1 sitemap:

Home

About

What We Do

Partnerships

Contact

Footer: Company, Business Areas, Contact and Legal links

9.  Homepage Requirements

10. About Page

Who We Are

Vision — use an approved IML statement supplied by the company.

Mission — use an approved IML statement supplied by the company.

Values — include only values officially supplied by IML.

Capabilities — summarize the company’s stated business scope.

Important: the MEMART does not provide a formal list of brand values, so
the website should not invent values and present them as official.

11. What We Do Page

Commerce & Trading — sourcing, supply, distribution and related
commercial activities.

Logistics & Distribution — transportation, delivery, distribution and
related logistics services.

Warehousing & Storage — warehousing, cold storage, preservation and
inventory-related capabilities.

Technology & ICT — computer services, software development,
systems-related services and website design/development.

Marketing & Business Services — marketing, customer acquisition, market
research, agency and related business services.

Consulting & Human Capital — business consulting, training, consultancy
and human capital development.

12. Partnerships Page

The Partnerships page should target businesses, manufacturers,
suppliers, distributors, technology partners and strategic partners.

Explain why organizations may partner with IML.

Present relevant capabilities.

Provide a clear Partner With IML CTA.

Route partnership requests to the contact workflow.

13. Contact Page

Contact form fields:

Full Name *

Email Address *

Phone Number

Company

Subject *

Message *

CTA: Send Enquiry.

Display only verified IML contact information such as address, email,
phone, business hours and social links. Do not invent contact details.

14. Footer Requirements

Inclusive Market Limited brand name.

Short company description.

Company links: About, What We Do, Partnerships, Contact.

Business links: Commerce, Logistics, Warehousing, Technology,
Consulting.

Copyright notice and relevant legal links.

15. User Experience Requirements

Professional and corporate.

Modern but not overly trendy.

Clear information hierarchy.

Strong typography and generous spacing.

High-quality business imagery.

Subtle motion rather than excessive animation.

Consistent CTA placement.

Mobile-first responsive experience.

16. Design Direction

Recommended aesthetic: modern African corporate + technology + commerce.
Use strong typography, editorial-style layouts, structured grids,
high-quality imagery, clean cards, restrained motion and professional
iconography.

Avoid excessive glassmorphism, generic stock-photo overload, excessive
gradients, excessive animation and marketplace-style product cards.

17. Technical Requirements

18. Suggested Project Structure

src/ ├── app/ │ ├── page.tsx │ ├── about/page.tsx │ ├──
what-we-do/page.tsx │ ├── partnerships/page.tsx │ └── contact/page.tsx
├── components/ │ ├── layout/ │ ├── home/ │ ├── about/ │ ├── services/ │
└── contact/ ├── data/ │ ├── services.ts │ └── company.ts ├── lib/ └──
types/

19. SEO Requirements

Unique title and meta description for every page.

Semantic HTML and correct heading hierarchy.

XML sitemap.

robots.txt.

Open Graph metadata.

Optimized images and descriptive alt text.

Google Search Console and analytics after launch.

20. Performance Requirements

Target Lighthouse Performance: 90+.

Target Accessibility: 90+.

Target SEO: 95+.

Target Best Practices: 90+.

Optimize images and use responsive image delivery.

Lazy-load non-critical media.

Minimize unnecessary client-side JavaScript.

Prioritize Core Web Vitals.

21. Responsive Requirements

Mobile: 320px+

Tablet: 768px+

Desktop: 1024px+

Large desktop: 1440px+

Mobile layouts must be intentionally designed rather than simply scaled
down from desktop.

22. Accessibility

Keyboard navigation.

Visible focus states.

Accessible navigation labels.

Meaningful image alt text.

Semantic HTML.

Sufficient color contrast.

Accessible form labels and error messages.

Screen-reader-friendly interactions.

23. Content Management

A CMS is not required for V1 if content is relatively static. Company
and service content can be stored in structured TypeScript data. A CMS
such as Sanity, Strapi, Payload CMS or another approved platform can be
introduced when non-technical staff need to manage content.

24. Contact Form Architecture

Visitor submits form.

Client-side validation with React Hook Form + Zod.

Server-side validation and sanitization.

Rate limiting / abuse protection.

Send enquiry through an approved email service.

Show success/failure feedback to the visitor.

25. Security Requirements

HTTPS in production.

Server-side validation for all submitted data.

Input sanitization.

Rate-limit contact submissions.

Protect server/API routes.

Keep secrets in environment variables.

Do not expose internal company information.

26. Analytics

Page views.

Contact form submissions.

CTA clicks.

Partnership CTA clicks.

Service page visits.

Traffic sources.

Device types.

Geographic distribution.

27. Admin / CMS Requirements

No dedicated admin dashboard is required for V1. If content updates
become frequent, introduce a CMS rather than building a custom admin
platform prematurely.

28. Development Roadmap

29. V1 MVP Checklist

Home page

About page

What We Do page

Partnerships page

Contact page

Responsive navbar

Footer

Hero section

Business pillar sections

Business ecosystem visual

Why IML section

Partnership CTA

Contact form

SEO metadata

Sitemap

robots.txt

Open Graph metadata

Analytics

Accessibility

Performance optimization

30. V1 Success Metrics

31. Acceptance Criteria

A first-time visitor can understand what IML is and what it does within
a few minutes.

All major business capabilities supported by the MEMART are represented
without turning the website into an e-commerce product.

Every primary page is accessible from the main navigation.

Every page is responsive across mobile, tablet and desktop.

Contact enquiries can be submitted successfully with validation and user
feedback.

No unverified company claims, contact details or official values are
presented as facts.

The site is indexable by search engines and has appropriate metadata.

The site meets the agreed performance and accessibility targets.

The codebase is structured so future commerce, marketplace and logistics
products can be added without replacing the corporate website.

32. Product Positioning

IML V1 should not be positioned as an online store. It should be
positioned as a corporate digital identity that communicates a broader
business ecosystem.

Core visitor journey: “What is IML?” → “What does IML do?” → “What
capabilities does IML have?” → “Can I work with IML?” → “How do I
contact IML?”

33. Key Source Note

The uploaded MEMART is the primary source for the company’s stated
business scope. Brand messaging, mission, vision, values, contact
details and any claims not explicitly established by that document
should be supplied and approved by IML before publication.

Audience | Primary Need

General visitors | Understand who IML is and what it does.

Potential customers | Understand capabilities and make enquiries.

Business partners | Evaluate IML for partnerships, distribution,
logistics, technology or related collaboration.

Suppliers / manufacturers | Understand IML’s commercial and distribution
capabilities and initiate engagement.

Corporate / institutional stakeholders | Review company information,
scope and contact details.

Feature | V1 Status

Online shop | Out of scope

Product catalogue | Out of scope

Shopping cart / checkout | Out of scope

Online payments | Out of scope

Customer registration / dashboard | Out of scope

Vendor dashboard / marketplace | Out of scope

Inventory / order management | Out of scope

Wholesale portal | Out of scope

Shipment tracking dashboard | Out of scope

Driver management / proof of delivery | Out of scope

Section | Requirement

Hero | Introduce Inclusive Market Limited with a strong corporate value
proposition. Primary CTAs: Explore What We Do and Contact Us.

Who We Are | Short company introduction and a link to the About page.

What We Do | Present six grouped business pillars: Commerce & Trading;
Logistics & Distribution; Warehousing & Storage; Technology & ICT;
Marketing & Business Services; Consulting & Human Capital.

Why IML | Communicate capability, integrated approach, strategic
partnerships and customer focus without inventing unsupported corporate
claims.

Business Ecosystem | Visually show how commerce, supply, warehousing,
logistics, technology and business services relate to one another.

Partnership CTA | Invite manufacturers, suppliers, businesses and
strategic partners to engage with IML.

Final CTA | Drive visitors toward contacting IML.

Area | Recommendation

Framework | Next.js 15 + TypeScript

Styling | Tailwind CSS

UI components | shadcn/ui

Icons | Lucide React

Animation | Framer Motion, used selectively

Forms | React Hook Form + Zod

Data/content | Structured TypeScript data for V1

Deployment | Production cloud deployment with HTTPS

Version control | Git + GitHub

Page | Suggested Title

Home | Inclusive Market Limited | Commerce, Logistics & Business
Services

About | About Inclusive Market Limited | IML

What We Do | What We Do | Inclusive Market Limited

Contact | Contact Inclusive Market Limited

Phase | Scope

V1 | Corporate website: Home, About, What We Do, Partnerships, Contact.

V2 | Business services: service requests, richer enquiry workflows and
partner management.

V3 | Commerce: products, categories, cart, checkout and orders.

V4 | Marketplace: vendors, vendor dashboard, products, inventory and
payouts.

V5 | Logistics: shipments, tracking, drivers, delivery and proof of
delivery.

V6 | Enterprise platform: commerce, marketplace, wholesale, logistics,
warehousing, CRM and analytics.

Category | Metrics

Awareness | Website traffic, search impressions, branded searches.

Engagement | Engagement time, pages/session, service-page visits.

Conversion | Contact submissions, partnership enquiries, service
enquiries, phone/email clicks.

Technical | Lighthouse scores, Core Web Vitals, mobile usability and
accessibility.
