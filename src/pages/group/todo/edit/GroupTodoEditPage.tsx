import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { TodoScheduleFormData } from "@/components/form/TodoScheduleForm/utils";
import { setTodoScheduleForm } from "@/components/form/TodoScheduleForm/utils";
import { useEditGroupTodo } from "@/hooks/queries/useGroupTodos";
import { formatDateToYYYYMMDD } from "@/utils/date";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function GroupTodoEditPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const form = useTodoScheduleForm({ withGroup: true });

  const { mutate } = useEditGroupTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // Todo 수정 api
    mutate(
      {
        groupId: form.groupId,
        todoId: form.todoId || "",
        todoData: {
          title: form.content,
          date: formatDateToYYYYMMDD(form.date.start),
          startTime: form.toggle.isTimeOn ? form.time.start : null,
          userIdList: form.member,
        },
      },
      {
        onSuccess: () => {
          console.log("투두 수정 성공");
          navigate(-1);
        },
        onError: (error) => {
          console.error("투두 수정 실패:", error);
        },
      }
    );
  };

  useEffect(() => {
    const state = location.state;
    const data: TodoScheduleFormData = {
      groupId: state.groupId,
      todoId: state.groupTodoId,
      content: state.title,
      startDate: new Date(state.date),
      member: state.userIdList.map(
        (item: { done: boolean; userId: string }) => item.userId
      ),
      startTime: state.startTime,
      isTimeOn: !!state.startTime,
    };
    setTodoScheduleForm(form, data);
  }, []);

  return (
    <TodoScheduleForm
      form={form}
      withGroup={true}
      onSubmit={handleSubmit}
      submitButtonText="수정"
    />
  );
}

export default GroupTodoEditPage;
