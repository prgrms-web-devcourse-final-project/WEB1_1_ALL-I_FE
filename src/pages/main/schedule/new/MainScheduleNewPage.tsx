import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { useCreatePersonalSchedule } from "@/hooks/queries/usePersonalSchedules";
import { formatDateToYYYYMMDD } from "@/utils/date";

function MainScheduleNewPage() {
  const form = useTodoScheduleForm({
    withEndDate: true,
    withEndTime: true,
  });

  const { mutate } = useCreatePersonalSchedule();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // 스케줄 생성 api
    try {
      mutate({
        title: form.content,
        startDate: formatDateToYYYYMMDD(form.date.start),
        endDate: formatDateToYYYYMMDD(form.date.end),
        startTime: form.toggle.isTimeOn ? form.time.start : null,
        endTime: form.toggle.isTimeOn ? form.time.end : null,
        categoryId: form.categoryId || "",
        isAlarmed: form.toggle.isAlarmOn,
      });
      console.log("스케줄 생성 성공");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TodoScheduleForm
      form={form}
      onSubmit={handleSubmit}
      withCategory={true}
      withEndDate={true}
      withEndTime={true}
      withAlarm={true}
      submitButtonText="생성"
    />
  );
}

export default MainScheduleNewPage;
