import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MyToys from "../Pages/Home/MyToys/MyToys";
import Blogs from "../Pages/Home/Blogs/Blogs";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import CreatePost from "../Pages/Home/CreatePost/CreatePost";
import AllToys from "../Pages/AllToys/AllToys";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path:'allToys',
            element: <AllToys></AllToys>,
            loader: ()=> fetch('https://nazmul-store-server.vercel.app/allToys'),
        },
        {
          path:'myToys',
          element: <MyToys></MyToys>,
          // loader: ({params})=> fetch(`https://nazmul-store-server.vercel.app/allToys/${params.id}`)
        },
        {
          path:'blogs',
          element: <Blogs></Blogs>,
        },
        {
          path:'login',
          element: <Login></Login>,
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>,
        },
        {
          path:'createPost',
          element:<CreatePost></CreatePost>,
        },
        {
          path:'details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params})=> fetch(`https://nazmul-store-server.vercel.app/allToys/${params.id}`)

        },
      ]
    },
  ]);

  export default router;