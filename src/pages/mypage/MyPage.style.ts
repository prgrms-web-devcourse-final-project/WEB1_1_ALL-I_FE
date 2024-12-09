import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 30px;

  padding-top: 2.5rem;
`;

export const ToggleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 13px;
  position: absolute;
  right: 0.3rem;
  top: 0px;

  > p {
    font-weight: var(--font-weight-bold);
  }
`;

export const UserCotainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  border-radius: var(--border-radius-circle);
  background-color: #e1e1e1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserNameContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const UserName = styled.div`
  font-weight: var(--font-weight-bold);
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const Withdraw = styled.p`
  color: var(--color-gray-light);
  cursor: pointer;
`;
