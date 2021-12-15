import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useEthers } from "@usedapp/core";
// material
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  List,
  Drawer,
  Link,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
  Stack,
  Button,
  Collapse,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// components
import Logo from "components/Logo";
import Scrollbar from "components/Scrollbar";
import ConnectButton from "components/ConnectButton";
//
import menuConfig from "./MenuConfig";
// import Whitepaper from "./whitepaper.pdf";

// ----------------------------------------------------------------------

const ICON_SIZE = 22;
const ITEM_SIZE = 48;
const PADDING = 2.5;

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  height: ITEM_SIZE,
  textTransform: "capitalize",
  paddingLeft: theme.spacing(PADDING),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

MenuMobileItem.propTypes = {
  item: PropTypes.object,
  isOpen: PropTypes.bool,
  isActive: PropTypes.bool,
  onOpen: PropTypes.func,
};

function MenuMobileItem({ item, isOpen, isActive, onOpen }) {
  const { title, path, icon, children } = item;
  const [open, setOpen] = useState(false);

  if (path === "/whitepaper") {
    return (
      <ListItemStyle
        href="https://destinywar.gitbook.io/destiny-war-/"
        target="_blank"
        component={Link}
        sx={{
          ...(isActive && {
            color: "primary.main",

            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity
              ),
          }),
        }}
      >
        {/* <ListItemIcon>{icon}</ListItemIcon> */}
        <ListItemText
          primary={title}
          sx={{ color: "#47350b", px: 3, fontFamily: "American" }}
        />
      </ListItemStyle>
    );
  }

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={() => setOpen(!open)}
          sx={{
            ...(isActive && {
              color: "primary.main",

              bgcolor: (theme) =>
                alpha(
                  theme.palette.primary.main,
                  theme.palette.action.selectedOpacity
                ),
            }),
          }}
        >
          {/* <ListItemIcon>{icon}</ListItemIcon> */}
          <Stack direction="row" alignItems="center">
            <ListItemText
              primary={title}
              sx={{ color: "#47350b", px: 3, fontFamily: "American" }}
            />
            <ArrowDropDownIcon
              sx={{ color: "#47350b", transform: "scaleY(3)", mt: "-4px" }}
            />
          </Stack>
        </ListItemStyle>
        <Collapse in={open} timeout="auto" unmountOnExit sx={{ ml: 3 }}>
          {children.map((item) => (
            <ListItemStyle key={item.title} onClick={onOpen}>
              <ScrollLink to={item.path} spy smooth onClick={onOpen}>
                <ListItemText
                  sx={{ color: "#47350b", px: 3, fontFamily: "American" }}
                  primary={item.title}
                />
              </ScrollLink>
            </ListItemStyle>
          ))}
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      key={title}
      to={path}
      component={RouterLink}
      sx={{
        ...(isActive && {
          color: "primary.main",
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            ),
        }),
      }}
    >
      {/* <ListItemIcon>{icon}</ListItemIcon> */}
      <ListItemText
        sx={{ color: "#47350b", px: 3, fontFamily: "American" }}
        primary={title}
      />
    </ListItemStyle>
  );
}

export default function MenuMobile({ isOffset, isHome }) {
  const { account } = useEthers();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: 1, px: 3, mt: -2 }}
      >
        <IconButton
          onClick={handleDrawerOpen}
          sx={{
            ml: 1,
            ...(isHome && { color: "common.white" }),
            ...(isOffset && { color: "text.primary" }),
          }}
        >
          <MenuIcon sx={{ color: "#47350b" }} />
        </IconButton>
        <ConnectButton />
      </Stack>
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260, background: "#ddd58e" } }}
      >
        <Scrollbar>
          <Link component={RouterLink} to="/" sx={{ display: "inline-flex" }}>
            <Logo sx={{ mx: PADDING, my: 3 }} />
          </Link>
          <List disablePadding>
            {menuConfig.map((link) => (
              <MenuMobileItem
                key={link.title}
                item={link}
                isOpen={open}
                onOpen={handleDrawerClose}
                isActive={pathname === link.path}
              />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}
