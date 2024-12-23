import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Modal = styled.div`
  position: absolute;
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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  animation: ${fadeIn} 0.3s forwards;
`;

export const Span = styled.span`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  transition: 0.25s;
  color: var(--color-gray-light);
  &:hover {
    color: var(--color-red);
    font-weight: var(--font-weight-extrabold);
  }
`;
