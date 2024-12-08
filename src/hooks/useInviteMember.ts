import { useState } from "react";
import { toast } from "react-toastify";
import { postInvitation } from "@/apis/group/postInvitation";

export const useInviteMember = (
  groupId: string,
  refreshMemberList: () => void
) => {
  const [nickname, setNickname] = useState("");

  const handleChange = (value: string) => {
    setNickname(value);
  };

  const handleSubmit = () => {
    if (!nickname.trim()) {
      toast.error("닉네임을 입력해주세요.");
      return;
    }

    postInvitation({
      group_id: groupId,
      nickname,
    })
      .then(() => {
        toast.success(`${nickname}에게 초대 메세지를 보냈습니다!`);
        setNickname(""); // 닉네임 초기화
        refreshMemberList(); // 멤버 목록 새로고침
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return { nickname, handleChange, handleSubmit };
};
