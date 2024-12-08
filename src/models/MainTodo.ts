import { PersonalGroupTodo, PersonalTodo } from "@/types";

export class MainTodo {
  id: string;
  title: string;
  done: boolean;
  date: string;
  startTime: string | null;
  createdAt: string;
  categoryId: string;
  isGroup: boolean;
  groupId: string | undefined;
  color: string | undefined;

  constructor(data: PersonalTodo | PersonalGroupTodo, mainUserId: string) {
    this.id = "personalTodoId" in data ? data.personalTodoId : data.groupTodoId;
    this.title = data.title;
    this.done =
      "personalTodoId" in data
        ? data.done
        : (data.userIdList.find((el) => el.userId === mainUserId)?.done ??
          false);
    this.date = data.date;
    this.startTime = data.startTime || null;
    this.createdAt = data.createdAt;
    this.categoryId = data.categoryId;
    this.isGroup = "groupTodoId" in data;
    this.groupId = "groupId" in data ? data.groupId : undefined;
    this.color = undefined;
  }
}
