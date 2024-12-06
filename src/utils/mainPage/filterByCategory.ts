import { MainSchedule } from "@/models/MainSchedule";
import { MainTodo } from "@/models/MainTodo";

export const filterByCategory = (
  data: MainSchedule[] | MainTodo[],
  categoryIds: string[]
) => {
  return data.filter((item) => categoryIds.includes(item.categoryId));
};
