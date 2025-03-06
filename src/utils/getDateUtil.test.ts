import { describe, expect, it } from "vitest";
import useDateUtil from "./useDateUtil";

describe("useDateUtil", () => {
  it("should return false when recruitEndDate is undefined", () => {
    expect(useDateUtil(undefined)).toBe(false);
  });

  it("should return true when recruitEndDate is the last day of the year", () => {
    expect(useDateUtil("2025-12-31")).toBe(true);
  });

  it("should return false when recruitEndDate is not the last day of the year", () => {
    expect(useDateUtil("2024-12-30")).toBe(false);
  });
});
