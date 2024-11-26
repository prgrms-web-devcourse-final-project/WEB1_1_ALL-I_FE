import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { CalendarWrapper } from "./CalendarMonth.style";

import { PERSONAL_EVENT_DATA } from "@/mocks/PERSONAL_EVENT_DATA";

/**
 * 홈 페이지에 컴포넌트 콜 한거 삭제하기
 */

const CATEGORY_COLOR = {
  1: "#FFF0E1",
  2: "#EBFFE1",
  3: "#E1FBFF",
  4: "#E1E1FF",
};

function CalendarMonth() {
  const events = PERSONAL_EVENT_DATA.map((event) => {
    const formattedEvent = {
      id: event.personalEventId,
      title: event.title,
      start: event.startTime
        ? `${event.startDate}T${event.startTime}`
        : event.startDate,
      end: event.endTime ? `${event.endDate}T${event.endTime}` : event.endDate,
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
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={events}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            eventDisplay="block"
            eventBackgroundColor="#4285f4"
            eventBorderColor="transparent"
            eventTextColor="var(--color-black)"
            dayCellClassNames="calendar-day"
            contentHeight="auto"
            dayHeaderFormat={{ weekday: "short" }}
          />
        </CalendarWrapper>
      </div>
    </div>
  );
}

export default CalendarMonth;
