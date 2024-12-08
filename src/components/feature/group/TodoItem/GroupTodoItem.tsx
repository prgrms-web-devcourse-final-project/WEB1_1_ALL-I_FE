import * as Styled from "./GroupTodoItem.style";
import useTodoItem from "@/hooks/useTodoItem";
import EditDeleteIcon from "@/components/feature/EditDeleteIcon/EditDeleteIcon";
import { useNavigate } from "react-router-dom";
import { FormatTime } from "@/utils/format";
import TextDate from "@/components/common/TextDate/TextDate";
import ListBar from "@/components/common/ListBar/ListBar";
import { useUserNames } from "@/hooks/useUserNames";
import { useDeleteGroupTodo } from "@/hooks/queries/useGroupTodos";

interface TodoItemProps {
  groupTodoId: string; // ID
  title: string; // 투두 제목
  date: string; // 날짜
  startTime: string | null; // 시작 시간
  done: boolean; // 완료 여부
  categoryId: string; // 카테고리 ID
  groupId: string; // 그룹 아이디
  color: string; // 카테고리 색상
  userIdList: { userId: string; done: boolean }[]; // 사용자 목록
}

function GroupTodoItem({
  groupTodoId,
  title,
  date,
  startTime,
  done,
  categoryId,
  groupId,
  color,
  userIdList,
}: TodoItemProps) {
  const { isChecked, toggleChecked } = useTodoItem({ isComplete: done });
  const navigate = useNavigate();
  const userNames = useUserNames(userIdList);
  const { mutate: deleteTodo } = useDeleteGroupTodo();

  // 수정 버튼 핸들러
  const handleEditClick = () => {
    navigate(`/group/${groupId}/todo/${groupTodoId}/edit`, {
      state: {
        groupTodoId,
        title,
        date,
        startTime,
        categoryId,
        groupId,
        userIdList,
      },
    });
  };

  const handleDelete = () => {
    deleteTodo({ groupId, todoId: groupTodoId });
  };

  return (
    <Styled.TodoItemWrapper>
      <Styled.LeftWrapper>
        <ListBar color={color} />
        <TextDate values={[FormatTime(startTime)]} />
        <Styled.TodoTitle>{title}</Styled.TodoTitle>
      </Styled.LeftWrapper>
      <Styled.RightWrapper>
        <Styled.AssignWrapper>
          {userIdList.map((user) => (
            <Styled.AssignPeople key={user.userId} $isMemDone={user.done}>
              {userNames[user.userId]}
            </Styled.AssignPeople>
          ))}
        </Styled.AssignWrapper>
        <Styled.CustomCheckbox
          type="checkbox"
          checked={isChecked}
          onChange={toggleChecked}
          disabled
        />
        {/* 수정/삭제 모달 아이콘 */}
        <EditDeleteIcon onEdit={handleEditClick} onDelete={handleDelete} />
      </Styled.RightWrapper>
    </Styled.TodoItemWrapper>
  );
}

export default GroupTodoItem;
