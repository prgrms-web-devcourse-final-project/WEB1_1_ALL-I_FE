import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1.5px solid var(--color-primary);
  border-radius: 8px;
  font-size: 1rem;

  &:hover {
    border: 1.5px solid var(--color-primary-hover);
  }

  &:focus {
    border: 1.5px solid var(--color-primary-hover);
    outline: none;
  }
`;
export const SubmitButton = styled.button`
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;
