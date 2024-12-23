import {
  CreatePersonalTodoRequest,
  EditPersonalTodoRequest,
} from "@/types/apiRequest.type";
import {
  deleteRequest,
  getRequest,
  postRequest,
  updateRequest,
} from "./apiService";

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

// 개인 투두 조회 API
// GET /todos/monthly?year={year}&month={month}
export const getPersonalTodos = async ({
  year,
  month,
}: {
  year: string;
  month: string;
}) => {
  try {
    return await getRequest(`/todos/monthly?year=${year}&month=${month}`);
  } catch (error) {
    console.error("투두 조회 실패:", error);
    throw error;
  }
};

// 개인 투두 삭제 API
// DELETE /todos/{todo_id}
export const deletePersonalTodo = async (todoId: string) => {
  try {
    return await deleteRequest(`/todos/${todoId}`);
  } catch (error) {
    console.error("투두 삭제 실패:", error);
    throw error;
  }
};

// 개인 투두 상태 변경(완료 여부) API
// PATCH /todos/{todoId}/state
export const changePersonalTodoState = async ({
  todoId,
  done,
}: {
  todoId: string;
  done: boolean;
}) => {
  try {
    return await updateRequest(`/todos/${todoId}/state`, { state: done });
  } catch (error) {
    console.error("투두 상태 변경 실패:", error);
    throw error;
  }
};

// 개인 특정 달 그룹 투두 조회 API
// GET /group-todos?year={year}&month={month}
export const getPersonalGroupTodos = async ({
  year,
  month,
}: {
  year: string;
  month: string;
}) => {
  try {
    return await getRequest(`/group-todos?year=${year}&month=${month}`);
  } catch (error) {
    console.error("그룹 투두 조회 실패:", error);
    throw error;
  }
};

// 개인의 그룹 투두 상태 변경(완료 여부) API
// PATCH /group-todos/{group_id}/todos/{group_todo_id}/state
export const changePersonalGroupTodoState = async ({
  groupId,
  groupTodoId,
  done,
}: {
  groupId: string;
  groupTodoId: string;
  done: boolean;
}) => {
  try {
    return await updateRequest(
      `/group-todos/${groupId}/todos/${groupTodoId}/state`,
      { state: done }
    );
  } catch (error) {
    console.error("그룹 투두 상태 변경 실패:", error);
    throw error;
  }
};
