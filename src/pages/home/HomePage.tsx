import * as Styled from "./HomePage.style";
import { useNavigate } from "react-router-dom";
import Blub from "@/assets/icons/bulb.svg?react";
import logo from "@/assets/onboard/logo.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Styled.Wrapper onClick={() => navigate("/login")}>
      <Styled.Container>
        <Styled.IconContainer>
          <Blub />
          <Styled.ImgContainer>
            <img src={logo} alt="J-AI" />
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
