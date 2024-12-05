import { PersonalEvent, PersonalGroupEvent, GroupEvent } from "@/types";

export class CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  categoryId: string;

  constructor(event: PersonalEvent | PersonalGroupEvent | GroupEvent) {
    this.id =
      "personalEventId" in event ? event.personalEventId : event.groupEventId;
    this.title = event.title;
    this.start = event.startDate;
    this.end = event.endDate;
    this.categoryId = event.categoryId;
  }
}
