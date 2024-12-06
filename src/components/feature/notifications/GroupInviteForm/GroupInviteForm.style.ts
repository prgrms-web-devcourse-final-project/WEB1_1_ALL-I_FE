import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-default);
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const Content = styled.p`
  font-size: var(--font-size-medium);
  color: var(--color-gray-dark);
  span {
    font-weight: bold;
    margin: 0 0.2rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
`;
