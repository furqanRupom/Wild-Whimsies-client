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
            },{
                path:"/MyToys",
                element:<PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path:"/updateToys/:id",
                element:<UpdateToys />,
                loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path:"/singleToys/:id",
                element:<PrivateRoute><SingleToys /></PrivateRoute> ,
                loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            }
        ]
    }
])

export default router