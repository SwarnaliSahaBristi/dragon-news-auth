import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";


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
            loader: ()=> fetch('/news.json')
        }
    ]
  },
]);

export default router;