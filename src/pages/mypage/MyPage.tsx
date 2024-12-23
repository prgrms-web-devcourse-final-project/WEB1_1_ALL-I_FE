import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as Styled from "./MyPage.style";
import Button from "@/components/common/Button/Button";
import Profile from "@/assets/icons/profile.svg?react";
import Toggle from "@/components/common/Toggle/Toggle";
import Pencil from "@/assets/icons/pencil.svg?react";

import { getUser } from "@/apis/mypage/getUser";
import { postLogout } from "@/apis/mypage/postLogout";
import { toast } from "react-toastify";
import useAuthStore from "@/store/useAuthStore";
import TextInput from "@/components/common/TextInput/TextInput";
import { putGroup } from "@/apis/mypage/putUser";

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
  const [isEditing, setIsEditing] = useState(false); // 수정 가능 여부

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (userData.nickname.trim() === "") {
      alert("닉네임은 비워둘 수 없습니다.");
      return;
    }
    // 서버에 닉네임 업데이트 API 호출 로직 추가 가능
    // console.log("닉네임 저장:", userData.nickname);
    putGroup(userData.nickname)
      .then
      // (res) => console.log(res)
      ()
      .catch((err) => console.log(err));
    setIsEditing(false);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserData((prevData) => ({
  //     ...prevData,
  //     nickname: e.target.value, // nickname 필드만 업데이트
  //   }));
  // };

  const handleChange = (fieldName: string) => (value: string) => {
    setUserData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleToggleUpdate = (type: "time" | "alarm", isOn: boolean) => {
    if (type === "time") {
      setIsDark(isOn);
      // console.log(isOn);
      if (!isOn) {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
      }
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
        // console.log(res);
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
        <Styled.UserNameContainer>
          {isEditing ? (
            <>
              <TextInput
                name="nickname"
                label="닉네임"
                type="text"
                value={userData.nickname}
                onChange={handleChange("nickname")}
              />
              <Button
                children="저장"
                buttonType="primarySmall"
                type="button"
                onClick={handleSaveClick}
              />
            </>
          ) : (
            <>
              <Styled.UserName>{userData.nickname || "닉네임"}</Styled.UserName>
              <Pencil
                width="1rem"
                height="1rem"
                fill="none"
                stroke="currentColor"
                onClick={handleEditClick}
              />
            </>
          )}
        </Styled.UserNameContainer>
        <p>{userData.email || "이메일"}</p>
        <Styled.BtnContainer>
          {/* <Button
            children="수정"
            buttonType="whiteMedium"
            type="button"
            onClick={() =>
              navigate("./edit", {
                state: userData.nickname,
              })
            }
          /> */}
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
