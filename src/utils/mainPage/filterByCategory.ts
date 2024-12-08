import { CalendarSchedule } from "@/models/CalendarSchedule";
import { MainSchedule } from "@/models/MainSchedule";
import { MainTodo } from "@/models/MainTodo";

export const filterByCategory = (
  data: MainSchedule[] | MainTodo[] | CalendarSchedule[],
  categoryIds: string[]
) => {
  return data.filter((item) => categoryIds.includes(item.categoryId));
};
