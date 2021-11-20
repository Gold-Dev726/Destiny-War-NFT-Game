import { Link as RouterLink } from "react-router-dom";
// material
import {
  Stack,
  Container,
  Typography,
  Link,
} from "@mui/material";
import ConnectButton from "components/ConnectButton";
import Whitepaper from "./whitepaper.pdf";
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function MainNavbar() {

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#42472b",
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
          component={Link}
          href={Whitepaper}
          target="_blank"
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
  );
}
