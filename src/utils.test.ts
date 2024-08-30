import { pad } from "./utils.js";
import { test, expect } from "vitest";

test("pad", () => {
  expect(pad(8)).toBe("08");
});
