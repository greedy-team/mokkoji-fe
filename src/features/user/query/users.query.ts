import getData from "@/api/getData";
import { UserInfoType, UserResponseType } from "@/types/userInfoType";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { updateData } from "@/api/updateData";

export const useGetUser = () => {
  return useSuspenseQuery<UserResponseType>({
    queryKey: ["users"],
    queryFn: () => getData("/users"),
  });
};

// export const useUserInfoUpdate = () => {
//   return useOptimisticMutation<Pick<UserInfoType, "email">, string>(
//     ["users"],
//     (email) => updateUserEmail(email),
//     (oldData, newEmail) => ({
//       email: newEmail ?? oldData.email,
//     })
//   );
// };

export const useUserInfoEdit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (email: string) => updateData("put", "/users", { email }),

    // ✅ 낙관적 업데이트
    onMutate: async (email) => {
      await queryClient.cancelQueries({ queryKey: ["users"] }); // 기존 요청 중지

      const oldData = queryClient.getQueryData<UserInfoType>(["users"]); // 안전한 타입 적용

      // 캐시 업데이트 (oldData 존재 시만)
      if (oldData) {
        queryClient.setQueryData<UserInfoType>(["users"], {
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
        queryClient.setQueryData(["users"], context.oldData); // 안전하게 복원
      }
    },

    // ✅ 성공/실패 후 쿼리 무효화
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onSuccess: () => {
      alert("이메일 업데이트 성공!");
    },
  });
};
