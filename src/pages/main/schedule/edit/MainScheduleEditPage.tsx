import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";

function MainScheduleEditPage() {
  const form = useTodoScheduleForm({
    withEndDate: true,
    withEndTime: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.validateContentAndCategory()) return;
    console.log(
      form.content,
      form.category,
      form.startDate,
      form.endDate,
      form.startTime,
      form.endTime,
      form.isAlarmOn
    );
    // 스케줄 생성 api
  };

  useEffect(() => {
    // 카테고리 목록 가져오는 api
    form.setCategoryList([
      { name: "카테고리1", color: "blue" },
      { name: "카테고리2", color: "red" },
      { name: "카테고리3", color: "black" },
    ]);
  }, []);

  useEffect(() => {
    // 일정 내용 가져오는 api
    form.setContent("임의의 내용");
    form.setCategory({ name: "카테고리1", color: "blue" });
    form.setStartDate(new Date());
    form.setEndDate(new Date(new Date().setDate(new Date().getDate() + 1)));
    form.setStartTime("11:00");
    form.setEndTime("14:00");
    form.setIsTimeOn(true);
    form.setIsAlarmOn(true);
  }, []);

  return (
    <TodoScheduleForm
      form={form}
      onSubmit={handleSubmit}
      withEndDate={true}
      withEndTime={true}
      withAlarm={true}
      submitButtonText="수정"
    />
  );
}

export default MainScheduleEditPage;
