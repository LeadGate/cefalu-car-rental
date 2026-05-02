import React from "react";

interface HeroWideProps {
  title: string;
  description?: string;
  backgroundImage: string;
  children?: React.ReactNode; // for inline widget
}

const HeroWide: React.FC<HeroWideProps> = ({
  title,
  description,
  backgroundImage,
  children,
}) => (
  <section
    className="relative bg-cover bg-center py-24 md:py-32"
    style={{ backgroundImage: `var(--hero-overlay), url(${backgroundImage})` }}
  >
    <div className="container-content">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl">
        {title}
      </h1>
      {description && (
        <p className="text-primary-foreground/90 text-lg leading-relaxed max-w-3xl mb-8">
          {description}
        </p>
      )}
      {children}
    </div>
  </section>
);

export default HeroWide;
