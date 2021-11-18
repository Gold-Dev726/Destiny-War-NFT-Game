import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/styles";
import {
  Box,
  Button,
  Stack,
  AppBar,
  Toolbar,
  Container,
  Typography,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/Logo";
import ConnectButton from "components/ConnectButton";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-cib/twitter";
import discordFill from "@iconify/icons-cib/discord";
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 100;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  background: "transparent",
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP,
  },
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <ToolbarStyle disableGutters>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(255, 255, 255, 0.2)",
            height: 1,
            borderRadius: "0 0 10px 10px",
            backdropFilter: "blur(20px)",
          }}
        >
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={5}
            sx={{ ml: 10, fontSize: 16 }}
          >
            <Typography
              component={RouterLink}
              to="/"
              variant="h4"
              color="#28f0a5"
              sx={{ textDecoration: "none" }}
            >
              HOME
            </Typography>
            <Typography
              component={RouterLink}
              to="/"
              variant="h4"
              color="#28f0a5"
              sx={{ textDecoration: "none" }}
            >
              INVENTORY
            </Typography>
            <Typography
              component={RouterLink}
              to="/"
              variant="h4"
              color="#28f0a5"
              sx={{ textDecoration: "none" }}
            >
              WHITEPAPER
            </Typography>
            <Typography
              component={RouterLink}
              to="/presale"
              variant="h4"
              color="#28f0a5"
              sx={{ textDecoration: "none" }}
            >
              PRE-SALE
            </Typography>
            <Typography
              component={RouterLink}
              to="/#"
              variant="h4"
              color="#28f0a5"
              sx={{ textDecoration: "none" }}
            >
              MARKETPLACE
            </Typography>
            <ConnectButton />
          </Stack>
        </Container>
      </ToolbarStyle>
    </AppBar>
  );
}
