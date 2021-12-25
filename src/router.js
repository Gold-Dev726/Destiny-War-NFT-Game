import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";

import MainLayout from "layouts";
import Homepage from "pages/Homepage";
import Adminpage from "pages/Adminpage";
import Devpage from "pages/Devpage";
import Presalepage from "pages/Presalepage";
import Inventorypage from "pages/Inventorypage";
import Newgame from "pages/Newgame";
import Marketpage from "pages/Marketpage";
import Itempage from "pages/Itempage";
import MountItempage from "pages/MountItempage";
import PetItempage from "pages/PetItempage";
import Loading from "components/Loading";
import AdminGuard from "guards/AdminGuard";
import Admin2Guard from "guards/Admin2Guard";

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
        { path: "/inventories", element: <Inventorypage /> },
        { path: "/marketplace", element: <Marketpage /> },
        { path: "/game", element: <Newgame /> },
        { path: "/items/character/:id", element: <Itempage /> },
        { path: "/items/mount/:id", element: <MountItempage /> },
        { path: "/items/pet/:id", element: <PetItempage /> },
        {
          path: "/admin",
          element: (
            <AdminGuard>
              <Adminpage />
            </AdminGuard>
          ),
        },
        {
          path: "/adminrolepage",
          element: (
            <Admin2Guard>
              <Devpage />
            </Admin2Guard>
          ),
        },
      ],
    },
  ]);
}

// IMPORT COMPONENTS

// const Homepage = Loadable(lazy(() => import("pages/Homepage")));
