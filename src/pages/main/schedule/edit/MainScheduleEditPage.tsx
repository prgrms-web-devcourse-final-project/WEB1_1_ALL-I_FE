import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { TodoScheduleFormData } from "@/components/form/TodoScheduleForm/utils";
import { setTodoScheduleForm } from "@/components/form/TodoScheduleForm/utils";
import { useEditPersonalSchedule } from "@/hooks/queries/usePersonalSchedules";
import { formatDateToYYYYMMDD } from "@/utils/date";
import { MainSchedule } from "@/models/MainSchedule";

function MainScheduleEditPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const form = useTodoScheduleForm({
    withEndDate: true,
    withEndTime: true,
  });

  const { mutate } = useEditPersonalSchedule();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;

    mutate(
      {
        scheduleId: form.scheduleId || "",
        scheduleData: {
          personalEventId: form.scheduleId || "",
          title: form.content,
          startDate: formatDateToYYYYMMDD(form.date.start),
          endDate: formatDateToYYYYMMDD(form.date.end),
          startTime: form.toggle.isTimeOn ? form.time.start : null,
          endTime: form.toggle.isTimeOn ? form.time.end : null,
          categoryId: form.categoryId || "",
          isAlarmed: form.toggle.isAlarmOn,
        },
      },
      {
        onSuccess: () => {
          // console.log("스케줄 수정 성공");
          navigate("/main");
        },
        onError: (error) => {
          console.error("스케줄 수정 실패:", error);
        },
      }
    );
  };

  useEffect(() => {
    const schedule: MainSchedule = location.state?.schedule;
    const data: TodoScheduleFormData = {
      scheduleId: schedule.id,
      content: schedule.title,
      categoryId: schedule.categoryId,
      startDate: new Date(schedule.startDate),
      endDate: new Date(schedule.endDate),
      startTime: schedule.startTime || "",
      endTime: schedule.endTime || "",
      isTimeOn: !!schedule.startTime,
      isAlarmOn: schedule.isAlarmed,
    };
    setTodoScheduleForm(form, data);
  }, []);

  return (
    <TodoScheduleForm
      form={form}
      onSubmit={handleSubmit}
      withCategory={true}
      withEndDate={true}
      withEndTime={true}
      withAlarm={true}
      submitButtonText="수정"
    />
  );
}

export default MainScheduleEditPage;
