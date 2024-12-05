import PlusIcon from "@/assets/icons/plus.svg?react";
import * as Styled from "./NewButton.style";

interface NewButtonProps {
  label?: string; // 버튼에 표시될 텍스트
  onClick?: () => void; // 버튼 클릭 핸들러
}

function NewButton({ label = "버튼", onClick }: NewButtonProps) {
  return (
    <Styled.Container>
      <span>{label}</span>
      <Styled.IconWrapper onClick={onClick}>
        <PlusIcon
          width="100%"
          height="100%"
          fill="currentColor"
          stroke="currentColor"
        />
      </Styled.IconWrapper>
    </Styled.Container>
  );
}

export default NewButton;
