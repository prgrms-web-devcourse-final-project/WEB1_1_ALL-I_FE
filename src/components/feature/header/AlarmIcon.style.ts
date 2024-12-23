import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Count = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  font-size: 0.8rem;
  border-radius: 50%;
  background-color: var(--color-red);
`;
