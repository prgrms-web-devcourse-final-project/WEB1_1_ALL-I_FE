import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { CalendarWrapper } from "./CalendarMonth.style";

import { PERSONAL_EVENT_DATA } from "@/mocks/PERSONAL_EVENT_DATA";

/**
 * 홈 페이지에 컴포넌트 콜 한거 삭제하기
 */

const CATEGORY_COLOR = {
  "1": "#FFF0E1",
  "2": "#EBFFE1",
  "3": "#E1FBFF",
  "4": "#E1E1FF",
};

function CalendarMonth() {
  const events = PERSONAL_EVENT_DATA.map((event) => {
    const endDate = new Date(event.endDate);
    endDate.setDate(endDate.getDate() + 1);

    const formattedEvent = {
      id: event.personalEventId,
      title: event.title,
      start: event.startDate,
      end: endDate.toISOString().split("T")[0],
      backgroundColor:
        CATEGORY_COLOR[event.categoryId as keyof typeof CATEGORY_COLOR],
    };
    return formattedEvent;
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "80%", height: "100%" }}>
        <CalendarWrapper>
          <FullCalendar
            // 기본 설정
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            locale="ko"
            contentHeight="auto"
            // 헤더 설정
            headerToolbar={{
              left: "prev,next today", // 이전, 다음, 오늘 버튼
              center: "title", // 달력 제목
              right: "dayGridMonth,timeGridWeek,timeGridDay", // 월/주/일 보기 옵션
            }}
            dayHeaderFormat={{ weekday: "short" }} // 요일 표시 형식
            // 이벤트 데이터 및 표시 설정
            events={events}
            weekends={true}
            eventDisplay="block"
            eventBackgroundColor="var(--color-primary)"
            eventBorderColor="transparent"
            // 날짜 셀 설정
            dayCellClassNames="calendar-day"
            dayCellContent={({ date }) => {
              return { html: date.getDate().toString() };
            }}
          />
        </CalendarWrapper>
      </div>
    </div>
  );
}

export default CalendarMonth;
