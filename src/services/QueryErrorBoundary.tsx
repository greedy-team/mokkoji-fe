import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ReactNode } from "react";
import {ErrorBoundary} from "react-error-boundary";

export default function QueryErrorBoundary({
  children,
}: {
  children: ReactNode;
}) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div style={{ textAlign: "center" }}>
          <h2>⚠️ 오류 발생!</h2>
          <p>{error.message}</p>
          <button onClick={resetErrorBoundary}>다시 시도</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
