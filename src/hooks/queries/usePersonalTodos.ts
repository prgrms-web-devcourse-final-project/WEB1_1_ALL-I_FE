import { useQuery } from "@tanstack/react-query";
import { getPersonalTodos } from "@/apis/todoAPI";
import { DateRequestParams } from "@/types/todo.types";

// 예시용 특정 달의 투두 조회 query
export const usePersonalTodos = (dateParams: DateRequestParams) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos", dateParams.year, dateParams.month],
    queryFn: () => getPersonalTodos(dateParams),
  });

  return { data, isLoading, error };
};
