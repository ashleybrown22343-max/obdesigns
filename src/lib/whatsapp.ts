export interface InquiryDetails {
  fullName: string;
  phone: string;
  location: string;
  serviceNeeded: string;
  description: string;
}

export function buildInquiryWhatsAppUrl(inquiry: InquiryDetails): string {
  const message = [
    `Hello OB Designs & Interiors, I'd like to request a project consultation.`,
    ``,
    `Name: ${inquiry.fullName}`,
    `Phone: ${inquiry.phone}`,
    `Project location: ${inquiry.location}`,
    `Service needed: ${inquiry.serviceNeeded}`,
    `Description: ${inquiry.description}`,
  ].join("\n");

  return `https://wa.me/${business.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
}
