export interface PersonalTodo {
  personalTodoId: string;
  title: string;
  done: boolean;
  todoOrder: number;
  date: string;
  startTime: string | null;
  createdAt: string;
  userId: string;
  categoryId: string;
}
