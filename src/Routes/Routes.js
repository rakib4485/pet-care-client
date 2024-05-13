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
import SingleDoctor from "../pages/Appointments/SingleDoctor/SingleDoctor";
import AppointmentPaymentSuccess from "../pages/Appointments/AppointmentPaymentSuccess/AppointmentPaymentSuccess";
import Carts from "../pages/Carts/Carts";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../layout/DashboardLayout";
import Checkout from "../pages/Checkout/Checkout";
import MyAppointment from "../pages/Dashboard/MyAppointment/MyAppointment";
import OrderPaymentSuccess from "../pages/Checkout/OrderPaymentSuccess";
import MyOrder from "../pages/Dashboard/MyOrder/MyOrder";
import Vendors from "../pages/Dashboard/Vendors/Vendors";
import AddDoctor from "../pages/Dashboard/AddDoctor/AddDoctor";
import AllDoctors from "../pages/Dashboard/AllDoctors/AllDoctors";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";

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
                element: <PrivateRoutes><ProductDetails/></PrivateRoutes>,
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/products/${params.id}`);
                }
            },
            {
                path: '/doctors/:id',
                element: <PrivateRoutes><SingleDoctor/></PrivateRoutes>,
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/appointmentOption/${params.id}`);
                }
            },
            {
                path: '/appointments',
                element: <Appointments/>
            },
            {
                path: '/appointmentPayment/success/:tranId',
                element: <PrivateRoutes><AppointmentPaymentSuccess/></PrivateRoutes>
            },
            {
                path: '/orderPayment/success/:tranId',
                element: <OrderPaymentSuccess/>
            },
            {
                path: '/carts',
                element: <Carts/>
            },
            {
                path: '/checkout',
                element: <PrivateRoutes><Checkout/></PrivateRoutes>
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
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout/></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment/>
            },
            {
                path: '/dashboard/my-order',
                element: <MyOrder/>
            },
            {
                path: '/dashboard/vendors',
                element: <Vendors/>
            },
            {
                path: '/dashboard/add-doctor',
                element: <AddDoctor/>
            },
            {
                path: '/dashboard/doctors',
                element: <AllDoctors/>
            },
            {
                path: '/dashboard/admin-dashboard',
                element: <AdminDashboard/>
            },
            {
                path: '/dashboard/my-products',
                element: <MyProducts/>
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct/>
            },
        ]
    },
    
    {
        path: '*',
        element: <Error/>
    }
])