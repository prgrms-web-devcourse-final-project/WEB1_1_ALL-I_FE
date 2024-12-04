import * as Styled from "./TodoItem.style";
import useTodoItem from "@/hooks/useTodoItem";
import ListBar from "../ListBar/ListBar";
import EditDeleteIcon from "@/components/feature/EditDeleteIcon/EditDeleteIcon";
import { useNavigate } from "react-router-dom";
import TextDate from "../TextDate/TextDate";
import { FormatTime } from "@/utils/format";

interface TodoItemProps {
  id: string; // ID
  title: string; // 투두 제목
  date: string; // 날짜
  startTime?: string | null; // 시작 시간 (옵션)
  done: boolean; // 완료 여부
  categoryId: string; // 카테고리 ID
  color: string; // 카테고리 색상
  onDelete: (id: string) => void; // 삭제 핸들러
}

function TodoItem({
  id,
  title,
  date,
  startTime,
  done,
  categoryId,
  color,
  onDelete,
}: TodoItemProps) {
  const { isChecked, toggleChecked } = useTodoItem({ isComplete: done });

  const navigate = useNavigate();

  // 수정 버튼 핸들러 (수정 페이지랑 연결되는거 나중에 수정해야함)
  const handleEditClick = () => {
    navigate(`/main/todo/${id}/edit`, {
      state: { id, title, date, startTime, categoryId },
    });
  };

  return (
    <Styled.Wrapper>
      {startTime && <TextDate values={[FormatTime(startTime)]} />}
      <Styled.ExplanContainer>
        <ListBar color={color} />
        <Styled.TodoText isChecked={isChecked}>{title}</Styled.TodoText>
      </Styled.ExplanContainer>
      <Styled.SetContainer>
        <Styled.AssignWrapper>
          {/* 나중에 팀원 목록 쓰는 구간 */}
          {/* <Styled.AssignPeople isMemDone={true}>이가영</Styled.AssignPeople> */}
        </Styled.AssignWrapper>
        {/* 투두 체크 박스 */}
        <Styled.CheckboxCustom
          type="checkbox"
          checked={isChecked}
          onChange={toggleChecked}
        />
        {/* 수정/삭제 모달 아이콘 */}
        <EditDeleteIcon
          onEdit={handleEditClick}
          onDelete={() => onDelete(id)}
        />
      </Styled.SetContainer>
    </Styled.Wrapper>
  );
}

export default TodoItem;
