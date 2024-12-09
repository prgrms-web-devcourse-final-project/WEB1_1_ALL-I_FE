// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
import { sortScheduleItems } from "@/utils/mainPage/sortScheduleItems";
import { sortTodoItems } from "@/utils/mainPage/sortTodoItems";

// Models
import { MainSchedule } from "@/models/MainSchedule";
import { MainTodo } from "@/models/MainTodo";
import { FormatDate } from "@/utils/format";
import { CalendarSchedule } from "@/models/CalendarSchedule";

/**
 * 날짜, 카테고리 필터링 관련 로직 useMainPage로 이동할 지 고민
 */
function MainPage() {
  const navigate = useNavigate();
  const categories = useCategoryStore((state) => state.categories);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [currentYearMonth, setCurrentYearMonth] = useState({
    year: new Date().getFullYear().toString(),
    month: (new Date().getMonth() + 1).toString(),
  });
  const { data, isLoading, error } = useMainPage({
    year: currentYearMonth.year,
    month: currentYearMonth.month,
  });

  // 월 변경 시 해당 월의 1일로 selectedDate 업데이트
  const handleMonthChange = (year: number, month: number) => {
    setCurrentYearMonth({
      year: year.toString(),
      month: month.toString(),
    });
  };

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

  const filteredCalendarSchedules = filterByCategory(
    data.calendar.schedules,
    selectedCategoryIds
  ) as CalendarSchedule[];

  const filteredSchedules = filterSchedules(data.list.schedules);
  const filteredTodos = filterTodos(data.list.todos);

  const sortedSchedules = sortScheduleItems(filteredSchedules);
  const sortedTodos = sortTodoItems(filteredTodos);

  const handleAddPersonalSchedule = () => {
    navigate("/main/schedule/new");
  };
  const handleAddPersonalTodo = () => {
    navigate("/main/todo/new");
  };

  return (
    <>
      <Calendar
        schedules={filteredCalendarSchedules}
        todos={data.calendar.todos}
        onDateSelect={setSelectedDate}
        selectedDate={selectedDate}
        initialDate={`${currentYearMonth.year}-${String(currentYearMonth.month).padStart(2, "0")}-01`}
        onMonthChange={handleMonthChange}
      />
      <Styled.MiddleContainer>
        <Styled.DateText>{FormatDate(selectedDate)}</Styled.DateText>
        <CategoryButtons />
      </Styled.MiddleContainer>
      <Styled.ListContainer>
        <NewButton label="일정" onClick={handleAddPersonalSchedule} />
        <ScheduleList schedules={sortedSchedules} />
        <NewButton label="투두" onClick={handleAddPersonalTodo} />
        <TodoList todos={sortedTodos} />
      </Styled.ListContainer>
    </>
  );
}

export default MainPage;
