import styled from "styled-components";

export const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.3rem;
  margin-bottom: 0.7rem;
  border-bottom: 1px solid var(--color-primary);
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TodoTitle = styled.div`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);
`;

export const CustomCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  -webkit-appearance: none;
  width: var(--size-checkbox);
  height: var(--size-checkbox);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-default);
  background-color: transparent;
  cursor: pointer;

  &:checked {
    background-color: var(--color-primary);
    position: relative;

    &::after {
      content: "✓";
      position: absolute;
      color: var(--color-white);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.8em;
    }
  }
`;
