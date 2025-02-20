import { getUserInfo, updateUserEmail } from "@/api/user.api";
import { UserInfoType, UserResponseType } from "@/types/userInfoType";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

export const useGetUser = () => {
  return useSuspenseQuery<UserResponseType>({
    queryKey: ["user"],
    queryFn: getUserInfo,
  });
};

export const useUserInfoEdit = (email: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => updateUserEmail(email),

    // ✅ 낙관적 업데이트
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["user"] }); // 기존 요청 중지

      const oldData = queryClient.getQueryData<UserInfoType>(["user"]); // 안전한 타입 적용

      // 캐시 업데이트 (oldData 존재 시만)
      if (oldData) {
        queryClient.setQueryData<UserInfoType>(["user"], {
          ...oldData,
          email,
        });
      }

      return { oldData }; // context로 전달
    },

    // ❌ 요청 실패 시 이전 데이터 복원
    onError: (err: Error, _, context) => {
      console.error("Error Email put:", err.message);
      alert(`이메일 업데이트 실패: ${err.message}`);
      if (context?.oldData) {
        queryClient.setQueryData(["user"], context.oldData); // 안전하게 복원
      }
    },

    // ✅ 성공/실패 후 쿼리 무효화
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
