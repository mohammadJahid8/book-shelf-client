import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";

import { useAppDispatch } from "./redux/hook";
import { setUser } from "./redux/features/user/userSlice";
import { useGetMyProfileQuery } from "./redux/features/user/userApi";
import { setToken } from "./redux/features/user/authSlice";

function App() {
  const { isLoading } = useGetMyProfileQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const dispatch = useAppDispatch();
  const localToken = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    const user = {
      email: localToken?.email,
      token: localToken.token,
    };

    console.log("in app", localToken);
    dispatch(setUser(user));
    dispatch(setToken(user.token));
  }, [dispatch, isLoading, localToken]);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
