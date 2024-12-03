import * as Styled from "./MemberList.style";
import Plus from "@/assets/icons/plus.svg?react";
import Profile from "@/assets/icons/profile.svg?react";
import Trashcan from "@/assets/icons/trashcan.svg?react";

// css 해야됨.
function MemberList() {
  return (
    <Styled.Wrapper>
      <Styled.InfoContainer>
        <p>팀원 목록</p>
        <Plus width={17} height={17} stroke="#676767" />
      </Styled.InfoContainer>

      <Styled.UserWrapper>
        <Styled.UserInfoContainer>
          <Styled.UserInfo>
            <Profile width={25} height={25} stroke="#97CDBD" fill="#97CDBD" />
            <p>팀원 1</p>
          </Styled.UserInfo>
          <Trashcan width={16} height={16} stroke="#B1B1B1" cursor="pointer" />
        </Styled.UserInfoContainer>
      </Styled.UserWrapper>
    </Styled.Wrapper>
  );
}

export default MemberList;
