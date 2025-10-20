import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "",
            element: <Home></Home>
        },
        {
            path: "/category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: ()=> fetch('/news.json'),
            hydrateFallbackElement: <Loading></Loading>
        },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path: '/auth/login',
            element: <Login></Login>,
        },
        {
            path: '/auth/register',
            element: <Register></Register>,
        }
    ]
  },
  {
    path: '/news-details/:id',
    element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute> ,
    loader: ()=> fetch('/news.json'),
    hydrateFallbackElement: <Loading></Loading>
  }
]);

export default router;