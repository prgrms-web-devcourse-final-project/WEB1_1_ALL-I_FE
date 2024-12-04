import { useMemo } from "react";
import {
  useCategories,
  useGroups,
  usePersonalSchedules,
  usePersonalTodos,
  usePersonalGroupSchedules,
  usePersonalGroupTodos,
} from "./queries";

/**
 * TODO:
 * 필터링 로직 여기서 처리하고 보내줄지, 메인페이지 내부에서 처리할지
 */
export function useMainPage() {
  const {
    data: categories = [],
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useCategories();

  const {
    data: groups = [],
    isLoading: isGroupsLoading,
    error: groupsError,
  } = useGroups();

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

  const schedules = useMemo(
    () => [...personalSchedules, ...personalGroupSchedules],
    [categories, groups, personalSchedules, personalGroupSchedules]
  );
  const todos = useMemo(
    () => [...personalTodos, ...personalGroupTodos],
    [categories, groups, personalTodos, personalGroupTodos]
  );

  return {
    categories,
    groups,
    schedules,
    todos,
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
