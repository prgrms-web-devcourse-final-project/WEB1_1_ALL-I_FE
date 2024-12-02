import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import { GroupMember, OptionType } from "@/types/select.types";

export interface TodoScheduleFormData {
  content?: string;
  category?: OptionType | null;
  member?: GroupMember[];
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
  if (data.content) form.handleContentUpdate(data.content);
  if (data.category) form.handleCategoryUpdate(data.category);
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
