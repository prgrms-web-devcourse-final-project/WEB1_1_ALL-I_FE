import BackIcon from "@/assets/icons/back.svg?react";
import AlarmIcon from "@/assets/icons/alarm.svg?react";
import * as Style from "./Header.style";
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
    <Style.HeaderDiv>
      {showLogo ? (
        <Style.StyledNavLink to="/main">로고</Style.StyledNavLink>
      ) : (
        <Style.IconWrapper onClick={handleBackClick}>
          <BackIcon
            width={25}
            height={25}
            fill="currentColor"
            stroke="currentColor"
          />
        </Style.IconWrapper>
      )}
      <Style.StyledNavLink to="/notifications">
        <AlarmIcon width={24} height={24} fill="none" stroke="currentColor" />
      </Style.StyledNavLink>
    </Style.HeaderDiv>
  );
}
export default Header;
