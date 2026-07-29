import { ImageResponse } from "next/og";

export const alt = "Lapidando Tesouros — acolhimento, fé e dignidade";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          background: "#102a47",
          color: "#f6f2e9",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4 }}>
          LAPIDANDO TESOUROS
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 880 }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.05 }}>
            Toda vida é um tesouro que pode ser restaurado.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 25, opacity: 0.8 }}>
            Acolhimento, fé e dignidade em Aparecida de Goiânia.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
