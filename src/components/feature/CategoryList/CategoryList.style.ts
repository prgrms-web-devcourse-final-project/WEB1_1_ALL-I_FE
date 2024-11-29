import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-primary);
  width: 100%;
  padding: 10px;
  position: relative;
  &:hover {
    border-bottom: 1.25px solid var(--color-primary-hover);
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RightIcon = styled.div`
  margin-left: auto;
  color: var(--color-gray-light);
  transition: color 0.25s ease;
  cursor: pointer;
  position: relative;
  &:hover {
    color: var(--color-gray-dark);
  }
`;
