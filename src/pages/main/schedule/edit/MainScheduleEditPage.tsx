import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { TodoScheduleFormData } from "@/components/form/TodoScheduleForm/utils";
import { setTodoScheduleForm } from "@/components/form/TodoScheduleForm/utils";
import { useEditPersonalSchedule } from "@/hooks/queries/usePersonalSchedules";
import { formatDateToYYYYMMDD } from "@/utils/date";

function MainScheduleEditPage() {
  const form = useTodoScheduleForm({
    withEndDate: true,
    withEndTime: true,
  });

  const { mutate } = useEditPersonalSchedule();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // 스케줄 수정 api
    try {
      mutate({
        scheduleId: "64b86382-ac6c-4d0d-9a37-9a11ddc96b79",
        scheduleData: {
          personalEventId: "64b86382-ac6c-4d0d-9a37-9a11ddc96b79",
          title: form.content,
          startDate: formatDateToYYYYMMDD(form.date.start),
          endDate: formatDateToYYYYMMDD(form.date.end),
          startTime: form.toggle.isTimeOn ? form.time.start : null,
          endTime: form.toggle.isTimeOn ? form.time.end : null,
          categoryId: form.categoryId || "",
          isAlarmed: form.toggle.isAlarmOn,
        },
      });
      console.log("스케줄 수정 성공");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // 임시 데이터
    const data: TodoScheduleFormData = {
      content: "일정 내용",
      categoryId: "150f63ca-697d-4d3f-b610-304f7a851843",
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      startTime: "17:00",
      endTime: "18:00",
      isTimeOn: true,
      isAlarmOn: true,
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
