import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";

function MainTodoNewPage() {
  const form = useTodoScheduleForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.validateContentAndCategory()) return;
    console.log(form.content, form.category, form.startDate, form.startTime);
    // Todo 생성 api
  };

  useEffect(() => {
    // 카테고리 목록 가져오는 api
    form.setCategoryList([
      { name: "카테고리1", color: "blue" },
      { name: "카테고리2", color: "red" },
      { name: "카테고리3", color: "black" },
    ]);
  }, []);

  return (
    <TodoScheduleForm
      form={form}
      onSubmit={handleSubmit}
      submitButtonText="생성"
    />
  );
}

export default MainTodoNewPage;
