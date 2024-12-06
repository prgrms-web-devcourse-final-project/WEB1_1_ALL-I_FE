import styled from "styled-components";

export const CategoryFilterItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  height: 25px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  margin-left: 0.5rem;
  height: 100%;
  justify-content: space-between;
`;
export const CategoryText = styled.div`
  font-size: var(--font-size-small);
  color: var(--color-gray-dark);
  line-height: 1;
`;

export const GroupText = styled.div`
  font-size: var(--font-size-micro-small);
  color: var(--color-gray-medium);
  line-height: 1;
  height: var(--font-size-micro-small);
`;
