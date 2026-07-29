import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section className="section section--paper" id="quem-somos">
      <div className="container about-grid">
        <SectionHeading
          eyebrow="01 — Quem somos"
          title="Há mais de três décadas, transformando acolhimento em esperança."
        />
        <div className="about-copy">
          <p className="lead-copy">
            A história da Lapidando Tesouros começou em 1992, quando o Pastor
            Gildeon Nunes decidiu estender a mão a pessoas que enfrentavam a
            dependência química e situações de vulnerabilidade.
          </p>
          <p>
            O que começou como um gesto de cuidado tornou-se uma missão:
            acolher, orientar e apoiar cada pessoa na reconstrução da dignidade,
            dos vínculos familiares e dos seus projetos de vida.
          </p>
          <blockquote>
            “Acolher pessoas, restaurar dignidade e construir novos caminhos.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
