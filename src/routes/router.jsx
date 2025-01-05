import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AllTouristsSpot from "../pages/Tourists/AllTouristsSpot";
import UpdateTouristsSpot from "../pages/Tourists/UpdateTouristsSpot";
import ViewTouristsSpot from "../pages/Tourists/ViewTouristsSpot";
import SpotList from "../pages/Tourists/SpotList";
import axios from "axios";
import AddTouristsSpot from "../pages/Tourists/AddTouristsSpot";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "add-tourists-spot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "all-tourists-spot",
        element: <AllTouristsSpot />,
      },
      {
        path: "update-tourists-spot/:id",
        element: <UpdateTouristsSpot />,
      },
      {
        path: "tourists-spot/:id",
        element: <ViewTouristsSpot />,
        loader: ({ params }) =>
          axios.get(
            `http://localhost:5000/api/v1/tourists-spot/spot/${params.id}`
          ),
      },
      {
        path: "spot-list/:user_email",
        element: <SpotList />,
        loader: ({ params }) =>
          axios.get(
            `http://localhost:5000/api/v1/tourists-spot/my-spots/${params.user_email}`
          ),
      },
    ],
  },
]);

export default router;
