import type { ProjectCategory } from "./projects";

export interface ServiceInfo {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  detail: string;
  quoteNote: string;
  category?: ProjectCategory;
  overrideImage?: string;
  isProduct?: boolean;
}

export const servicesDetail: ServiceInfo[] = [
  {
    slug: "painters-in-nigeria",
    metaTitle: "Professional Painters in Nigeria | OB Designs & Interiors",
    metaDescription:
      "OB Designs & Interiors LTD delivers professional interior and exterior painting across Nigeria, backed by 6 years of hands-on experience and our own New Wave paint.",
    heading: "Professional Painters in Nigeria",
    intro:
      "Painting is where OB Designs & Interiors LTD started, and it's still at the core of everything we do.",
    detail:
      "Our painting crews handle everything from single-room touch-ups to full building repaints, using our own New Wave emulsion paint alongside trusted third-party brands depending on what a project calls for. Because we manufacture paint ourselves, we understand how different finishes perform in Nigerian weather — something a contractor who only applies paint, rather than also producing it, typically can't offer.",
    quoteNote:
      "Painting costs depend on wall area, number of coats, and finish (matte, silk, or gloss) — request a free quote and we'll give you an accurate price after understanding your space.",
    category: "Painting",
  },
  {
    slug: "house-painting-services-nigeria",
    metaTitle: "House Painting Services in Nigeria | OB Designs & Interiors",
    metaDescription:
      "Residential painting for homes and estates across Nigeria — interior walls, ceilings, and full-house repaints by OB Designs & Interiors LTD.",
    heading: "House Painting Services in Nigeria",
    intro:
      "Whether you're moving into a freshly built home or refreshing a house you've lived in for years, OB Designs & Interiors LTD handles residential painting from start to finish.",
    detail:
      "We work directly with homeowners and property developers, covering bedrooms, living spaces, kitchens, and full estate units. Because painting is only one part of what we do, we can also handle POP ceiling work, screeding, or interior finishing in the same visit if your home needs more than paint.",
    quoteNote:
      "Send us your home's size and current condition on WhatsApp, and we'll respond with a free, no-obligation quote.",
    category: "Painting",
  },
  {
    slug: "exterior-painting-nigeria",
    metaTitle: "Exterior Painting Services in Nigeria | OB Designs & Interiors",
    metaDescription:
      "Weather-resistant exterior painting and façade finishing across Nigeria by OB Designs & Interiors LTD, using our own New Wave paint.",
    heading: "Exterior Painting Services in Nigeria",
    intro:
      "Exterior walls take the hardest beating from sun, rain, and humidity — which is exactly why we built New Wave paint to hold up under real Nigerian weather conditions.",
    detail:
      "Our exterior painting work covers full building façades, perimeter walls, and gate finishes. We assess the existing surface first — cracks, old peeling paint, and dampness are dealt with before a single coat goes on, so the finish actually lasts instead of failing within a year.",
    quoteNote:
      "Exterior jobs are priced by building size and surface condition — request a free quote and we can schedule a site visit if needed.",
    category: "Exteriors",
  },
  {
    slug: "interior-designers-in-nigeria",
    metaTitle: "Interior Designers in Nigeria | OB Designs & Interiors",
    metaDescription:
      "Full interior design and decorating services across Nigeria — living rooms, offices, and full homes styled by OB Designs & Interiors LTD.",
    heading: "Interior Designers in Nigeria",
    intro:
      "Interior design at OB Designs & Interiors LTD goes beyond picking colors — we plan how a space is used, then bring in the finishing work to match.",
    detail:
      "We've worked on living rooms, offices, and full home interiors, combining our painting and POP installation background with practical decor choices. Because the same company handles the design and the physical finishing work, there's no gap between what's planned and what actually gets built.",
    quoteNote:
      "Interior design pricing depends on scope — a single room versus a full home — request a free quote to discuss your space.",
    category: "Interiors",
  },
  {
    slug: "pop-ceiling-installation-nigeria",
    metaTitle: "POP Ceiling Installation in Nigeria | OB Designs & Interiors",
    metaDescription:
      "POP (Plaster of Paris) ceiling and wall installations across Nigeria — fluted panels, decorative ceilings, and ceiling repairs by OB Designs & Interiors LTD.",
    heading: "POP Ceiling Installation in Nigeria",
    intro:
      "POP work is one of our most requested services — it's what transforms a plain ceiling into a real design feature.",
    detail:
      "We install decorative POP ceilings, fluted wall panels, and lighting-integrated ceiling designs for homes, churches, and commercial halls. Our team frames, boards, and finishes each ceiling on site, matching the design to the room rather than fitting a standard template.",
    quoteNote:
      "POP pricing depends on ceiling size and design complexity — request a free quote and share a photo of your space for the most accurate estimate.",
    category: "POP Installations",
  },
  {
    slug: "floor-screeding-nigeria",
    metaTitle: "Floor Screeding Services in Nigeria | OB Designs & Interiors",
    metaDescription:
      "Professional floor screeding for a smooth, durable finish — residential and commercial screeding services by OB Designs & Interiors LTD across Nigeria.",
    heading: "Floor Screeding Services in Nigeria",
    intro:
      "A good screed is invisible when it's done right — it's the flat, solid base every good floor finish depends on.",
    detail:
      "We screed floors ahead of tiling, flooring, or painting work, making sure the surface is level and durable before any finish goes on top. This is often paired with our other services on the same project, since a floor and its finish are rarely handled separately in practice.",
    quoteNote: "Screeding is priced by floor area and site condition — request a free quote for your space.",
    category: "Screeding",
  },
  {
    slug: "new-wave-emulsion-paint-nigeria",
    metaTitle: "New Wave Emulsion Paint | OB Designs & Interiors",
    metaDescription:
      "New Wave emulsion paint, manufactured and sold directly by OB Designs & Interiors LTD — the same paint we use on our own painting projects across Nigeria.",
    heading: "New Wave Emulsion Paint",
    intro: "New Wave is our own emulsion paint line — not a third-party product we resell, but one we manufacture ourselves.",
    detail:
      "Because we use New Wave paint on our own painting and exterior finishing jobs, we get direct, practical feedback on how it holds up in real Nigerian conditions — something most paint brands never get from the people actually applying their product. New Wave is available for direct purchase, whether or not you use our painting service.",
    quoteNote: "Pricing depends on quantity and finish required — contact us directly for current New Wave paint pricing.",
    overrideImage: "/images/ob/paint-1.jpg",
    isProduct: true,
  },
];
