import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/content/site";

export function Faq() {
  return (
    <section className="section faq-section" id="perguntas">
      <div className="container faq-grid">
        <SectionHeading
          eyebrow="08 — Perguntas frequentes"
          title="Informação clara para o primeiro contato."
          light
        />

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary>
                <span className="faq-list__number">0{index + 1}</span>
                <span>{faq.question}</span>
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
