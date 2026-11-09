// Checks the built site against the app catalog. Run `npm run build` first:
// this reads the generated .next output.
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import { apps } from "../src/data/apps.ts";

const root = new URL("..", import.meta.url).pathname;
const prerendered = Object.keys(
  JSON.parse(readFileSync(join(root, ".next/prerender-manifest.json"), "utf8")).routes
);
const sitemap = readFileSync(join(root, ".next/server/app/sitemap.xml.body"), "utf8");

const publicRoutes = ["/", "/apps", "/solutions", "/about", "/contact"];

test("every public page and app case study is prerendered", () => {
  for (const route of [...publicRoutes, ...apps.map((a) => `/apps/${a.id}`)]) {
    assert.ok(prerendered.includes(route), `${route} is not prerendered`);
  }
});

test("the sitemap lists every public page and app case study", () => {
  for (const route of [...publicRoutes.filter((r) => r !== "/"), ...apps.map((a) => `/apps/${a.id}`)]) {
    assert.ok(sitemap.includes(`<loc>https://ascellastudios.com${route}</loc>`), `${route} missing from sitemap`);
  }
});

test("every image an app references exists in public/", () => {
  for (const app of apps) {
    for (const src of [app.icon, app.hero.src, ...(app.gallery ?? []).map((g) => g.src)]) {
      assert.ok(existsSync(join(root, "public", src)), `${app.id}: ${src} not found`);
    }
  }
});

// Internal tool names never appear on public pages (FFT team rule).
const internalNames = /command center|lab nexus|hermes|openclaw|lasso/i;

test("Solutions prices are real, not placeholders", () => {
  const html = readFileSync(join(root, ".next/server/app/solutions.html"), "utf8");
  assert.doesNotMatch(html, />\s*TBD\s*</, "a Solutions price is still TBD");
  assert.match(html, /\$\d/, "no dollar price found on /solutions");
});

test("built pages contain no internal tool names", () => {
  const dir = join(root, ".next/server/app");
  const htmlFiles = readdirSync(dir, { recursive: true }).filter((f) => String(f).endsWith(".html"));
  assert.ok(htmlFiles.length > 0, "no built HTML found; run npm run build first");
  for (const file of htmlFiles) {
    const match = readFileSync(join(dir, file), "utf8").match(internalNames);
    assert.equal(match, null, `${file} mentions "${match?.[0]}"`);
  }
});
