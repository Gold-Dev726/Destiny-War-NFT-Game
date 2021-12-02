import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// material
import { Stack, Container, Typography, Link } from "@mui/material";
import ConnectButton from "components/ConnectButton";
import Whitepaper from "./whitepaper.pdf";
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function MainNavbar() {
  return (
    <Stack direction="row" alignItems="center" spacing={5} sx={{ mt: -4 }}>
      <Typography
        component={RouterLink}
        to="/"
        variant="h4"
        color="#47350b"
        sx={{ textDecoration: "none", fontFamily: "AmericanCaptain" }}
      >
        HOME
      </Typography>
      <Typography
        component={RouterLink}
        to="/inventory"
        variant="h4"
        color="#47350b"
        sx={{ textDecoration: "none", fontFamily: "AmericanCaptain" }}
      >
        INVENTORY
      </Typography>
      <Typography
        component={RouterLink}
        to="/#roadmap"
        variant="h4"
        color="#47350b"
        sx={{ textDecoration: "none", fontFamily: "AmericanCaptain" }}
      >
        ROADMAP
      </Typography>
      <Typography
        component={Link}
        href={Whitepaper}
        target="_blank"
        variant="h4"
        color="#47350b"
        sx={{ textDecoration: "none", fontFamily: "AmericanCaptain" }}
      >
        WHITEPAPER
      </Typography>
      <Typography
        component={ScrollLink}
        to="presale"
        spy
        smooth
        variant="h4"
        color="#47350b"
        sx={{
          textDecoration: "none",
          fontFamily: "AmericanCaptain",
          cursor: "pointer",
        }}
      >
        PRE-SALE
      </Typography>
      <Typography
        component={RouterLink}
        to="/#"
        variant="h4"
        color="#47350b"
        sx={{ textDecoration: "none", fontFamily: "AmericanCaptain" }}
      >
        MARKETPLACE
      </Typography>
      <ConnectButton />
    </Stack>
  );
}
