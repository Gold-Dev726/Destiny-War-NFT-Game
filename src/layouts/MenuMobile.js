import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
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
} from "@mui/material";
// components
import Logo from "components/Logo";
import Scrollbar from "components/Scrollbar";
import ConnectButton from "components/ConnectButton";
//
import menuConfig from "./MenuConfig";
import Whitepaper from "./whitepaper.pdf";

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
  const { title, path, icon } = item;

  if (path === "/whitepaper") {
    return (
      <ListItemStyle
        href={Whitepaper}
        target="_blank"
        component={Link}
        sx={{
          ...(isActive && {
            color: "primary.main",
            fontWeight: "fontWeightMedium",
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity
              ),
          }),
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText disableTypography primary={title} />
      </ListItemStyle>
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
          fontWeight: "fontWeightMedium",
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            ),
        }),
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText disableTypography primary={title} />
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
        sx={{ width: 1 }}
      >
        <IconButton
          onClick={handleDrawerOpen}
          sx={{
            ml: 1,
            ...(isHome && { color: "common.white" }),
            ...(isOffset && { color: "text.primary" }),
          }}
        >
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        <ConnectButton />
      </Stack>
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
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
                onOpen={handleOpen}
                isActive={pathname === link.path}
              />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}
