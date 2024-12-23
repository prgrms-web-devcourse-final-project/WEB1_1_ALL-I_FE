import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { setTodoScheduleForm } from "@/components/form/TodoScheduleForm/utils";
import { useEffect } from "react";
import { TodoScheduleFormData } from "@/components/form/TodoScheduleForm/utils";
import { useCreateGroupTodo } from "@/hooks/queries/useGroupTodos";
import { formatDateToYYYYMMDD } from "@/utils/date";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function GroupTodoNewPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const form = useTodoScheduleForm({ withGroup: true });

  const { mutate } = useCreateGroupTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // Todo 생성 api
    mutate(
      {
        groupId: form.groupId,
        todoData: {
          title: form.content,
          date: formatDateToYYYYMMDD(form.date.start),
          startTime: form.toggle.isTimeOn ? form.time.start : null,
          userIdList: form.member,
        },
      },
      {
        onSuccess: () => {
          // console.log("투두 생성 성공");
          navigate("/group");
        },
        onError: (error) => {
          console.error("투두 생성 실패:", error);
        },
      }
    );
  };

  useEffect(() => {
    const groupId = location.state?.groupId;
    const data: TodoScheduleFormData = {
      groupId,
    };
    setTodoScheduleForm(form, data);
  }, []);

  return (
    <TodoScheduleForm
      form={form}
      withGroup={true}
      onSubmit={handleSubmit}
      submitButtonText="생성"
    />
  );
}

export default GroupTodoNewPage;
