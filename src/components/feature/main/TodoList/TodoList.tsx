import { MainTodo } from "@/models/MainTodo";

import * as Styled from "./TodoList.style";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  todos: MainTodo[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <Styled.TodoListWrapper>
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <Styled.EmptyMessage>새로운 투두를 작성해주세요!</Styled.EmptyMessage>
      )}
    </Styled.TodoListWrapper>
  );
}

export default TodoList;
