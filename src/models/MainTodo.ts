import { PersonalGroupTodo } from "@/types";

export class MainTodo {
  id: string;
  title: string;
  done: boolean;
  date: string;
  startTime: string;
  createdAt: string;
  categoryId: string;

  constructor(data: PersonalGroupTodo) {
    this.id = data.groupTodoId;
    this.title = data.title;
    this.done = data.done;
    this.date = data.date;
    this.startTime = data.startTime;
    this.createdAt = data.createdAt;
    this.categoryId = data.categoryId;
  }
}
