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

  z-index: 1000;

  box-sizing: border-box;
  transition:
    border-bottom 0.3s ease,
    box-shadow 0.3s ease;

  background-color: red;
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

export const LogoWrapper = styled.div`
  font-size: var(--icon-size-group-2);
`;

export const IconWrapper = styled.div`
  color: var(--color-primary);
  transition: color 0.3s ease;
  cursor: pointer;
  width: var(--icon-size-group-1);
  height: var(--icon-size-group-1);

  background-color: yellow;
  &:hover {
    color: var(--color-primary-hover);
  }
`;
