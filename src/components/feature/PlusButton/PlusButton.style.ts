import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-black);
  font-weight: var(--font-weight-bold);
  padding: 0.5rem;
  margin: 1rem 0;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }
`;
