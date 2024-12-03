// import CalendarMonth from "@/components/common/Calendar/Calendar";
import { useState } from "react";
import MainList from "@/components/feature/MainList/MainList";
import { PERSONAL_EVENT_DATA } from "@/mocks/PERSONAL_EVENT_DATA";
import { PERSONAL_TODO_DATA } from "@/mocks/PERSONAL_TODO_DATA";

function MainPage() {
  const [todos, setTodos] = useState(PERSONAL_TODO_DATA);
  const [schedules, setSchedules] = useState(PERSONAL_EVENT_DATA);
  const [categories] = useState([
    // 카테고리 임시 데이터
    {
      id: "34a81a0e-f886-43f2-a984-194ba77eab1d",
      name: "카테고리1",
      color: "blue",
    },
    {
      id: "e86193f9-3a85-49fc-9604-10eee8641b5a",
      name: "카테고리2",
      color: "green",
    },
  ]);

  // 공통 삭제 함수 (그냥 화면에서만 보여지는 함수 나중에 삭제 구현해야함 !)
  const handleDelete = (type: "todo" | "schedule", id: string) => {
    if (type === "todo") {
      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.personalTodoId !== id)
      );
    } else if (type === "schedule") {
      setSchedules((prevSchedules) =>
        prevSchedules.filter((schedule) => schedule.personalEventId !== id)
      );
    }
  };

  return (
    <div>
      {/* 달력 수정 필요  */}
      {/* <CalendarMonth /> */}
      <MainList
        schedules={schedules} // 일정 데이터 전달
        todos={todos} // // 카테고리 데이터 전달
        categories={categories} // 카테고리 데이터 전달
        onDelete={handleDelete}
      />
    </div>
  );
}

export default MainPage;
