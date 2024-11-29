import * as Styled from "./EditDeleteModal.style";

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
    <Styled.Modal style={{ top, bottom, left, right }}>
      <Styled.Span onClick={onClickEdit}>수정</Styled.Span>
      <Styled.Span onClick={onClickDelete}>삭제</Styled.Span>
    </Styled.Modal>
  );
}

export default EditDeleteModal;
