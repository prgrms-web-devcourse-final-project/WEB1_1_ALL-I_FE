import { useState, useEffect } from "react";
import * as Styled from "./MemberList.style";
// import Plus from "@/assets/icons/plus.svg?react";
import Profile from "@/assets/icons/profile.svg?react";
import Trashcan from "@/assets/icons/trashcan.svg?react";
import TextInput from "@/components/common/TextInput/TextInput";
import Button from "@/components/common/Button/Button";
import { toast } from "react-toastify";
import { postInvitation } from "@/apis/group/postInvitation";
import { getMember } from "@/apis/group/getMember";
import { deleteMember } from "@/apis/group/deleteMember";

interface MemberListProps {
  groupId: string;
}

interface UserData {
  groupSettingId: string;
  userId: string;
  nickname: string;
  role: string;
}

function MemberList({ groupId }: MemberListProps) {
  // 테스트용 group_id, 나중엔 props 또는 useLocation을 사용하지 않을까 싶습니다.
  // const group_id = "a85e5db7-593f-429a-bc80-385408f0b934";
  const [nickname, setNickname] = useState("");
  const [memberList, setMemberList] = useState<UserData[]>([]);

  const handleChange = (value: string) => {
    setNickname(value);
  };

  const handleSubmit = async () => {
    const res = await postInvitation({
      // group_id 는 임시값 수정 필요
      group_id: groupId,
      nickname,
    });
    // console.log(res);
    if (res.code == 201) {
      toast.success(`${nickname}에게 초대 메세지를 보냈습니다.`);
      setNickname("");
    } else {
      toast.error(`${res.response.data.message}`);
    }
  };

  const handleEjection = async (groupSettingId: string) => {
    // 그룹원 방출(그룹장)
    if (
      memberList.find((user) => user.role === "LEADER")?.groupSettingId ===
      groupSettingId
    ) {
      toast.error("그룹장은 방출할 수 없습니다.");
      return;
    }
    const res = await deleteMember(groupSettingId);
    if (res.code === 200) {
      toast(res.message);
      // 삭제된 멤버를 제외하고 상태를 업데이트
      setMemberList((prevList) =>
        prevList.filter((user) => user.groupSettingId !== groupSettingId)
      );
    } else if (res.status === 404 || res.status === 401) {
      toast.error(res.response.data.message);
    }
  };

  useEffect(() => {
    // 이 그룹에 속해있는 그룹원을 조회 및 렌더링에 반영
    getMember({ group_id: groupId })
      .then((res) => {
        // console.log(res);
        setMemberList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Styled.Wrapper>
      {/* <Styled.InfoContainer>
        <Plus width={17} height={17} stroke="#676767" />
      </Styled.InfoContainer> */}
      <Styled.AddMemContainer>
        <TextInput
          name="member"
          type="text"
          label="그룹원 추가"
          placeholder="닉네임을 입력하고 한 번에 한 명씩 초대해주세요."
          required={false}
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
      <p>그룹원 목록</p>
      <Styled.UserWrapper>
        {memberList.map((user) => (
          <Styled.UserInfoContainer key={user.nickname}>
            <Styled.UserInfo>
              <Styled.UserInfoLeft>
                <Profile
                  width={25}
                  height={25}
                  stroke="#97CDBD"
                  fill="#97CDBD"
                />
                <p>{user.nickname}</p>
              </Styled.UserInfoLeft>
              <Styled.UserRole>
                {user.role === "LEADER" ? "그룹장" : "그룹원"}
              </Styled.UserRole>
            </Styled.UserInfo>
            <Trashcan
              width={16}
              height={16}
              stroke="#B1B1B1"
              cursor="pointer"
              onClick={() => handleEjection(user.groupSettingId)}
            />
          </Styled.UserInfoContainer>
        ))}
      </Styled.UserWrapper>
    </Styled.Wrapper>
  );
}

export default MemberList;
