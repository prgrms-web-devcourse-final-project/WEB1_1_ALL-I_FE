export interface GroupEvent {
  groupEventId: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  isAlarmed: boolean;
  createdAt: string;
  userIds: string[];

  categoryId: string;
}
