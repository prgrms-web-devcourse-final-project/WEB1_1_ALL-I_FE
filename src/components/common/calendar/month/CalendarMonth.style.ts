import styled from "styled-components";

export const CalendarWrapper = styled.div`
  .fc {
    font-family: "Roboto", sans-serif;
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
    color: #ff7a7a;
  }
`;
