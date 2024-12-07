import {
  CreateGroupTodoRequest,
  EditGroupTodoRequest,
} from "@/types/apiRequest.type";
import { postRequest, updateRequest } from "./apiService";

// 그룹 투두 생성 API
export const createGroupTodo = async ({
  groupId,
  todoData,
}: {
  groupId: string;
  todoData: CreateGroupTodoRequest;
}) => {
  try {
    return await postRequest(`/group-todos/${groupId}/todo`, todoData);
  } catch (error) {
    console.error("투두 생성 실패:", error);
    throw error;
  }
};

// 그룹 투두 수정 API
export const editGroupTodo = async ({
  groupId,
  todoId,
  todoData,
}: {
  groupId: string;
  todoId: string;
  todoData: EditGroupTodoRequest;
}) => {
  try {
    return await updateRequest(
      `/group-todos/${groupId}/todos/${todoId}/info`,
      todoData
    );
  } catch (error) {
    console.error("투두 수정 실패:", error);
    throw error;
  }
};
