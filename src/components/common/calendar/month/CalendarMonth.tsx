import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { DateClickArg } from "@fullcalendar/interaction";
import interactionPlugin from "@fullcalendar/interaction";

import { CalendarWrapper } from "./CalendarMonth.style";

import { PERSONAL_EVENT_DATA } from "@/mocks/PERSONAL_EVENT_DATA";

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
 * 홈 페이지에 컴포넌트 콜 한거 삭제하기
 */
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
        <CalendarWrapper>
          <FullCalendar
            // 기본 설정
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale="ko"
            contentHeight="auto"
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
            // 사용 가능한 view 설정
            views={{
              dayGridWeek: {
                // 주간 보기 커스터마이징
                titleFormat: {
                  year: "numeric",
                  month: "long",
                }, // 주간 보기 제목 형식
                dayHeaderFormat: { weekday: "short" }, // 요일 표시 형식
              },
            }}
            // 날짜 클릭 이벤트 추가
            dateClick={handleDateClick}
          />
        </CalendarWrapper>
      </div>
    </div>
  );
}

export default CalendarMonth;
