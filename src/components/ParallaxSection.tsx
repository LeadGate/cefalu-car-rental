import React from "react";

interface ParallaxSectionProps {
  image: string;
  imageAlt?: string;
  overlayClass?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  image,
  imageAlt,
  overlayClass,
  title,
  subtitle,
  children,
}) => (
  <section
    className="relative bg-fixed bg-cover bg-center py-20"
    style={{
      backgroundImage: overlayClass
        ? `var(${overlayClass}), url(${image})`
        : `var(--highlights-overlay), url(${image})`,
    }}
    role="img"
    aria-label={imageAlt}
  >
    <div className="container-content text-center">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </section>
);

export default ParallaxSection;
