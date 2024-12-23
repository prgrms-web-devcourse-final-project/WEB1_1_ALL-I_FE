import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { formatDateToYYYYMMDD } from "@/utils/date";
import { useCreatePersonalTodo } from "@/hooks/queries/usePersonalTodos";
import { useNavigate } from "react-router-dom";

function MainTodoNewPage() {
  const navigate = useNavigate();
  const form = useTodoScheduleForm();

  const { mutate } = useCreatePersonalTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // Todo 생성 api
    mutate(
      {
        title: form.content,
        date: formatDateToYYYYMMDD(form.date.start),
        startTime: form.toggle.isTimeOn ? form.time.start : null,
        categoryId: form.categoryId || "",
      },
      {
        onSuccess: () => {
          // console.log("투두 생성 성공");
          navigate("/main");
        },
        onError: (error) => {
          console.error("투두 생성 실패:", error);
        },
      }
    );
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
