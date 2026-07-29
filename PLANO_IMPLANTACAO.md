# Plano de Implantação — Lapidando Tesouros

## 1. Objetivo

Implantar a landing page institucional definida no `PRD.md`, usando Next.js com
App Router, com foco em contato qualificado pelo WhatsApp, apoio à instituição,
acessibilidade, desempenho e credibilidade.

O `index.html` e a pasta `assets/` atuais são uma referência visual exportada da
Aura. Eles não serão usados como código-fonte do produto nem publicados como a
versão final.

## 2. Premissas técnicas

- Next.js estável, TypeScript e App Router.
- Conteúdo estático renderizado no servidor, sem banco de dados no MVP.
- Componentes interativos no cliente apenas para menu, FAQ, cópia do Pix e
  eventos de analytics.
- Imagens locais autorizadas usando `next/image`, dimensões responsivas e
  prioridade somente no hero.
- Fontes carregadas por `next/font`.
- Publicação preferencial na Vercel, com domínio próprio e HTTPS.
- Ambiente de prévia separado de produção.

## 3. Dependências do cliente

Antes do desenvolvimento visual, obter e aprovar:

- logo em boa resolução;
- telefone e WhatsApp oficiais;
- endereço, horário e localização no mapa;
- CNPJ e dados institucionais;
- regras de acolhimento que podem ser divulgadas;
- Pix, titular e instruções oficiais de doação;
- redes sociais oficiais;
- fotos do Pastor Gil, sede e atividades;
- autorizações de uso das imagens;
- domínio desejado;
- responsável pela aprovação final.

Dados não confirmados devem permanecer ocultos ou receber uma alternativa
neutra, como contato pelo WhatsApp.

## 4. Fases de execução

### Fase 1 — Validação institucional (2 a 4 dias)

1. Revisar `copy.md` com o responsável da instituição.
2. Conferir contatos, endereço, CNPJ, parcerias e formas de doação.
3. Validar direitos de uso de fotos e logotipos.
4. Aprovar mapa de seções, CTAs e mensagens do WhatsApp.

**Marco de aceite:** conteúdo sensível e canais oficiais aprovados por escrito.

### Fase 2 — Fundação técnica (1 a 2 dias)

1. Criar a aplicação Next.js com TypeScript.
2. Configurar scripts de desenvolvimento, lint, build e testes.
3. Organizar `src/app`, `src/components`, `src/content` e `public/images`.
4. Criar tokens de cores, tipografia, espaçamento e breakpoints.
5. Configurar layout raiz, página inicial, política de privacidade e página 404.

**Marco de aceite:** aplicação abre localmente, passa no lint e gera build.

### Fase 3 — Implementação do MVP (5 a 8 dias)

Construir, nesta ordem:

1. cabeçalho e menu móvel;
2. hero e CTAs;
3. quem somos, missão e pilares;
4. fluxo de acolhimento;
5. história e reconhecimento;
6. doação, voluntariado e parceria;
7. FAQ;
8. contato, mapa, rodapé e botão de WhatsApp.

Cada seção deve ser validada em celular antes de avançar. A referência Aura
orientará composição e ritmo visual, sem reutilizar marca, imagens ou código.

**Marco de aceite:** todos os requisitos funcionais obrigatórios do PRD estão
presentes e navegáveis.

### Fase 4 — Refinamento, SEO e integrações (2 a 4 dias)

1. Adicionar movimentos leves com suporte a `prefers-reduced-motion`.
2. Configurar título, descrição, canonical, Open Graph e favicon.
3. Criar `robots.ts`, `sitemap.ts` e dados estruturados validados.
4. Configurar links seguros para WhatsApp, mapas e redes sociais.
5. Publicar a política de privacidade.
6. Ativar analytics somente após aprovação de privacidade e consentimento
   aplicável.
7. Registrar eventos dos principais CTAs sem coletar dados sensíveis.

**Marco de aceite:** compartilhamento social, rastreamento aprovado e SEO
técnico conferidos no ambiente de prévia.

### Fase 5 — Qualidade e homologação (2 a 3 dias)

Executar:

- lint, testes e build de produção;
- navegação por teclado e leitor de tela;
- contraste, foco visível e hierarquia de títulos;
- testes em 360, 390, 768, 1024 e 1440 pixels;
- Chrome, Firefox, Safari e Edge;
- validação de todos os telefones, CTAs, Pix, mapa e links externos;
- auditoria Lighthouse e Core Web Vitals;
- revisão de linguagem, LGPD e exposição de pessoas vulneráveis.

Metas mínimas:

- zero erro de build, console ou link quebrado;
- Lighthouse SEO igual ou superior a 95;
- acessibilidade e boas práticas iguais ou superiores a 90;
- layout sem rolagem horizontal;
- WhatsApp acessível em até dois cliques.

**Marco de aceite:** homologação formal do responsável da instituição.

### Fase 6 — Publicação (1 dia)

1. Conectar o repositório ao provedor de hospedagem.
2. Criar o projeto de produção e revisar variáveis de ambiente.
3. Publicar primeiro em URL de prévia.
4. Fazer o teste final de fumaça.
5. Configurar domínio, DNS, HTTPS e redirecionamento para o domínio principal.
6. Publicar a versão aprovada e registrar a versão para rollback.
7. Confirmar indexação, sitemap, imagem social e eventos de conversão.

**Marco de aceite:** site disponível no domínio oficial, com HTTPS e contatos
funcionando.

### Fase 7 — Pós-lançamento (primeiros 30 dias)

- Monitorar disponibilidade, erros, Core Web Vitals e cliques nos CTAs.
- Conferir o funcionamento do WhatsApp semanalmente.
- Corrigir problemas críticos em até um dia útil.
- Revisar métricas após 7 e 30 dias.
- Manter uma rotina mensal para conferir contatos, Pix, parcerias e conteúdo.

## 5. Estratégia de versionamento e publicação

- Criar uma branch por entrega, por exemplo `feat/hero` ou `fix/whatsapp-link`.
- Exigir revisão e prévia visual antes de integrar à branch principal.
- Usar commits curtos, como `feat: add orientation flow`.
- A branch principal representa produção.
- Tags de lançamento seguem `v1.0.0`, `v1.0.1` e assim por diante.
- Rollback será feito promovendo a última implantação validada.

## 6. Riscos e respostas

| Risco | Resposta |
|---|---|
| Contato ou Pix incorreto | Publicar apenas após validação formal |
| Fotos sem autorização | Bloquear a publicação da imagem |
| Cópia excessiva da Aura | Usar somente princípios visuais, com design autoral |
| Hero lento | Converter imagens, definir `sizes` e controlar o LCP |
| Analytics incompatível com LGPD | Manter desativado até aprovação |
| Conteúdo com promessa indevida | Revisão institucional antes da homologação |
| Domínio ou DNS atrasado | Homologar pela URL de prévia e agendar a virada |

## 7. Cronograma estimado

| Etapa | Duração |
|---|---:|
| Validação institucional | 2–4 dias |
| Fundação técnica | 1–2 dias |
| Implementação do MVP | 5–8 dias |
| Refinamento e integrações | 2–4 dias |
| Qualidade e homologação | 2–3 dias |
| Publicação | 1 dia |
| **Total estimado** | **13–22 dias úteis** |

O prazo começa após o recebimento dos dados essenciais. Atrasos de aprovação,
fotos, domínio ou informações de doação deslocam a data de publicação.

## 8. Definition of Done

A implantação estará concluída quando:

- o conteúdo e os dados oficiais estiverem aprovados;
- todos os requisitos obrigatórios do PRD estiverem implementados;
- imagens tiverem autorização e texto alternativo;
- testes, lint e build passarem;
- metas mínimas de qualidade forem atingidas;
- privacidade, SEO e analytics estiverem revisados;
- o cliente homologar a prévia;
- o site estiver publicado no domínio oficial com HTTPS;
- monitoramento e procedimento de rollback estiverem documentados.
