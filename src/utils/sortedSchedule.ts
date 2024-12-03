interface Schedule {
  personalEventId: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime?: string | null;
  endTime?: string | null;
  isAlarmed: boolean;
  categoryId: string;
  createdAt: string;
}

/**
 * 스케줄 리스트 정렬 훅
 * - `endDate`가 현재 날짜와 가까운 순서대로 정렬
 * - `startDate`와 `startTime` 기준으로 정렬
 */
function SortedSchedule(schedules: Schedule[]): Schedule[] {
  const currentDate = new Date();

  return schedules.slice().sort((a, b) => {
    const endDateDiffA = new Date(a.endDate).getTime() - currentDate.getTime();
    const endDateDiffB = new Date(b.endDate).getTime() - currentDate.getTime();

    // 1. `endDate` 기준 정렬
    if (endDateDiffA !== endDateDiffB) {
      return endDateDiffA - endDateDiffB;
    }

    // 2. `startDate`와 `startTime` 기준 정렬
    if (a.startDate === b.startDate) {
      if (a.startTime && b.startTime) {
        return a.startTime.localeCompare(b.startTime); // 문자열 시간 비교
      }
      if (a.startTime) return -1; // `a`가 먼저 실행
      if (b.startTime) return 1; // `b`가 먼저 실행
    }

    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export default SortedSchedule;
