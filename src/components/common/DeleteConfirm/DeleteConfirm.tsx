import { Button } from "@/components/common/Button/Button.style";
import * as Styled from "./DeleteConfirm.style";

interface IProps {
  text: string;
  onClickCancel: () => void;
  onClickDelete: () => void;
}

function DeleteConfirm({ text, onClickCancel, onClickDelete }: IProps) {
  return (
    <Styled.Modal>
      <Styled.ConfirmBox>
        <Styled.Text>{text}</Styled.Text>
        <Styled.ButtonBox>
          <Button $buttonType="whiteMicro" onClick={onClickCancel}>
            취소
          </Button>
          <Button $buttonType="primaryMicro" onClick={onClickDelete}>
            삭제
          </Button>
        </Styled.ButtonBox>
      </Styled.ConfirmBox>
    </Styled.Modal>
  );
}

export default DeleteConfirm;
