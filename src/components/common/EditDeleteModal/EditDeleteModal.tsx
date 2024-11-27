import * as Style from "./EditDeleteModal.style";

interface IProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  onClickEdit: () => void;
  onClickDelete: () => void;
}

function EditDeleteModal({
  top,
  bottom,
  left,
  right,
  onClickEdit,
  onClickDelete,
}: IProps) {
  return (
    <Style.Modal style={{ top, bottom, left, right }}>
      <Style.Span onClick={onClickEdit}>수정</Style.Span>
      <Style.Span onClick={onClickDelete}>삭제</Style.Span>
    </Style.Modal>
  );
}

export default EditDeleteModal;
