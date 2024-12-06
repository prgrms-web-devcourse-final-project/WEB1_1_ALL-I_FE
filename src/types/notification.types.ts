export interface PersonalEventResDTO {
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

export interface AlarmResDTO {
  alarmId: string;
  type: "EVENT";
  description: PersonalEventResDTO;
  userId: string;
}
