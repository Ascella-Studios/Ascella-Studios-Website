// Unit tests for the signup-list allowlist and contact topics.
// Node runs these .ts modules directly (type stripping), no build needed.
import assert from "node:assert/strict";
import { test } from "node:test";
import { isAllowedListId, STUDIO_UPDATES_LIST_ID } from "../src/lib/waitlist.ts";
import { CONTACT_TOPICS, isContactTopic } from "../src/lib/contact.ts";

test("the studio updates list is allowed", () => {
  assert.equal(isAllowedListId(STUDIO_UPDATES_LIST_ID, ""), true);
});

test("unregistered HubSpot lists are rejected", () => {
  assert.equal(isAllowedListId("14", ""), false);
  assert.equal(isAllowedListId("999", ""), false);
});

test("malformed list ids are rejected", () => {
  for (const bad of [undefined, null, 13, "", "13 ", "13;drop", "../13", ["13"]]) {
    assert.equal(isAllowedListId(bad, ""), false, `accepted ${JSON.stringify(bad)}`);
  }
});

test("extra list ids can be registered through WAITLIST_EXTRA_LIST_IDS", () => {
  assert.equal(isAllowedListId("21", "20, 21"), true);
  assert.equal(isAllowedListId("22", "20, 21"), false);
});

test("contact topics accept known keys only", () => {
  for (const key of Object.keys(CONTACT_TOPICS)) assert.equal(isContactTopic(key), true);
  for (const bad of ["", "toString", "__proto__", "Solutions", 1, undefined]) {
    assert.equal(isContactTopic(bad), false, `accepted ${JSON.stringify(bad)}`);
  }
});
