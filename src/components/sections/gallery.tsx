import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

const galleryImages = [
  {
    src: "/images/institucional/lapidando-01.jpeg",
    alt: "Participantes exibindo certificados de uma atividade de formação",
    label: "Capacitação",
    className: "gallery-card gallery-card--wide",
    sizes: "(max-width: 640px) 100vw, (max-width: 900px) 100vw, 66vw",
  },
  {
    src: "/images/institucional/lapidando-02.jpeg",
    alt: "Grupo reunido após uma atividade esportiva de artes marciais",
    label: "Disciplina",
    className: "gallery-card",
    sizes: "(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw",
  },
  {
    src: "/images/institucional/lapidando-03.jpeg",
    alt: "Mesa preparada com frutas, pães e bebidas para uma refeição coletiva",
    label: "Cuidado diário",
    className: "gallery-card gallery-card--tall",
    sizes: "(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw",
  },
  {
    src: "/images/institucional/lapidando-06.jpeg",
    alt: "Grupo reunido no espaço comunitário da Lapidando Tesouros",
    label: "Comunidade",
    className: "gallery-card gallery-card--tall",
    sizes: "(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw",
  },
  {
    src: "/images/institucional/lapidando-07.jpeg",
    alt: "Equipe servindo uma refeição aos participantes",
    label: "Convivência",
    className: "gallery-card",
    sizes: "(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw",
  },
  {
    src: "/images/institucional/lapidando-09.jpeg",
    alt: "Participantes organizados para receber alimentos em uma atividade coletiva",
    label: "Partilha",
    className: "gallery-card gallery-card--wide",
    sizes: "(max-width: 640px) 100vw, (max-width: 900px) 100vw, 66vw",
  },
] as const;

export function Gallery() {
  return (
    <section className="section gallery-section" aria-label="Nossa comunidade em imagens">
      <div className="container">
        <SectionHeading
          eyebrow="05 — Nossa comunidade"
          title="Cuidado que acontece todos os dias."
          description="Formação, convivência, esporte e partilha fazem parte de uma rotina construída em comunidade."
        />

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <figure
              className={image.className}
              key={image.src}
              style={{ position: "relative" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={image.sizes}
              />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>

        <p className="gallery-disclaimer">
          Imagens institucionais fornecidas para homologação. A publicação
          externa depende da confirmação das autorizações de uso de imagem.
        </p>
      </div>
    </section>
  );
}
