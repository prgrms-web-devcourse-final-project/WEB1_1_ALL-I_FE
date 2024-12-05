import { MainTodo } from "@/models/MainTodo";
import * as Styled from "./TodoList.style";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  todos: MainTodo[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <Styled.TodoListWrapper>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Styled.TodoListWrapper>
  );
}

export default TodoList;
