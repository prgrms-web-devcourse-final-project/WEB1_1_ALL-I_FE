import {
  CreatePersonalTodoRequest,
  EditPersonalTodoRequest,
} from "@/types/apiRequest.type";
import { postRequest, updateRequest } from "./apiService";

// 개인 투두 생성 API
export const createPersonalTodo = async (
  todoData: CreatePersonalTodoRequest
) => {
  try {
    return await postRequest("/todos", todoData);
  } catch (error) {
    console.error("투두 생성 실패:", error);
    throw error;
  }
};

// 개인 투두 수정 API
export const editPersonalTodo = async ({
  todoId,
  todoData,
}: {
  todoId: string;
  todoData: EditPersonalTodoRequest;
}) => {
  try {
    return await updateRequest(`/todos/${todoId}/update`, todoData);
  } catch (error) {
    console.error("투두 수정 실패:", error);
    throw error;
  }
};
