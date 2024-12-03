import PlusIcon from "@/assets/icons/plus.svg?react";
import * as Styled from "./PlusButton.style";

interface PlusButtonProps {
  label?: string; // 버튼에 표시될 텍스트
  onClick?: () => void; // 버튼 클릭 핸들러
}

function PlusButton({ label = "버튼", onClick }: PlusButtonProps) {
  return (
    <Styled.Container>
      <span>{label}</span>
      <Styled.IconWrapper onClick={onClick}>
        <PlusIcon
          width={20}
          height={20}
          fill="currentColor"
          stroke="currentColor"
        />
      </Styled.IconWrapper>
    </Styled.Container>
  );
}

export default PlusButton;
