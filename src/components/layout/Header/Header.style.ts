import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: var(--breakpoint-mobile);
  padding: var(--padding-side-default);

  z-index: 1000;
  background-color: #ffffff;
  position: fixed;
  box-sizing: border-box;
  transition:
    border-bottom 0.3s ease,
    box-shadow 0.3s ease;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: color 0.3s ease;

  font-size: var(--icon-size-group-2);

  &:hover {
    color: var(--color-primary-hover);
  }
`;

export const IconWrapper = styled.div`
  color: var(--color-primary);
  transition: color 0.3s ease;
  cursor: pointer;
  width: var(--icon-size-group-2);
  height: var(--icon-size-group-2);

  &:hover {
    color: var(--color-primary-hover);
  }
`;
