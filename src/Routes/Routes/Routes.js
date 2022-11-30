import { createBrowserRouter } from "react-router-dom";
import Deshboard from "../../Deshboard/Deshboard/Deshboard";
import Main from "../../Layout/Main";
import ComputerCollections from "../../Pages/Home/ComputerCollections/ComputerCollections";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import SignUp from "../../Pages/Home/SignUP/SignUp";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('http://localhost:5000/allComputers ')
                },
                element: <Home></Home>
            },
            {
                path: '/computers/:id',
                element: <PrivateRoute><ComputerCollections></ComputerCollections></PrivateRoute>,
                loader:({params}) => {
                    return fetch(`http://localhost:5000/computers/${params.id}`)
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Deshboard></Deshboard></PrivateRoute>
    }
])

export default router;