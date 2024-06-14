import { createBrowserRouter } from "react-router-dom";
import AllStep from "../components/Step/AllStep";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <AllStep />,
      },
      {
        path: "/home",
        element: <AllStep />,
      },
    ],
  },
]);
export default router;
