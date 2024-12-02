import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { DateClickArg } from "@fullcalendar/interaction";
import interactionPlugin from "@fullcalendar/interaction";

import * as Styled from "./Calendar.style";

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
 * 한달 씩의 이벤트, 투두 데이터와 해당 카테고리 색상 등은
 * 전역 상태로 관리 되어야 할 것 같습니다.
 *
 * 투두 관련 로직
 * - 월간 캘린더에 투두 점 표시
 * - 주간 캘린더에 투두 리스트 표시
 *
 * 페이지 작업 시 임시로 감싼 div 제거
 */
function CalendarMonth() {
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

  // 투두 데이터를 FullCalendar 이벤트 형식으로 변환
  const todoEvents = PERSONAL_TODO_DATA.map((todo) => ({
    id: todo.personalTodoId,
    title: todo.title,
    start: todo.date,
    backgroundColor:
      CATEGORY_COLOR[todo.categoryId as keyof typeof CATEGORY_COLOR],
    display: "list-item", // 주간 뷰에서 리스트 형태로 표시
    extendedProps: {
      isTodo: true, // 투두 아이템 구분을 위한 플래그
    },
  }));

  // DateClickArg 타입 사용
  const handleDateClick = (arg: DateClickArg) => {
    console.log("날짜 클릭:", arg.date);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "80%" }}>
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
            events={[...events, ...todoEvents]}
            //
            //
            eventContent={(arg) => {
              // 월간 뷰에서는 투두 아이템을 점으로만 표시
              if (
                arg.view.type === "dayGridMonth" &&
                arg.event.extendedProps.isTodo
              ) {
                return { html: "" }; // 내용을 비워서 기본 이벤트 표시 숨김
              }
              // 주간 뷰에서는 투두 리스트로 표시
              if (
                arg.view.type === "dayGridWeek" &&
                arg.event.extendedProps.isTodo
              ) {
                return {
                  html: `<div class="todo-item">
                    <span class="todo-title">${arg.event.title}</span>
                  </div>`,
                };
              }
              return { html: arg.event.title }; // 일반 이벤트는 기본 표시
            }}
            dayCellDidMount={(arg) => {
              // 날짜 포맷을 맞추기 위해 arg.date를 현지 시간 기준으로 변환
              const currentDate = new Date(arg.date);
              const formattedDate = currentDate.toLocaleDateString("en-CA"); // YYYY-MM-DD 형식으로 변환

              // 해당 날짜에 투두가 있는지 확인
              const hasTodo = todoEvents.some(
                (todo) => todo.start === formattedDate
              );

              // 투두가 있으면 점 표시 추가
              if (hasTodo) {
                const dot = document.createElement("div");
                dot.className = "todo-dot";
                arg.el.querySelector(".fc-daygrid-day-top")?.appendChild(dot);
              }
            }}
            //
            //
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
            dayMaxEvents={3} // 숫자로 직접 최대 표시 개수 지정 가능
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
              dayGridWeek: {
                // 주간 보기 커스터마이징
                titleFormat: {
                  year: "numeric",
                  month: "long",
                }, // 주간 보기 제목 형식
                dayHeaderFormat: { weekday: "short" }, // 요일 표시 형식
                dayMaxEvents: false,
              },
            }}
            // 날짜 클릭 이벤트 추가
            dateClick={handleDateClick}
          />
        </Styled.CalendarWrapper>
      </div>
    </div>
  );
}

export default CalendarMonth;
