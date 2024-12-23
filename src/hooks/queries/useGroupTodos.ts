import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CreateGroupTodoRequest,
  EditGroupTodoRequest,
} from "@/types/apiRequest.type";
import { getYear, getMonth } from "@/utils/date";
import { createGroupTodo, editGroupTodo } from "@/apis/groupTodos";
import { deleteRequest } from "@/apis/apiService";

// 그룹 투두 생성 query
export const useCreateGroupTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: ({
      groupId,
      todoData,
    }: {
      groupId: string;
      todoData: CreateGroupTodoRequest;
    }) => createGroupTodo({ groupId, todoData }),
    onSuccess: (_, variables) => {
      queryClient.refetchQueries({
        queryKey: [
          "schedules",
          getYear(variables.todoData.date),
          getMonth(variables.todoData.date),
        ],
      });
    },
  });

  return { mutate, isPending, error };
};

// 그룹 투두 수정 query
export const useEditGroupTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: ({
      groupId,
      todoId,
      todoData,
    }: {
      groupId: string;
      todoId: string;
      todoData: EditGroupTodoRequest;
    }) => editGroupTodo({ groupId, todoId, todoData }),
    onSuccess: (_, variables) => {
      queryClient.refetchQueries({
        queryKey: [
          "schedules",
          getYear(variables.todoData.date),
          getMonth(variables.todoData.date),
        ],
      });
    },
  });

  return { mutate, isPending, error };
};

// 그룹 투두 삭제
export const useDeleteGroupTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ groupId, todoId }: { groupId: string; todoId: string }) =>
      deleteRequest(`/group-todos/${groupId}/todos/${todoId}`),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["groupData"] });
    },
  });
};
