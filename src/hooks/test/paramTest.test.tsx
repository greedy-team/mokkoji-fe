import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import useCustomParams from "../useCustomParams";
import { describe, expect, it, vi } from "vitest";

const TestComponent = () => {
  const id = useCustomParams();
  return <div>{id}</div>;
};

describe("useCustomParams", () => {
  it("정상적으로 id 파라미터를 반환해야 한다", () => {
    render(
      <MemoryRouter initialEntries={["/test-id"]}>
        <Routes>
          <Route path="/:id" element={<TestComponent />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("test-id"));
  });

  it("파라미터가 없으면 오류를 발생시켜야 한다", () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() =>
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<TestComponent />} />
          </Routes>
        </MemoryRouter>
      )
    ).toThrowError("파람을 받지 못했습니다!");

    consoleErrorSpy.mockRestore();
  });
});
