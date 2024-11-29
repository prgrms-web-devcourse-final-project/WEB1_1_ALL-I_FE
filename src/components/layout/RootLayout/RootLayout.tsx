import { Outlet } from "react-router-dom";
import * as Style from "./RootLayout.style";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
function RootLayout() {
  return (
    <Style.RootLayoutWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <NavBar />
    </Style.RootLayoutWrapper>
  );
}

export default RootLayout;
