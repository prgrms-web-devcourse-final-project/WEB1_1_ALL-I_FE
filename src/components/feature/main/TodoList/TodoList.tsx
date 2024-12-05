import { MainTodo } from "@/models/MainTodo";
import { Category } from "@/types";
import * as Styled from "./TodoList.style";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  categories: Category[];
  todos: MainTodo[];
}

function TodoList({ categories, todos }: TodoListProps) {
  return (
    <Styled.TodoListWrapper>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Styled.TodoListWrapper>
  );
}

export default TodoList;
