import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";

function GroupTodoEditPage() {
  const form = useTodoScheduleForm({ withGroup: true });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.validateContentAndCategory()) return;
    console.log(
      form.content,
      form.category,
      form.member,
      form.startDate,
      form.startTime
    );
    // Todo 생성 api
  };

  useEffect(() => {
    // 카테고리 목록 가져오는 api
    form.setCategoryList([
      { name: "카테고리1", color: "blue" },
      { name: "카테고리2", color: "red" },
      { name: "카테고리3", color: "black" },
    ]);
  }, []);

  useEffect(() => {
    // 멤버 목록 가져오는 api
    form.setMemberList([
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
    // 투두 가져오는 api
    form.setContent("투두 내용");
    form.setCategory({ name: "카테고리1", color: "blue" });
    form.setMember([
      { value: "1", label: "이름1", profileImage: "" },
      { value: "2", label: "이름2", profileImage: "" },
    ]);
    form.setStartDate(new Date());
    form.setStartTime("17:00");
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
