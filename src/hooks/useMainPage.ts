import { useMemo } from "react";
import {
  useCategories,
  useGroups,
  usePersonalSchedules,
  usePersonalTodos,
  usePersonalGroupSchedules,
  usePersonalGroupTodos,
} from "./queries";
import { CalendarSchedule } from "@/models/CalendarSchedule";
import { CalendarTodo } from "@/models/CalendarTodo";

import {
  Category,
  PersonalSchedule,
  PersonalTodo,
  PersonalGroupSchedule,
  PersonalGroupTodo,
} from "@/types";

/**
 * TODO:
 * 필터링 로직 여기서 처리하고 보내줄지, 메인페이지 내부에서 처리할지
 */
export function useMainPage() {
  const {
    data: categories = [] as Category[],
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useCategories();

  const {
    data: groups = [],
    isLoading: isGroupsLoading,
    error: groupsError,
  } = useGroups();

  const {
    data: personalSchedules = [] as PersonalSchedule[],
    isLoading: isPersonalSchedulesLoading,
    error: personalSchedulesError,
  } = usePersonalSchedules();
  const {
    data: personalTodos = [] as PersonalTodo[],
    isLoading: isPersonalTodosLoading,
    error: personalTodosError,
  } = usePersonalTodos();
  const {
    data: personalGroupSchedules = [] as PersonalGroupSchedule[],
    isLoading: isPersonalGroupSchedulesLoading,
    error: personalGroupSchedulesError,
  } = usePersonalGroupSchedules();
  const {
    data: personalGroupTodos = [] as PersonalGroupTodo[],
    isLoading: isPersonalGroupTodosLoading,
    error: personalGroupTodosError,
  } = usePersonalGroupTodos();

  /**
   * schedules, todos 제거할 것
   */
  const schedules = useMemo(
    () => [...personalSchedules, ...personalGroupSchedules],
    [categories, groups, personalSchedules, personalGroupSchedules]
  );
  const todos = useMemo(
    () => [...personalTodos, ...personalGroupTodos],
    [categories, groups, personalTodos, personalGroupTodos]
  );

  // 달력용 데이터
  const calendarSchedules = useMemo(
    () => schedules.map((schedule) => new CalendarSchedule(schedule)),
    [schedules]
  );
  const calendarTodos = useMemo(
    () => todos.map((todo) => new CalendarTodo(todo)),
    [todos]
  );

  // 리스트용 데이터
  const listSchedules = [];
  const listPersonalTodos = [];
  const listPersonalGroupTodos = [];

  return {
    data: {
      categories,
      groups,
      calendar: {
        schedules: calendarSchedules,
        todos: calendarTodos,
      },
      list: {
        schedules: listSchedules,
        personalTodos: listPersonalTodos,
        personalGroupTodos: listPersonalGroupTodos,
      },
    },
    isLoading:
      isCategoriesLoading ||
      isGroupsLoading ||
      isPersonalSchedulesLoading ||
      isPersonalTodosLoading ||
      isPersonalGroupSchedulesLoading ||
      isPersonalGroupTodosLoading,
    error:
      categoriesError ||
      groupsError ||
      personalSchedulesError ||
      personalTodosError ||
      personalGroupSchedulesError ||
      personalGroupTodosError,
  };
}
