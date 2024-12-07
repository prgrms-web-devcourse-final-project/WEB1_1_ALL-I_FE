import {
  useCreateCategory,
  useDeleteCategory,
  useEditCategory,
  useGetCategories,
} from "./useCategories";

import { useGroups } from "./useGroups";
import {
  useCreateGroupSchedule,
  useEditGroupSchedule,
} from "./useGroupSchedules";
import { useCreateGroupTodo } from "./useGroupTodos";

import {
  useCreatePersonalSchedule,
  useDeletePersonalSchedule,
  useEditPersonalSchedule,
  useGetPersonalSchedules,
} from "./usePersonalSchedules";
import {
  useChangePersonalTodoState,
  useCreatePersonalTodo,
  useDeletePersonalTodo,
  useEditPersonalTodo,
  useGetPersonalTodos,
} from "./usePersonalTodos";

import {
  useChangePersonalGroupTodoState,
  useGetPersonalGroupTodos,
} from "./usePersonalGroupTodos";
import { useGetPersonalGroupSchedules } from "./usePersonalGroupSchedules";

export {
  // Categories
  useCreateCategory,
  useDeleteCategory,
  useEditCategory,
  useGetCategories,

  // Groups
  useGroups,
  useCreateGroupSchedule,
  useEditGroupSchedule,
  useCreateGroupTodo,

  // Personal Items
  useCreatePersonalSchedule,
  useDeletePersonalSchedule,
  useEditPersonalSchedule,
  useGetPersonalSchedules,
  useChangePersonalTodoState,
  useCreatePersonalTodo,
  useDeletePersonalTodo,
  useEditPersonalTodo,
  useGetPersonalTodos,

  // Personal Group Items
  useChangePersonalGroupTodoState,
  useGetPersonalGroupTodos,
  useGetPersonalGroupSchedules,
};
