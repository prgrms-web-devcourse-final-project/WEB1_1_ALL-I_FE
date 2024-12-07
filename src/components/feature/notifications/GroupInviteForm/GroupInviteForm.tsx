import { Button } from "@/components/common/Button/Button.style";
import * as Styled from "./GroupInviteForm.style";
import {
  acceptGroupInvitation,
  getUserNameById,
  rejectGroupInvitation,
} from "@/apis/alarm";
import { useEffect, useState } from "react";

interface GroupInviteFormProps {
  groupInvitationId: string;
  senderId: string;
  groupName: string;
  index: number;
  removeNotification: (index: number) => void;
}

function GroupInviteForm({
  groupInvitationId,
  senderId,
  groupName,
  index,
  removeNotification,
}: GroupInviteFormProps) {
  const [senderName, setSenderName] = useState(""); // 보낸 사람 이름

  // 그룹 초대 수락
  const handleAccept = async () => {
    try {
      await acceptGroupInvitation(groupInvitationId);
      removeNotification(index);
    } catch (error) {
      console.error("그룹 초대 수락 실패:", error);
    }
  };

  // 그룹 초대 거절
  const handleReject = async () => {
    try {
      await rejectGroupInvitation(groupInvitationId);
      removeNotification(index);
    } catch (error) {
      console.error("그룹 초대 수락 실패:", error);
    }
  };

  // senderId로 이름 조회
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserNameById(senderId);
      setSenderName(data.data);
    };

    fetchData();
  }, [senderId]);

  return (
    <Styled.Container>
      <Styled.Content>
        <span>{senderName}</span>
        님이
        <span>{groupName}</span>
        그룹에 초대하였습니다.
      </Styled.Content>
      <Styled.Buttons>
        <Button $buttonType="whiteSmall" onClick={handleReject}>
          거절
        </Button>
        <Button $buttonType="primarySmall" onClick={handleAccept}>
          수락
        </Button>
      </Styled.Buttons>
    </Styled.Container>
  );
}

export default GroupInviteForm;
