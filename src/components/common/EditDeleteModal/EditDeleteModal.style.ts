import styled from "styled-components";

export const Modal = styled.div<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}>`
  position: absolute;
  top: ${({ top }) => top}px;
  bottom: ${({ bottom }) => bottom}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  width: 72px;
  height: 74px;
  border-radius: var(--border-radius-large);
  background-color: var(--color-white);
  border: 1px solid var(--color-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Span = styled.span`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  font-family: "Noto Sans KR";
  cursor: pointer;
  &:first-child {
    color: var(--color-gray-light);
  }
  &:last-child {
    color: var(--color-red);
  }
`;
