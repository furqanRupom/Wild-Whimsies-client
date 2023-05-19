import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import AddToysForm from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            },
            {
                path:"/AddToys",
                element:<AddToysForm />
            },
            {
                path:"/AllToys",
                element:<AllToys />,
            }
        ]
    }
])

export default router