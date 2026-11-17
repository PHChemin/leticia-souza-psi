// Injeta o HTML da página em dist/index.html depois do build.
// Crawlers (Google, IAs, previews de link) recebem o conteúdo sem executar JS;
// no navegador o React hidrata por cima (src/main.tsx).
import { readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"

const dist = path.resolve("dist")
const ssrDir = path.join(dist, ".ssr")
const htmlPath = path.join(dist, "index.html")

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href)
const template = await readFile(htmlPath, "utf8")

if (!template.includes("<!--app-html-->")) {
  throw new Error("[prerender] marcador <!--app-html--> não encontrado em dist/index.html")
}

const html = template.replace("<!--app-html-->", render())
await writeFile(htmlPath, html)
await rm(ssrDir, { recursive: true, force: true })

console.log(`[prerender] dist/index.html (${(html.length / 1024).toFixed(1)} kB)`)
