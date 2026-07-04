import { absoluteUrl } from "./seo";
import { cityLocations, cityPagePath } from "./locations/locationData";

const routes = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/materials", priority: 0.85 },
  { path: "/industries", priority: 0.8 },
  { path: "/locations", priority: 0.82 },
  { path: "/contact", priority: 0.75 },
];

export default function sitemap() {
  const cityRoutes = cityLocations.map((city) => ({
    path: cityPagePath(city),
    priority: 0.72,
  }));

  return [...routes, ...cityRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}