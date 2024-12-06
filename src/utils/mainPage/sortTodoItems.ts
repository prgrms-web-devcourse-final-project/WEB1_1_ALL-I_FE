import { MainTodo } from "@/models/MainTodo";

export const sortTodoItems = (todos: MainTodo[]) => {
  return [...todos].sort((a, b) => {
    // 먼저 done 상태로 정렬 (done인 항목이 뒤로)
    if (a.done !== b.done) {
      return a.done ? 1 : -1;
    }

    // 둘 다 시작 시간이 있는 경우
    if (a.startTime && b.startTime) {
      // 날짜가 다르면 날짜순
      if (a.date !== b.date) {
        return a.date.localeCompare(b.date);
      }
      // 날짜가 같으면 시간순
      return a.startTime.localeCompare(b.startTime);
    }

    // 시작 시간이 있는 항목이 앞으로
    if (a.startTime || b.startTime) {
      return a.startTime ? -1 : 1;
    }

    // 나머지는 생성일시 순
    return a.createdAt.localeCompare(b.createdAt);
  });
};
