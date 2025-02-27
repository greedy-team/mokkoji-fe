import { useMutation, useQueryClient, QueryKey } from "@tanstack/react-query";

/**
 * ✅ 범용 낙관적 업데이트 훅 (개선 버전)
 * @param queryKey - 대상 쿼리 키
 * @param mutationFn - 실행할 뮤테이션 함수
 * @param updater - 캐시 업데이트 로직
 */
export const useOptimisticMutation = <TData, TVariables = void>(
  queryKey: QueryKey,
  queryKey2: QueryKey,
  mutationFn: (variables: TVariables) => Promise<TData>,
  updater: (oldData: TData, variables?: TVariables) => TData
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: queryKey,
    mutationFn,
    retry: 1, // ✅ 네트워크 오류 시 최대 1번 재시도

    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey });

      const oldData = queryClient.getQueryData<TData>(queryKey);
      if (oldData) {
        queryClient.setQueryData<TData>(queryKey, updater(oldData, variables));
      }

      return { oldData };
    },

    onError: (err, _variables, context) => {
      alert("❌ Mutation 실패:");
      console.error("❌ Mutation 실패:", err);
      if (context?.oldData) {
        queryClient.setQueryData(queryKey, context.oldData); // 안전 롤백
      }
    },

    onSettled: (_data, error) => {
      if (error) {
        alert("⚠️ 에러 발생 - 캐시 무효화");
      } else {
        alert("✅ 성공 - 캐시 동기화");
      }
      queryClient.invalidateQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey: queryKey2 });
    },
  });
};
