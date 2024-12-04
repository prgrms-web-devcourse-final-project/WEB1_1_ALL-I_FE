import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Styled from "./MyPage.style";
import Button from "@/components/common/Button/Button";
import Profile from "@/assets/icons/profile.svg?react";
import Toggle from "@/components/common/Toggle/Toggle";

function Mypage() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  const handleToggleUpdate = (type: "time" | "alarm", isOn: boolean) => {
    if (type === "time") {
      setIsDark(isOn);
      console.log(isOn);
    }
    // 필요한 경우 type === "alarm"에 대한 로직 추가 가능
  };

  return (
    <Styled.Wrapper>
      <Styled.UserCotainer>
        <Styled.ToggleContainer>
          <p>다크모드</p>
          <Toggle type="time" isOn={isDark} onClick={handleToggleUpdate} />
        </Styled.ToggleContainer>
        <Styled.ImgContainer>
          <Profile width={113} height={108} fill="var(--color-primary)" />
        </Styled.ImgContainer>
        <Styled.UserName>닉네임</Styled.UserName>
        <p>이메일</p>
        <Styled.BtnContainer>
          <Button
            children="수정"
            buttonType="whiteMedium"
            type="button"
            onClick={() =>
              navigate("./edit", {
                state: "닉네임",
              })
            }
          />
          <Button
            children="로그아웃"
            buttonType="primaryMedium"
            type="button"
          />
        </Styled.BtnContainer>
      </Styled.UserCotainer>
      <Styled.Withdraw>탈퇴하기</Styled.Withdraw>
    </Styled.Wrapper>
  );
}

export default Mypage;
