import { useNavigate } from "react-router-dom";
import NewButton from "@/components/common/NewButton/NewButton";
import GroupScheduleItem from "../ScheduleItem/GroupScheduleItem";
import GroupTodoItem from "../TodoItem/GroupTodoItem";
import SortedGroupSchedule from "@/utils/sortedGroupSchedule";
import SortedGroupTodo from "@/utils/sortedGroup";
import { GroupSchedule, GroupTodo } from "@/types";
import { GroupCategory } from "@/types/category.type";
import * as Styled from "./GroupList.style";

interface MainListProps {
  schedules: GroupSchedule[];
  todos: GroupTodo[];
  category: GroupCategory;
  selectedDate: string;
}

function GroupList({
  schedules,
  todos,
  category,
  selectedDate,
}: MainListProps) {
  const navigate = useNavigate();

  // 선택 날짜 필터링 스케줄
  const filteredSchedules = schedules.filter(
    (schedule) =>
      selectedDate >= schedule.startDate && selectedDate <= schedule.endDate
  );

  // 선택 날짜 필터링 투두
  const filteredTodos = todos.filter((todo) => todo.date === selectedDate);

  // 정렬된 일정
  const sortedSchedules = SortedGroupSchedule(filteredSchedules);

  // 정렬된 투두
  const sortedTodos = SortedGroupTodo(filteredTodos);

  return (
    <Styled.ListContainer>
      {/* 카테고리 설정/필터 버튼 */}

      {/* 일정 + 버튼 */}
      <NewButton
        label="일정"
        onClick={() =>
          navigate(`/group/${category.groupId}/schedule/new`, {
            state: {
              groupId: category.groupId,
              categoryId: category.categoryId,
              color: category.color,
            },
          })
        }
      />
      {/* 일정 리스트 */}
      <Styled.ScheduleListWrapper>
        {sortedSchedules.map((schedule) => (
          <GroupScheduleItem
            key={schedule.groupEventId}
            {...schedule}
            color={category.color || "gray"}
          />
        ))}
      </Styled.ScheduleListWrapper>
      {/* 투두 생성 버튼 */}
      <NewButton
        label="투두"
        onClick={() =>
          navigate(`/group/${category.groupId}/todo/new`, {
            state: {
              groupId: category.groupId,
              categoryId: category.categoryId,
              color: category.color,
            },
          })
        }
      />
      {/* 투두 리스트 */}
      <Styled.TodoListWrapper>
        {sortedTodos.map((todo) => (
          <GroupTodoItem
            key={todo.groupTodoId}
            {...todo}
            color={category.color || "gray"}
          />
        ))}
      </Styled.TodoListWrapper>
    </Styled.ListContainer>
  );
}

export default GroupList;
