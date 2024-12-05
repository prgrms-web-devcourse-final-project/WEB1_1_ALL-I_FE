import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: var(--icon-size-group-2);
  height: var(--icon-size-group-2);

  &:hover {
    transform: scale(1.1);
    transition: transform 0.25s ease;
  }
`;
