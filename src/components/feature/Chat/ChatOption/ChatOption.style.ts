import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Button = styled.button<{ $isSelected: boolean }>`
  background-color: ${({ $isSelected }) =>
    $isSelected ? "var(--color-primary)" : "transparent"};
  border: 2px solid var(--color-primary);
  border-radius: 1.2rem;
  padding: 6px 10px;
  color: ${({ $isSelected }) =>
    $isSelected ? "white" : "var(--color-primary)"};
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  &:hover {
    background-color: var(--color-primary);
    color: white;
  }

  &:active {
    background-color: var(--color-primary-hover);
  }
`;
