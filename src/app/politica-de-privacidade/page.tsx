import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a Lapidando Tesouros protege a sua privacidade nos canais digitais.",
};

export default function PrivacyPage() {
  return (
    <article className="legal-page">
      <div className="container legal-page__inner">
        <p className="eyebrow">Privacidade e cuidado</p>
        <h1>Política de Privacidade</h1>
        <p className="legal-page__updated">Última atualização: 29 de julho de 2026.</p>

        <section>
          <h2>1. Sobre esta página</h2>
          <p>
            Este site apresenta informações institucionais da Comunidade
            Terapêutica Lapidando Tesouros. A página não realiza diagnóstico,
            triagem clínica, cadastro de acolhidos ou atendimento automatizado.
          </p>
        </section>

        <section>
          <h2>2. Dados coletados</h2>
          <p>
            O site não possui formulários e não solicita dados pessoais. Também
            não armazena o conteúdo de conversas iniciadas em aplicativos
            externos, como WhatsApp ou mapas.
          </p>
        </section>

        <section>
          <h2>3. Serviços externos</h2>
          <p>
            Ao acessar um link externo, o visitante passa a estar sujeito aos
            termos e políticas daquele serviço. Antes de compartilhar
            informações, confirme que o canal pertence oficialmente à
            instituição.
          </p>
        </section>

        <section>
          <h2>4. Analytics e cookies</h2>
          <p>
            Nesta versão, não utilizamos pixels de publicidade nem analytics
            que dependam de cookies não essenciais. Qualquer alteração será
            informada nesta política e, quando aplicável, dependerá de
            consentimento.
          </p>
        </section>

        <section>
          <h2>5. Dados sensíveis</h2>
          <p>
            Não envie diagnósticos, histórico de consumo, documentos ou outros
            dados sensíveis por canais cuja autenticidade ainda não tenha sido
            confirmada.
          </p>
        </section>

        <section>
          <h2>6. Atualizações</h2>
          <p>
            Esta política poderá ser atualizada para refletir mudanças no site
            ou nos canais de contato. A data da revisão mais recente será
            indicada no início deste documento.
          </p>
        </section>

        <Link className="button button--primary" href="/">
          Voltar para a página inicial
        </Link>
      </div>
    </article>
  );
}
