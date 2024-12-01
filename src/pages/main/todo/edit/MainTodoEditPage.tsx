import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";

function MainTodoEditPage() {
  const form = useTodoScheduleForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.validateContentAndCategory()) return;
    console.log(form.content, form.category, form.startDate, form.startTime);
    // Todo 수정 api
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
    form.setStartTime("11:00");
    form.setIsTimeOn(true);
  }, []);

  return (
    <TodoScheduleForm
      form={form}
      onSubmit={handleSubmit}
      submitButtonText="수정"
    />
  );
}

export default MainTodoEditPage;
