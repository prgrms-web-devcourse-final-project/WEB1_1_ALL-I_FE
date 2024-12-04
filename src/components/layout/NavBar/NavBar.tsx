import { useLocation, matchPath } from "react-router-dom";
import * as Styled from "./NavBar.style";
import { NAV_ITEMS, SHOW_NAV } from "./navConfig";

function NavBar() {
  const { pathname } = useLocation();

  const showNav = SHOW_NAV.some(
    ({ pattern, excludes = [] }) =>
      matchPath(pattern, pathname) &&
      !excludes.some((exclude) => matchPath(exclude, pathname))
  );

  if (!showNav) return null;

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
