import {
  BookOpen,
  HandHeart,
  HeartHandshake,
  Sprout,
  UsersRound,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { pillars } from "@/content/site";

const icons = [HandHeart, Sprout, UsersRound, HeartHandshake, BookOpen];

export function Pillars() {
  return (
    <section className="section pillars-section" id="como-ajudamos">
      <div className="container">
        <SectionHeading
          eyebrow="02 — Nossa missão"
          title="Cuidado que enxerga a pessoa por inteiro."
          description="Cinco pilares orientam uma jornada baseada em responsabilidade, fé, convivência e novas possibilidades."
          light
        />

        <div className="pillars-grid">
          {pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <article className="pillar-card" key={pillar.title}>
                <div className="pillar-card__top">
                  <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
