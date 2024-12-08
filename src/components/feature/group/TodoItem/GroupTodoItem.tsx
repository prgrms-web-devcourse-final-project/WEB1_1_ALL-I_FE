import * as Styled from "./GroupTodoItem.style";
import useTodoItem from "@/hooks/useTodoItem";
import EditDeleteIcon from "@/components/feature/EditDeleteIcon/EditDeleteIcon";
import { useNavigate } from "react-router-dom";
import { FormatTime } from "@/utils/format";
import TextDate from "@/components/common/TextDate/TextDate";
import ListBar from "@/components/common/ListBar/ListBar";

interface TodoItemProps {
  groupTodoId: string; // ID
  title: string; // 투두 제목
  date: string; // 날짜
  startTime?: string | null; // 시작 시간
  done: boolean; // 완료 여부
  categoryId: string; // 카테고리 ID
  groupId: string; // 그룹 아이디
  color: string; // 카테고리 색상
  onDelete: (id: string) => void; // 삭제 핸들러
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
  onDelete,
  userIdList,
}: TodoItemProps) {
  const { isChecked, toggleChecked } = useTodoItem({ isComplete: done });
  const navigate = useNavigate();

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

  return (
    <Styled.TodoItemWrapper>
      <Styled.LeftWrapper>
        <ListBar color={color} />
        {startTime && <TextDate values={[FormatTime(startTime)]} />}
        <Styled.TodoTitle isChecked={isChecked}>{title}</Styled.TodoTitle>
      </Styled.LeftWrapper>
      <Styled.RightWrapper>
        <Styled.AssignWrapper>
          {/* 사용자 목록 렌더링 */}
          {userIdList.map((user) => (
            <Styled.AssignPeople key={user.userId} isMemDone={user.done}>
              {user.userId}
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
        <EditDeleteIcon
          onEdit={handleEditClick}
          onDelete={() => onDelete(groupTodoId)}
        />
      </Styled.RightWrapper>
    </Styled.TodoItemWrapper>
  );
}

export default GroupTodoItem;
