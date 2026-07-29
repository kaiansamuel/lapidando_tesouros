import { Clock3, MapPin, MessageCircleMore } from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/content/site";

export function Contact() {
  return (
    <section className="section contact-section" id="contato">
      <div className="container contact-grid">
        <div>
          <SectionHeading
            eyebrow="09 — Contato"
            title="O recomeço pode começar com uma conversa."
            description="Se você ou alguém da sua família precisa de orientação, fale com a equipe. Se deseja apoiar, venha fazer parte dessa história."
          />
          <div className="contact-actions">
            {siteConfig.whatsapp ? (
              <CtaLink href={siteConfig.whatsapp} external>
                Conversar no WhatsApp
              </CtaLink>
            ) : (
              <span className="button button--disabled" aria-disabled="true">
                <MessageCircleMore size={18} aria-hidden="true" />
                WhatsApp em validação
              </span>
            )}
            <CtaLink href={siteConfig.mapUrl} variant="secondary" external>
              Abrir localização
            </CtaLink>
          </div>
          <p className="external-note">
            O WhatsApp é um canal externo. Não envie informações clínicas ou
            dados sensíveis antes de confirmar que está falando com o canal
            oficial da instituição.
          </p>
        </div>

        <aside className="contact-card" aria-label="Informações de contato">
          <div>
            <MapPin aria-hidden="true" />
            <span>
              <small>Localização</small>
              Setor Rosa dos Ventos
              <strong>Aparecida de Goiânia — GO</strong>
            </span>
          </div>
          <div>
            <MessageCircleMore aria-hidden="true" />
            <span>
              <small>Atendimento</small>
              Canal oficial em validação
              <strong>Em breve nesta página</strong>
            </span>
          </div>
          <div>
            <Clock3 aria-hidden="true" />
            <span>
              <small>Horário</small>
              Consulte a equipe
              <strong>Informação em validação</strong>
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
