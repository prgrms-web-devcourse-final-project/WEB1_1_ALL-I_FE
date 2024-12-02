import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { TodoScheduleFormData } from "@/components/form/TodoScheduleForm/utils";
import { setTodoScheduleForm } from "@/components/form/TodoScheduleForm/utils";

function MainTodoEditPage() {
  const form = useTodoScheduleForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.validateContentAndCategory()) return;
    // Todo 수정 api
  };

  useEffect(() => {
    // 카테고리 목록 가져오는 api
    form.handleCategoryListChange([
      { name: "카테고리1", color: "blue" },
      { name: "카테고리2", color: "red" },
      { name: "카테고리3", color: "black" },
    ]);
  }, []);

  useEffect(() => {
    // 임시 데이터
    const data: TodoScheduleFormData = {
      content: "투두 내용",
      category: { name: "카테고리1", color: "blue" },
      startDate: new Date(),
      startTime: "17:00",
      isTimeOn: true,
    };
    setTodoScheduleForm(form, data);
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
