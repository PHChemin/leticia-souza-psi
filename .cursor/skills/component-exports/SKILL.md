---
name: component-exports
description: >-
  Padroniza a exportação de componentes por contexto em src/components e os
  imports nas telas. Usar ao criar, mover ou expor um componente, ao escrever
  imports em App.tsx ou em outras telas, ou quando o usuário falar de barrel,
  index de componentes, arquivo de exportação ou padronizar imports.
---

# Exportação de componentes

Cada contexto em `src/components/` tem um único `index.ts` na raiz da pasta. A tela importa desse arquivo, não do arquivo do componente.

Contextos atuais:

| Contexto | Arquivo | Import na tela |
|---|---|---|
| site | `src/components/site/index.ts` | `@/components/site` |
| ui | `src/components/ui/index.ts` | `@/components/ui` |
| handmade | `src/components/handmade/index.ts` | `@/components/handmade` |
| originkit | `src/components/originkit/index.ts` | `@/components/originkit` |
| animate-ui | `src/components/animate-ui/index.ts` | `@/components/animate-ui` |

Pasta nova em `src/components/<contexto>/` ganha o `index.ts` no mesmo passo do primeiro símbolo público. Não criar `index.ts` por subpasta.

## Ao adicionar ou expor um símbolo

1. Confirme o contexto pelo caminho (`site`, `ui`, `handmade`, `originkit`, `animate-ui`, ou a pasta nova).
2. Exporte o símbolo público no `index.ts` desse contexto, junto dos outros que saem do mesmo módulo. Mantenha os blocos em ordem alfabética pelo caminho do arquivo.
3. Se a tela (ou outro arquivo fora de `src/components/`) passa a usar o símbolo, importe do barrel do contexto.
4. Não deixe o símbolo só no arquivo de origem se ele faz parte da API do contexto.

`verbatimModuleSyntax` está ligado. Tipo sai com `type` no export.

```ts
export { SiteHeader, type SiteNavItem } from "./site-header"
export { default as ClickEffects, type ClickEffectVariant } from "./click-effects"
export { default as GlitchEffect } from "./ui/glitch-text"
```

`export default` vira export nomeado no barrel. O nome é o do componente (`ClickEffects`, `GlitchEffect`), não o do arquivo.

Um símbolo entra uma vez só. `WhatsAppIcon` sai de `whatsapp-cta`, não de novo por `link-icons`. `buttonVariants` de `animate-ui` sai só de `components/buttons/button`.

## Imports

Telas e arquivos de app fora de `src/components/` (`src/App.tsx` e páginas futuras) importam o barrel do contexto. Vários símbolos do mesmo contexto ficam no mesmo import.

```ts
import {
  Body,
  Section,
  SiteHeader,
  WhatsAppCta,
} from "@/components/site"
import { Accordion, AccordionItem } from "@/components/ui"
```

Dentro de `src/components/`, importe o arquivo direto. O barrel não pode ser importado por um módulo que ele reexporta.

```ts
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
```

Componente de um contexto que usa outro contexto também importa o arquivo direto (`site-header` → `@/components/ui/sheet`). O barrel é a porta da tela, não o caminho interno.

## animate-ui

O `index.ts` exporta a camada pronta em `components/` (botões, carrossel, preview card). Não reexporte `primitives/`: os nomes coincidem com a camada pública (`Button`, `LiquidButton`, `FlipButton`, `RippleButton`, `PreviewLinkCard`).

Quem precisa de primitive importa o arquivo:

```ts
import { Slot, type WithAsChild } from "@/components/animate-ui/primitives/animate/slot"
```
