import { useMemo } from "react";
import {
  useCategories,
  useGroups,
  usePersonalSchedules,
  usePersonalTodos,
  usePersonalGroupSchedules,
  usePersonalGroupTodos,
  useGroupSchedules,
  useGroupTodos,
} from "./queries";

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
}

const DEFAULT_COLOR = "#000000";

export function useCalendar(usage: "main" | "group") {
  const {
    data: categories = [],
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useCategories();
  const {
    data: groups = [],
    // isLoading: isGroupsLoading,
    // error: groupsError,
  } = useGroups();

  // main page 데이터
  const {
    data: personalSchedules = [],
    isLoading: isPersonalSchedulesLoading,
    error: personalSchedulesError,
  } = usePersonalSchedules();
  const {
    data: personalTodos = [],
    isLoading: isPersonalTodosLoading,
    error: personalTodosError,
  } = usePersonalTodos();
  const {
    data: personalGroupSchedules = [],
    isLoading: isPersonalGroupSchedulesLoading,
    error: personalGroupSchedulesError,
  } = usePersonalGroupSchedules();
  const {
    data: personalGroupTodos = [],
    isLoading: isPersonalGroupTodosLoading,
    error: personalGroupTodosError,
  } = usePersonalGroupTodos();

  // group page 데이터
  const {
    data: groupSchedules = [],
    isLoading: isGroupSchedulesLoading,
    error: groupSchedulesError,
  } = useGroupSchedules();
  const {
    data: groupTodos = [],
    isLoading: isGroupTodosLoading,
    error: groupTodosError,
  } = useGroupTodos();

  // 캘린더 데이터 계산
  const calendarData = useMemo(
    () => ({
      categories,
      events:
        usage === "main"
          ? [...personalSchedules, ...personalGroupSchedules]
          : groupSchedules,
      todos:
        usage === "main"
          ? [...personalTodos, ...personalGroupTodos]
          : groupTodos,
    }),
    [
      categories,
      groups,
      usage,
      personalSchedules,
      personalGroupSchedules,
      groupSchedules,
      personalTodos,
      personalGroupTodos,
      groupTodos,
    ]
  );

  // 이벤트 포맷팅
  const events = useMemo(
    () =>
      calendarData.events.map((event): CalendarEvent => {
        const endDate = new Date(event.endDate);
        endDate.setDate(endDate.getDate() + 1);

        return {
          id: event.personalEventId,
          title: event.title,
          start: event.startDate,
          end: endDate.toISOString().split("T")[0],
          backgroundColor:
            calendarData.categories.find(
              (category) => category.id === event.categoryId
            )?.color || DEFAULT_COLOR,
        };
      }),
    [calendarData.events, calendarData.categories, groups]
  );

  // 투두 날짜 Set
  const todoDateSet = useMemo(
    () => new Set(calendarData.todos.map((todo) => todo.date)),
    [calendarData.todos, calendarData.categories, groups]
  );

  return {
    events,
    todoDateSet,
    isLoading:
      isCategoriesLoading ||
      isPersonalSchedulesLoading ||
      isPersonalTodosLoading ||
      isPersonalGroupSchedulesLoading ||
      isPersonalGroupTodosLoading ||
      isGroupSchedulesLoading ||
      isGroupTodosLoading,
    error:
      categoriesError ||
      personalSchedulesError ||
      personalTodosError ||
      personalGroupSchedulesError ||
      personalGroupTodosError ||
      groupSchedulesError ||
      groupTodosError,
  };
}
