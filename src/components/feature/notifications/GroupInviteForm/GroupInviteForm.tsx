import { Button } from "@/components/common/Button/Button.style";
import * as Styled from "./GroupInviteForm.style";

interface GroupInviteFormProps {
  groupId: string;
  name: string;
  groupName: string;
}

function GroupInviteForm({ groupId, name, groupName }: GroupInviteFormProps) {
  const handleNo = () => {
    console.log("거절", groupId);
  };
  const handleYes = () => {
    console.log("수락", groupId);
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <span>{name}</span>
        님이
        <span>{groupName}</span>
        그룹에 초대하였습니다.
      </Styled.Content>
      <Styled.Buttons>
        <Button $buttonType="whiteSmall" onClick={handleNo}>
          거절
        </Button>
        <Button $buttonType="primarySmall" onClick={handleYes}>
          수락
        </Button>
      </Styled.Buttons>
    </Styled.Container>
  );
}

export default GroupInviteForm;
