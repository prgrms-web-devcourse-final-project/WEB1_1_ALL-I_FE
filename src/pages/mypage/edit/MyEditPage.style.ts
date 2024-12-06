import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ImgContainer = styled.label`
  width: 8.5rem;
  height: 8.5rem;
  border-radius: var(--border-radius-circle);
  background-color: #e1e1e1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  cursor: pointer;
`;

export const FileUpload = styled.input.attrs({ type: "file" })`
  display: none;
`;
