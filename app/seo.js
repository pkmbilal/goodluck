export const siteUrl = "https://www.goodlucksa.com";

export const siteConfig = {
  name: "GoodLuck Scrap",
  url: siteUrl,
  description:
    "GoodLuck Scrap buys, collects, recycles, and handles industrial scrap metal and surplus material for businesses across Saudi Arabia.",
  phone: "+966 55 518 9623",
  email: "sales@goodlucksa.com",
  whatsapp: "https://wa.me/966555189623",
  areaServed: "Saudi Arabia",
  ogImage: "/assets/images/hero-vibrant-scrap-yard.png",
};

export const seoKeywords = [
  "scrap metal buyer Saudi Arabia",
  "metal recycling Saudi Arabia",
  "scrap collection Saudi Arabia",
  "copper scrap buyer",
  "aluminium scrap buyer",
  "industrial scrap collection",
  "demolition scrap clearance",
  "industrial surplus Saudi Arabia",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({ title, description, path, image = siteConfig.ogImage }) {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} scrap metal buying and recycling`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteUrl,
        logo: absoluteUrl("/Logo.svg"),
        email: siteConfig.email,
        telephone: siteConfig.phone,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "sales",
          areaServed: siteConfig.areaServed,
          availableLanguage: ["en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteConfig.name,
        url: siteUrl,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${siteUrl}/#business`,
        name: siteConfig.name,
        url: siteUrl,
        image: absoluteUrl(siteConfig.ogImage),
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: {
          "@type": "Country",
          name: siteConfig.areaServed,
        },
        priceRange: "$$",
        description: siteConfig.description,
        sameAs: [siteConfig.whatsapp],
      },
    ],
  };
}

export function servicesJsonLd(services) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/services#services`,
    name: "GoodLuck Scrap services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.text,
        provider: {
          "@id": `${siteUrl}/#business`,
        },
        areaServed: {
          "@type": "Country",
          name: siteConfig.areaServed,
        },
      },
    })),
  };
}

export function contactJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#contact`,
    url: absoluteUrl("/contact"),
    name: "Contact GoodLuck Scrap",
    about: {
      "@id": `${siteUrl}/#business`,
    },
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      url: siteUrl,
    },
  };
}
