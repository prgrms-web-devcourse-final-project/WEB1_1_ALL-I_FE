import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import { TodoScheduleFormData } from "@/components/form/TodoScheduleForm/utils";
import { setTodoScheduleForm } from "@/components/form/TodoScheduleForm/utils";

function GroupTodoEditPage() {
  const form = useTodoScheduleForm({ withGroup: true });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.validateContentAndCategory()) return;
    // Todo 생성 api
  };

  useEffect(() => {
    // 카테고리 목록 가져오는 api
    form.handleCategoryListChange([
      { name: "카테고리1", color: "blue" },
      { name: "카테고리2", color: "red" },
      { name: "카테고리3", color: "black" },
    ]);
  }, []);

  useEffect(() => {
    // 멤버 목록 가져오는 api
    form.handleMemberListChange([
      {
        value: "1",
        label: "이름1",
        profileImage:
          "https://img.freepik.com/premium-photo/sunset-sea-illustration-beautiful-landscape_900706-748.jpg",
      },
      {
        value: "2",
        label: "이름2",
        profileImage:
          "https://img.freepik.com/premium-photo/sunset-sea-illustration-beautiful-landscape_900706-748.jpg",
      },
      {
        value: "3",
        label: "이름3",
        profileImage:
          "https://img.freepik.com/premium-photo/sunset-sea-illustration-beautiful-landscape_900706-748.jpg",
      },
    ]);
  }, []);

  useEffect(() => {
    // 임시 데이터
    const data: TodoScheduleFormData = {
      content: "투두 내용",
      category: { name: "카테고리1", color: "blue" },
      member: [
        { value: "1", label: "이름1", profileImage: "" },
        { value: "2", label: "이름2", profileImage: "" },
      ],
      startDate: new Date(),
      startTime: "17:00",
      isTimeOn: true,
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
