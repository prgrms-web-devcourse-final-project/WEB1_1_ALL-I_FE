// 카테고리 생성
export type CreateCategoryRequest = {
  name: string;
  color: string;
};

// 카테고리 수정
export type EditCategoryRequest = {
  categoryId: string;
  name?: string;
  color?: string;
};

// 투두 생성
export interface CreatePersonalTodoRequest {
  title: string;
  date: string;
  startTime: string | null;
  categoryId: string;
}

// 투두 수정
export interface EditPersonalTodoRequest {
  title: string;
  date: string;
  startTime: string | null;
  categoryId: string;
}

// 개인 일정 생성
export interface CreatePersonalScheduleRequest {
  title: string;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
  isAlarmed: boolean;
  categoryId: string;
}

// 개인 일정 수정
export interface EditPersonalScheduleRequest {
  personalEventId: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
  isAlarmed: boolean;
  categoryId: string;
}

// 그룹 투두 생성
export interface CreateGroupTodoRequest {
  title: string;
  date: string;
  startTime: string | null;
  userIdList: string[];
}

// 그룹 투두 수정
export interface EditGroupTodoRequest {
  title: string;
  date: string;
  startTime: string | null;
  userIdList: string[];
}

// 그룹 일정 생성
export interface CreateGroupScheduleRequest {
  title: string;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
  isAlarmed: boolean;
  groupId: string;
  assignedMemberList: string[];
}

// 그룹 일정 수정
export interface EditGroupScheduleRequest {
  groupEventId: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
  isAlarmed: boolean;
  assignedMemberList: string[];
}
