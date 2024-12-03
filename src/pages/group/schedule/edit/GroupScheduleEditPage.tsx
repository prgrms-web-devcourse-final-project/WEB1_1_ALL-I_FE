import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";
import {
  setTodoScheduleForm,
  TodoScheduleFormData,
} from "@/components/form/TodoScheduleForm/utils";

function GroupScheduleEditPage() {
  const form = useTodoScheduleForm({
    withEndDate: true,
    withEndTime: true,
    withGroup: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.handleFormValidation()) return;
    // Todo 생성 api
  };

  useEffect(() => {
    // 카테고리와 멤버 목록을 동시에 업데이트
    form.handleListUpdate({
      categories: [
        { name: "카테고리1", color: "blue" },
        { name: "카테고리2", color: "red" },
        { name: "카테고리3", color: "black" },
      ],
      members: [
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
      ],
    });
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
      endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      startTime: "17:00",
      endTime: "18:00",
      isTimeOn: true,
      isAlarmOn: true,
    };
    setTodoScheduleForm(form, data);
  }, []);

  return (
    <TodoScheduleForm
      form={form}
      withEndDate={true}
      withEndTime={true}
      withGroup={true}
      withAlarm={true}
      onSubmit={handleSubmit}
      submitButtonText="생성"
    />
  );
}

export default GroupScheduleEditPage;
