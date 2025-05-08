import getData from "@/api/getData";
import { UserInfoType, UserResponseType } from "@/types/userInfoType";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import sendData from "@/api/sendData";
import { toast } from "react-toastify";

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
    mutationFn: (email: string) => sendData("put", "/users", { email }),

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

    // ✅ 성공/실패 후 쿼리 무효화
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onSuccess: () => {
      toast("이메일 업데이트 성공!");
    },
  });
};
