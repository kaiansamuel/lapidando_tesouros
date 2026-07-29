import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/content/site";
import { isPublicSite, siteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title: {
    default: "Lapidando Tesouros | Acolhimento e reconstrução",
    template: "%s | Lapidando Tesouros",
  },
  description:
    "Acolhimento, orientação e apoio à reinserção social em Aparecida de Goiânia.",
  applicationName: siteConfig.name,
  category: "Institucional",
  keywords: [
    "comunidade terapêutica em Aparecida de Goiânia",
    "acolhimento para homens",
    "apoio para dependência química em Goiás",
    "reinserção social",
    "voluntariado em Aparecida de Goiânia",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    title: "Lapidando Tesouros | Acolhimento e reconstrução",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lapidando Tesouros",
    description: siteConfig.description,
  },
  robots: {
    index: isPublicSite,
    follow: isPublicSite,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102a47",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
