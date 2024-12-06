import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { TodoScheduleFormData } from "@/components/form/TodoScheduleForm/utils";
import { setTodoScheduleForm } from "@/components/form/TodoScheduleForm/utils";
import { useEditPersonalTodo } from "@/hooks/queries/usePersonalTodos";
import { formatDateToYYYYMMDD } from "@/utils/date";

function MainTodoEditPage() {
  const form = useTodoScheduleForm();

  const { mutate } = useEditPersonalTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // Todo 수정 api
    try {
      mutate({
        todoId: "4be521bd-6e48-45c1-8b88-ed8f2812cfa8",
        todoData: {
          title: form.content,
          date: formatDateToYYYYMMDD(form.date.start),
          startTime: form.toggle.isTimeOn ? form.time.start : null,
          categoryId: form.categoryId || "",
        },
      });
      console.log("투두 수정 성공");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const data: TodoScheduleFormData = {
      content: "투두 내용",
      categoryId: "ed4a6d46-98e8-48db-8d4c-b229c66528af",
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
      withCategory={true}
      submitButtonText="수정"
    />
  );
}

export default MainTodoEditPage;
