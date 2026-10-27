// Bakes the rendered homepage into dist/public/index.html so crawlers that
// don't run JavaScript (most AI answer engines) still see the full content.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "dist/public/index.html");
const { render } = await import(pathToFileURL(path.join(root, "dist/server/entry-server.js")).href);

const html = fs.readFileSync(htmlPath, "utf8");
const appHtml = render("/");
if (!html.includes('<div id="root"></div>')) throw new Error("root placeholder not found in index.html");
fs.writeFileSync(htmlPath, html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));
console.log(`prerendered / (${appHtml.length} chars)`);
