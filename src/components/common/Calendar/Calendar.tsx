import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { DateClickArg } from "@fullcalendar/interaction";
import interactionPlugin from "@fullcalendar/interaction";

import * as Styled from "./Calendar.style";

import {
  useCategories,
  useMainSchedules,
  useGroupSchedules,
  useMainTodos,
  useGroupTodos,
} from "@/hooks/queries";

import { PERSONAL_EVENT_DATA } from "@/mocks/PERSONAL_EVENT_DATA";
import { PERSONAL_TODO_DATA } from "@/mocks/PERSONAL_TODO_DATA";

const CATEGORY_COLOR = {
  "1": "#ffe1fd",
  "2": "#ffe3e1",
  "3": "#fff0e1",
  "4": "#fbffe1",
  "5": "#ebffe1",
  "6": "#e1e1ff",
  "7": "#e1edff",
  "8": "#e1fbff",
  "9": "#e8e8e8",
};

/**
 * TODO:
 * 카테고리 로직 나오면 해당 카테고리 색상 사용하도록 변경
 *
 * 페이지 작업 시 임시로 감싼 div 제거
 * 홈페이지에서 삭제
 */
interface CalendarProps {
  usage: "main" | "group";
  onDateSelect: (date: Date) => void;
}

function Calendar({ usage, onDateSelect }: CalendarProps) {
  const handleDateClick = (arg: DateClickArg) => {
    onDateSelect(arg.date);
  };

  let calendarData: {
    events: [];
    todos: [];
    categories: [];
  };

  if (usage === "main") {
    const { data: mainSchedules } = useMainSchedules();
    events = mainSchedules;
  } else if (usage === "group") {
    const { data: groupSchedules } = useGroupSchedules();
    events = groupSchedules;
  }

  // 일정 map 함수
  const events = PERSONAL_EVENT_DATA.map((event) => {
    // 시간 없을 때 마지막 날짜 포함 안되는 문제 해결
    const endDate = new Date(event.endDate);
    endDate.setDate(endDate.getDate() + 1);

    const formattedEvent = {
      id: event.personalEventId,
      title: event.title,
      start: event.startDate,
      end: endDate.toISOString().split("T")[0],
      // 카테고리 로직 나오면 해당 카테고리 색상 사용하도록 변경
      backgroundColor:
        CATEGORY_COLOR[event.categoryId as keyof typeof CATEGORY_COLOR],
    };
    return formattedEvent;
  });

  // 투두 날짜를 Set으로 관리
  const todoDateSet = new Set(PERSONAL_TODO_DATA.map((todo) => todo.date));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Styled.CalendarWrapper>
        <FullCalendar
          // 기본 설정
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locale="ko"
          contentHeight="auto"
          fixedWeekCount={false} // 고정된 6주 레이아웃 비활성화
          // 헤더 설정
          headerToolbar={{
            left: "", // 왼쪽 비움
            center: "prev title next", // 이전, 제목, 다음 버튼을 중앙에 모두 배치
            right: "dayGridMonth,dayGridWeek", // 월간/주간 전환 버튼 추가
          }}
          buttonText={{
            dayGridMonth: "월", // "Month"를 "월"로 변경
            dayGridWeek: "주", // "Week"를 "주"로 변경
          }}
          dayHeaderFormat={{ weekday: "short" }} // 요일 표시 형식
          // 이벤트 데이터 및 표시 설정
          events={events}
          /**
           * 투두 리스 로직 후순위
           */
          // eventContent={(arg) => {
          //   if (arg.event.extendedProps.isTodo) {
          //     if (arg.view.type === "dayGridMonth") {
          //       return { html: "" }; // 월간 뷰에서 숨김
          //     }
          //     if (arg.view.type === "dayGridWeek") {
          //       return (
          //         <div className="todo-item">
          //           <input type="checkbox" className="todo-checkbox" />
          //           <span>{arg.event.title}</span>
          //         </div>
          //       );
          //     }
          //   }
          //   return { html: arg.event.title }; // 기본 이벤트
          // }}
          // eventContent 제거하고
          // eventDidMount={(arg) => {
          //   // 월간 뷰에서는 투두 아이템을 점으로만 표시
          //   if (arg.event.extendedProps.isTodo) {
          //     if (arg.view.type === "dayGridMonth") {
          //       arg.el.style.display = "none";
          //     }
          //     // if (arg.view.type === "dayGridWeek") {
          //     //   arg.el.style.display = "block";
          //     //   arg.el.classList.add("todo-item");
          //     //   // 체크박스 추가
          //     //   const eventTitle = arg.el.querySelector(".fc-event-title");
          //     //   if (eventTitle) {
          //     //     const checkbox = document.createElement("input");
          //     //     checkbox.type = "checkbox";
          //     //     checkbox.className = "todo-checkbox";
          //     //     eventTitle.insertBefore(checkbox, eventTitle.firstChild);
          //     //   }
          //     // }
          //     // arg.el.classList.add("todo-item");
          //     // // 체크박스 추가
          //     // const eventTitle = arg.el.querySelector(".fc-event-title");
          //     // if (eventTitle) {
          //     //   const checkbox = document.createElement("input");
          //     //   checkbox.type = "checkbox";
          //     //   checkbox.className = "todo-checkbox";
          //     //   eventTitle.insertBefore(checkbox, eventTitle.firstChild);
          //     // }
          //   }
          // }}
          // 투두 관련 로직 최적화 할것
          dayCellDidMount={(arg) => {
            // 날짜를 YYYY-MM-DD 형식으로 변환 (로컬 시간 기준)
            const currentDate = arg.date.toLocaleDateString("en-CA"); // en-CA는 YYYY-MM-DD 형식을 반환

            // 해당 날짜에 투두가 있는지 확인
            if (todoDateSet.has(currentDate)) {
              const dot = document.createElement("div");
              dot.className = "todo-dot";
              arg.el.querySelector(".fc-daygrid-day-top")?.appendChild(dot);
            }
          }}
          weekends={true}
          eventDisplay="block"
          eventBackgroundColor="var(--color-primary)"
          eventBorderColor="transparent"
          // 날짜 셀 설정
          dayCellClassNames="calendar-day"
          dayCellContent={({ date }) => {
            return { html: date.getDate().toString() };
          }}
          // 이벤트 표시 제한 설정
          dayMaxEvents={3}
          moreLinkContent={({ num }) => `+${num}`} // 더보기 텍스트 커스터마이징
          // 더보기 클릭 시 동작 커스터마이징
          moreLinkClick={() => {
            return "background";
          }}
          // 더보기 팝오버 헤더 포맷 설정
          dayPopoverFormat={{
            month: "long",
            day: "numeric",
            weekday: "long",
          }}
          // 사용 가능한 view 설정
          views={{
            // 주간 보기 커스터마이징
            dayGridWeek: {
              // 주간 보기 제목 형식
              titleFormat: {
                year: "numeric",
                month: "long",
              },
              dayHeaderFormat: { weekday: "short" }, // 요일 표시 형식
              dayMaxEvents: false,
            },
          }}
          // 날짜 클릭 이벤트 추가
          dateClick={handleDateClick}
        />
      </Styled.CalendarWrapper>
    </div>
  );
}

export default Calendar;
