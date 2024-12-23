/**
 * 헤더 없는 페이지
 * /, /login
 *
 * 로고, 종 페이지
 * /main, /group, /group/:groupId, /chat, /mypage, /mypage/edit, /notifications
 *
 * 뒤로가기 아이콘 페이지
 * 나머지
 */

type HeaderPath = {
  pattern: string;
  excludes?: string[];
};

export const HEADER_CONFIG = {
  // 헤더를 보여주지 않을 경로
  NO_HEADER: ["/", "/login"],

  // 로고와 알림 아이콘을 보여줄 경로
  SHOW_LOGO: [
    { pattern: "/main" },
    { pattern: "/group" },
    {
      pattern: "/group/:groupId",
      excludes: [
        "/group/new",
        "/group/:groupId/edit",
        "/group/:groupId/todo/*",
        "/group/:groupId/schedule/*",
      ],
    },
    { pattern: "/chat" },
    { pattern: "/mypage" },
    { pattern: "/notifications" },
  ] as HeaderPath[],
} as const;
