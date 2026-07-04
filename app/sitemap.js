import { absoluteUrl } from "./seo";

const routes = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/materials", priority: 0.85 },
  { path: "/industries", priority: 0.8 },
  { path: "/contact", priority: 0.75 },
];

export default function sitemap() {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
