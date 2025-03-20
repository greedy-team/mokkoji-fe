import { describe, expect, it } from "vitest";
import { convertLinks } from "../utils/covertLinks";
/**
 *
 * 단일 URL 변환: 하나의 URL을 포함한 텍스트를 테스트.
 * 여러 URL 변환: 여러 URL이 포함된 텍스트에 대한 변환 테스트.
 * URL이 없는 경우: URL이 없는 경우 원본 텍스트를 그대로 반환하는지 확인.
 * 빈 문자열 처리: 빈 문자열을 입력했을 때 제대로 처리되는지 확인.
 *
 */

describe("convertLinks", () => {
  it("should convert a single URL into a link", () => {
    const input = "Check this website: https://example.com";
    const expected =
      'Check this website: <a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a>';
    expect(convertLinks(input)).toBe(expected);
  });

  it("should convert multiple URLs into links", () => {
    const input = "Visit https://example.com and https://anotherexample.com";
    const expected =
      'Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a> and <a href="https://anotherexample.com" target="_blank" rel="noopener noreferrer">https://anotherexample.com</a>';
    expect(convertLinks(input)).toBe(expected);
  });

  it("should not modify text without URLs", () => {
    const input = "This is just some text without any links.";
    const expected = "This is just some text without any links.";
    expect(convertLinks(input)).toBe(expected);
  });

  it("should handle empty input", () => {
    const input = "";
    const expected = "";
    expect(convertLinks(input)).toBe(expected);
  });
});
