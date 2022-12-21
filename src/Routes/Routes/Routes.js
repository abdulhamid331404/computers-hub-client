import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../../Deshboard/AllUsers/AllUsers";
import Deshboard from "../../Deshboard/Deshboard/Deshboard";
import MyOrders from "../../Deshboard/MyOrders/MyOrders";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import ComputerCollections from "../../Pages/Home/ComputerCollections/ComputerCollections";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import SignUp from "../../Pages/Home/SignUP/SignUp";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('https://final-project-server-abdulhamid331404.vercel.app/allComputers')
                },
                element: <Home></Home>
            },
            {
                path: '/computers/:id',
                element: <PrivateRoute><ComputerCollections></ComputerCollections></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://final-project-server-abdulhamid331404.vercel.app/computers/${params.id}`)
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])

export default router;