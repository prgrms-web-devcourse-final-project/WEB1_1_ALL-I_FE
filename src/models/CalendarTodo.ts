import { PersonalTodo, PersonalGroupTodo } from "@/types";

export class CalendarTodo {
  date: string;

  constructor(todo: PersonalTodo | PersonalGroupTodo) {
    this.date = todo.date;
  }
}
