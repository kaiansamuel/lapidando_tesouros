import assert from "node:assert/strict";
import test from "node:test";
import { normalizeSiteUrl } from "./site-url.ts";

test("retorna undefined quando a URL não foi configurada", () => {
  assert.equal(normalizeSiteUrl(undefined), undefined);
  assert.equal(normalizeSiteUrl("  "), undefined);
});

test("normaliza espaços e barras finais", () => {
  assert.equal(
    normalizeSiteUrl(" https://lapidandotesouros.org.br/// "),
    "https://lapidandotesouros.org.br",
  );
});

test("rejeita protocolos que não sejam HTTP", () => {
  assert.throws(
    () => normalizeSiteUrl("ftp://lapidandotesouros.org.br"),
    /deve usar http ou https/,
  );
});
