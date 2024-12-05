import { MainTodo } from "@/models/MainTodo";
import * as Styled from "./TodoItem.styled";
import ListBar from "@/components/common/ListBar/ListBar";
import TextDate from "@/components/common/TextDate/TextDate";
import { useNavigate } from "react-router-dom";
import EditDeleteIcon from "../../EditDeleteIcon/EditDeleteIcon";
import useTodoItem from "@/hooks/useTodoItem";

interface TodoItemProps {
  todo: MainTodo;
}

function TodoItem({ todo }: TodoItemProps) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/main/todo/${todo.id}/edit`);
  };

  const handleDeleteClick = () => {
    // TODO: 삭제 로직 추가
  };

  // 체크박스 로직 수정
  const { isChecked, toggleChecked } = useTodoItem({ isComplete: todo.done });

  return (
    <Styled.TodoItemWrapper>
      <Styled.LeftWrapper>
        <ListBar color={todo.color!} />
        <TextDate values={[todo.date]} />
        <Styled.TodoTitle>{todo.title}</Styled.TodoTitle>
      </Styled.LeftWrapper>
      <Styled.RightWrapper>
        <Styled.CustomCheckbox
          type="checkbox"
          checked={todo.done}
          onChange={toggleChecked}
        />
        <EditDeleteIcon onEdit={handleEditClick} onDelete={handleDeleteClick} />
      </Styled.RightWrapper>
    </Styled.TodoItemWrapper>
  );
}

export default TodoItem;
