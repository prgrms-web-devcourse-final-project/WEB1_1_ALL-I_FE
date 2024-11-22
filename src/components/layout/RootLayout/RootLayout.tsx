import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Bottom Navigation</footer>
    </>
  );
}

export default RootLayout;
