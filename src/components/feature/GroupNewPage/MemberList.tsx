import { useState } from "react";
import * as Styled from "./MemberList.style";
// import Plus from "@/assets/icons/plus.svg?react";
import Profile from "@/assets/icons/profile.svg?react";
import Trashcan from "@/assets/icons/trashcan.svg?react";
import TextInput from "@/components/common/TextInput/TextInput";
import Button from "@/components/common/Button/Button";
import { toast } from "react-toastify";

// css 해야됨.
function MemberList() {
  const [nickname, setNickname] = useState("");
  const [memberList, setMemberList] = useState<string[]>([]);

  const handleChange = (value: string) => {
    setNickname(value);
    console.log(value);
  };

  const handleSubmit = () => {
    console.log(nickname); // 닉네임 출력
    toast.success(`${nickname}에게 초대 메세지를 보냈습니다!`);
    setNickname(""); // 닉네임 초기화
    setMemberList((prev) => [...prev, nickname]);
  };

  return (
    <Styled.Wrapper>
      {/* <Styled.InfoContainer>
        <Plus width={17} height={17} stroke="#676767" />
      </Styled.InfoContainer> */}
      <Styled.AddMemContainer>
        <TextInput
          name="member"
          type="text"
          label="팀원 추가"
          placeholder="팀원의 닉네임을 입력하고 한 번에 한 명씩 초대해주세요."
          required
          value={nickname}
          onChange={handleChange}
        />
        <Button
          children="초대"
          buttonType="whiteMicro"
          type="button"
          onClick={handleSubmit}
        />
      </Styled.AddMemContainer>

      {/* 현재 누구에게 초대를 보냈는지는 toast 메세지로 띄워주는 상황
       *** 그래서 초대장을 보내기만 하면 팀원 목록이 (수락 여부와 상관없이) 나타남
       *** 이는 알맞는 방법이 아닌 것 같음
       *** -> 팀원 목록은 "그룹원 조회 api"를 사용해서 보여주는게 맞지 않을까 싶음
       */}
      <p>팀원 목록</p>
      <Styled.UserWrapper>
        {memberList.map((name) => (
          <Styled.UserInfoContainer>
            <Styled.UserInfo>
              <Profile width={25} height={25} stroke="#97CDBD" fill="#97CDBD" />
              <p>{name}</p>
            </Styled.UserInfo>
            <Trashcan
              width={16}
              height={16}
              stroke="#B1B1B1"
              cursor="pointer"
            />
          </Styled.UserInfoContainer>
        ))}
      </Styled.UserWrapper>
    </Styled.Wrapper>
  );
}

export default MemberList;
