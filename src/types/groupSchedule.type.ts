export interface GroupSchedule {
  groupEventId: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
  isAlarmed: boolean;
  categoryId: string;
  createdAt: string;
  groupId: string;
  assignedUserIds: string[];
}
