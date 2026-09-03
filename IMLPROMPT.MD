# SENIOR SOFTWARE ENGINEERING + QA BUILD PROMPT

## Inclusive Market Limited (IML) Corporate Website — Production V1

You are acting simultaneously as:

* A **Senior Software Engineer**
* A **Senior Frontend Engineer**
* A **Senior Full-Stack Engineer**
* A **Senior QA Analyst / Test Engineer**
* A **Senior UI/UX Engineer**
* A **Solutions Architect**
* A highly experienced web developer with **MIT-level engineering standards**

Your task is to design and implement a **production-quality corporate website for Inclusive Market Limited (IML)**.

Do not treat this as a simple landing-page exercise.

Treat it as the first production release of a real company's digital platform.

The website must be:

* Professional
* Corporate
* Modern
* Premium
* Trustworthy
* Responsive
* Accessible
* SEO-friendly
* Fast
* Maintainable
* Component-driven
* Scalable
* Production-ready

The website must communicate what IML is, what it does, what capabilities it has, and how people can engage with the company.

---

# 1. SOURCE OF TRUTH

Use the provided IML Product Requirements Document as the primary product specification.

Use the uploaded Memorandum and Articles of Association (MEMART) only as the authoritative source for IML's stated corporate/business scope.

Do NOT invent:

* Company values
* Mission statements
* Vision statements
* Office addresses
* Phone numbers
* Email addresses
* Certifications
* Awards
* Client logos
* Partnerships
* Statistics
* Revenue figures
* Years of experience
* Number of employees
* Testimonials
* Business achievements

unless they are explicitly provided.

Where actual content has not yet been supplied, create clearly labelled content placeholders rather than fabricating facts.

---

# 2. CORE PRODUCT OBJECTIVE

Build the **IML Corporate Website V1**.

The website's primary purpose is:

> Discover IML → Understand IML → Explore Capabilities → Build Trust → Contact IML

This is NOT an e-commerce website in V1.

The website is an official corporate/company presence.

---

# 3. ABSOLUTELY OUT OF SCOPE

Do NOT implement:

* Online shop
* Product catalogue
* Product detail pages
* Shopping cart
* Checkout
* Online payment
* Customer accounts
* Customer dashboard
* Vendor dashboard
* Marketplace
* Inventory management
* Order management
* Wholesale portal
* Shipment tracking dashboard
* Driver management
* Delivery management
* Product reviews
* Product wishlist

Do not accidentally introduce e-commerce UI patterns such as:

* Add to cart
* Buy now
* Product pricing grids
* Shopping bags
* Checkout flows

The website should communicate IML's broader business capabilities without pretending the e-commerce platform already exists.

---

# 4. BRAND POSITIONING

Position IML as a **diversified business operating across interconnected commercial and service capabilities**.

The website should communicate the relationship between:

* Commerce
* Trading
* Supply
* Distribution
* Logistics
* Warehousing
* Technology
* Marketing
* Consulting
* Business services
* Strategic partnerships

Do not position IML as merely:

> "an online store."

Instead, communicate a broader ecosystem.

A useful conceptual model is:

```text
                    INCLUSIVE MARKET LIMITED
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
     COMMERCE              LOGISTICS           TECHNOLOGY
        │                     │                     │
      SUPPLY             DISTRIBUTION           DIGITAL
        │                     │                     │
   WAREHOUSING             DELIVERY             SERVICES
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
                     BUSINESS SERVICES
```

Turn this concept into a polished visual experience rather than displaying this ASCII diagram.

---

# 5. TECHNOLOGY STACK

Use:

### Framework

Next.js 15+

### Language

TypeScript

Use strict TypeScript.

Avoid `any` unless there is a genuinely unavoidable reason.

### Styling

Tailwind CSS

### UI

shadcn/ui where appropriate.

### Icons

Lucide React.

### Animation

Framer Motion.

Use animation intentionally.

Do NOT animate every element.

### Forms

React Hook Form + Zod.

### Architecture

Use the Next.js App Router.

Prefer Server Components by default.

Only use Client Components where interactivity genuinely requires them.

---

# 6. ENGINEERING PRINCIPLES

Follow these principles:

### Component-driven architecture

Break the interface into reusable components.

Do not create a giant `page.tsx`.

### Separation of concerns

Separate:

* UI
* Content/data
* Utilities
* Types
* Form logic
* API logic

### DRY

Do not duplicate UI structures unnecessarily.

### Strong typing

Use TypeScript interfaces/types for structured data.

### Accessibility first

Build accessible components from the beginning.

### Progressive enhancement

The core website content should remain understandable without JavaScript-dependent visual effects.

### Performance first

Do not add libraries simply because they are popular.

Every dependency must justify its existence.

---

# 7. WEBSITE ROUTES

Implement these routes:

```text
/
 /about
 /what-we-do
 /partnerships
 /contact
```

Do not create unnecessary routes.

---

# 8. GLOBAL NAVIGATION

Create a premium responsive navbar.

Desktop:

```text
IML LOGO

About
What We Do
Partnerships
Contact

[Let's Talk]
```

Mobile:

Use a clean accessible hamburger menu.

Requirements:

* Sticky or intelligently positioned navigation
* Transparent/overlay state where appropriate
* Scrolled navbar state
* Smooth transitions
* Accessible keyboard navigation
* Focus management
* Proper ARIA attributes
* Mobile menu close behavior
* Escape-key support
* Body scroll handling when appropriate

The logo should link to `/`.

---

# 9. HERO SECTION

The hero section must be visually impressive and immediately communicate the company's identity.

Use a large premium layout.

Suggested structure:

```text
------------------------------------------------
| NAVIGATION                                   |
------------------------------------------------

|                                              |
|  INCLUSIVE MARKET LIMITED                    |
|                                              |
|  [Large headline]                            |
|                                              |
|  Supporting corporate description            |
|                                              |
|  [Explore What We Do] [Contact IML]          |
|                                              |
|                           [IMAGE PLACEHOLDER] |
|                           [IMAGE PLACEHOLDER] |
|                                              |
------------------------------------------------
```

## IMPORTANT: IMAGE PLACEHOLDER

The hero MUST contain an obvious but professionally designed image placeholder.

Do not leave a blank `<div>`.

Create a reusable image placeholder component.

Example visual concept:

```text
┌───────────────────────────────────┐
│                                   │
│          HERO IMAGE               │
│          PLACEHOLDER               │
│                                   │
│   Replace with approved IML       │
│   corporate imagery               │
│                                   │
└───────────────────────────────────┘
```

The placeholder should look intentional and premium.

It should support:

* Image
* `alt`
* Aspect ratio
* Overlay
* Optional caption
* Fallback state

Create something like:

```tsx
<ImagePlaceholder
  label="Hero Image"
  description="Replace with approved IML corporate imagery"
/>
```

Do not hardcode the implementation unnecessarily; make the component reusable.

---

# 10. IMAGE PLACEHOLDER SYSTEM

Create a reusable image placeholder system throughout the website.

Every major image section should have a placeholder.

Use placeholders for:

* Hero
* About section
* About page
* Business capability sections
* Logistics section
* Warehousing section
* Technology section
* Partnership section
* CTA sections

Each placeholder should communicate what image is expected.

Examples:

```text
[ HERO IMAGE — IML CORPORATE / OPERATIONS ]

[ ABOUT IMAGE — COMPANY / TEAM ]

[ LOGISTICS IMAGE — DISTRIBUTION / TRANSPORT ]

[ WAREHOUSING IMAGE — STORAGE FACILITY ]

[ TECHNOLOGY IMAGE — DIGITAL / ICT ]

[ PARTNERSHIP IMAGE — BUSINESS COLLABORATION ]
```

The placeholders should be easy to replace later with real images without changing the layout.

Do not use random stock images as final content.

---

# 11. IMAGE PLACEHOLDER IMPLEMENTATION

Create a reusable component:

```text
components/ui/ImagePlaceholder.tsx
```

It should support a structure conceptually similar to:

```tsx
<ImagePlaceholder
  label="Hero Image"
  description="Replace with approved IML corporate imagery"
  aspectRatio="wide"
/>
```

Support variants such as:

```text
wide
landscape
portrait
square
full
```

Make sure replacing the placeholder with a real image does not require redesigning the surrounding section.

---

# 12. HOMEPAGE STRUCTURE

The homepage should contain:

1. Navbar
2. Hero
3. Company introduction
4. What We Do
5. Business ecosystem
6. Why IML
7. Capability highlight
8. Partnerships CTA
9. Contact CTA
10. Footer

---

# 13. HERO CONTENT

Use a strong corporate headline.

Do not use generic copy such as:

> "Welcome to Inclusive Market Limited."

The headline should communicate ambition and capability.

A placeholder direction is acceptable:

```text
Building Connections.
Enabling Commerce.
Creating Opportunity.
```

Supporting text should describe IML's broad capabilities without making unsupported claims.

Example direction:

```text
Inclusive Market Limited operates across commerce,
logistics, technology and business services, creating
connections between businesses, markets and opportunities.
```

Treat this as editable marketing copy rather than immutable corporate language.

CTA:

```text
Explore What We Do
```

Secondary CTA:

```text
Contact IML
```

---

# 14. COMPANY INTRODUCTION

Create a concise "Who We Are" section.

Use:

* Heading
* Short paragraph
* Supporting visual
* CTA

Layout:

```text
TEXT                         IMAGE
------------------           ------------------
Who We Are                   IMAGE PLACEHOLDER

Short company               [IMAGE]
description

[Learn More]
```

---

# 15. WHAT WE DO

Create six business capability cards.

## Capability 01

### Commerce & Trading

Represent IML's stated commercial/trading scope.

## Capability 02

### Logistics & Distribution

Represent logistics, transportation, delivery and distribution.

## Capability 03

### Warehousing & Storage

Represent warehousing, cold storage, preservation and inventory-related capabilities.

## Capability 04

### Technology & ICT

Represent computer services, software development, systems and web development.

## Capability 05

### Marketing & Business Services

Represent marketing, customer acquisition, market research, agency and related services.

## Capability 06

### Consulting & Human Capital

Represent consulting, training, consultancy and human-capital-related activities.

These categories should remain faithful to the company's stated business scope.

---

# 16. BUSINESS CAPABILITY CARD DESIGN

Each card should contain:

```text
[ICON]

01

Commerce & Trading

Short description...

Explore →
```

Use:

* Hover interaction
* Subtle elevation
* Border transitions
* Icon animation where appropriate

Avoid excessive visual effects.

---

# 17. BUSINESS ECOSYSTEM SECTION

Create a visually distinctive section demonstrating that IML operates across interconnected business capabilities.

Possible design:

```text
                 COMMERCE
                     │
                     ↓
                  SUPPLY
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
     WAREHOUSING           DISTRIBUTION
          │                     │
          └──────────┬──────────┘
                     ↓
                 LOGISTICS
                     │
                     ↓
                TECHNOLOGY
                     │
                     ↓
             BUSINESS SERVICES
```

Use a polished interactive visualization.

On mobile, convert it into a vertical flow.

Do not create an overly complex diagram.

---

# 18. WHY IML

Create a premium section explaining why stakeholders may engage with IML.

Potential themes:

### Diverse Capabilities

IML's stated business scope covers multiple interconnected sectors.

### Integrated Approach

Different capabilities can support one another across the business ecosystem.

### Strategic Partnerships

The MEMART provides for partnerships, joint ventures and strategic alliances.

### Business Focus

Present IML as focused on practical commercial and business solutions.

Do not fabricate performance statistics.

---

# 19. PARTNERSHIPS SECTION

Create a strong visual CTA.

Headline:

```text
Let's Build Something Together.
```

Supporting text:

Explain that IML can engage with businesses, suppliers, manufacturers and strategic partners.

CTA:

```text
Partner With IML
```

Include a supporting image placeholder.

---

# 20. CONTACT CTA

Before the footer, create a strong conversion section.

Example:

```text
Have a business opportunity?

Let's start a conversation.

[Contact IML]
```

Use a strong visual treatment.

---

# 21. ABOUT PAGE

Create:

```text
About IML
│
├── Hero
├── Who We Are
├── Our Vision
├── Our Mission
├── Our Capabilities
├── Our Approach
└── CTA
```

Use placeholders where official copy is not available.

Do NOT invent mission, vision or values.

Example:

```text
VISION
[Official IML vision statement will be inserted here.]
```

However, make the placeholder visually polished rather than exposing developer-style placeholder syntax.

---

# 22. VALUES

Do not invent company values.

If values are not supplied:

```text
Our Values

[Official IML values will be added here.]
```

Make this an editable content structure.

---

# 23. WHAT WE DO PAGE

Create a detailed services/capabilities page.

Structure:

```text
Hero

Commerce & Trading
[Image Placeholder]
Description
Capabilities

Logistics & Distribution
[Image Placeholder]
Description
Capabilities

Warehousing & Storage
[Image Placeholder]
Description
Capabilities

Technology & ICT
[Image Placeholder]
Description
Capabilities

Marketing & Business Services
[Image Placeholder]
Description
Capabilities

Consulting & Human Capital
[Image Placeholder]
Description
Capabilities

CTA
```

Use alternating layouts to create visual rhythm.

---

# 24. PARTNERSHIPS PAGE

Create:

```text
Hero

Why Partner With IML

Who We Work With

Manufacturers
Suppliers
Distributors
Businesses
Technology Partners
Strategic Partners

Partnership Opportunities

CTA

Partner With IML
```

Do not claim existing partnerships unless supplied.

---

# 25. CONTACT PAGE

Create a premium contact page.

Include:

```text
Contact IML

Let's start a conversation.

[Contact Form]

Full Name *
Email *
Phone
Company
Subject *
Message *

[Send Enquiry]
```

Also provide placeholders for:

```text
Email
Phone
Office Address
Business Hours
Social Media
```

If actual values are unavailable, clearly indicate that they need to be supplied by IML.

---

# 26. FORM VALIDATION

Use React Hook Form + Zod.

Validation:

```text
Full Name
required
minimum reasonable length

Email
required
valid email

Phone
optional

Company
optional

Subject
required

Message
required
reasonable minimum length
```

Display accessible validation errors.

Do not rely exclusively on client-side validation.

---

# 27. CONTACT FORM UX

States:

### Idle

Normal form.

### Loading

Show:

```text
Sending...
```

Disable duplicate submission.

### Success

Show a clear confirmation:

```text
Thank you.
Your enquiry has been received.
```

### Error

Show:

```text
Something went wrong.
Please try again.
```

Do not expose backend errors to users.

---

# 28. FOOTER

Create a premium corporate footer.

Structure:

```text
IML LOGO

Short company description

Company
About
What We Do
Partnerships
Contact

Business
Commerce
Logistics
Warehousing
Technology
Consulting

Contact
[Verified contact information]

────────────────────────────

© 2026 Inclusive Market Limited
All Rights Reserved.
```

---

# 29. DESIGN SYSTEM

Create a coherent design system.

Define:

* Typography
* Font sizes
* Font weights
* Spacing
* Border radius
* Shadows
* Containers
* Buttons
* Cards
* Badges
* Section spacing
* Breakpoints

Do not randomly style each section.

---

# 30. TYPOGRAPHY

Use a professional modern typeface.

Typography hierarchy should include:

```text
Display
H1
H2
H3
Body Large
Body
Body Small
Caption
```

Hero typography should be large and editorial.

Avoid overly thin text that compromises readability.

---

# 31. COLOR SYSTEM

Create a centralized theme.

Do not scatter arbitrary colors throughout components.

Use semantic tokens:

```text
background
foreground
primary
secondary
muted
border
accent
surface
```

If official IML brand colors are not provided, use a restrained premium placeholder palette and make it easy to replace later.

Do not pretend placeholder colors are official brand colors.

---

# 32. RESPONSIVE DESIGN

Design mobile-first.

Breakpoints should support:

```text
320px
375px
425px
640px
768px
1024px
1280px
1440px
1536px+
```

Test:

* iPhone-sized screens
* Android-sized screens
* Tablets
* Laptops
* Desktop
* Large monitors

Do not allow:

* Horizontal overflow
* Broken grids
* Text clipping
* Buttons overflowing
* Images stretching incorrectly
* Navigation overlap

---

# 33. MOBILE NAVIGATION QA

Verify:

* Menu opens.
* Menu closes.
* Escape closes menu.
* Clicking a navigation item closes menu.
* Keyboard can navigate menu.
* Focus remains logical.
* No body scrolling issue.
* No layout shift.
* CTA remains accessible.

---

# 34. ACCESSIBILITY

Target WCAG 2.2 AA principles.

Ensure:

* Semantic HTML
* Proper heading hierarchy
* Keyboard navigation
* Visible focus indicators
* Accessible forms
* Accessible buttons
* Accessible navigation
* Alt text
* Color contrast
* Reduced-motion support
* Screen-reader-friendly labels

Do not use color alone to communicate state.

---

# 35. MOTION DESIGN

Use Framer Motion carefully.

Animations can include:

* Hero entrance
* Section reveal
* Card hover
* Image reveal
* CTA transitions
* Navigation transitions

Implement:

```text
prefers-reduced-motion
```

Users who prefer reduced motion should not receive aggressive animations.

Avoid:

* Constant floating elements
* Excessive parallax
* Long animations
* Animation blocking content
* Decorative animation with no purpose

---

# 36. IMAGE ARCHITECTURE

Use Next.js Image.

Do not use raw `<img>` for normal website imagery unless there is a specific technical reason.

Create an image configuration/data structure.

Example:

```ts
type SiteImage = {
  src: string;
  alt: string;
  label?: string;
  description?: string;
};
```

For now, placeholders should be used.

Later, real images can be inserted without redesigning the components.

---

# 37. CONTENT ARCHITECTURE

Do not hardcode large amounts of repeated content directly into JSX.

Create structured data.

Example:

```ts
export const businessPillars = [
  {
    id: "commerce",
    number: "01",
    title: "Commerce & Trading",
    description: "...",
    icon: "..."
  },
  ...
];
```

Use this data to render cards and sections.

---

# 38. SEO

Every page must have unique:

* Title
* Description
* Open Graph metadata
* Canonical URL where appropriate

Create:

```text
sitemap.ts
robots.ts
```

Use semantic content.

Use proper:

```text
H1
H2
H3
```

Do not use headings simply for visual sizing.

---

# 39. STRUCTURED DATA

Where appropriate, add Organization structured data.

Do not add fake:

* Ratings
* Reviews
* Aggregate scores
* Addresses
* Phone numbers

unless supplied.

---

# 40. PERFORMANCE

Target:

```text
Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 95+
```

Optimize:

* Images
* Fonts
* JavaScript
* CSS
* Third-party scripts
* Animation
* Component rendering

Avoid unnecessary client-side rendering.

---

# 41. CORE WEB VITALS

Pay attention to:

* LCP
* CLS
* INP

Prevent layout shifts by reserving image dimensions.

Do not load huge hero images unnecessarily.

---

# 42. SECURITY

Even though this is primarily a corporate website:

* Validate server-side.
* Sanitize user input.
* Rate-limit contact submissions.
* Protect API endpoints.
* Never expose secrets.
* Use environment variables.
* Do not commit `.env` files.
* Use HTTPS in production.
* Avoid leaking server errors.

---

# 43. ERROR HANDLING

Implement appropriate Next.js error boundaries where useful.

Create:

```text
not-found.tsx
error.tsx
loading.tsx
```

where appropriate.

The 404 page should be branded.

Example:

```text
404

Looks like you've taken a wrong turn.

[Return Home]
```

---

# 44. COMPONENT ARCHITECTURE

Use reusable components such as:

```text
Navbar
Footer
Button
Container
SectionHeader
ImagePlaceholder
BusinessCard
BusinessGrid
CTASection
PageHero
ContactForm
Input
Textarea
```

Do not duplicate these components across pages.

---

# 45. SUGGESTED PROJECT STRUCTURE

Use a clean architecture similar to:

```text
src/
├── app/
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── what-we-do/
│   │   └── page.tsx
│   ├── partnerships/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── loading.tsx
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── partnerships/
│   └── contact/
│
├── data/
│   ├── company.ts
│   ├── business-pillars.ts
│   └── navigation.ts
│
├── lib/
│   ├── utils.ts
│   └── validation.ts
│
├── types/
│
└── styles/
```

---

# 46. QA REQUIREMENTS

Act as a senior QA analyst throughout development.

Do not consider the project complete merely because the page renders.

Test:

### Functional

* Navigation
* Links
* Buttons
* Forms
* Mobile menu
* CTAs
* Error states
* 404
* Loading states

### Visual

* Desktop
* Tablet
* Mobile
* Large screen
* Image placeholders
* Typography
* Spacing
* Alignment

### Accessibility

* Keyboard
* Focus
* Screen reader semantics
* Contrast
* Forms
* Reduced motion

### Performance

* Lighthouse
* Core Web Vitals
* Image loading
* Font loading
* JS bundle

### SEO

* Metadata
* Sitemap
* robots.txt
* Heading structure
* Canonical URLs
* Open Graph

---

# 47. QA TEST MATRIX

Before declaring completion, verify:

| Area         | Test                                |
| ------------ | ----------------------------------- |
| Navbar       | All links work                      |
| Navbar       | Mobile menu works                   |
| Hero         | CTAs work                           |
| Hero         | Image placeholder renders correctly |
| Home         | All sections render                 |
| Services     | All six pillars render              |
| About        | Content hierarchy works             |
| Partnerships | CTA works                           |
| Contact      | Validation works                    |
| Contact      | Success state works                 |
| Contact      | Error state works                   |
| Footer       | Links work                          |
| 404          | Page renders                        |
| Mobile       | No horizontal overflow              |
| Keyboard     | All interactive elements accessible |
| SEO          | Metadata exists                     |
| Sitemap      | Accessible                          |
| robots.txt   | Accessible                          |
| Images       | No broken sources                   |
| Performance  | Lighthouse targets met              |

---

# 48. EDGE CASE TESTING

Test:

* Extremely long company names
* Very long headings
* Very long messages
* Invalid email
* Empty form
* Rapid form submission
* Slow network
* Failed API request
* Missing image
* Missing optional content
* Small mobile viewport
* Large desktop viewport
* Disabled JavaScript where practical
* Reduced-motion preference
* Keyboard-only navigation

---

# 49. BROWSER COMPATIBILITY

Test modern versions of:

* Chrome
* Firefox
* Safari
* Edge

Pay particular attention to:

* CSS layout
* Responsive behavior
* Animations
* Forms
* Navigation
* Font rendering

---

# 50. CONTENT SAFETY / CORPORATE ACCURACY

This is critical.

Never fabricate company information to make the website appear more complete.

If information is missing, use a content placeholder.

Examples:

Instead of:

> "With over 20 years of experience..."

use:

> "[Years of experience to be supplied by IML]"

Instead of:

> "Trusted by 500+ businesses..."

use:

> "[Approved client statistic to be supplied by IML]"

Instead of inventing social links:

> "[Official social media links to be supplied by IML]"

The website must remain factually defensible.

---

# 51. FUTURE EXTENSIBILITY

Although e-commerce is out of scope, structure the code so future functionality can be introduced.

Future phases may include:

```text
Commerce
Marketplace
Wholesale
Logistics
Warehousing
Customer Accounts
Vendor Accounts
Orders
Payments
Tracking
Analytics
```

Do not build these now.

Simply avoid architectural decisions that make future integration unnecessarily difficult.

---

# 52. DO NOT OVERENGINEER

This is a corporate website.

Do NOT introduce:

* Complex state management without need
* Database architecture for static content
* Microservices
* WebSockets
* Redis
* Authentication
* Complex backend infrastructure

unless a real requirement demands them.

The V1 should remain lean.

---

# 53. CODE QUALITY

The implementation must:

* Use clean naming
* Avoid unnecessary duplication
* Avoid giant components
* Avoid deeply nested JSX
* Avoid magic numbers
* Avoid arbitrary CSS values everywhere
* Avoid unnecessary `useEffect`
* Avoid unnecessary client components
* Avoid `any`
* Avoid console errors
* Avoid lint errors
* Avoid TypeScript errors

Run:

```bash
npm run lint
npm run build
```

and resolve all errors before completion.

---

# 54. FINAL PRODUCTION CHECK

Before declaring the website finished, perform a complete audit.

### Engineering

```text
[ ] TypeScript passes
[ ] ESLint passes
[ ] Production build succeeds
[ ] No console errors
[ ] No broken imports
[ ] No dead components
```

### UX

```text
[ ] Clear navigation
[ ] Strong hierarchy
[ ] Consistent spacing
[ ] Clear CTAs
[ ] Good mobile experience
```

### Accessibility

```text
[ ] Keyboard navigation
[ ] Focus states
[ ] Form labels
[ ] Alt text
[ ] Contrast
[ ] Reduced motion
```

### SEO

```text
[ ] Metadata
[ ] Sitemap
[ ] robots.txt
[ ] Semantic headings
[ ] Open Graph
```

### Performance

```text
[ ] Optimized images
[ ] No unnecessary JS
[ ] No layout shifts
[ ] Fast initial load
```

### QA

```text
[ ] Desktop tested
[ ] Tablet tested
[ ] Mobile tested
[ ] Browser tested
[ ] Forms tested
[ ] Error states tested
[ ] 404 tested
```

---

# 55. DEFINITION OF DONE

The project is complete only when:

1. The website accurately represents IML's stated business scope.
2. It looks like a professional corporate website.
3. It works on mobile, tablet and desktop.
4. All navigation and CTAs work.
5. Contact form validation works.
6. Missing company information is represented by clear placeholders rather than fabricated information.
7. Image placeholders exist throughout the site, especially in the hero.
8. Replacing placeholders with real images requires minimal code changes.
9. SEO metadata is implemented.
10. Accessibility has been considered throughout.
11. Performance has been optimized.
12. No TypeScript errors remain.
13. No lint errors remain.
14. Production build succeeds.
15. There are no unnecessary e-commerce features.
16. The codebase is structured for future expansion.
17. The final result feels like a **real corporate website**, not a template or generated demo.

---

# 56. IMPORTANT IMPLEMENTATION RULE

Do not rush into writing all pages at once.

Follow this engineering sequence:

```text
1. Analyze existing repository
        ↓
2. Establish design system
        ↓
3. Build global layout
        ↓
4. Build reusable UI components
        ↓
5. Build homepage
        ↓
6. Test homepage responsively
        ↓
7. Build inner pages
        ↓
8. Implement contact form
        ↓
9. Implement SEO
        ↓
10. Run accessibility audit
        ↓
11. Run performance audit
        ↓
12. Run QA test matrix
        ↓
13. Fix issues
        ↓
14. Production build
        ↓
15. Final review
```

Do not sacrifice architecture and QA for speed.

---

# 57. FINAL DESIGN OBJECTIVE

The final website should make a visitor think:

> "This is a serious company."

Then:

> "I understand what they do."

Then:

> "They operate across several business capabilities."

Then:

> "They look credible."

And finally:

> "I can see how to engage with them."

The experience should feel:

**Corporate + Modern + Premium + Confident + African + Technology-enabled + Commercial**

without becoming flashy, generic, or overly experimental.

Build the website as if it will be publicly launched by a real company and reviewed by executives, customers, partners, engineers and QA professionals.

Do not produce a mockup-quality implementation.

Produce a **production-quality V1 corporate website**.
