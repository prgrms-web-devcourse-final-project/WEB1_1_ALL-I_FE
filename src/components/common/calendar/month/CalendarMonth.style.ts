import styled from "styled-components";

export const CalendarWrapper = styled.div`
  /* 기본 설정 */
  .fc {
    /* 캘린더의 기본 폰트 패밀리와 크기 설정 */
    font-family: "Pretendard", "Noto Sans KR", sans-serif;
    font-size: var(--font-size-micro);
  }

  /* 헤더 스타일링 */
  /* 캘린더 상단 툴바 스타일링 */
  .fc-header-toolbar {
    padding: 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
  }

  /* 캘린더 제목 스타일링 */
  .fc-toolbar-title {
    font-size: 1.5em;
    font-weight: bold;
  }

  /* 요일 헤더 셀 스타일링 */
  .fc-col-header-cell {
    padding: 8px;
    font-weight: bold;
    text-align: center;
  }

  /* 캘린더 그리드 스타일링 */
  /* 기본 테두리 제거 */
  .fc-theme-standard td,
  .fc-theme-standard th,
  .fc-theme-standard .fc-scrollgrid {
    border: none;
  }

  /* 날짜 셀 스타일링 */
  .fc-daygrid-day {
    /* 날짜 셀의 최소 높이와 테두리 설정 */
    min-height: 120px;
    border: none;
  }

  /* 날짜 숫자 위치 정렬 */
  .fc-daygrid-day-top {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  /* 오늘 날짜 강조 스타일 */
  .fc-day-today {
    background-color: #e8f0fe !important;
    border: 2px solid #4285f4;
    border-radius: 6px;
  }

  /* 주말 날짜 색상 */
  /* 토요일 색상 */
  .fc-day-sat {
    color: black;
  }

  /* 일요일 색상 */
  .fc-day-sun {
    color: var(--color-red);
  }

  /* 이벤트 스타일링 */
  /* 이벤트 블록 스타일링 */
  .fc-event {
    border-radius: 4px;
    margin: 2px 0;
    text-align: center;
    font-size: 8px;
    color: var(--color-black);
  }

  /* 이벤트 시간 표시 스타일링 */
  .fc-event-time {
    font-size: var(--font-size-micro-small);
    font-weight: bold;
    margin-right: 4px;
    color: var(--color-gray-medium);
  }

  /* 이벤트 제목 스타일링 */
  .fc-event-title {
    font-size: var(--font-size-micro-small);
    color: var(--color-black);
  }
`;