import styled from "styled-components";
import "@/index.css";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const StyledTimeInput = styled.input.attrs({ type: "time" })`
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--color-gray-light);
  padding: 0.5rem;
  font-size: var(--font-size-medium);
  color: var(--color-black);
  outline: none;

  &:focus {
    border-bottom: 1px solid var(--color-primary);
  }

  &::placeholder {
    color: var(--color-gray-light);
  }
`;
