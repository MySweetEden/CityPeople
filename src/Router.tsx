import { createBrowserRouter } from "react-router-dom";

import Top from "./page/Top";
import Compare from "./page/Compare";
import History from "./page/History";
import Detail from "./page/Detail";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Top />,
      },
      {
        path: "compare",
        element: <Compare />,
      },
      {
        path: "detail/:city",
        element: <Detail />,
      },
    ],
  },

  {
    path: "*",
    element: (
      <div>
        <p>ページが見つかりません</p>
        <p>404</p>
      </div>
    ),
  },
]);

export default router;
