import { absoluteUrl, siteConfig, siteUrl } from "../seo";

export const cityLocations = [
  {
    name: "Riyadh",
    slug: "riyadh",
    region: "Central Saudi Arabia",
    image: "/assets/images/service-site-collection.png",
    intro:
      "Riyadh scrap requests often come from contractors, workshops, warehouses, and fit-out teams that need clear pickup coordination inside active business districts and industrial areas.",
    focus: "Scrap metal buying, cable and panel board recovery, site collection, and industrial surplus handling for business loads in Riyadh.",
    industries: ["Contractors", "Workshops", "Warehouses", "Construction sites"],
    materials: ["Copper", "Aluminium", "Cables", "Panel boards", "Steel offcuts"],
    accessNote: "Share the district, loading access, and whether the material is staged indoors, in a yard, or on an active site.",
  },
  {
    name: "Jeddah",
    slug: "jeddah",
    region: "Western Saudi Arabia",
    image: "/assets/images/service-industrial-surplus.png",
    intro:
      "Jeddah service-area requests are commonly tied to warehouses, workshops, trade stock, and commercial clear-outs where timing and loading access matter.",
    focus: "Scrap buying, aluminium and copper review, warehouse clearance, and surplus material handling for Jeddah businesses.",
    industries: ["Warehouses", "Factories", "Workshops", "Contractors"],
    materials: ["Aluminium", "Copper", "Brass scrap", "Containers", "Cables"],
    accessNote: "Send the site location, approximate load size, and whether truck access or lifting equipment is available.",
  },
  {
    name: "Dammam",
    slug: "dammam",
    region: "Eastern Province",
    image: "/assets/images/service-metal-recycling.png",
    intro:
      "Dammam is a practical target for industrial scrap collection, recurring workshop loads, and sorted material from factories and commercial operators.",
    focus: "Industrial scrap collection, metal recycling support, pipe and cable handling, and surplus material review in Dammam.",
    industries: ["Factories", "Workshops", "Warehouses", "Industrial operators"],
    materials: ["CS pipes", "Cables", "Stainless steel", "Copper", "Aluminium"],
    accessNote: "Include photos that show material type, quantity, and whether the load is mixed or sorted.",
  },
  {
    name: "Khobar",
    slug: "khobar",
    region: "Eastern Province",
    image: "/assets/images/generated-copper-scrap.png",
    intro:
      "Khobar pages should speak to commercial sites, maintenance teams, workshops, and surplus material owners who need fast review before collection.",
    focus: "Copper scrap buying, aluminium scrap review, site collection, and industrial surplus handling for Khobar businesses.",
    industries: ["Commercial sites", "Workshops", "Maintenance teams", "Contractors"],
    materials: ["Copper", "Aluminium", "Cables", "Panel boards", "Brass scrap"],
    accessNote: "Send clear close-up photos plus one wide shot so the team can judge material condition and loading needs.",
  },
  {
    name: "Jubail",
    slug: "jubail",
    region: "Eastern Province",
    image: "/assets/images/generated-cs-pipes-scrap.png",
    intro:
      "Jubail should be positioned around industrial operators, plant support teams, and surplus stock holders that need disciplined material handling.",
    focus: "Industrial scrap buying, pipe and steel review, demolition scrap clearance, and surplus metal handling in Jubail.",
    industries: ["Industrial operators", "Factories", "Contractors", "Demolition companies"],
    materials: ["CS pipes", "Stainless steel", "Billets", "Cables", "Panel boards"],
    accessNote: "Mention site access rules, pickup timing, and whether the material needs inspection before movement.",
  },
  {
    name: "Yanbu",
    slug: "yanbu",
    region: "Western Saudi Arabia",
    image: "/assets/images/generated-billets-scrap.png",
    intro:
      "Yanbu city pages should focus on industrial surplus, workshop scrap, and construction material that needs a clear collection path.",
    focus: "Scrap metal buying, industrial surplus review, steel and cable collection, and demolition scrap support in Yanbu.",
    industries: ["Industrial operators", "Contractors", "Workshops", "Construction sites"],
    materials: ["Billets", "CS pipes", "Cables", "Aluminium", "Stainless steel"],
    accessNote: "Share the location, material photos, and rough quantity so the first response can be practical.",
  },
];

export function getCityLocation(slug) {
  return cityLocations.find((city) => city.slug === slug);
}

export function getCityWhatsappHref(city) {
  const message = `Hello GoodLuck Scrap, I want a scrap metal quote in ${city.name}.`;
  return `https://wa.me/966555189623?text=${encodeURIComponent(message)}`;
}

export function cityPagePath(city) {
  return `/locations/${city.slug}`;
}

export function cityServiceJsonLd(city) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${cityPagePath(city)}#service`,
    name: `Scrap metal buying and collection in ${city.name}`,
    description: city.focus,
    url: absoluteUrl(cityPagePath(city)),
    provider: {
      "@id": `${siteUrl}/#business`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "Country",
        name: "Saudi Arabia",
      },
    },
    serviceType: [
      "Scrap metal buying",
      "Industrial scrap collection",
      "Metal recycling",
      "Demolition scrap clearance",
      "Industrial surplus handling",
    ],
  };
}

export function locationsItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/locations#service-areas`,
    name: "GoodLuck Scrap city service areas",
    itemListElement: cityLocations.map((city, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        name: `Scrap metal buyer in ${city.name}`,
        url: absoluteUrl(cityPagePath(city)),
      },
    })),
  };
}
