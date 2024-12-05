import { PersonalTodo, PersonalGroupTodo, GroupTodo } from "@/types";

export class CalendarTodo {
  date: string;

  constructor(todo: PersonalTodo | PersonalGroupTodo | GroupTodo) {
    this.date = todo.date;
  }
}
