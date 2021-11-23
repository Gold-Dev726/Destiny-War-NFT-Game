import { useLocation, Outlet } from "react-router-dom";
import { Box, Hidden } from "@mui/material";
//
import MainSidebar from "./MainSidebar";
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
import Scrollbar from "components/Scrollbar";
import ParticlesBg from "particles-bg";

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  let config = {};

  return (
    <>
      {/* <Scrollbar> */}
        <Box
          sx={{
            // height: 1,
            background: "url(/bg.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            // minHeight: "100vh",
          }}
        >
          <Hidden smDown>
            <MainSidebar />
          </Hidden>
          <MainNavbar />
          <Box>
            <Outlet />
          </Box>
          <MainFooter />
        </Box>
      {/* </Scrollbar> */}
      {/* <ParticlesBg num={12} color="#ffffff" type="square" bg={true} /> */}
    </>
  );
}
