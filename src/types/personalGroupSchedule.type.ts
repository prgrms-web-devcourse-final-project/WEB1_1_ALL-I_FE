export interface PersonalGroupSchedule {
  groupEventId: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
  isAlarmed: boolean;
  createdAt: string;
  groupId: string;
  categoryId: string;
  assignedUserIds: string[];
}
