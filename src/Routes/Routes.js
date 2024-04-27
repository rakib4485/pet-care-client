import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import Contact from "../pages/Contact/Contact/Contact";
import Services from "../pages/Services/Services/Services";
import Error from "../pages/Error/Error";
import Shop from "../pages/Shop/Shop/Shop";
import Appointments from "../pages/Appointments/Appointments/Appointments";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AuthenticationLayout from "../layout/AuthenticationLayout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/services',
                element: <Services/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/products/:id',
                element: <ProductDetails/>,
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/products/${params.id}`);
                }
            },
            {
                path: '/appointments',
                element: <Appointments/>
            },
        ]
    },
    {
        path: '/login',
        element: <AuthenticationLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },
    {
        path: '/signup',
        element: <AuthenticationLayout/>,
        children: [
            {
                path: '/signup',
                element: <Signup/>
            }
        ]
    },
    
    {
        path: '*',
        element: <Error/>
    }
])