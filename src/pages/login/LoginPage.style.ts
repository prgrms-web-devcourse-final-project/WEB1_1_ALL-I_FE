import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 30px;
`;

export const Name = styled.h1`
  color: var(--color-primary);
  display: flex;
  justify-content: flex-start;
`;

// 소개 멘트
export const Explan = styled.p`
  display: flex;
  justify-content: flex-start;
`;

// 폼
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const UserWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: var(--color-gray-medium);

  > a {
    color: var(--color-gray-meidum);

    &: hover {
      text-decoration: underline;
    }
  }
`;

export const LogoWrapper = styled.div`
  height: 2rem;
`;
