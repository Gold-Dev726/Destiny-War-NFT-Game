import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";

import MainLayout from "layouts";
import Homepage from "pages/Homepage";
import Presalepage from "pages/Presalepage";
import Inventorypage from "pages/Inventorypage";
import Newgame from "pages/Newgame";
import Itempage from "pages/Itempage";
import Videopage from "pages/Videopage";
import Loading from "components/Loading";

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/presale", element: <Presalepage /> },
        { path: "/inventory", element: <Inventorypage /> },
        { path: "/game", element: <Newgame /> },
        { path: "/items/character/:id", element: <Itempage /> },
        { path: "/landing", element: <Videopage /> },
      ],
    },
  ]);
}

// IMPORT COMPONENTS

// const Homepage = Loadable(lazy(() => import("pages/Homepage")));
