import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: var(--color-primary);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 25% 0 10% 0;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 3rem;
  height: 1.6rem;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const explan = styled.p`
  text-align: center;
  font-size: 1rem;
  color: var(--color-white);
  font-weight: var(--font-weight-bold);
`;
