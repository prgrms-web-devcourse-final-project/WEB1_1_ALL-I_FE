import { PersonalGroupSchedule, PersonalSchedule } from "@/types";

export class MainSchedule {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
  isAlarmed: boolean;
  createdAt: string;
  categoryId: string;
  isGroup: boolean;
  color: string | undefined;

  constructor(data: PersonalSchedule | PersonalGroupSchedule) {
    this.id =
      "personalEventId" in data ? data.personalEventId : data.groupEventId;
    this.title = data.title;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.startTime = data.startTime || null;
    this.endTime = data.endTime || null;
    this.isAlarmed = data.isAlarmed;
    this.createdAt = data.createdAt;
    this.categoryId = data.categoryId;
    this.isGroup = "groupEventId" in data;
    this.color = undefined;
  }
}

/**
 * 아이디, 시간, 카테고리 아이디, 날짜
 */
