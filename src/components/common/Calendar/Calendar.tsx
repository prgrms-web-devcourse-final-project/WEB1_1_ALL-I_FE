import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { DateClickArg } from "@fullcalendar/interaction";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarSchedule } from "@/models/CalendarSchedule";
import { CalendarTodo } from "@/models/CalendarTodo";
import { useCalendar } from "@/hooks/useCalendar";
import { DatesSetArg } from "@fullcalendar/core";

import * as Styled from "./Calendar.style";

interface CalendarProps {
  schedules: CalendarSchedule[];
  todos: CalendarTodo[];
  initialDate: string;
  onDateSelect: (date: string) => void;
  onMonthChange: (year: number, month: number) => void;
}

function Calendar({
  schedules,
  todos,
  initialDate,
  onDateSelect,
  onMonthChange,
}: CalendarProps) {
  const { events, todoDateSet } = useCalendar(schedules, todos);

  const handleDateClick = (arg: DateClickArg) => {
    onDateSelect(arg.date.toLocaleDateString("en-CA"));
  };

  const handleDatesSet = (arg: DatesSetArg) => {
    const start = arg.view.currentStart;
    onMonthChange(start.getFullYear(), start.getMonth() + 1);
  };

  console.log("Calendar: ", todoDateSet);
  console.log("key: ", Array.from(todoDateSet).join(","));

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
          key={Array.from(todoDateSet).join(",")} // 상태 변화에 따라 강제 리렌더링
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
          datesSet={handleDatesSet}
          initialDate={initialDate}
        />
      </Styled.CalendarWrapper>
    </div>
  );
}

export default Calendar;
