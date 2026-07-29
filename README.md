# Lapidando Tesouros

Landing page institucional da Comunidade Terapêutica Lapidando Tesouros,
desenvolvida em Next.js com App Router, React e TypeScript.

## Requisitos

- Node.js 22 LTS
- npm 10 ou superior

## Desenvolvimento

Instale as dependências:

```bash
npm install
```

Inicie o servidor local:

```bash
npm run dev
```

Abra `http://localhost:3000`. Se a porta estiver ocupada, o Next.js informará a
porta alternativa no terminal.

## Verificações

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

O comando `npm run check` executa todas as verificações em sequência. Os testes
usam o runner nativo do Node.js, sem dependências adicionais.

## Configuração

Copie `.env.example` para `.env.local` e informe `NEXT_PUBLIC_SITE_URL` antes de
publicar. Contatos, WhatsApp, Pix e redes sociais ficam centralizados em
`src/content/site.ts` e só devem ser ativados após validação institucional.

## Conteúdo e privacidade

`PRD.md` contém os requisitos e `copy.md` é a base editorial. Não publique
dados sensíveis, fotos sem autorização, números encontrados em diretórios ou
informações bancárias não confirmadas.

O snapshot Aura em `index.html` e `assets/` serve apenas como referência visual
e não faz parte do build Next.js.
