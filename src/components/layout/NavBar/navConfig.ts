import HomeIcon from "@/assets/icons/home.svg?react";
import GroupIcon from "@/assets/icons/group.svg?react";
import ChatbotIcon from "@/assets/icons/chatbot.svg?react";
import ProfileIcon from "@/assets/icons/profile.svg?react";

/**
 * 네비게이션 바 있는 경로
 *
 * /main, /group, /group/:groupId, /chat, /notifications, /mypage
 */
type NavPath = {
  pattern: string;
  excludes?: string[];
};

export const SHOW_NAV: NavPath[] = [
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
  { pattern: "/notifications" },
  { pattern: "/mypage", excludes: ["/mypage/edit"] },
];

export const NAV_ITEMS = [
  { path: "/main", icon: HomeIcon, label: "메인" },
  { path: "/group", icon: GroupIcon, label: "그룹" },
  { path: "/chat", icon: ChatbotIcon, label: "챗봇" },
  { path: "/mypage", icon: ProfileIcon, label: "프로필" },
] as const;
