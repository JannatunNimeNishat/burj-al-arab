import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Book from "../pages/Book";
import SingleRoom from "../pages/SingleRoom";
import Checkout from "../pages/Checkout";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'book',
                element:<Book></Book>
            },
            {
                path:'rooms-details/:id',
                element:<SingleRoom></SingleRoom>,
                loader: ({params})=> fetch(`http://localhost:5000/rooms-details/${params.id}`)
            },
            {
                path:'/checkout',
                element:<Checkout></Checkout>
            }
            
        ]
    }
])


export default router;
