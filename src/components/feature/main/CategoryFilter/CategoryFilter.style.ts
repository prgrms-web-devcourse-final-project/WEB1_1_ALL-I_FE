import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  width: 50%;
  height: 50%;
  background-color: white;
  border-radius: var(--border-radius-large);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: var(--padding-default);
  max-width: var(--breakpoint-mobile);
  z-index: 1002;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;
