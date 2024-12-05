import ScheduleItem from "@/components/common/ScheduleItem/ScheduleItem";
import PlusButton from "../../common/NewButton/NewButton";
import TodoItem from "@/components/common/TodoItem/TodoItem";
import CategoryButtons from "@/components/feature/main/CategoryButtons/CategoryButtons";
import { useNavigate } from "react-router-dom";
import SortedTodo from "@/utils/sortedTodo";
import SortedSchedule from "@/utils/sortedSchedule";

interface MainListProps {
  schedules: {
    personalEventId: string;
    title: string;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
    isAlarmed: boolean;
    categoryId: string;
    createdAt: string;
  }[];
  todos: {
    personalTodoId: string;
    title: string;
    date: string;
    done: boolean;
    startTime: string | null;
    categoryId: string;
    createdAt: string;
  }[];
  categories: {
    id: string;
    name: string;
    color: string;
  }[];
  onDelete: (type: "todo" | "schedule", id: string) => void;
}

function MainList({ schedules, todos, categories, onDelete }: MainListProps) {
  const navigate = useNavigate();

  // 카테고리 id를 키로 하는 카테고리 데이터 맵
  const categoryMap = categories.reduce(
    (acc, category) => {
      acc[category.id] = category;
      return acc;
    },
    {} as Record<string, { name: string; color: string }>
  );

  // 선택 날짜 데이터 임시 설정 (달력에서 받은 값으로 수정 필요)
  const selectedDate = "2024-12-02";

  // 선택 날짜 필터링 스케줄
  const filteredSchedules = schedules.filter(
    (schedule) =>
      selectedDate >= schedule.startDate && selectedDate <= schedule.endDate
  );

  // 선택 날짜 필터링 투두
  const filteredTodos = todos.filter((todo) => todo.date === selectedDate);

  // 정렬된 일정
  const sortedSchedules = SortedSchedule(filteredSchedules);

  // 정렬된 투두
  const sortedTodos = SortedTodo(filteredTodos);

  return (
    <>
      {/* 카테고리 설정/필터 버튼 */}
      <CategoryButtons />
      {/* 일정 + 버튼*/}
      <PlusButton label="일정" onClick={() => navigate("/main/schedule/new")} />
      {/* 일정 리스트 */}
      {sortedSchedules.map((schedule) => {
        const category = categoryMap[schedule.categoryId];
        return (
          <ScheduleItem
            key={schedule.personalEventId}
            id={schedule.personalEventId}
            title={schedule.title}
            startDate={schedule.startDate}
            endDate={schedule.endDate}
            startTime={schedule.startTime}
            endTime={schedule.endTime}
            isAlarmed={schedule.isAlarmed}
            categoryId={schedule.categoryId}
            color={category?.color || "gray"}
            onDelete={() => onDelete("schedule", schedule.personalEventId)}
          />
        );
      })}
      {/* 투두 생성 버튼 */}
      <PlusButton label="투두" onClick={() => navigate("/main/todo/new")} />
      {/* 투두 리스트 */}
      {sortedTodos.map((todo) => {
        const category = categoryMap[todo.categoryId];
        return (
          <TodoItem
            key={todo.personalTodoId}
            id={todo.personalTodoId}
            title={todo.title}
            date={todo.date}
            startTime={todo.startTime}
            done={todo.done}
            categoryId={todo.categoryId}
            color={category?.color || "gray"}
            onDelete={() => onDelete("todo", todo.personalTodoId)}
          />
        );
      })}
    </>
  );
}

export default MainList;
