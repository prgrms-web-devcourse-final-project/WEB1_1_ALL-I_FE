import { CalendarTodo } from "@/models/CalendarTodo";
import { CalendarSchedule } from "@/models/CalendarSchedule";

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
}

export function useCalendar(
  schedules: CalendarSchedule[],
  todos: CalendarTodo[]
) {
  // 이벤트 포맷팅
  const events = schedules.map((event): CalendarEvent => {
    const endDate = new Date(event.end);
    endDate.setDate(endDate.getDate() + 1);

    return {
      id: event.id,
      title: event.title,
      start: event.start,
      end: endDate.toISOString().split("T")[0],
      backgroundColor: event.color!,
    };
  });

  // 투두 날짜 Set
  const todoDateSet = new Set(todos.map((todo) => todo.date));

  return {
    events,
    todoDateSet,
  };
}
