import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  height: 4rem;
  background-color: var(--background-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--padding-side-default);
  width: 100%;

  max-width: var(--breakpoint-mobile);

  // border-bottom: 1px solid #e0e0e0;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  z-index: 999;
  text-decoration: none;

  box-sizing: border-box;
  transition: border-bottom 0.3s ease;
  // box-shadow 0.3s ease;
`;

export const StyledNavLink = styled(NavLink)`
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-primary-hover);
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--icon-size-group-2);
`;

export const IconWrapper = styled.div`
  color: var(--color-primary);
  transition: color 0.3s ease;
  cursor: pointer;
  height: var(--icon-size-group-1);
  width: var(--icon-size-group-1);

  &:hover {
    color: var(--color-primary-hover);
  }
`;
