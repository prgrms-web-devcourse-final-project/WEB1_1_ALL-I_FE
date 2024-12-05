import { useQuery } from "@tanstack/react-query";
import { getPersonalTodos } from "@/apis/todoAPI";
import { DateRequestParams } from "@/types/todo.types";

// 예시용 특정 달의 투두 조회 query
// export const usePersonalTodos = (dateParams: DateRequestParams) => {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["personalTodos", dateParams.year, dateParams.month],
//     queryFn: () => getPersonalTodos(dateParams),
//   });

//   return { data, isLoading, error };
// };

import { PERSONAL_TODO_DATA } from "@/mocks/PERSONAL_TODO_DATA";

export const usePersonalTodos = () => {
  return { data: PERSONAL_TODO_DATA, isLoading: false, error: null };
};
