import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { TodoScheduleFormData } from "@/components/form/TodoScheduleForm/utils";
import { setTodoScheduleForm } from "@/components/form/TodoScheduleForm/utils";
import { useEditPersonalTodo } from "@/hooks/queries/usePersonalTodos";
import { formatDateToYYYYMMDD } from "@/utils/date";
import { useLocation, useNavigate } from "react-router-dom";
import { MainTodo } from "@/models/MainTodo";

function MainTodoEditPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const form = useTodoScheduleForm();

  const { mutate } = useEditPersonalTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // Todo 수정 api
    mutate(
      {
        todoId: form.todoId || "",
        todoData: {
          title: form.content,
          date: formatDateToYYYYMMDD(form.date.start),
          startTime: form.toggle.isTimeOn ? form.time.start : null,
          categoryId: form.categoryId || "",
        },
      },
      {
        onSuccess: () => {
          // console.log("투두 수정 성공");
          navigate("/main");
        },
        onError: (error) => {
          console.error("투두 수정 실패:", error);
        },
      }
    );
  };

  useEffect(() => {
    const todo: MainTodo = location.state?.todo;
    const data: TodoScheduleFormData = {
      todoId: todo.id,
      content: todo.title,
      categoryId: todo.categoryId,
      startDate: new Date(todo.date),
      startTime: todo.startTime || "",
      isTimeOn: !!todo.startTime,
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
