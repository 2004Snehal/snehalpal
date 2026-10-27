import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

// Used at build time by scripts/prerender.mjs to bake the page into static HTML
export function render(url: string) {
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>
  );
}
