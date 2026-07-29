import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const references = [
  "Mais de três décadas de atuação social",
  "Utilidade pública estadual desde 2014",
  "Atuação em Aparecida de Goiânia",
];

export function Recognition() {
  return (
    <section
      className="section section--mist"
      aria-label="Credibilidade institucional"
    >
      <div className="container recognition-grid">
        <SectionHeading
          eyebrow="06 — Credibilidade"
          title="Uma história construída com união e responsabilidade."
          description="A instituição participa da rede de cuidado e reinserção social, dialogando com comunidade, organizações e poder público."
        />
        <div className="recognition-list">
          {references.map((item) => (
            <div key={item}>
              <BadgeCheck size={22} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
          <p>
            Informações e logotipos de parceiros serão publicados somente após
            validação institucional.
          </p>
        </div>
      </div>
    </section>
  );
}
