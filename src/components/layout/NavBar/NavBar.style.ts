import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 0;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: var(--breakpoint-mobile);
  z-index: 1000;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  cursor: pointer;

  & > a {
    text-decoration: none;
    color: var(--color-gray-dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: color 0.3s ease;

    & > svg {
      margin-bottom: 4px;
    }

    &.active {
      color: var(--color-primary-hover);
      font-weight: var(--font-weight-bold);
    }

    &:hover {
      color: var(--color-primary);
      font-weight: var(--font-weight-bold);

      & > svg {
        stroke: var(--color-primary);
        transition: stroke 0.3s ease;
      }
    }
  }
`;
