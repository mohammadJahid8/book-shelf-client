import { Outlet } from "react-router-dom";

import NavbarHead from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div>
      <NavbarHead />
      <div className="">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
