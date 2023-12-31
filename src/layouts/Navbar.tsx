import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import bookshelf from "../assets/bookshelf.png";
import "./Navbar.css";

import { useAppDispatch, useAppSelector } from "@/redux/hook";

import { setUser } from "@/redux/features/user/userSlice";

export default function NavbarHead() {
  const [openNav, setOpenNav] = React.useState(false);

  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const userEmail = user?.email;

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");

    dispatch(
      setUser({
        email: "",
        token: "",
      })
    );
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/allbooks">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          ALL BOOKS
        </Typography>
      </Link>
      {userEmail && (
        <>
          <Link to="/wishlist">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              WISHLIST
            </Typography>
          </Link>
          <Link to="/reading">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              CURRENTLY READING
            </Typography>
          </Link>
        </>
      )}
    </ul>
  );

  return (
    <>
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 navbar-bg">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium flex">
              <img src={bookshelf} alt="bookshelf" className="h-6 w-6" />
              BOOK SHELF
            </Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            {userEmail ? (
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={handleLogout}
              >
                <span>SIGN OUT</span>
              </Button>
            ) : (
              <Link to="/signin">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>SIGN IN</span>
                </Button>
              </Link>
            )}

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          {userEmail ? (
            <Button
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2"
              onClick={handleLogout}
            >
              <span>SIGN OUT</span>
            </Button>
          ) : (
            <Link to="/signin">
              <Button variant="gradient" size="sm" fullWidth className="mb-2">
                <span>SIGN IN</span>
              </Button>
            </Link>
          )}
        </Collapse>
      </Navbar>
    </>
  );
}
