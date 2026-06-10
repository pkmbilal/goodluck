export const contact = {
  phoneNumber: "+966 55 518 9623",
  email: "sales@goodlucksa.com",
  whatsappNumber: "966555189623",
  whatsappMessage: "Hello Good Luck Scrap, I want a scrap metal quote.",
};

export const siteNavItems = [
  ["Services", "/services"],
  ["Materials", "/materials"],
  ["Industries", "/industries"],
  ["Contact", "#contact"],
];

export const homeNavItems = siteNavItems;
export const servicesNavItems = siteNavItems;
export const materialsNavItems = siteNavItems;
export const industriesNavItems = siteNavItems;

export const navItems = siteNavItems;

export const trustItems = [
  ["Rapid coordination", "Pickup planning for workshops, yards, factories, and active project sites."],
  ["Clear weighing", "Material is reviewed by type so the quote discussion stays practical."],
  ["Mixed metal loads", "Support for ferrous, non-ferrous, cable, pipe, panel, and surplus material."],
  ["Saudi industrial focus", "Built for contractors, warehouses, demolition teams, and commercial operators."],
];

export const services = [
  {
    title: "Scrap metal buying",
    text: "Direct buying support for steel, copper, aluminium, brass, zinc, cables, and common industrial scrap.",
    image: "/assets/images/service-scrap-metal-buying.png",
  },
  {
    title: "Metal recycling",
    text: "Sorting and handling support that moves recoverable metal into cleaner recycling and reuse channels.",
    image: "/assets/images/service-metal-recycling.png",
  },
  {
    title: "Site collection",
    text: "Collection coordination for workshops, warehouses, construction sites, and recurring scrap loads.",
    image: "/assets/images/service-site-collection.png",
  },
  {
    title: "Demolition scrap clearance",
    text: "Recovery support for steel, pipes, panels, cables, and reusable metal from demolition projects.",
    image: "/assets/images/service-demolition-clearance.png",
  },
  {
    title: "Industrial surplus",
    text: "Buying and selling support for excess stock, yard clearance, and usable surplus material.",
    image: "/assets/images/service-industrial-surplus.png",
  },
];

export const materials = [
  ["Copper", "/assets/images/generated-copper-scrap.png"],
  ["Aluminium", "/assets/images/generated-aluminium-scrap.png"],
  ["Stainless steel", "/assets/images/generated-stainless-steel-scrap.png"],
  ["Brass scrap", "/assets/images/generated-brass-scrap.png"],
  ["Cables", "/assets/images/generated-cable-scrap.png"],
  ["CS pipes", "/assets/images/generated-cs-pipes-scrap.png"],
  ["Panel boards", "/assets/images/generated-panel-boards-scrap.png"],
  ["Containers", "/assets/images/generated-container-scrap.png"],
  ["Zinc", "/assets/images/generated-zinc-scrap.png"],
  ["Billets", "/assets/images/generated-billets-scrap.png"],
];

export const processSteps = [
  ["01", "Share details", "Send the material type, photos if available, site location, and estimated quantity."],
  ["02", "Plan pickup", "We coordinate inspection, access, loading needs, and collection timing."],
  ["03", "Sort and weigh", "Material is reviewed by category so the quote conversation is clear."],
  ["04", "Confirm value", "We agree the next step for payment, pickup, or recurring material supply."],
];

export const advantages = [
  "Direct communication for time-sensitive clearance work.",
  "Practical handling for both mixed and sorted metal loads.",
  "Experience with factories, contractors, warehouses, and demolition sites.",
  "A cleaner path for reusable metal resources and industrial surplus.",
];

export const industries = [
  "Contractors",
  "Factories",
  "Workshops",
  "Warehouses",
  "Demolition companies",
  "Construction sites",
];

export function getWhatsappHref() {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;
}

export function getPhoneHref() {
  return `tel:${contact.phoneNumber.replaceAll(" ", "")}`;
}
