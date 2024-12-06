import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPersonalTodo, editPersonalTodo } from "@/apis/personalTodos";
import {
  CreatePersonalTodoRequest,
  EditPersonalTodoRequest,
} from "@/types/apiRequest.type";
import { getYear, getMonth } from "@/utils/date";

// 개인 투두 생성 query
export const useCreatePersonalTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (todoData: CreatePersonalTodoRequest) =>
      createPersonalTodo(todoData),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["todos", getYear(variables.date), getMonth(variables.date)],
      });
    },
  });

  return { mutate, isPending, error };
};

// 개인 투두 수정 query
export const useEditPersonalTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: ({
      todoId,
      todoData,
    }: {
      todoId: string;
      todoData: EditPersonalTodoRequest;
    }) => editPersonalTodo({ todoId, todoData }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [
          "todos",
          getYear(variables.todoData.date),
          getMonth(variables.todoData.date),
        ],
      });
    },
  });

  return { mutate, isPending, error };
};

// 개인 투두 조회 query
export const usePersonalTodos = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getPersonalTodos(),
  });
};
