import { ChangePersonalGroupTodoStateRequest } from "@/types/apiRequest.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  changePersonalGroupTodoState,
  getPersonalGroupTodos,
} from "@/apis/personalTodos";
import { getYear, getMonth } from "@/utils/date";

// 개인 그룹 투두 조회 query
export const useGetPersonalGroupTodos = ({
  year,
  month,
}: {
  year: string;
  month: string;
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["personalGroupTodos", year, month],
    queryFn: () =>
      getPersonalGroupTodos({
        year,
        month,
      }),
  });
  return { data, isLoading, error };
};

// 개인 그룹 투두 완료 상태 변경 query
export const useChangePersonalGroupTodoState = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: ({
      groupId,
      groupTodoId,
      done,
      date: _,
    }: ChangePersonalGroupTodoStateRequest) =>
      changePersonalGroupTodoState({ groupId, groupTodoId, done }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [
          "personalGroupTodos",
          getYear(variables.date),
          getMonth(variables.date),
        ],
      });
    },
  });
  return { mutate, isPending, error };
};
