import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  jsonLd?: object[];
  siteName?: string;
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
  jsonLd,
  siteName,
}: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Always-update tags (idempotent, safe to overwrite — match prerender or fill gap):
    setMeta("robots", noindex ? "noindex, follow" : "index, follow");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", ogType, "property");
    if (ogImage) setMeta("og:image", ogImage, "property");
    if (siteName) setMeta("og:site_name", siteName, "property");
    setMeta("twitter:card", "summary_large_image");
    if (ogImage) setMeta("twitter:image", ogImage);

    // Council 2026-05-04 (rule feedback_route_head_integrity_protocol):
    // If prerender_patch wrote the marker for this route, prerender owns the head.
    // Skip canonical / meta description / og:url / JSON-LD to avoid hydration duplicates.
    // Helmet remains the FALLBACK for routes where prerender did not run.
    const prerendered = document.querySelector('meta[name="boss-prerender"]');
    if (prerendered) {
      return;
    }

    // === Fallback path (no prerender marker) ===
    setMeta("description", description);
    setMeta("og:url", canonical, "property");

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach(s => s.remove());

    if (jsonLd) {
      jsonLd.forEach(schema => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      const scripts = document.querySelectorAll('script[data-seo-jsonld]');
      scripts.forEach(s => s.remove());
    };
  }, [title, description, canonical, ogImage, ogType, noindex, jsonLd, siteName]);

  return null;
};

export default SEOHead;
