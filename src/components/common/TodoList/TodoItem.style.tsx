import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin: 0 auto;
  padding: 0.5rem;
  border-bottom: 1px solid #97cdbd;
`;

export const ExplanContainer = styled.div`
  min-width: 50%;
  display: flex;
  flex: 1;
  gap: 7px;
  align-items: center;
  overflow: hidden;
`;

export const TodoText = styled.p<{ isChecked: boolean }>`
  width: 100%;
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
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
  width: 17px;
  height: 17px;
  border: 1px solid #97cdbd;
  accent-color: #97cdbd; // 체크 됐을 때의 색상
`;
