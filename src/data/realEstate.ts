export interface RealEstateProject {
  id: string;
  name: string;
  location: string;
  sizes: {
    sqm: number;
    plans: { period: string; price: string }[];
  }[];
  image: string;
  features: string[];
}

export const realEstateProjects: RealEstateProject[] = [
  {
    id: "aviance-prosperity",
    name: "Aviance Prosperity Estate",
    location: "Okeawa Mowe-Ofada, Ogun State",
    sizes: [
      {
        sqm: 500,
        plans: [
          { period: "0-3 Months", price: "5.5M" },
          { period: "4-6 Months", price: "5.7M" },
          { period: "6-12 Months", price: "6M" },
        ],
      },
      {
        sqm: 300,
        plans: [
          { period: "0-3 Months", price: "3.7M" },
          { period: "4-6 Months", price: "4M" },
          { period: "6-12 Months", price: "4.3M" },
        ],
      },
    ],
    image: "/images/ob/aviance-1.jpg",
    features: ["Certificate of Occupancy (C of O)", "Residential Plots", "Commercial Plots", "Farmland"],
  },
];

export const realEstateServices = [
  "Residential Plots & Lands",
  "Commercial Plots & Lands",
  "Farmland for Agro-Investment",
  "Ready-Built Houses & Buildings",
  "Estate Development (Aviance)",
  "Investment Consultancy & Site Tours",
];
