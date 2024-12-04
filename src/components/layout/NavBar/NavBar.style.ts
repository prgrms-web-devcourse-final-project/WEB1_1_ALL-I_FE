import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  padding: 0 var(--padding-side-default);
  padding-bottom: env(safe-area-inset-bottom); // iOS 안전 영역 추가
  background-color: var(--background-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.06);

  max-width: var(--breakpoint-mobile);
  z-index: 100;
`;

export const NavItem = styled(NavLink)`
  min-width: 3rem;
  min-height: 3rem;
  padding: 0.5rem;

  color: var(--color-gray-dark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  text-decoration: none;

  transition: color 0.3s ease;

  svg {
    width: var(--icon-size-group-1);
    height: var(--icon-size-group-1);
  }

  span {
    font-size: var(--font-size-micro);
    font-weight: var(--font-weight-regular);
    line-height: 1.2;
  }

  &.active {
    color: var(--color-primary-hover);
    font-weight: var(--font-weight-medium);
  }

  &:hover {
    color: var(--color-primary);
    font-weight: var(--font-weight-medium);

    svg {
      stroke: var(--color-primary);
      transition: stroke 0.3s ease;
    }
  }
`;
