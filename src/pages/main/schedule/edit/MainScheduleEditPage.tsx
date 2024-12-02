import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { TodoScheduleFormData } from "@/components/form/TodoScheduleForm/utils";
import { setTodoScheduleForm } from "@/components/form/TodoScheduleForm/utils";

function MainScheduleEditPage() {
  const form = useTodoScheduleForm({
    withEndDate: true,
    withEndTime: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // 스케줄 생성 api
  };

  useEffect(() => {
    // 카테고리 목록을 업데이트
    form.handleListUpdate({
      categories: [
        { name: "카테고리1", color: "blue" },
        { name: "카테고리2", color: "red" },
        { name: "카테고리3", color: "black" },
      ],
    });
  }, []);

  useEffect(() => {
    // 임시 데이터
    const data: TodoScheduleFormData = {
      content: "투두 내용",
      category: { name: "카테고리1", color: "blue" },
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
