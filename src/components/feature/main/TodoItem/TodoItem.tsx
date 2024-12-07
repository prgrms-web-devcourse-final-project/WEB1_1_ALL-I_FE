import { useNavigate } from "react-router-dom";

import { MainTodo } from "@/models/MainTodo";
import { FormatTime } from "@/utils/format";

import ListBar from "@/components/common/ListBar/ListBar";
import TextDate from "@/components/common/TextDate/TextDate";

import * as Styled from "./TodoItem.styled";
import EditDeleteIcon from "../../EditDeleteIcon/EditDeleteIcon";
import { useDeletePersonalTodo } from "@/hooks/queries/usePersonalTodos";

interface TodoItemProps {
  todo: MainTodo;
}

function TodoItem({ todo }: TodoItemProps) {
  const navigate = useNavigate();
  const { mutate: deleteTodo } = useDeletePersonalTodo();

  const handleEditClick = () => {
    navigate(`/main/todo/${todo.id}/edit`);
  };

  const handleDeleteClick = () => {
    deleteTodo({
      todoId: todo.id,
      data: {
        date: todo.date,
      },
    });
  };

  // 체크박스 로직 수정

  return (
    <Styled.TodoItemWrapper>
      <Styled.LeftWrapper>
        <ListBar color={todo.color!} />
        <TextDate values={[FormatTime(todo.startTime)]} />
        <Styled.TodoTitle>{todo.title}</Styled.TodoTitle>
      </Styled.LeftWrapper>
      <Styled.RightWrapper>
        <Styled.CustomCheckbox
          type="checkbox"
          checked={todo.done}
          onClick={() => {}}
        />
        {!todo.isGroup && (
          <EditDeleteIcon
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        )}
      </Styled.RightWrapper>
    </Styled.TodoItemWrapper>
  );
}

export default TodoItem;
