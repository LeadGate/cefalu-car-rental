import React from "react";

interface DataTableAzoresProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  caption?: string;
}

const DataTableAzores: React.FC<DataTableAzoresProps> = ({
  headers,
  rows,
  caption,
}) => (
  <div className="overflow-x-auto rounded-lg border border-border shadow-card mb-6">
    <table className="w-full text-sm">
      {caption && (
        <caption className="px-4 py-2 text-left text-sm text-muted-foreground">
          {caption}
        </caption>
      )}
      <thead>
        <tr className="bg-primary text-primary-foreground">
          {headers.map((h) => (
            <th
              key={h}
              className="px-4 py-3 text-left font-semibold whitespace-nowrap"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            className={i % 2 === 0 ? "bg-background" : "bg-secondary"}
          >
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTableAzores;
