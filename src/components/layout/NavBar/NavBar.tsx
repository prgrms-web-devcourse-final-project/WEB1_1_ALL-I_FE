import { useLocation, matchPath } from "react-router-dom";
import * as Styled from "./NavBar.style";
import { NAV_ITEMS, HIDDEN_PATHS } from "./navConfig";

function NavBar() {
  const { pathname } = useLocation();
  const shouldHideNav = HIDDEN_PATHS.some((path) => matchPath(path, pathname));

  if (shouldHideNav) return null;

  return (
    <Styled.NavContainer>
      {NAV_ITEMS.map(({ path, icon: Icon, label }) => (
        <Styled.NavItem
          key={path}
          to={path}
          className={({ isActive }) => (isActive ? "active" : "")}
          aria-label={label}
        >
          <Icon width="100%" height="100%" fill="none" stroke="currentColor" />
          <span>{label}</span>
        </Styled.NavItem>
      ))}
    </Styled.NavContainer>
  );
}

export default NavBar;
