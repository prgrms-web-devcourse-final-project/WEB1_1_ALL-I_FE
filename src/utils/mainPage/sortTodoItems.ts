import { MainTodo } from "@/models/MainTodo";

/**
 * 1. done 상태로 정렬 (done인 항목이 뒤로)
 * 2. 둘 다 시작 시간이 있는 경우
 *  4. 시작 시간 순서대로 정렬
 * 3. 시작 시간 있는 것 우선순위
 * 4. 생성일시 순서대로 정렬
 */
export const sortTodoItems = (todos: MainTodo[]) => {
  return todos.sort((a, b) => {
    // 먼저 done 상태로 정렬 (done인 항목이 뒤로)
    if (a.done !== b.done) {
      return a.done ? 1 : -1;
    }

    // 둘 다 시작 시간이 있는 경우
    if (a.startTime && b.startTime) {
      return a.startTime.localeCompare(b.startTime);
    }

    // 시작 시간이 있는 항목이 앞으로
    if (a.startTime) return -1;
    if (b.startTime) return 1;

    // 나머지는 생성일시 순
    return a.createdAt.localeCompare(b.createdAt);
  });
};
