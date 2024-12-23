import { useNavigate } from "react-router-dom";

import { MainTodo } from "@/models/MainTodo";
import { FormatTime } from "@/utils/format";

import ListBar from "@/components/common/ListBar/ListBar";
import TextDate from "@/components/common/TextDate/TextDate";

import * as Styled from "./TodoItem.styled";
import EditDeleteIcon from "../../EditDeleteIcon/EditDeleteIcon";
import { useDeletePersonalTodo } from "@/hooks/queries/usePersonalTodos";
import { useChangePersonalTodoState } from "@/hooks/queries/usePersonalTodos";
import { useChangePersonalGroupTodoState } from "@/hooks/queries/usePersonalGroupTodos";
interface TodoItemProps {
  todo: MainTodo;
}

function TodoItem({ todo }: TodoItemProps) {
  const navigate = useNavigate();
  const { mutate: deleteTodo } = useDeletePersonalTodo();
  const { mutate: changeTodoState } = useChangePersonalTodoState();
  const { mutate: changeGroupTodoState } = useChangePersonalGroupTodoState();

  const handleEditClick = () => {
    navigate(`/main/todo/${todo.id}/edit`, { state: { todo } });
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
  const handleCheckboxClick = () => {
    if (todo.isGroup) {
      changeGroupTodoState({
        groupId: todo.groupId!,
        groupTodoId: todo.id,
        done: !todo.done,
        date: todo.date,
      });
    } else {
      changeTodoState({
        todoId: todo.id,
        done: !todo.done,
        date: todo.date,
      });
    }
  };

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
          onChange={handleCheckboxClick}
        />
        {!todo.isGroup ? (
          <EditDeleteIcon
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        ) : (
          <div style={{ width: "20px", height: "20px" }}></div>
        )}
      </Styled.RightWrapper>
    </Styled.TodoItemWrapper>
  );
}

export default TodoItem;
