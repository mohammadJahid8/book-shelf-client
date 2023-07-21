import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";

import { useAppDispatch } from "./redux/hook";
import { setUser } from "./redux/features/user/userSlice";
import { useGetMyProfileQuery } from "./redux/features/user/userApi";

function App() {
  const { isLoading } = useGetMyProfileQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    const localToken = JSON.parse(localStorage.getItem("user") || "{}");
    console.log(localToken);

    const user = {
      email: localToken?.email,
      token: localToken.token,
    };

    dispatch(setUser(user));
  }, [dispatch, isLoading]);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
