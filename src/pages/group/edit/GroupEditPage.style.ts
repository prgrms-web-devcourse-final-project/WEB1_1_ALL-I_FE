import styled from "styled-components";

export const Wrapper = styled.form`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;

  > button {
    width: 100%;
  }
`;

export const GroupComtainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const GroupNameBorder = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-primary);
  padding: 0.5rem;
`;
