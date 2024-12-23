export interface GroupTodo {
  groupTodoId: string;
  title: string;
  date: string;
  done: boolean;
  todoOrder: number;
  startTime: string | null;
  categoryId: string;
  createdAt: string;
  groupId: string;
  userIdList: { userId: string; done: boolean }[];
}
