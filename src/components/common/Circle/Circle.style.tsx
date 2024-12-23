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
  gap: 35px;
  align-items: center;
`;

export const ColorContainer = styled.div`
  width: calc(100% - 3rem);
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

  width: 42px;
  height: 42px;

  border-radius: var(--border-radius-circle);
  outline: none;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.35);
  background-color: ${(props) => props.$color};
  transition:
    transform 0.2s,
    border 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  /* 체크 됐을 때 내부 모습 */
  &:checked {
    border: 3px solid var(--color-primary);
  }
`;

export const CirclePicker = styled.input.attrs({ type: "color" })`
  width: 42px;
  height: 42px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.35);
  &::-webkit-color-swatch-wrapper {
    padding: 0;
    border-radius: 50%;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
  }
  transition:
    transform 0.2s,
    border 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
export const Label = styled.label`
  margin-top: 1rem;
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-bold);
  color: var(--color-black);
  align-self: flex-start;
`;
