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
