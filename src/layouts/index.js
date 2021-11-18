import { useLocation, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
//
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
      <Scrollbar>
        <Box
          sx={{
            height: 1,
            background: "url(/bg.png)",
            backgroundSize: "150% 100%",
            backgroundPosition: '-300px'
          }}
        >
          <MainNavbar />
          <Box sx={{ py: 4 }}>
            <Outlet />
          </Box>
          <MainFooter />
        </Box>
      </Scrollbar>
      {/* <ParticlesBg num={12} color="#ffffff" type="square" bg={true} /> */}
    </>
  );
}
