import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import AddToysForm from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToys from "../pages/UpdateToys/UpdateToys";
import SingleToys from "../pages/SingleToys/SingleToys";
import PrivateRoute from "../Private/PrivateRoute";
import ErrorPage from "../pages/Error/ErrorPage";
import Blogs from "../pages/Blog/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "AddToys",
        element: (
          <PrivateRoute>
            <AddToysForm />
          </PrivateRoute>
        ),
      },
      {
        path: "AllToys",
        element: <AllToys />,
      },
      {
        path: "MyToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "updateToys/:id",
        element: <UpdateToys />,
        loader: ({ params }) =>
          fetch(`https://wild-whimsies-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/singleToys/:id",
        element: (
          <PrivateRoute>
            <SingleToys />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://wild-whimsies-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default router;
