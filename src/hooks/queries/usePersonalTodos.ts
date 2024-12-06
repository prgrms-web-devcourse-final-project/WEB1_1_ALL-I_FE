import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  changePersonalTodoState,
  createPersonalTodo,
  deletePersonalTodo,
  editPersonalTodo,
  getPersonalTodos,
} from "@/apis/personalTodos";
import {
  ChangePersonalTodoStateRequest,
  CreatePersonalTodoRequest,
  DeletePersonalTodoRequest,
  EditPersonalTodoRequest,
  GetPersonalTodosRequest,
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

//
// 개인 투두 조회 query
export const usePersonalTodos = ({ date }: GetPersonalTodosRequest) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos", getYear(date), getMonth(date)],
    queryFn: () =>
      getPersonalTodos({
        year: getYear(date),
        month: getMonth(date),
      }),
  });

  return { data, isLoading, error };
};

// 개인 투두 삭제 query
export const useDeletePersonalTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: ({
      todoId,
      data: _,
    }: {
      todoId: string;
      data: DeletePersonalTodoRequest;
    }) => deletePersonalTodo(todoId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [
          "todos",
          getYear(variables.data.date),
          getMonth(variables.data.date),
        ],
      });
    },
  });

  return { mutate, isPending, error };
};

// 개인 투두 상태 변경 query
export const useChangePersonalTodoState = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: ({ todoId, done, date: _ }: ChangePersonalTodoStateRequest) =>
      changePersonalTodoState({ todoId, done }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["todos", getYear(variables.date), getMonth(variables.date)],
      });
    },
  });

  return { mutate, isPending, error };
};
