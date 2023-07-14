import { Outlet } from "react-router-dom";

import NavbarHead from "./Navbar";

export default function MainLayout() {
  return (
    <div>
      <NavbarHead />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}