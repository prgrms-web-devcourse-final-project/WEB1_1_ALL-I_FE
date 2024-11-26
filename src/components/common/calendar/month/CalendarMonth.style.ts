import styled from "styled-components";

export const CalendarWrapper = styled.div`
  .fc {
    font-family: "Pretendard", "Noto Sans KR", sans-serif;
    font-size: var(--font-size-micro);
  }

  /* 이벤트 */
  .fc-event {
    border-radius: 4px;
    // padding: 4px 8px;
    margin: 2px 0;
    text-align: center;
    font-size: 8px;
    // background-color: var(--color-gray-light);
    color: var(--color-black);
  }

  /* 셀 */
  .fc-daygrid-day {
    min-height: 120px; /* 셀 높이를 적절히 늘림 */
    // padding: 2px;
    // border: 1px solid #ddd; /* 셀 간 구분선 */
    border: none;
  }

  /* 헤더 바 */
  .fc-header-toolbar {
    padding: 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
  }

  /* 제목 */
  .fc-toolbar-title {
    font-size: 1.5em;
    font-weight: bold;
  }

  /* 오늘 날짜 강조 */
  .fc-day-today {
    background-color: #e8f0fe !important;
    border: 2px solid #4285f4;
    border-radius: 6px;
  }

  /* 셀 상단 날짜 표시 */
  .fc-daygrid-day-top {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  /* 토요일 색상 */
  .fc-day-sat {
    color: #1e88e5;
    color: black;
  }

  /* 일요일 색상 */
  .fc-day-sun {
    color: var(--color-red);
  }

  /* 이벤트 시간 스타일 */
  .fc-event-time {
    font-size: var(--font-size-micro-small);
    font-weight: bold;
    margin-right: 4px;
    color: var(--color-gray-medium);
  }

  /* 이벤트 제목 스타일 */
  .fc-event-title {
    font-size: var(--font-size-micro-small);
    color: var(--color-black);
  }

  /* 테이블 보더 제거 */
  .fc-theme-standard td,
  .fc-theme-standard th,
  .fc-theme-standard .fc-scrollgrid {
    border: none;
  }

  /* 헤더 셀(요일) 스타일 */
  .fc-col-header-cell {
    padding: 8px;
    font-weight: bold;
    text-align: center;
  }
`;
