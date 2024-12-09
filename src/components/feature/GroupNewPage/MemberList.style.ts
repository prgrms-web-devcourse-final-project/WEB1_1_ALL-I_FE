import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AddMemContainer = styled.div`
  position: relative;

  > button {
    position: absolute;
    right: 0px;
    top: 50%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfoLeft = styled.div`
  display: flex;
  gap: 1rem;
`;

export const UserRole = styled.p`
  font-size: var(--font-size-small);
  color: var(--color-gray-medium);
  margin-right: 1rem;
`;
