import { describe, expect, it } from "vitest";
import { generateColor } from "./generateColor"; // 함수가 정의된 파일 경로에 맞게 수정

describe("generateColor", () => {
  it("should generate a consistent color for the same input string", () => {
    const color1 = generateColor("test");
    const color2 = generateColor("test");

    expect(color1).toBe(color2); // 같은 문자열에 대해서는 같은 색상을 반환해야 함
  });

  it("should generate different colors for different input strings", () => {
    const color1 = generateColor("test");
    const color2 = generateColor("example");

    expect(color1).not.toBe(color2); // 다른 문자열에 대해서는 다른 색상을 반환해야 함
  });

  it("should generate a valid HSL color string", () => {
    const color = generateColor("uniqueString");

    // HSL 색상 형식: hsl(hue, saturation, lightness)
    const hslRegex = /^hsl\(\d{1,3}, 70%, 50%\)$/;
    expect(hslRegex.test(color)).toBe(true); // 유효한 HSL 색상 형식인지 확인
  });

  it("should return a color in the range of 0 to 360 for hue", () => {
    const color = generateColor("boundaryTest");

    // 색상의 hue 값이 0에서 360 사이여야 함
    const hue = parseInt(color.match(/^hsl\((\d{1,3}),/)?.[1] || "0", 10);
    expect(hue).toBeGreaterThanOrEqual(0);
    expect(hue).toBeLessThanOrEqual(360);
  });
});
