import { PersonalGroupSchedule } from "@/types";

export class MainSchedule {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  isAlarmed: boolean;
  createdAt: string;
  categoryId: string;

  constructor(data: PersonalGroupSchedule) {
    this.id = data.groupEventId;
    this.title = data.title;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.startTime = data.startTime;
    this.endTime = data.endTime;
    this.isAlarmed = data.isAlarmed;
    this.createdAt = data.createdAt;
    this.categoryId = data.categoryId;
  }
}

/**
 * 아이디, 시간, 카테고리 아이디, 날짜
 */
