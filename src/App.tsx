import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout";

import { useAppDispatch, useAppSelector } from "./redux/hook";
import { User, setUser } from "./redux/features/user/userSlice";

function App() {
  const [userData, setUserData] = useState({} as User);
  const { user } = useAppSelector((state) => state.user);

  console.log({ user });

  const dispatch = useAppDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    setUserData(userData);
  }, []);

  useEffect(() => {
    if (userData) {
      const user = {
        email: userData.email,
        token: userData.token,
      };

      dispatch(setUser(user));
    }
  }, [userData, dispatch]);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
