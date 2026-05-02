import React from "react";

interface SectionProps {
  title?: string;
  alt?: boolean;
  children: React.ReactNode;
  className?: string;
  wide?: boolean; // container-wide vs container-content
}

const Section: React.FC<SectionProps> = ({
  title,
  alt,
  children,
  className = "",
  wide,
}) => (
  <section className={`py-16 ${alt ? "section-alt" : ""} ${className}`}>
    <div className={wide ? "container-wide" : "container-content"}>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

export default Section;
