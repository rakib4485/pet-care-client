import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import Contact from "../pages/Contact/Contact/Contact";
import Services from "../pages/Services/Services/Services";

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
            }
        ]
    }
])