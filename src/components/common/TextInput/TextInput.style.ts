import styled from "styled-components";

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-bold);
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--color-primary);
  padding: 0.5rem;
  font-size: var(--font-size-medium);
  color: var(--color-black);
  outline: none;

  &:focus {
    border-bottom: 1px solid var(--color-primary-hover);
  }

  &::placeholder {
    color: var(--color-gray-light);
  }
`;

export const ErrorMessage = styled.p`
  color: #ff7e7e;
  font-size: var(--font-size-small);
  margin-top: 0.5rem;
`;
