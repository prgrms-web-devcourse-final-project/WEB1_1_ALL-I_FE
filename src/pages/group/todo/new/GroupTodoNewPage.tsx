import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { setTodoScheduleForm } from "@/components/form/TodoScheduleForm/utils";
import { useEffect } from "react";
import { TodoScheduleFormData } from "@/components/form/TodoScheduleForm/utils";
import { useCreateGroupTodo } from "@/hooks/queries/useGroupTodos";
import { formatDateToYYYYMMDD } from "@/utils/date";

function GroupTodoNewPage() {
  const form = useTodoScheduleForm({ withGroup: true });

  const { mutate } = useCreateGroupTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // Todo 생성 api
    try {
      mutate({
        groupId: "bbbea2e4-3f83-4a63-a69f-309559eb136a",
        todoData: {
          title: form.content,
          date: formatDateToYYYYMMDD(form.date.start),
          startTime: form.toggle.isTimeOn ? form.time.start : null,
          userIdList: form.member,
        },
      });
      console.log("투두 생성 성공");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // 임시 데이터
    const data: TodoScheduleFormData = {
      groupId: "bbbea2e4-3f83-4a63-a69f-309559eb136a",
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
