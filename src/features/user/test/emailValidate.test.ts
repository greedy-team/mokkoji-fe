import { describe, expect, it, vi } from "vitest";
import { emailValidate } from "../utils/emailValidate"; // 함수가 정의된 파일 경로에 맞게 수정

describe("emailValidate", () => {
  it("should return true for valid email formats", () => {
    const validEmails = [
      "test@example.com",
      "user.name@domain.net",
      "simple@subdomain.co.kr",
    ];

    validEmails.forEach((email) => {
      expect(emailValidate(email)).toBe(true); // 유효한 이메일에 대해서는 true를 반환해야 함
    });
  });

  it("should return false and show an alert for empty email", () => {
    const alertSpy = vi.spyOn(window, "alert"); // alert 호출을 스파이로 추적
    const result = emailValidate(""); // 빈 이메일

    expect(result).toBe(false);
    expect(alertSpy).toHaveBeenCalledWith("이메일을 입력하세요.");
    alertSpy.mockRestore(); // 스파이 복원
  });

  it("should return false and show an alert for invalid email formats", () => {
    const invalidEmails = [
      "plainaddress", // '@'와 도메인 없음
      "user@.com", // 도메인 앞에 점
      "user@domain", // '.' 없는 도메인
      "user@domain,com", // 잘못된 구분자
      "user@domain@domain.com", // '@' 두 개
    ];

    const alertSpy = vi.spyOn(window, "alert"); // alert 호출을 스파이로 추적

    invalidEmails.forEach((email) => {
      const result = emailValidate(email);
      expect(result).toBe(false); // 잘못된 이메일에 대해서는 false를 반환해야 함
      expect(alertSpy).toHaveBeenCalledWith("올바른 이메일 형식을 입력하세요.");
    });

    alertSpy.mockRestore(); // 스파이 복원
  });

  it("should return true for valid email with .co.kr domain", () => {
    const validEmail = "user@domain.co.kr";
    expect(emailValidate(validEmail)).toBe(true); // .co.kr 도메인도 유효해야 함
  });
});
