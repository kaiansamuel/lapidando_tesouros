import { ArrowDownRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/content/site";

export function Process() {
  return (
    <section className="section section--paper" id="como-funciona">
      <div className="container">
        <SectionHeading
          eyebrow="03 — Como funciona"
          title="O primeiro passo é uma conversa."
          description="Cada situação é única. A equipe orienta a família com clareza sobre critérios, disponibilidade e próximos passos."
        />

        <ol className="process-list">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <span className="process-list__number">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <ArrowDownRight aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
