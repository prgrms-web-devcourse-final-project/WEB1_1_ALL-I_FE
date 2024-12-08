import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";

export interface TodoScheduleFormData {
  todoId?: string;
  scheduleId?: string;
  content?: string;
  groupId?: string;
  categoryId?: string | null;
  member?: string[];
  startDate?: Date;
  endDate?: Date;
  startTime?: string;
  endTime?: string;
  isTimeOn?: boolean;
  isAlarmOn?: boolean;
}

export function setTodoScheduleForm(
  form: ReturnType<typeof useTodoScheduleForm>,
  data: TodoScheduleFormData
) {
  if (data.todoId) form.handleTodoIdUpdate(data.todoId);
  if (data.scheduleId) form.handleScheduleIdUpdate(data.scheduleId);
  if (data.content) form.handleContentUpdate(data.content);
  if (data.groupId) form.handleGroupIdUpdate(data.groupId);
  if (data.categoryId) form.handleCategoryUpdate(data.categoryId);
  if (data.member) form.handleMemberUpdate(data.member);
  if (data.startDate || data.endDate) {
    form.handleDateUpdate(
      data.startDate || form.date.start,
      data.endDate || form.date.end
    );
  }
  if (data.startTime || data.endTime) {
    form.handleTimeUpdate(
      data.startTime || form.time.start,
      data.endTime || form.time.end
    );
  }
  if (data.isTimeOn !== undefined)
    form.handleToggleUpdate("time", data.isTimeOn);
  if (data.isAlarmOn !== undefined)
    form.handleToggleUpdate("alarm", data.isAlarmOn);
}
