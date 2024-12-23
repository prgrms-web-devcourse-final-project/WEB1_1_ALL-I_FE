export interface PersonalGroupTodo {
  groupTodoId: string;
  title: string;
  // 호출한 유저의 완료 여부
  done: boolean;
  todoOrder: number;
  date: string;
  startTime: string | null;
  createdAt: string;
  groupId: string;
  categoryId: string;
  userIdList: {
    userId: string;
    done: boolean;
  }[];
}
