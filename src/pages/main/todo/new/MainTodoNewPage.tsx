import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";

function MainTodoNewPage() {
  const form = useTodoScheduleForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // Todo 생성 api
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

  return (
    <TodoScheduleForm
      form={form}
      onSubmit={handleSubmit}
      submitButtonText="생성"
    />
  );
}

export default MainTodoNewPage;
