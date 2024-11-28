import { Outlet } from "react-router-dom";
import * as Style from "./RootLayout.style";
import NavBar from "../NavBar/NavBar";
function RootLayout() {
  return (
    <Style.RootLayoutWrapper>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <NavBar />
    </Style.RootLayoutWrapper>
  );
}

export default RootLayout;
