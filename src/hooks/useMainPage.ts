import { useMemo, useEffect } from "react";

import { useCategoryStore } from "@/store/categoryStore";

import { CalendarSchedule } from "@/models/CalendarSchedule";
import { CalendarTodo } from "@/models/CalendarTodo";
import { MainSchedule } from "@/models/MainSchedule";
import { MainTodo } from "@/models/MainTodo";
import {
  Category,
  PersonalSchedule,
  PersonalTodo,
  PersonalGroupSchedule,
  PersonalGroupTodo,
} from "@/types";
import { getCategoryColor } from "@/utils/mainPage/getCategoryColor";

import {
  useGetCategories,
  useGetPersonalSchedules,
  useGetPersonalTodos,
  useGetPersonalGroupSchedules,
  useGetPersonalGroupTodos,
} from "./queries";

/**
 * TODO:
 * 날짜, 카테고리 필터링 로직
 * 여기서 처리하고 보내줄지, 메인페이지 내부에서 처리할지
 */
export function useMainPage({ year, month }: { year: string; month: string }) {
  const setStoredCategories = useCategoryStore((state) => state.setCategories);
  const isInitialized = useCategoryStore((state) => state.isInitialized);
  const setIsInitialized = useCategoryStore((state) => state.setIsInitialized);

  const {
    data: categoriesData,
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useGetCategories();
  const categories = categoriesData?.data ?? [];

  useEffect(() => {
    if (categories.length === 0) return;
    if (!isInitialized) {
      const categoriesWithSelection = categories.map((category: Category) => ({
        ...category,
        isSelected: true,
      }));
      setStoredCategories(categoriesWithSelection);
      setIsInitialized(true);
    }
  }, [categories, isInitialized, setStoredCategories]);

  const categoryColorMap = useMemo(
    () =>
      categories
        ? categories.reduce(
            (acc: Record<string, string>, category: Category) => ({
              ...acc,
              [category.categoryId]: category.color,
            }),
            {}
          )
        : {},
    [categories]
  );

  // const {
  //   data: groups = [],
  //   isLoading: isGroupsLoading,
  //   error: groupsError,
  // } = useGroups();

  const {
    data: personalSchedulesData,
    isLoading: isPersonalSchedulesLoading,
    error: personalSchedulesError,
  } = useGetPersonalSchedules({ year, month });
  const personalSchedules = (personalSchedulesData?.data ??
    []) as PersonalSchedule[];
  const {
    data: personalTodosData,
    isLoading: isPersonalTodosLoading,
    error: personalTodosError,
  } = useGetPersonalTodos({ year, month });
  const personalTodos = (personalTodosData?.data ?? []) as PersonalTodo[];

  const {
    data: personalGroupSchedulesData,
    isLoading: isPersonalGroupSchedulesLoading,
    error: personalGroupSchedulesError,
  } = useGetPersonalGroupSchedules({ year, month });
  const personalGroupSchedules = (personalGroupSchedulesData?.data
    ?.groupEvents ?? []) as PersonalGroupSchedule[];

  const {
    data: personalGroupTodosData,
    isLoading: isPersonalGroupTodosLoading,
    error: personalGroupTodosError,
  } = useGetPersonalGroupTodos({ year, month });
  const personalGroupTodos = (personalGroupTodosData?.data?.groupTodos ??
    []) as PersonalGroupTodo[];

  const schedules = useMemo(
    () => [...personalSchedules, ...personalGroupSchedules],
    [categories, personalSchedules, personalGroupSchedules]
  );
  const todos = useMemo(
    () => [...personalTodos, ...personalGroupTodos],
    [categories, personalTodos, personalGroupTodos]
  );

  const mainUserId =
    personalSchedulesData?.data && personalSchedulesData.data.length > 0
      ? personalSchedulesData.data[0].userId
      : undefined;

  // 달력용 데이터
  const calendarSchedules = useMemo(
    () =>
      schedules.map((schedule) => {
        const calendarSchedule = new CalendarSchedule(schedule);
        calendarSchedule.color = getCategoryColor(
          schedule.categoryId,
          categoryColorMap
        );

        return calendarSchedule;
      }),
    [schedules, categories]
  );

  const calendarTodos = useMemo(
    () => todos.map((todo) => new CalendarTodo(todo)),
    [todos]
  );

  // 리스트용 데이터
  const listSchedules = useMemo(
    () =>
      schedules.map((schedule) => {
        const mainSchedule = new MainSchedule(schedule);
        mainSchedule.color = getCategoryColor(
          schedule.categoryId,
          categoryColorMap
        );

        return mainSchedule;
      }),
    [schedules, categories]
  );
  const listTodos = useMemo(
    () =>
      todos.map((todo) => {
        const mainTodo = new MainTodo(todo, mainUserId);
        mainTodo.color = getCategoryColor(todo.categoryId, categoryColorMap);

        return mainTodo;
      }),
    [todos, categories]
  );

  /**
   * Groups 넘겨줘야하는지 확인
   */
  return {
    data: {
      categories,
      // groups,
      calendar: {
        schedules: calendarSchedules,
        todos: calendarTodos,
      },
      list: {
        schedules: listSchedules,
        todos: listTodos,
      },
    },
    isLoading:
      isCategoriesLoading ||
      // isGroupsLoading ||
      isPersonalSchedulesLoading ||
      isPersonalTodosLoading ||
      isPersonalGroupSchedulesLoading ||
      isPersonalGroupTodosLoading,
    error:
      categoriesError ||
      // groupsError ||
      personalSchedulesError ||
      personalTodosError ||
      personalGroupSchedulesError ||
      personalGroupTodosError,
  };
}

// export const useMainPage = () => {
//   return {
//     data: {
//       categories: [],
//       groups: [],
//       calendar: { schedules: [], todos: [] },
//       list: { schedules: [], todos: [] },
//     },
//     isLoading: false,
//     error: true,
//   };
// };
