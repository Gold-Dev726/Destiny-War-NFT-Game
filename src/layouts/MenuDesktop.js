import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// material
import {
  Stack,
  Container,
  Typography,
  Link,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";
import ConnectButton from "components/ConnectButton";
import Whitepaper from "./whitepaper.pdf";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        // component={ScrollLink}
        to="class"
        variant="h4"
        color="#47350b"
        spy
        smooth
        // onMouseOver={handleClick}
        onClick={handleClick}
        // onMouseLeave={handleClose}
        sx={{ cursor: "pointer", fontFamily: "AmericanCaptain" }}
      >
        MORE
        <ArrowDropDownIcon
          sx={{ color: "#47350b", transform: "scaleY(2.5)" }}
        />
      </Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        keepMounted
        // onMouseLeave={handleClose}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        PaperProps={{ sx: { borderRadius: 0, bgcolor: "#ddd58e" } }}
      >
        <MenuItem>
          <Typography
            onClick={handleClose}
            variant="h4"
            component={ScrollLink}
            to="class"
            spy
            smooth
            sx={{ color: "#47350b", fontFamily: "AmericanCaptain" }}
          >
            CLASS
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography
            onClick={handleClose}
            variant="h4"
            component={ScrollLink}
            to="scroll"
            spy
            smooth
            sx={{ color: "#47350b", fontFamily: "AmericanCaptain" }}
          >
            NFT SCROLL
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography
            onClick={handleClose}
            variant="h4"
            component={ScrollLink}
            to="tokenomic"
            spy
            smooth
            sx={{ color: "#47350b", fontFamily: "AmericanCaptain" }}
          >
            TOKENOMICS
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography
            onClick={handleClose}
            variant="h4"
            component={ScrollLink}
            to="expedition"
            spy
            smooth
            sx={{ color: "#47350b", fontFamily: "AmericanCaptain" }}
          >
            EXPEDITION
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography
            onClick={handleClose}
            variant="h4"
            component={ScrollLink}
            to="roadmap"
            spy
            smooth
            sx={{ color: "#47350b", fontFamily: "AmericanCaptain" }}
          >
            ROADMAP
          </Typography>
        </MenuItem>
      </Menu>

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
