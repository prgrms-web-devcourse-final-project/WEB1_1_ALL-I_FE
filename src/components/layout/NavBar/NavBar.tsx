import { matchPath } from "react-router-dom";
import HomeIcon from "@/assets/icons/home.svg?react";
import GroupIcon from "@/assets/icons/group.svg?react";
import ChatbotIcon from "@/assets/icons/chatbot.svg?react";
import ProfileIcon from "@/assets/icons/profile.svg?react";
import * as Styled from "./NavBar.style";

function NavBar() {
  // 네브바를 보여주지 않을 경로 리스트

  const pathNav = ["/signup", "/group/*"];
  // const noNav = pathNav.includes(location.pathname);
  const noNav = pathNav.some((path) => matchPath(path, location.pathname)); // mathPath를 사용하여 특정 경로 패턴을 매칭할 수 있음

  return (
    <>
      {!noNav && (
        <Styled.NavContainer>
          <Styled.NavItem
            to="/main"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <HomeIcon
              width="100%"
              height="100%"
              fill="none"
              stroke="currentColor"
            />
            <span>홈</span>
          </Styled.NavItem>
          <Styled.NavItem
            to="/group"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <GroupIcon
              width="100%"
              height="100%"
              fill="none"
              stroke="currentColor"
            />
            <span>그룹</span>
          </Styled.NavItem>
          <Styled.NavItem
            to="/chat"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <ChatbotIcon
              width="100%"
              height="100%"
              fill="none"
              stroke="currentColor"
            />
            <span>챗봇</span>
          </Styled.NavItem>
          <Styled.NavItem
            to="/mypage"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <ProfileIcon
              width="100%"
              height="100%"
              fill="none"
              stroke="currentColor"
            />
            <span>프로필</span>
          </Styled.NavItem>
        </Styled.NavContainer>
      )}
    </>
  );
}

export default NavBar;
