import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import {
  setTodoScheduleForm,
  TodoScheduleFormData,
} from "@/components/form/TodoScheduleForm/utils";
import { useEditGroupSchedule } from "@/hooks/queries/useGroupSchedules";
import { formatDateToYYYYMMDD } from "@/utils/date";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function GroupScheduleEditPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const form = useTodoScheduleForm({
    withEndDate: true,
    withEndTime: true,
    withGroup: true,
  });

  const { mutate } = useEditGroupSchedule();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // 스케줄 수정 api
    mutate(
      {
        groupId: form.groupId,
        scheduleId: form.scheduleId || "",
        scheduleData: {
          groupEventId: form.scheduleId || "",
          title: form.content,
          startDate: formatDateToYYYYMMDD(form.date.start),
          endDate: formatDateToYYYYMMDD(form.date.end),
          startTime: form.toggle.isTimeOn ? form.time.start : null,
          endTime: form.toggle.isTimeOn ? form.time.end : null,
          isAlarmed: form.toggle.isAlarmOn,
          assignedMemberList: form.member,
        },
      },
      {
        onSuccess: () => {
          console.log("일정 수정 성공");
          navigate(-1);
        },
        onError: (error) => {
          console.error("일정 수정 실패:", error);
        },
      }
    );
  };

  useEffect(() => {
    const state = location.state;
    const data: TodoScheduleFormData = {
      groupId: state.groupId,
      scheduleId: state.groupEventId,
      content: state.title,
      startDate: new Date(state.startDate),
      endDate: new Date(state.endDate),
      startTime: state.startTime,
      endTime: state.endTime,
      isTimeOn: !!state.startTime,
      isAlarmOn: state.isAlarmed,
      member: state.assignedUserIds,
    };
    setTodoScheduleForm(form, data);
  }, []);

  return (
    <TodoScheduleForm
      form={form}
      withEndDate={true}
      withEndTime={true}
      withGroup={true}
      withAlarm={true}
      onSubmit={handleSubmit}
      submitButtonText="수정"
    />
  );
}

export default GroupScheduleEditPage;
