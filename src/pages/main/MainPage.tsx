// React
import { useState } from "react";

// Components
import Calendar from "@/components/common/Calendar/Calendar";
import NewButton from "@/components/common/NewButton/NewButton";
import CategoryButtons from "@/components/feature/main/CategoryButtons/CategoryButtons";
import ScheduleList from "@/components/feature/main/ScheduleList/ScheduleList";
import TodoList from "@/components/feature/main/TodoList/TodoList";
import * as Styled from "./MainPage.style";

// Hooks
import { useMainPage } from "@/hooks/useMainPage";

// Utils
import { filterByDate } from "@/utils/mainPage/filterByDate";

// Models
import { MainSchedule } from "@/models/MainSchedule";
import { MainTodo } from "@/models/MainTodo";
import { FormatDate } from "@/utils/format";

function MainPage() {
  const { data, isLoading, error } = useMainPage();
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  if (!data) return null;

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
      <Styled.MiddleContainer>
        <Styled.DateText>{FormatDate(selectedDate)}</Styled.DateText>
        <CategoryButtons />
      </Styled.MiddleContainer>
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
