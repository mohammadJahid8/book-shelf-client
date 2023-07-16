import { Outlet } from "react-router-dom";

import NavbarHead from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

export default function MainLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavbarHead />
      <div className="mt-20 max-w-screen-xl mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
