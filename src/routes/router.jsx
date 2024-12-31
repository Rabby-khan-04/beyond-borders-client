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
        element: <Register />,
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
      },
      {
        path: "spot-list/:email",
        element: <SpotList />,
      },
    ],
  },
]);

export default router;
