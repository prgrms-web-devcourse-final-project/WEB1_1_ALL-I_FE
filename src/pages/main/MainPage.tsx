import Calendar from "@/components/common/Calendar/Calendar";
import CategoryButtons from "@/components/feature/main/CategoryButtons/CategoryButtons";
import ScheduleList from "@/components/common/ScheduleList/ScheduleList";
import TodoList from "@/components/common/TodoList/TodoList";

function MainPage() {
  return (
    <>
      <Calendar usage="main" onDateSelect={() => {}} />
      <CategoryButtons />
      <ScheduleList />
      <TodoList />
    </>
  );
}

export default MainPage;
