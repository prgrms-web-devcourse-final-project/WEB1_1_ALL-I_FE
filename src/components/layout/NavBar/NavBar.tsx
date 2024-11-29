import { NavLink } from "react-router-dom";
import HomeIcon from "@/assets/icons/home.svg?react";
import GroupIcon from "@/assets/icons/group.svg?react";
import ChatbotIcon from "@/assets/icons/chatbot.svg?react";
import ProfileIcon from "@/assets/icons/profile.svg?react";
import * as Style from "./NavBar.style";

function NavBar() {
  // 네브바를 보여주지 않을 경로 리스트
  const pathNav = ["/signup"];
  const noNav = pathNav.includes(location.pathname);

  return (
    <>
      {!noNav && (
        <Style.Nav>
          <Style.NavItem>
            <NavLink
              to="/main"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <HomeIcon
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
              />
              <span>홈</span>
            </NavLink>
          </Style.NavItem>
          <Style.NavItem>
            <NavLink
              to="/group"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <GroupIcon
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
              />
              <span>그룹</span>
            </NavLink>
          </Style.NavItem>
          <Style.NavItem>
            <NavLink
              to="/chat"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <ChatbotIcon
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
              />
              <span>챗봇</span>
            </NavLink>
          </Style.NavItem>
          <Style.NavItem>
            <NavLink
              to="/mypage"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <ProfileIcon
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
              />
              <span>프로필</span>
            </NavLink>
          </Style.NavItem>
        </Style.Nav>
      )}
    </>
  );
}

export default NavBar;
