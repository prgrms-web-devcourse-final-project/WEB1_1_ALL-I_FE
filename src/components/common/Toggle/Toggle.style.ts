import styled from "styled-components";

export const ToggleWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export const ToggleContainer = styled.div<{ $isOn: boolean }>`
  width: 36px;
  height: 14.63px;
  background-color: ${({ $isOn }) =>
    $isOn ? "var(--color-primary)" : "#e1e1e1"};
  border-radius: 7.31px;
  transition: all 0.3s ease-in-out;
  position: relative;
`;

export const ToggleCircle = styled.div<{ $isOn: boolean }>`
  width: 12.38px;
  height: 12.38px;
  background-color: var(--color-white);
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ $isOn }) => ($isOn ? "calc(100% - 12.38px)" : "0")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
