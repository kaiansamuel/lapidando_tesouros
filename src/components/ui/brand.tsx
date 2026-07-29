import { Gem } from "lucide-react";

type BrandProps = {
  compact?: boolean;
  inverted?: boolean;
};

export function Brand({ compact = false, inverted = false }: BrandProps) {
  return (
    <span className={`brand ${inverted ? "brand--inverted" : ""}`}>
      <span className="brand__mark" aria-hidden="true">
        <Gem size={compact ? 19 : 22} strokeWidth={1.7} />
      </span>
      <span className="brand__text">
        <span>Lapidando</span>
        {!compact && <strong>Tesouros</strong>}
      </span>
    </span>
  );
}
