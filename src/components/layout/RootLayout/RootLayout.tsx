import { Outlet } from "react-router-dom";
import * as Styled from "./RootLayout.style";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <Styled.MainContainer>
        <Outlet />
      </Styled.MainContainer>
      <NavBar />
    </>
  );
}

export default RootLayout;
