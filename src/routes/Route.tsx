import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import NotFound from "../error/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
