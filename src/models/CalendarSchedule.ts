import {
  PersonalSchedule,
  PersonalGroupSchedule,
  GroupSchedule,
} from "@/types";

export class CalendarSchedule {
  id: string;
  title: string;
  start: string;
  end: string;
  categoryId: string;
  color: string | undefined;

  constructor(event: PersonalSchedule | PersonalGroupSchedule | GroupSchedule) {
    this.id =
      "personalEventId" in event ? event.personalEventId : event.groupEventId;
    this.title = event.title;
    this.start = event.startDate;
    this.end = event.endDate;
    this.categoryId = event.categoryId;
    this.color = undefined;
  }
}
