import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function Founder() {
  return (
    <section className="section founder-section" id="historia">
      <div className="container founder-grid">
        <div className="founder-portrait">
          <Image
            className="founder-portrait__primary"
            src="/images/institucional/pastor-gil-01.jpeg"
            alt="Pastor Gil cantando e tocando violão durante uma celebração"
            fill
            sizes="(max-width: 640px) 100vw, 42vw"
          />
          <div className="founder-portrait__inset" style={{ position: "absolute" }}>
            <Image
              src="/images/institucional/pastor-gil-00.jpeg"
              alt="Pastor Gil segurando um microfone em um momento de fé"
              fill
              sizes="(max-width: 640px) 34vw, 13vw"
            />
          </div>
          <p>Pastor Gil — fundador e presidente</p>
        </div>

        <div className="founder-copy">
          <SectionHeading
            eyebrow="04 — Nossa história"
            title="Uma missão que nasceu de uma vida transformada."
            light
          />
          <p>
            Pastor Gildeon Nunes da Silva, conhecido como Pastor Gil, é o
            fundador e presidente da Lapidando Tesouros. Desde 1992, dedica-se
            ao acolhimento de pessoas atingidas pela dependência química e pela
            exclusão social.
          </p>
          <p>
            Sua trajetória deu origem a uma instituição construída sobre o amor
            ao próximo, a fé e a convicção de que toda pessoa merece uma
            oportunidade para recomeçar.
          </p>
          <div className="founder-quote">
            <Quote size={24} aria-hidden="true" />
            <span>Todo tesouro precisa de cuidado para revelar seu valor.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
