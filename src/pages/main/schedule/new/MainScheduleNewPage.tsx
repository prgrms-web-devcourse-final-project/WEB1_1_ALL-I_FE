import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import TodoScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";

function MainScheduleNewPage() {
  const form = useTodoScheduleForm({
    withEndDate: true,
    withEndTime: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.validateContentAndCategory()) return;
    // 스케줄 생성 api
  };

  useEffect(() => {
    // 카테고리 목록 가져오는 api
    form.handleCategoryListChange([
      { name: "카테고리1", color: "blue" },
      { name: "카테고리2", color: "red" },
      { name: "카테고리3", color: "black" },
    ]);
  }, []);

  return (
    <TodoScheduleForm
      form={form}
      onSubmit={handleSubmit}
      withEndDate={true}
      withEndTime={true}
      withAlarm={true}
      submitButtonText="생성"
    />
  );
}

export default MainScheduleNewPage;
