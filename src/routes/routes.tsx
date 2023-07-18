import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Signup from "@/pages/Signup";
import Signin from "@/pages/Signin";
import AllBooks from "@/pages/AllBooks";
import BookDetails from "@/pages/BookDetails";
import EditBook from "@/pages/EditBook";
import AddBook from "@/pages/AddBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
