import { MainSchedule } from "@/models/MainSchedule";
import { MainTodo } from "@/models/MainTodo";

export const filterByDate = (
  data: MainSchedule[] | MainTodo[],
  date: string
) => {
  return data.filter((item) => {
    // Todo Item
    if ("date" in item && item.date === date) return true;

    // Schedule Item
    if ("startDate" in item && item.startDate === date) return true;
    // endDate가 있는 경우, date가 시작일과 종료일 사이에 있는지 확인
    if ("endDate" in item && item.endDate) {
      return item.startDate <= date && date <= item.endDate;
    }

    return false;
  });
};
