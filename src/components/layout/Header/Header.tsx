import { matchPath, useLocation, useNavigate } from "react-router-dom";
import BackIcon from "@/assets/icons/back.svg?react";
import LogoIcon from "@/assets/PlanWith_Logo.svg?react";
import AlarmIcon from "@/components/feature/header/AlarmIcon";
import * as Styled from "./Header.style";
import { HEADER_CONFIG } from "./headerConfig";

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // 헤더 없는 페이지
  const noHeader = HEADER_CONFIG.NO_HEADER.some((path) =>
    matchPath(path, pathname)
  );

  if (noHeader) return null;

  // 로고, 종 페이지
  const showLogo = HEADER_CONFIG.SHOW_LOGO.some(
    ({ pattern, excludes = [] }) =>
      matchPath(pattern, pathname) &&
      !excludes?.some((exclude) => matchPath(exclude, pathname))
  );

  if (showLogo) {
    return (
      <Styled.HeaderContainer>
        <Styled.StyledNavLink to="/main">
          <Styled.LogoWrapper>
            <LogoIcon
              width="100%"
              height="100%"
              fill="var(--color-primary)"
              stroke="none"
            />
          </Styled.LogoWrapper>
        </Styled.StyledNavLink>
        <Styled.StyledNavLink to="/notifications">
          <Styled.IconWrapper>
            <AlarmIcon />
          </Styled.IconWrapper>
        </Styled.StyledNavLink>
      </Styled.HeaderContainer>
    );
  }

  // 뒤로가기 페이지

  const handleBackClick = () => {
    if (pathname === "/categories") {
      navigate("/main");
    } else {
      navigate(-1); // 이전 페이지로 이동
    }
  };

  return (
    <Styled.HeaderContainer>
      <button onClick={handleBackClick}>
        <Styled.IconWrapper>
          <BackIcon
            width="100%"
            height="100%"
            fill="currentColor"
            stroke="currentColor"
          />
        </Styled.IconWrapper>
      </button>
      <div></div>
    </Styled.HeaderContainer>
  );
}

export default Header;
