import React from "react";
import { Link } from "react-router-dom";

interface IslandGridProps {
  locations: Array<{
    name: string;
    slug: string;
    description?: string;
  }>;
}

const IslandGrid: React.FC<IslandGridProps> = ({ locations }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {locations.map((loc) => (
      <Link
        key={loc.slug}
        to={loc.slug}
        className="group block rounded-lg border border-border bg-background p-6 shadow-card transition-shadow hover:shadow-md"
      >
        <h3 className="text-lg font-semibold text-primary group-hover:underline">
          {loc.name}
        </h3>
        {loc.description && (
          <p className="mt-2 text-sm text-foreground/70">{loc.description}</p>
        )}
      </Link>
    ))}
  </div>
);

export default IslandGrid;
