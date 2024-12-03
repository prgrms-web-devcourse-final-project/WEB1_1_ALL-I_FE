import { Outlet } from "react-router-dom";
import * as Styled from "./RootLayout.style";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";

function RootLayout() {
  return (
    <Styled.RootLayoutWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <NavBar />
    </Styled.RootLayoutWrapper>
  );
}

export default RootLayout;
