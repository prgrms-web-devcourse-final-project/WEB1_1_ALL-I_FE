import * as Styled from "./HomePage.style";
import { useNavigate } from "react-router-dom";
import LogoIcon from "@/assets/PlanWith_Logo.svg?react";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Styled.Wrapper onClick={() => navigate("/login")}>
      <Styled.Container>
        <Styled.IconContainer>
          <img src="logo192.png" alt="" style={{ width: "6rem" }} />
          <Styled.ImgContainer>
            <LogoIcon
              width="100%"
              height="100%"
              fill="currentColor"
              stroke="none"
            />
          </Styled.ImgContainer>
        </Styled.IconContainer>
        <Styled.explan>
          당신의 손안에서 만나는 스마트 비서 <br />
          간편한 일정 관리의 시작
        </Styled.explan>
      </Styled.Container>
    </Styled.Wrapper>
  );
}

export default HomePage;
