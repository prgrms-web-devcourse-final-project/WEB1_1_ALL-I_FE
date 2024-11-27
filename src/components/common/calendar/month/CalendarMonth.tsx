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
      <div style={{ width: "80%" }}>
        <CalendarWrapper>
          <FullCalendar
            // 기본 설정
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            locale="ko"
            contentHeight="auto"
            // 헤더 설정
            headerToolbar={{
              left: "", // 왼쪽 비움
              center: "prev title next", // 이전, 제목, 다음 버튼을 중앙에 모두 배치
              right: "", // 오른쪽 비움
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
            // 이벤트 표시 제한 설정
            dayMaxEvents={3} // 숫자로 직접 최대 표시 개수 지정 가능
            moreLinkContent={({ num }) => `+${num} 더보기`} // 더보기 텍스트 커스터마이징
            // 더보기 클릭 시 동작 커스터마이징
            // moreLinkClick={(arg) => {
            //   // 기본 팝오버 대신 커스텀 동작 실행
            //   // console.log("더보기 클릭:", arg.date, arg.events);
            //   return;
            // }}
            // 더보기 팝오버 헤더 포맷 설정
            dayPopoverFormat={{
              month: "long",
              day: "numeric",
              weekday: "long",
            }}
          />
        </CalendarWrapper>
      </div>
    </div>
  );
}

export default CalendarMonth;
