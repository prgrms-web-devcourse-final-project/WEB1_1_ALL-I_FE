import { Outlet, useLocation } from "react-router-dom";
import * as Styled from "./RootLayout.style";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";

function RootLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <Header />
      {isHomePage ? (
        <Outlet />
      ) : (
        <Styled.MainContainer>
          <Outlet />
        </Styled.MainContainer>
      )}
      <NavBar />
    </>
  );
}

export default RootLayout;
