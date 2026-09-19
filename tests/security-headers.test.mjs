// Verifies the launch-readiness security headers survive a real `next build`.
// Run `npm run build` first: this reads the generated .next/routes-manifest.json.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const readJson = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8"));

const manifest = readJson("../.next/routes-manifest.json");
const vercelConfig = readJson("../vercel.json");

// Header rules whose source pattern matches the site root.
const rootRules = manifest.headers.filter((rule) => new RegExp(rule.regex).test("/"));
const rootHeaders = new Map(
  rootRules.flatMap((rule) => rule.headers.map(({ key, value }) => [key.toLowerCase(), value]))
);

test("vercel.json pins the Next.js framework preset", () => {
  assert.equal(vercelConfig.framework, "nextjs");
});

test("/ is served with X-Content-Type-Options: nosniff", () => {
  assert.equal(rootHeaders.get("x-content-type-options"), "nosniff");
});

test("/ is served with an accepted Referrer-Policy", () => {
  assert.ok(
    ["no-referrer", "strict-origin", "strict-origin-when-cross-origin"].includes(
      rootHeaders.get("referrer-policy")
    ),
    `unexpected Referrer-Policy: ${rootHeaders.get("referrer-policy")}`
  );
});

test("/ is protected against clickjacking", () => {
  const frameOptions = rootHeaders.get("x-frame-options");
  const csp = rootHeaders.get("content-security-policy") ?? "";
  assert.ok(
    frameOptions === "DENY" || /frame-ancestors/.test(csp),
    "expected X-Frame-Options: DENY or a CSP frame-ancestors directive"
  );
});
