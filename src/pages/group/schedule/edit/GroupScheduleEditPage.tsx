import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import {
  setTodoScheduleForm,
  TodoScheduleFormData,
} from "@/components/form/TodoScheduleForm/utils";
import { useEditGroupSchedule } from "@/hooks/queries/useGroupSchedules";
import { formatDateToYYYYMMDD } from "@/utils/date";

function GroupScheduleEditPage() {
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

    try {
      mutate({
        groupId: "bbbea2e4-3f83-4a63-a69f-309559eb136a",
        scheduleId: "43c59b56-2cbb-4ace-8e0a-ad49e06d08fd",
        scheduleData: {
          groupEventId: "43c59b56-2cbb-4ace-8e0a-ad49e06d08fd",
          title: form.content,
          startDate: formatDateToYYYYMMDD(form.date.start),
          endDate: formatDateToYYYYMMDD(form.date.end),
          startTime: form.toggle.isTimeOn ? `${form.time.start}` : null,
          endTime: form.toggle.isTimeOn ? `${form.time.end}` : null,
          isAlarmed: form.toggle.isAlarmOn,
          assignedMemberList: form.member,
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
      content: "투두 내용",
      startDate: new Date(),
      endDate: new Date(),
      member: ["64b86382-ac6c-4d0d-9a37-9a11ddc96b79"],
      startTime: "17:00",
      endTime: "18:00",
      isTimeOn: true,
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

export default GroupScheduleEditPage;
