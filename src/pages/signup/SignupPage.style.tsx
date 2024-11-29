import styled from "styled-components";

export const Wrapper = styled.div`
  width: 339px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  padding-top: 80px;
  padding-bottom: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const FilePreview = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: #c9c9c9;
  border-radius: var(--border-radius-circle);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-circle);
  object-fit: cover;
`;

export const InputFile = styled.input.attrs({ type: "file" })`
  display: none;
`;
