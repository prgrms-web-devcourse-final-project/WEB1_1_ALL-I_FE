import Calendar from "@/components/common/Calendar/Calendar";
import CategoryButtons from "@/components/feature/main/CategoryButtons/CategoryButtons";
import ScheduleList from "@/components/feature/main/ScheduleList/ScheduleList";
import TodoList from "@/components/feature/main/TodoList/TodoList";
import * as Styled from "./MainPage.style";

import { useMainPage } from "@/hooks/useMainPage";
import NewButton from "@/components/common/NewButton/NewButton";

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
      <Styled.ListContainer>
        <NewButton label="일정" />
        <ScheduleList />
        <NewButton label="투두" />
        <TodoList />
      </Styled.ListContainer>
    </>
  );
}

export default MainPage;
