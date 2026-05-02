import React from "react";

interface FooterCTAImageProps {
  image: string;
  overlayClass?: string;
  title?: string;
  ctaText?: string;
  ctaHref?: string;
  children?: React.ReactNode;
}

const FooterCTAImage: React.FC<FooterCTAImageProps> = ({
  image,
  overlayClass,
  title,
  ctaText,
  ctaHref = "/",
  children,
}) => (
  <section
    className="relative py-20 bg-cover bg-center"
    style={{
      backgroundImage: overlayClass
        ? `var(${overlayClass}), url(${image})`
        : `var(--footer-cta-overlay), url(${image})`,
    }}
  >
    <div className="container-content text-center">
      {title && (
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">
          {title}
        </h2>
      )}
      {children}
      {ctaText && (
        <a
          href={ctaHref}
          className="inline-block bg-primary hover:bg-ocean-dark text-primary-foreground font-semibold px-8 py-3 rounded-md transition-colors"
        >
          {ctaText}
        </a>
      )}
    </div>
  </section>
);

export default FooterCTAImage;
