import styled from "styled-components";

export const CalendarWrapper = styled.div`
  margin-bottom: 1rem;

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
    background-color: transparent;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px !important;

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* 중앙 섹션 스타일링 */
    .fc-toolbar-chunk {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* 각 섹션 자리 조정*/
    .fc-toolbar-chunk {
      flex: 1; /* 각 섹션에 동일한 공간 할당 */
      justify-content: center;
    }
    .fc-toolbar-chunk:first-child {
      justify-content: flex-start; /* 왼쪽 섹션 */
    }
    .fc-toolbar-chunk:last-child {
      justify-content: flex-end; /* 오른쪽 섹션 */
    }
  }

  /* 캘린더 제목 스타일링 */
  .fc-toolbar-title {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
    white-space: nowrap;

    text-align: center;
  }

  /* 헤더 버튼 스타일링 */
  .fc-button {
    background: none;
    border: none;
    box-shadow: none;
    // padding: 4px 8px;

    &:focus {
      box-shadow: none;
      background: transparent;
    }

    &:hover {
      background: var(--color-primary);
    }
  }

  /* prev/next 버튼 스타일링 */
  .fc-prev-button,
  .fc-next-button {
    color: var(--color-black);

    .fc-icon {
      font-size: var(--font-size-medium);
    }
  }

  /* 요일 헤더 셀 스타일링 */
  .fc-col-header-cell {
    padding: 4px;
    font-weight: var(--font-weight-bold);
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
    min-height: 120px !important;
    height: auto !important;
    border: none;
  }

  /* 날짜 그리드 컨테이너 높이 조정 */
  .fc-daygrid-body {
    height: auto;
  }

  /* 이벤트 컨테이너 높이 조정 */
  .fc-daygrid-day-events {
    min-height: 1rem !important;
    margin: 0 !important;
    // 이벤트와 하단 날짜 간의 간격
    margin-bottom: 0px !important;
  }

  /* 날짜 숫자 위치 정렬 */
  .fc-daygrid-day-top {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-small);
    // 날짜와 이벤트 간의 간격 축소
    margin-bottom: 0px;
  }

  /* 오늘 날짜 강조 스타일 */
  .fc-day-today {
    background-color: transparent !important;
    position: relative;

    // /* 날짜 숫자 흰색으로 변경 */
    // .fc-daygrid-day-number {
    //   color: var(--color-white);
    //   // color: var(--color-primary);
    // }

    // .fc-daygrid-day-top {
    //   position: relative;
    //   z-index: 1;
    // }

    // .fc-daygrid-day-top::after {
    //   content: "";
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: translate(-50%, -50%);
    //   width: 1.5rem;
    //   height: 1.5rem;
    //   background-color: var(--color-primary);
    //   // border: 1px solid var(--color-primary);
    //   border-radius: var(--border-radius-default);
    //   z-index: -1;
    // }
  }

  // 선택한 날짜 스타일링
  .selected-date {
    background-color: transparent !important;
    position: relative;

    /* 날짜 숫자 흰색으로 변경 */
    .fc-daygrid-day-number {
      color: var(--color-white);
      // color: var(--color-primary);
    }

    .fc-daygrid-day-top {
      position: relative;
      z-index: 1;
    }

    .fc-daygrid-day-top::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1.6rem;
      height: 1.6rem;
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
      border-radius: var(--border-radius-default);
      z-index: -1;
    }
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
    border-radius: var(--border-radius-default);
    margin: 2px 0;

    text-align: center;
    font-size: var(--font-size-micro-small);
    color: var(--color-black);
  }

  /* 이벤트 제목 스타일링 */
  .fc-event-title {
    font-size: var(--font-size-micro-small);
    color: var(--color-gray-dark);
  }

  /* 더보기 링크 스타일링 */
  .fc-more-link {
    color: var(--color-gray-medium);
    font-size: var(--font-size-micro-small);
    font-weight: var(--font-weight-regular);
    width: 100%;
    text-align: center;
    &:hover {
      text-decoration: underline;
    }
  }

  /* 더보기 팝오버 스타일링 */
  .fc-popover {
    background: var(--background-primary);
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    width: 8rem;

    .fc-popover-header {
      // background: var(--color-primary);
      background: transparent;
      padding: 4px;
      font-weight: var(--font-weight-regular);
    }

    .fc-popover-body {
      width: 8rem;
      padding: 4px;

      .fc-daygrid-event-harness {
        // (padding * 2 + 2px) 만큼 빼줘야 정렬이 적절해 보입니다.
        width: calc(8rem - 10px) !important;
      }

      .fc-more-popover-misc {
        display: none;
      }
    }
  }

  /* 뷰 전환 버튼 스타일링 */
  .fc-dayGridMonth-button,
  .fc-dayGridWeek-button {
    background: none;
    border: none;
    box-shadow: none;
    color: var(--color-gray-dark);
    font-size: var(--font-size-micro-);

    &.fc-button-active {
      background: var(--color-primary) !important;
      color: var(--color-white);
      // border-radius: var(--border-radius-default);
    }

    &:focus,
    &:active {
      box-shadow: none !important;
      outline: none !important;
    }

    &:hover:not(.fc-button-active) {
      background: var(--color-primary);
      // border-radius: var(--border-radius-default);
    }
  }

  /* 투두 관련 스타일링 */
  /* 투두 점 스타일링 */
  .todo-dot {
    width: 5px;
    height: 5px;
    position: absolute;
    /* 다른 레이아웃에서도 점 위치 적절히 유지되도록 중앙에서 이동 */
    top: 50%;
    right: 50%;
    transform: translate(200%, -200%);
    // background: linear-radient(to right, #e1e1ff, #ebffe1); // 그라데이션 적용
    // background: var(--color-primary-hover);
    // background: var(--text-secondary);
    background: var(--color-red);
    // border: 0.01px solid var(--color-primary);
    // box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.35);
    // background-color: var(--color-gray-medium);
    border-radius: var(--border-radius-circle);
  }

  /* 투두 아이템 스타일링 */
  // .fc-daygrid-event-harness {
  //   &.todo-item {
  //     width: 100%;

  //     > .fc-event {
  //       // 직계 자식 선택자 사용
  //       border-radius: var(--border-radius-small);
  //       background-color: var(--color-gray-light) !important;
  //       border: none;
  //     }

  //     .fc-event-title {
  //       display: flex;
  //       font-size: var(--font-size-micro-small);
  //       align-items: center;
  //       gap: 8px;
  //     }

  //     .todo-checkbox {
  //       width: var(--font-size-micro-small);
  //       height: var(--font-size-micro-small);
  //       margin: 0;
  //       cursor: pointer;
  //     }
  //   }


  }
`;
