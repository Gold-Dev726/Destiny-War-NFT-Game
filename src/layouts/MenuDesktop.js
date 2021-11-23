import { Link as RouterLink } from "react-router-dom";
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
        variant="h5"
        color="#47350b"
        sx={{ textDecoration: "none" }}
      >
        HOME
      </Typography>
      <Typography
        component={RouterLink}
        to="/"
        variant="h5"
        color="#47350b"
        sx={{ textDecoration: "none" }}
      >
        INVENTORY
      </Typography>
      <Typography
        component={Link}
        href={Whitepaper}
        target="_blank"
        variant="h5"
        color="#47350b"
        sx={{ textDecoration: "none" }}
      >
        WHITEPAPER
      </Typography>
      <Typography
        component={RouterLink}
        to="/presale"
        variant="h5"
        color="#47350b"
        sx={{ textDecoration: "none" }}
      >
        PRE-SALE
      </Typography>
      <Typography
        component={RouterLink}
        to="/#"
        variant="h5"
        color="#47350b"
        sx={{ textDecoration: "none" }}
      >
        MARKETPLACE
      </Typography>
      <ConnectButton />
    </Stack>
  );
}
