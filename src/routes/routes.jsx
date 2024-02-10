import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main.jsx";
import Home from "../pages/Home.jsx";
import UserDetails from "../pages/UserDetails.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
      },
    ],
  },
]);
export default routes;
