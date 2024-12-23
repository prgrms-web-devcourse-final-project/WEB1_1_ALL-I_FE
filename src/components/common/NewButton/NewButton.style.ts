import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-black);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-medium);
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: var(--icon-size-group-3);
  height: var(--icon-size-group-3);

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }
`;
