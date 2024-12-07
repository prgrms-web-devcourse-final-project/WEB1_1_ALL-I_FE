import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Styled from "./MyPage.style";
import Button from "@/components/common/Button/Button";
import Profile from "@/assets/icons/profile.svg?react";
import Toggle from "@/components/common/Toggle/Toggle";

import { useEffect } from "react";
import { getUser } from "@/apis/mypage/getUser";
import { postLogout } from "@/apis/mypage/postLogout";
import { toast } from "react-toastify";
import useAuthStore from "@/store/useAuthStore";

function Mypage() {
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const [isDark, setIsDark] = useState(false);
  // 사용자 정보 상태
  const [userData, setUserData] = useState({
    nickname: "",
    email: "",
    imageUrl: null,
  });

  const handleToggleUpdate = (type: "time" | "alarm", isOn: boolean) => {
    if (type === "time") {
      setIsDark(isOn);
      console.log(isOn);
    }
    // 필요한 경우 type === "alarm"에 대한 로직 추가 가능
  };

  const handleLogout = () => {
    postLogout()
      .then(() => {
        setAccessToken("");
        navigate("/");
      })
      .catch(() => {
        toast("로그아웃 오류. 잠시 후 다시 시도해주세요.");
      });
  };

  useEffect(() => {
    getUser()
      .then((res) => {
        console.log(res);
        // 데이터 상태에 저장
        setUserData({
          nickname: res.data.nickname,
          email: res.data.email,
          imageUrl: res.data.imageUrl,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.UserCotainer>
        <Styled.ToggleContainer>
          <p>다크모드</p>
          <Toggle type="time" isOn={isDark} onClick={handleToggleUpdate} />
        </Styled.ToggleContainer>
        <Styled.ImgContainer>
          {userData.imageUrl ? (
            <img
              src={userData.imageUrl}
              alt="Profile"
              width={113}
              height={108}
            />
          ) : (
            <Profile width={113} height={108} fill="var(--color-primary)" />
          )}
        </Styled.ImgContainer>
        <Styled.UserName>{userData.nickname || "닉네임"}</Styled.UserName>
        <p>{userData.email || "이메일"}</p>
        <Styled.BtnContainer>
          <Button
            children="수정"
            buttonType="whiteMedium"
            type="button"
            onClick={() =>
              navigate("./edit", {
                state: userData.nickname,
              })
            }
          />
          <Button
            children="로그아웃"
            buttonType="primaryMedium"
            type="button"
            onClick={handleLogout}
          />
        </Styled.BtnContainer>
      </Styled.UserCotainer>
      <Styled.Withdraw>탈퇴하기</Styled.Withdraw>
    </Styled.Wrapper>
  );
}

export default Mypage;
