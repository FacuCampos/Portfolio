import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const Navigation = () => {
  return <RouterProvider router={routes} />;
};

export default Navigation;
