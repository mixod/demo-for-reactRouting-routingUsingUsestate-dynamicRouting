import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

function MainLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
