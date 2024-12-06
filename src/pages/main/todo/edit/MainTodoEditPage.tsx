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
        todoId: "29625a03-6e46-438c-86c9-fbebe5d60e51",
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
      categoryId: "150f63ca-697d-4d3f-b610-304f7a851843",
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
