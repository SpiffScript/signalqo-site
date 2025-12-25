import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SEO_MAP, SITE_URL } from "../seo";

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = SEO_MAP[pathname];

    if (!seo) return;

    // Title
    document.title = seo.title;

    // Meta description
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = seo.description;

    // Canonical
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = `${SITE_URL}${pathname}`;
  }, [pathname]);

  return null;
}
