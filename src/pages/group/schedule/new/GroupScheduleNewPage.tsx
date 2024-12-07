import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { TodoScheduleFormData } from "@/components/form/TodoScheduleForm/utils";
import { setTodoScheduleForm } from "@/components/form/TodoScheduleForm/utils";
import { useCreateGroupSchedule } from "@/hooks/queries/useGroupSchedules";
import { formatDateToYYYYMMDD } from "@/utils/date";

function GroupScheduleNewPage() {
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
    try {
      mutate({
        groupId: "bbbea2e4-3f83-4a63-a69f-309559eb136a",
        scheduleData: {
          title: form.content,
          startDate: formatDateToYYYYMMDD(form.date.start),
          endDate: formatDateToYYYYMMDD(form.date.end),
          startTime: form.toggle.isTimeOn ? form.time.start : null,
          endTime: form.toggle.isTimeOn ? form.time.end : null,
          isAlarmed: form.toggle.isAlarmOn,
          groupId: "bbbea2e4-3f83-4a63-a69f-309559eb136a",
          assignedMemberList: form.member,
        },
      });
      console.log("스케줄 생성 성공");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // 임시 데이터
    const data: TodoScheduleFormData = {
      groupId: "bbbea2e4-3f83-4a63-a69f-309559eb136a",
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
