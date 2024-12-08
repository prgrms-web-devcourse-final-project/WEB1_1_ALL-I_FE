import styled from "styled-components";

export const Container = styled.main`
  padding: 1rem;

  height: 100%;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 10rem);
  gap: 2rem;

  > div {
    width: 100%;
  }
  > button {
    width: 100%;
    margin-top: auto;
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
