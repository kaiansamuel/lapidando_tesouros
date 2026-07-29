import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Brand } from "@/components/ui/brand";
import { navigation, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div>
            <Brand inverted />
            <p className="site-footer__statement">
              Acolhendo vidas, fortalecendo famílias e construindo novos caminhos.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Navegação do rodapé">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <div className="footer-seal">
            <Image
              src="/images/logo-lapidando-original.jpeg"
              alt="Logo da Lapidando Tesouros"
              width={94}
              height={68}
              sizes="94px"
            />
            <span>
              {siteConfig.legalName}
              <small>Aparecida de Goiânia — GO</small>
            </span>
          </div>
          <p>© {new Date().getFullYear()} Lapidando Tesouros.</p>
          <a className="back-to-top" href="#inicio">
            Voltar ao topo <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
