import { renderHook } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import useCustomParams from "../useCustomParams";
import { describe, expect, it } from "vitest";

/**
 * 테스트에서의 라우팅 컨텍스트
테스트 환경에서는 브라우저가 없으니 <MemoryRouter>가 가상의 라우팅 컨텍스트를 생성합니다.

✅ 작동 기준:

라우터 컴포넌트 내부여야 함
<Routes>와 <Route>를 통해 경로 매칭이 이뤄져야 함
element에 컴포넌트가 실제로 렌더링되어야 함
 * 
 */
describe("useCustomParams", () => {
  it("정상적으로 id 파라미터를 반환해야 한다", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter initialEntries={["/test-id"]}>
        <Routes>
          <Route path="/:id" element={children} />
        </Routes>
      </MemoryRouter>
    );

    const { result } = renderHook(() => useCustomParams(), { wrapper });
    expect(result.current).toBe("test-id");
  });

  it("파라미터가 없으면 오류를 발생시켜야 한다", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={children} />
        </Routes>
      </MemoryRouter>
    );

    const { result } = renderHook(() => useCustomParams(), { wrapper });
    expect(result).toEqual(new Error("파람을 받지 못했습니다!"));
  });
});
