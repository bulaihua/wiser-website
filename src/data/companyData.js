export const companyInfo = {
  name: "Wiser Enterprise Ltd.",
  established: 2006,
  annualRevenue: "$40M+",
  annualProduction: "8M+",
  employees: "500+",
  email: "info@wiser.co",
  description: "A global fashion group delivering complete solutions from design concept to final delivery. With 20 years of expertise and facilities across China and Southeast Asia, we help brands worldwide bring their visions to life—faster, smarter, and more efficiently."
};

export const brands = [
  { name: "Calvin Klein", logo: "/logos/placeholder-ck.svg" },
  { name: "Tommy Hilfiger", logo: "/logos/placeholder-th.svg" },
  { name: "Karl Lagerfeld", logo: "/logos/placeholder-kl.svg" }
];

export const globalFootprint = {
  china: {
    title: "China Base",
    factories: "2 owned + 10 partner factories",
    capacity: "5 million pieces/year",
    type: "Knitwear & manufacturing"
  },
  southeastAsia: {
    title: "Southeast Asia Base",
    established: 2014,
    locations: ["Vietnam", "Bangladesh", "Cambodia"],
    capacity: "3 million pieces/year",
    certifiedFactories: "4 PVH-audit certified factories"
  }
};

export const certifications = [
  {
    name: "WRAP Certification",
    description: "Worldwide Responsible Accredited Production certification for social compliance",
    logo: "/images/wrap.png"
  },
  {
    name: "SGS Audit",
    description: "Third-party verification of quality management systems and product quality",
    logo: "/images/sgs-logo.png"
  },
  {
    name: "PVH Audit",
    description: "Compliance with PVH's rigorous standards for labor practices and workplace safety",
    logo: "/images/pvh-logo-new.png"
  }
];

export const caseStudies = [
  {
    id: 1,
    title: "Large-Scale Delivery Capability",
    client: "Top US Fashion Brand",
    category: "Mass Production",
    description: "Stable supply of 1 million+ pieces per season for a leading American fashion brand.",
    highlights: [
      "Consistent quality across million-piece orders",
      "On-time delivery rate: 98%",
      "Full supply chain transparency"
    ]
  },
  {
    id: 2,
    title: "Sustainable Development Project",
    client: "European Brand",
    category: "Sustainability",
    description: "Development of organic cotton collection demonstrating environmental responsibility.",
    highlights: [
      "100% organic cotton certified",
      "Reduced water consumption by 40%",
      "Fully traceable supply chain"
    ]
  },
  {
    id: 3,
    title: "Exquisite Craftsmanship",
    client: "Luxury Fashion House",
    category: "Premium Products",
    description: "High-end handcrafted knit accessories for a luxury brand.",
    highlights: [
      "Master craftsmen with 15+ years experience",
      "Hand-finished details",
      "Premium material sourcing"
    ]
  }
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services", hasDropdown: true },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Global Presence", href: "/global-presence", hasDropdown: false },
  { name: "FAQ", href: "/faq" },
  { name: "About Us", href: "/about", hasDropdown: true }
];

export const servicesSubmenu = [
  { name: "Concept Studio", href: "/services/design" },
  { name: "Sourcing & Development", href: "/services/development" },
  { name: "Manufacturing", href: "/services/manufacturing" },
  { name: "Quality Assurance", href: "/services/quality" },
  { name: "Logistics & Shipping", href: "/services/logistics" }
];

export const aboutSubmenu = [
  { name: "Overview", href: "/about/overview" },
  { name: "Leadership", href: "/about/leadership" },
  { name: "History", href: "/about/history" },
  { name: "Sustainability", href: "/about/sustainability" }
];
