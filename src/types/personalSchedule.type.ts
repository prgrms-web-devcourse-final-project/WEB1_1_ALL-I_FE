export interface PersonalSchedule {
  personalEventId: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
  isAlarmed: boolean;
  createdAt: string;
  categoryId: string;
  userId: string;
}
