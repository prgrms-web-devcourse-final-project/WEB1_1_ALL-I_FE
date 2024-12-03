import BackIcon from "@/assets/icons/back.svg?react";
import AlarmIcon from "@/assets/icons/alarm.svg?react";
import * as Styled from "./Header.style";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // 로고를 보여줄 경로 리스트
  const pathLogo = [
    "/",
    "/main",
    "/group",
    "/chat",
    "/mypage",
    "/signup",
    "/login",
  ];

  // 경로에 따라 로고를 보여줄지 결정
  const showLogo = pathLogo.includes(location.pathname);

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <Styled.HeaderDiv>
      {showLogo ? (
        <Styled.StyledNavLink to="/main">로고</Styled.StyledNavLink>
      ) : (
        <Styled.IconWrapper onClick={handleBackClick}>
          <BackIcon
            width="100%"
            height="100%"
            fill="currentColor"
            stroke="currentColor"
          />
        </Styled.IconWrapper>
      )}
      <Styled.StyledNavLink to="/notifications">
        <AlarmIcon width={24} height={24} fill="none" stroke="currentColor" />
      </Styled.StyledNavLink>
    </Styled.HeaderDiv>
  );
}
export default Header;
