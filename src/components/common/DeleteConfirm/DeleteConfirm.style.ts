import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1px);
  z-index: 1100;
`;

export const ConfirmBox = styled.div`
  width: 252px;
  height: 171px;
  background-color: var(--color-white);
  border-radius: var(--border-radius-large);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.span`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-bold);
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
`;
