import { MainSchedule } from "@/models/MainSchedule";

/**
 * 1. 끝나는 날짜가 가까운 순서대로 정렬
 * 끝나는 날짜가 같으면
 *  2. 시작 시간 있는 것 우선순위
 * 둘 다 시작 시간 있으면
 *  3. 시작 시간 순서대로 정렬
 *  4. 시작 시간 같으면 끝나는 시간 순서대로 정렬
 * 시작 시간이 없으면
 *  5. 생성일시 순서대로 정렬
 */
export const sortScheduleItems = (schedules: MainSchedule[]) => {
  return schedules.sort((a, b) => {
    if (a.endDate !== b.endDate) {
      return a.endDate.localeCompare(b.endDate);
    }

    if (a.startTime && b.startTime) {
      if (a.startTime.localeCompare(b.startTime) !== 0) {
        return a.startTime.localeCompare(b.startTime);
      }
    }

    if (a.endTime && b.endTime) {
      if (a.endTime.localeCompare(b.endTime) !== 0) {
        return a.endTime.localeCompare(b.endTime);
      }
    }

    if (a.startTime) return -1;
    if (b.startTime) return 1;

    return a.createdAt.localeCompare(b.createdAt);
  });
};
