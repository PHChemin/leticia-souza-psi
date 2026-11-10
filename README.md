# Letícia Souza · One-page

One-page institucional da psicóloga clínica **Letícia Souza** (CRP 06/229667): atendimento online para adolescentes, adultos e idosos.

- **Endereço:** [www.psicologaleticiasouza.com.br](https://www.psicologaleticiasouza.com.br) (a bio de presença, `links.psicologaleticiasouza.com.br`, é o repo [leticia-souza-psi-bio](https://github.com/PHChemin/leticia-souza-psi-bio))
- **Identidade:** lavanda, oliva, terracota, baunilha e ameixa; Lora e Poppins (fontes locais via `@fontsource`). Mesma linguagem visual da bio — ver `docs/ART_DIRECTION.md`.
- Projeto criado a partir do template `react-landpage-template`.

## Pendências

- Textos das nove seções (lista em `docs/PRD.md`).
- Validar com a cliente a versão alpha (animação do símbolo no hero, faixas de cor, fotos escolhidas).
- E-mail e link do artigo.

## Onde mexer

| O quê | Onde |
| --- | --- |
| Textos (provisórios) | `src/content.ts` |
| Estrutura das seções | `src/App.tsx` |
| Links de contato (WhatsApp, Instagram, Lattes) | `src/lib/links.ts` |
| Cores, fontes e animações | `src/styles/main.css` |
| Título, descrição e preview de compartilhamento | `index.html` |
| Imagem de preview (1200×630) | `public/og-image.png` |
| Favicons | `public/favicon.ico`, `public/favicon.svg`, `public/favicon-32.png`, `public/apple-touch-icon.png` |
| Símbolo e peças da animação | `public/logo-mark.png`, `public/grow/` |
| Fotos do ensaio (WebP) | `public/images/` |
| Direção de arte e feedback da cliente | `docs/ART_DIRECTION.md` |

Caminhos de `public/` no código passam por `asset()` (`src/lib/asset.ts`), que respeita o `base` do Vite.

## Domínio

O endereço definitivo é `https://www.psicologaleticiasouza.com.br`, gravado em `public/CNAME` e copiado para `dist/` no build. No DNS do Registro.br, `www` aponta por CNAME para `phchemin.github.io` e o domínio raiz (sem www) usa os registros A do GitHub Pages, para redirecionar ao www. A bio (`links.`) já tem o CNAME próprio e não entra nessa alteração — ver `docs/DEPLOY.md`.

## Material local (não vai para o git)

`identidade/` guarda as pranchas de identidade visual enviadas pela cliente (`4.png` a `8.png`) e, em `identidade/fotos/`, os originais do ensaio (~9 MB cada). Está no `.gitignore` e fica só na máquina.

As fotos do site ficam em `public/images/` em WebP, até 1600 px. Para gerar de novo a partir dos originais:

```bash
for f in identidade/fotos/*.JPG; do
  n=$(basename "$f" .JPG | tr 'A-Z' 'a-z' | tr '_' '-')
  magick "$f" -auto-orient -resize '1600x1600>' -strip -quality 80 "public/images/$n.webp"
done
```

## Stack

| Camada | Escolha |
| --- | --- |
| UI | React 19 + TypeScript |
| Estilo | Tailwind v4 (`@tailwindcss/vite`) + tokens shadcn |
| Motion bank | Magic UI (via shadcn) + Originkit (pré-baixado) + handmade |
| Build | Vite → `dist/` estático |
| Deploy | GitHub Actions → GitHub Pages |

```
código (React, Tailwind, deps)
        │
        ▼  vite build
     dist/  (HTML/CSS/JS prontos)
        │
        ▼  Actions
  GitHub Pages (site no ar)
```

## Começar

```bash
npm install
npm run dev
```

Abra o endereço do terminal (geralmente `http://localhost:5173`).

### Checklist de personalização

1. Preencha `docs/CLIENT_BRIEF.md` e `docs/PRD.md`.
2. Ajuste tokens/cores em `src/styles/main.css`.
3. Troque textos, links e CTAs em `src/App.tsx` (e `index.html` title/description).
4. Coloque logo/fotos em `public/` se precisar.
5. `npm run build` → `npm run preview`.
6. Deploy: `docs/DEPLOY.md`.

Contato só via links (`wa.me`, `mailto:`, redes) — Pages é estático.

## Banco de componentes

Código já versionado no repo (sem fetch no dia a dia do cliente):

| Origem | Pasta | Política |
| --- | --- | --- |
| **Originkit** | `src/components/originkit/` | **Salvar no template** (limite free ~3 fetches/dia) |
| **Magic UI / shadcn** | `src/components/ui/` | Starter set no template; no projeto: `npx shadcn add @magicui/<nome>` |
| **Handmade** | `src/components/handmade/` | Seus efeitos (ex.: `ClickEffects`) |

Detalhes: [`src/components/README.md`](src/components/README.md).

### Adicionar mais componentes

```bash
# Magic UI / shadcn (sem limite diário típico)
npx shadcn@latest add @magicui/<nome>
npx shadcn@latest add button

# Originkit — preferir crescer o banco no template nos dias calmos
npx originkit login
npx originkit add <nome>
```

Config: `components.json` (shadcn + registry `@magicui`) e `originkit.components.json`.

> Não commite a pasta `.originkit/` (login/cache local). Já está no `.gitignore`.

## Docs (humano + IA)

| Arquivo | Uso |
| --- | --- |
| [docs/CLIENT_BRIEF.md](docs/CLIENT_BRIEF.md) | Respostas rápidas do cliente |
| [docs/PRD.md](docs/PRD.md) | Requisitos do projeto |
| [docs/SDD.md](docs/SDD.md) | Decisão técnica / arquitetura |
| [docs/UI_GUIDANCE.md](docs/UI_GUIDANCE.md) | Regras de design |
| [docs/DEPLOY.md](docs/DEPLOY.md) | Pages, Actions e domínio custom |

## Deploy

1. Publique o repo no GitHub (ou use *Use this template*).
2. **Settings → Pages → Source → GitHub Actions**.
3. Push na `main` (workflow `.github/workflows/deploy.yml`).
4. Se CSS/JS quebrarem em `user.github.io/repo/`, descomente `VITE_BASE_PATH` no workflow.
5. Domínio: `docs/DEPLOY.md`.

## Scripts

```bash
npm run dev       # desenvolvimento
npm run build     # gera dist/
npm run preview   # testa o build localmente
```

## Segurança / o que NÃO versionar

- `.env` / secrets / API keys
- `.originkit/` (credenciais/cache do CLI)
- `node_modules/`, `dist/`
- Material bruto de identidade da cliente (SVG, pranchas) — fica só local
