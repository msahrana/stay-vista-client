import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../error/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import { getRoom } from "../api/rooms";
import DashboardLayout from "../layout/DashboardLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: ({params}) => getRoom(params.id)
      },
    ],
  },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signUp',
      element: <SignUp></SignUp>
    },
    {
      path: '/dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children: [{}]
    }
  ]);

