import styled from "styled-components";

// Circle.tsx
export const CircleColor = styled.div<{
  $color: string;
}>`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: var(--border-radius-circle);
  background-color: ${(props) => props.$color};
`;

// CircleInput.tsx
export const ColorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const ColorContainer = styled.div`
  width: calc(100% - 4.5rem);
  display: flex;
  justify-content: space-between;
`;

export const CircleBtn = styled.input.attrs({ type: "radio" })<{
  $color: string;
}>`
  /* 기본 스타일 제거 및 커스텀 */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: var(--border-radius-circle);
  outline: none;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.$color};

  /* 체크 됐을 때 내부 모습 */
  &:checked::after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: var(--font-size-small);
    color: #111;
  }
`;

export const CirclePicker = styled.input.attrs({ type: "color" })`
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;

  padding: 0;
  cursor: pointer;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  &::-webkit-color-swatch {
    border: none;
  }
`;
