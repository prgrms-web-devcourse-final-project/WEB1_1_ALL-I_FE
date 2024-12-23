interface Todo {
  groupTodoId: string;
  title: string;
  date: string;
  done: boolean;
  todoOrder: number;
  startTime: string | null;
  categoryId: string;
  createdAt: string;
  groupId: string;
  userIdList: { userId: string; done: boolean }[];
}

/**
 * 투두 리스트 정렬
 * - `done`이 `true`인 항목은 맨 아래로 이동
 * - `startTime`이 있는 항목은 시간 순으로 정렬
 * - `startTime`이 없는 항목은 뒤로 배치
 * - 동일한 조건일 경우 `createdAt` 최신 순서대로 정렬
 */
function SortedGroupTodo(todos: Todo[]): Todo[] {
  return todos.slice().sort((a, b) => {
    // 1. `done` 기준 정렬 (false가 우선)
    if (a.done !== b.done) {
      return a.done ? 1 : -1;
    }

    // 2. `startTime` 기준 정렬
    if (a.startTime && b.startTime) {
      return a.startTime.localeCompare(b.startTime); // 문자열 시간 비교
    }
    if (!a.startTime) return 1; // a가 null이면 b 우선
    if (!b.startTime) return -1; // b가 null이면 a 우선

    // 3. 동일한 조건일 경우 `createdAt` 최신 순서대로 정렬
    return b.createdAt.localeCompare(a.createdAt); // 최신순
  });
}

export default SortedGroupTodo;
