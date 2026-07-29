import { Building2, HandCoins, Users } from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeading } from "@/components/ui/section-heading";

const supportWays = [
  {
    icon: HandCoins,
    title: "Fazer uma doação",
    text: "Ajude nas necessidades de alimentação, higiene, estrutura e cuidado diário.",
    action: "Quero contribuir",
  },
  {
    icon: Users,
    title: "Ser voluntário",
    text: "Compartilhe tempo, conhecimento e presença em ações organizadas pela equipe.",
    action: "Quero ser voluntário",
  },
  {
    icon: Building2,
    title: "Tornar-se parceiro",
    text: "Empresas, igrejas e organizações podem construir iniciativas de impacto duradouro.",
    action: "Propor uma parceria",
  },
];

export function Support() {
  return (
    <section className="section section--paper" id="apoie">
      <div className="container">
        <SectionHeading
          eyebrow="07 — Faça parte"
          title="Você também pode ajudar a lapidar uma nova história."
          description="A continuidade desse trabalho depende de pessoas e organizações que acreditam na transformação de vidas."
        />

        <div className="support-grid">
          {supportWays.map(({ icon: Icon, title, text, action }, index) => (
            <article className="support-card" key={title}>
              <div className="support-card__icon">
                <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <span className="support-card__number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <CtaLink href="#contato" variant="secondary">
                {action}
              </CtaLink>
            </article>
          ))}
        </div>
        <p className="validation-note">
          O canal oficial de doação está em validação. Nenhum Pix ou dado
          bancário é solicitado por esta página.
        </p>
      </div>
    </section>
  );
}
