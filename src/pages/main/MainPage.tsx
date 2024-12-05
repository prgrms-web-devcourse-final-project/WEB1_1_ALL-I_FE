import { useState } from "react";
import Calendar from "@/components/common/Calendar/Calendar";
import CategoryButtons from "@/components/feature/main/CategoryButtons/CategoryButtons";
import ScheduleList from "@/components/feature/main/ScheduleList/ScheduleList";
import TodoList from "@/components/feature/main/TodoList/TodoList";
import * as Styled from "./MainPage.style";

import { useMainPage } from "@/hooks/useMainPage";
import NewButton from "@/components/common/NewButton/NewButton";
import { filterByDate } from "@/utils/mainPage/filterByDate";
import { MainSchedule } from "@/models/MainSchedule";
import { MainTodo } from "@/models/MainTodo";

function MainPage() {
  const { data, isLoading, error } = useMainPage();
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  if (!data) return null;

  console.log(selectedDate);

  const filteredSchedules = filterByDate(
    data.list.schedules,
    selectedDate
  ) as MainSchedule[];
  const filteredTodos = filterByDate(
    data.list.todos,
    selectedDate
  ) as MainTodo[];

  return (
    <>
      <Calendar
        schedules={data.calendar.schedules}
        todos={data.calendar.todos}
        onDateSelect={setSelectedDate}
      />
      <CategoryButtons />
      <Styled.ListContainer>
        <NewButton label="일정" />
        <ScheduleList schedules={filteredSchedules} />
        <NewButton label="투두" />
        <TodoList todos={filteredTodos} />
      </Styled.ListContainer>
    </>
  );
}

export default MainPage;
