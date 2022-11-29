import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ComputerCollections from "../../Pages/Home/ComputerCollections/ComputerCollections";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import SignUp from "../../Pages/Home/SignUP/SignUp";

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
                element: <ComputerCollections></ComputerCollections>,
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
    }
])

export default router;