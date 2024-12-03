import HomeIcon from "@/assets/icons/home.svg?react";
import GroupIcon from "@/assets/icons/group.svg?react";
import ChatbotIcon from "@/assets/icons/chatbot.svg?react";
import ProfileIcon from "@/assets/icons/profile.svg?react";

export const NAV_ITEMS = [
  { path: "/main", icon: HomeIcon, label: "메인" },
  { path: "/group", icon: GroupIcon, label: "그룹" },
  { path: "/chat", icon: ChatbotIcon, label: "챗봇" },
  { path: "/mypage", icon: ProfileIcon, label: "프로필" },
] as const;

export const HIDDEN_PATHS = ["/signup", "/group/*"] as const;

// 메인, 그룹/아이디, 챗봇, 프로필
