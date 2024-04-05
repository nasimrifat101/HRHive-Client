import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import NotFound from "../error/NotFound";
import DashboardLay from "../layout/DashboardLay";
import Stats from "../dashboard/HrDashboard/Stats";

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
      {
        path: "/dashboard",
        element: <DashboardLay/>,
        children:[
          {
            path: '/dashboard/stats',
            element: <Stats/>
          }
        ]
      }
    ],
  },
]);
