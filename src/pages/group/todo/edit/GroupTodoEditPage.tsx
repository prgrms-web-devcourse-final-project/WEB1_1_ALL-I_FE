import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { TodoScheduleFormData } from "@/components/form/TodoScheduleForm/utils";
import { setTodoScheduleForm } from "@/components/form/TodoScheduleForm/utils";
import { useEditGroupTodo } from "@/hooks/queries/useGroupTodos";
import { formatDateToYYYYMMDD } from "@/utils/date";

function GroupTodoEditPage() {
  const form = useTodoScheduleForm({ withGroup: true });

  const { mutate } = useEditGroupTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // Todo 수정 api
    try {
      mutate({
        groupId: "bbbea2e4-3f83-4a63-a69f-309559eb136a",
        todoId: "60277fff-8333-4602-9072-feb2686bb968",
        todoData: {
          title: form.content,
          date: formatDateToYYYYMMDD(form.date.start),
          startTime: form.toggle.isTimeOn ? form.time.start : null,
          userIdList: form.member,
        },
      });
      console.log("스케줄 수정 성공");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // 임시 데이터
    const data: TodoScheduleFormData = {
      content: "투두 내용",
      startDate: new Date(),
      member: ["64b86382-ac6c-4d0d-9a37-9a11ddc96b79"],
      startTime: "17:00",
      isTimeOn: true,
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

export default GroupTodoEditPage;
