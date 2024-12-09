import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { useCreatePersonalSchedule } from "@/hooks/queries/usePersonalSchedules";
import { formatDateToYYYYMMDD } from "@/utils/date";
import { useNavigate } from "react-router-dom";
function MainScheduleNewPage() {
  const navigate = useNavigate();

  const form = useTodoScheduleForm({
    withEndDate: true,
    withEndTime: true,
  });

  const { mutate } = useCreatePersonalSchedule();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // 스케줄 생성 api
    mutate(
      {
        title: form.content,
        startDate: formatDateToYYYYMMDD(form.date.start),
        endDate: formatDateToYYYYMMDD(form.date.end),
        startTime: form.toggle.isTimeOn ? form.time.start : null,
        endTime: form.toggle.isTimeOn ? form.time.end : null,
        categoryId: form.categoryId || "",
        isAlarmed: form.toggle.isAlarmOn,
      },
      {
        onSuccess: () => {
          // console.log("일정 생성 성공");
          navigate("/main");
        },
        onError: (error) => {
          console.error("일정 생성 실패:", error);
        },
      }
    );
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
