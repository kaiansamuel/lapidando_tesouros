import Link from "next/link";
import { Gem } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <Gem size={42} strokeWidth={1.4} aria-hidden="true" />
      <p className="eyebrow">Erro 404</p>
      <h1>Este caminho ainda não foi lapidado.</h1>
      <p>A página que você procura não existe ou foi movida.</p>
      <Link className="button button--primary" href="/">
        Voltar ao início
      </Link>
    </section>
  );
}
