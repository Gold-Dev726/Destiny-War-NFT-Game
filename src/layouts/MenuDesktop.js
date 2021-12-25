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
// import Whitepaper from "./whitepaper.pdf";
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
        sx={{
          textDecoration: "none",
          fontFamily: "AmericanCaptain",
          transition: 'all 0.3s',
          "&:hover": { color: "white" },
        }}
      >
        HOME
      </Typography>
      <Typography
        component={RouterLink}
        to="/inventories"
        variant="h4"
        color="#47350b"
        sx={{
          textDecoration: "none",
          fontFamily: "AmericanCaptain",
          transition: 'all 0.3s',
          "&:hover": { color: "white" },
        }}
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
        sx={{
          cursor: "pointer",
          fontFamily: "AmericanCaptain",
          transition: 'all 0.3s',
          "&:hover": { color: "white" },
        }}
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
            sx={{
              color: "#47350b",
              fontFamily: "AmericanCaptain",
              transition: 'all 0.3s',
              "&:hover": { color: "white" },
            }}
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
            sx={{
              color: "#47350b",
              fontFamily: "AmericanCaptain",
              transition: 'all 0.3s',
              "&:hover": { color: "white" },
            }}
          >
            NFT SCROLL
          </Typography>
        </MenuItem>
        {/* <MenuItem>
          <Typography
            onClick={handleClose}
            variant="h4"
            component={ScrollLink}
            to="tokenomic"
            spy
            smooth
   
   transition: 'all 0.3s',         sx={{ color: "#47350b", fontFamily: "AmericanCaptain", "&:hover": {color: "white"} }}
          >
            TOKENOMICS
          </Typography>
        </MenuItem> */}
        <MenuItem>
          <Typography
            onClick={handleClose}
            variant="h4"
            component={ScrollLink}
            to="expedition"
            spy
            smooth
            sx={{
              color: "#47350b",
              fontFamily: "AmericanCaptain",
              transition: 'all 0.3s',
              "&:hover": { color: "white" },
            }}
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
            sx={{
              color: "#47350b",
              fontFamily: "AmericanCaptain",
              transition: 'all 0.3s',
              "&:hover": { color: "white" },
            }}
          >
            ROADMAP
          </Typography>
        </MenuItem>
      </Menu>

      {/* <Typography
        component={Link}
        href={Whitepaper}
        target="_blank"
        variant="h4"
        color="#47350b"
   
   transition: 'all 0.3s',     sx={{ textDecoration: "none", fontFamily: "AmericanCaptain", "&:hover": {color: "white"} }}
      >
        WHITEPAPER
      </Typography> */}
      <Typography
        component={Link}
        href="https://destinywar.gitbook.io/destiny-war-/"
        target="_blank"
        variant="h4"
        color="#47350b"
        sx={{
          textDecoration: "none",
          fontFamily: "AmericanCaptain",
          transition: 'all 0.3s',
          "&:hover": { color: "white" },
        }}
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
          transition: 'all 0.3s',
          "&:hover": { color: "white" },
          cursor: "pointer",
        }}
      >
        PRE-SALE
      </Typography>
      <Typography
        component={RouterLink}
        to="/marketplace"
        variant="h4"
        color="#47350b"
        sx={{
          textDecoration: "none",
          fontFamily: "AmericanCaptain",
          transition: 'all 0.3s',
          "&:hover": { color: "white" },
        }}
      >
        MARKETPLACE
      </Typography>
      <ConnectButton />
    </Stack>
  );
}
