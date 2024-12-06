import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { formatDateToYYYYMMDD } from "@/utils/date";
import { useCreatePersonalTodo } from "@/hooks/queries/usePersonalTodos";

function MainTodoNewPage() {
  const form = useTodoScheduleForm();

  const { mutate } = useCreatePersonalTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // Todo 생성 api
    try {
      mutate({
        title: form.content,
        date: formatDateToYYYYMMDD(form.date.start),
        startTime: form.toggle.isTimeOn ? form.time.start : null,
        categoryId: form.categoryId || "",
      });
      console.log("투두 생성 성공");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TodoScheduleForm
      form={form}
      onSubmit={handleSubmit}
      withCategory={true}
      submitButtonText="생성"
    />
  );
}

export default MainTodoNewPage;
