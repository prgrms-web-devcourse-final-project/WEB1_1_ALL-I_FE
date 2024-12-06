import {
  ChangePersonalGroupTodoStateRequest,
  GetPersonalGroupTodosRequest,
} from "@/types/apiRequest.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  changePersonalGroupTodoState,
  getPersonalGroupTodos,
} from "@/apis/personalTodos";
import { getYear, getMonth } from "@/utils/date";

/**
 * 임시로 더미데이터 사용하고,
 * api 연동시 query 로직이 포함될 예정입니다.
 */

// group id 리스트 받아 온 뒤 모든 그룹의 투두 데이터 받아오기

export const usePersonalGroupTodos = () => {
  return { data: [], isLoading: false, error: null };
};

// 개인 그룹 투두 조회 query
export const useGetPersonalGroupTodos = ({
  date,
}: GetPersonalGroupTodosRequest) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["personalGroupTodos", getYear(date), getMonth(date)],
    queryFn: () =>
      getPersonalGroupTodos({
        year: getYear(date),
        month: getMonth(date),
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
