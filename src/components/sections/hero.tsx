import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <Image
        className="hero__photo"
        src="/images/institucional/lapidando-06.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className="hero__photo-overlay" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__meta">
          <span>Desde {siteConfig.founded}</span>
          <span className="hero__location">
            <MapPin size={15} aria-hidden="true" />
            {siteConfig.location}
          </span>
        </div>

        <div className="hero__content">
          <p className="eyebrow eyebrow--light">Comunidade Terapêutica</p>
          <h1 id="hero-title">
            Toda vida é um <em>tesouro</em> que pode ser restaurado.
          </h1>
          <p className="hero__lead">
            Acolhimento, orientação, espiritualidade e novas oportunidades para
            homens e famílias que buscam um caminho de reconstrução.
          </p>
          <div className="hero__actions">
            <CtaLink href="#contato" variant="light">
              Preciso de orientação
            </CtaLink>
            <CtaLink href="#apoie" variant="secondary">
              Quero ajudar
            </CtaLink>
          </div>
        </div>

        <div className="hero__footer">
          <a href="#quem-somos" className="scroll-cue">
            <ArrowDown size={17} aria-hidden="true" />
            Conheça nossa história
          </a>
          <p>Fé para sustentar. Cuidado para reconstruir.</p>
        </div>
      </div>

      <div className="hero__gem" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
