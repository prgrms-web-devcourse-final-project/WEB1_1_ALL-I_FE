import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { TodoScheduleFormData } from "@/components/form/TodoScheduleForm/utils";
import { setTodoScheduleForm } from "@/components/form/TodoScheduleForm/utils";
import { useCreateGroupSchedule } from "@/hooks/queries/useGroupSchedules";
import { formatDateToYYYYMMDD } from "@/utils/date";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function GroupScheduleNewPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const form = useTodoScheduleForm({
    withEndDate: true,
    withEndTime: true,
    withGroup: true,
  });

  const { mutate } = useCreateGroupSchedule();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // 스케줄 생성 api
    mutate(
      {
        groupId: form.groupId,
        scheduleData: {
          title: form.content,
          startDate: formatDateToYYYYMMDD(form.date.start),
          endDate: formatDateToYYYYMMDD(form.date.end),
          startTime: form.toggle.isTimeOn ? form.time.start : null,
          endTime: form.toggle.isTimeOn ? form.time.end : null,
          isAlarmed: form.toggle.isAlarmOn,
          groupId: form.groupId,
          assignedMemberList: form.member,
        },
      },
      {
        onSuccess: () => {
          // console.log("일정 생성 성공");
          navigate("/group");
        },
        onError: (error) => {
          console.error("일정 생성 실패:", error);
        },
      }
    );
  };

  useEffect(() => {
    const groupId = location.state?.groupId;
    const data: TodoScheduleFormData = {
      groupId,
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
      submitButtonText="생성"
    />
  );
}

export default GroupScheduleNewPage;
