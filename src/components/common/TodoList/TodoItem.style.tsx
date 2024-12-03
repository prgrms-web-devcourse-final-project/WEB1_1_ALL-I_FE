import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 0.8rem;
  border-bottom: 1px solid #97cdbd;
`;

export const ExplanContainer = styled.div`
  min-width: 50%;
  display: flex;
  flex: 1;
  gap: 1rem;
  align-items: center;
  overflow: hidden;
`;

export const TodoText = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "isChecked",
})<{ isChecked?: boolean }>`
  width: 100%;
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
  color: ${(props) => (props.isChecked ? "gray" : "black")};
`;

export const SetContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const AssignWrapper = styled.div`
  width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const AssignPeople = styled.span<{ isMemDone: boolean }>`
  font-size: var(--font-size-small);

  color: ${(props) => (props.isMemDone ? "#92C8B8" : "#B1B1B1")};
`;

export const CheckboxCustom = styled.input.attrs({ type: "checkbox" })`
  /* 기본 체크박스 숨기기 */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  /* 커스텀 스타일 */
  width: 17px;
  height: 17px;
  border: 1px solid #97cdbd;
  border-radius: 3px; /* 선택 사항: 둥근 모서리 */
  background-color: transparent;
  cursor: pointer;

  /* 체크된 상태 스타일 */
  &:checked {
    background-color: #97cdbd; /* 배경색 */
    position: relative;
  }

  /* 체크 표시 */
  &:checked::after {
    content: "✓"; /* 체크 표시 */
    font-size: 14px; /* 체크 표시 크기 */
    color: #ffffff; /* 체크 표시 색상 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
