import { Button } from "@/components/common/Button/Button.style";
import * as Style from "./DeleteConfirm.style";

interface IProps {
  text: string;
  onClickCancel: () => void;
  onClickDelete: () => void;
}

function DeleteConfirm({ text, onClickCancel, onClickDelete }: IProps) {
  return (
    <Style.Modal>
      <Style.ConfirmBox>
        <Style.Text>{text}</Style.Text>
        <Style.ButtonBox>
          <Button $buttonType="whiteMicro" onClick={onClickCancel}>
            취소
          </Button>
          <Button $buttonType="primaryMicro" onClick={onClickDelete}>
            삭제
          </Button>
        </Style.ButtonBox>
      </Style.ConfirmBox>
    </Style.Modal>
  );
}

export default DeleteConfirm;
