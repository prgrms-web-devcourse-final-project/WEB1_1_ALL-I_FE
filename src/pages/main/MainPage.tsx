// React
import { useState } from "react";

// Store
import { useCategoryStore } from "@/store/categoryStore";

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
import { filterByCategory } from "@/utils/mainPage/filterByCategory";
import { filterByDate } from "@/utils/mainPage/filterByDate";

// Models
import { MainSchedule } from "@/models/MainSchedule";
import { MainTodo } from "@/models/MainTodo";
import { FormatDate } from "@/utils/format";

/**
 * 날짜, 카테고리 필터링 관련 로직 useMainPage로 이동할 지 고민
 */
function MainPage() {
  const categories = useCategoryStore((state) => state.categories);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const { data, isLoading, error } = useMainPage();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  if (!data) return null;

  const selectedCategoryIds = categories
    .filter((category) => category.isSelected)
    .map((category) => category.categoryId);

  const filterSchedules = (schedules: MainSchedule[]) => {
    const filterdByCategory = filterByCategory(
      schedules,
      selectedCategoryIds
    ) as MainSchedule[];
    return filterByDate(filterdByCategory, selectedDate) as MainSchedule[];
  };
  const filterTodos = (todos: MainTodo[]) => {
    const filterdByCategory = filterByCategory(
      todos,
      selectedCategoryIds
    ) as MainTodo[];
    return filterByDate(filterdByCategory, selectedDate) as MainTodo[];
  };

  const filteredSchedules = filterSchedules(data.list.schedules);
  const filteredTodos = filterTodos(data.list.todos);

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
