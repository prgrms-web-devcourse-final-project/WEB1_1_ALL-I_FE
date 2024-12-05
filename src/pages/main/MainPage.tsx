import Calendar from "@/components/common/Calendar/Calendar";
import CategoryButtons from "@/components/feature/main/CategoryButtons/CategoryButtons";
import ScheduleList from "@/components/common/ScheduleList/ScheduleList";
import TodoList from "@/components/common/TodoList/TodoList";

import { useMainPage } from "@/hooks/useMainPage";

function MainPage() {
  const { data, isLoading, error } = useMainPage();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  if (!data) return null;

  return (
    <>
      <Calendar
        categories={data.categories}
        schedules={data.calendar.schedules}
        todos={data.calendar.todos}
        onDateSelect={() => {}}
      />
      <CategoryButtons />
      <ScheduleList />
      <TodoList />
    </>
  );
}

export default MainPage;
