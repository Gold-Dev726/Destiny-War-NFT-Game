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
  Link,
} from "@mui/material";
import { Icon } from "@iconify/react";
import facebookIcon from "@iconify/icons-cib/facebook";
import discordIcon from "@iconify/icons-cib/discord";
import twitterIcon from "@iconify/icons-cib/twitter";
import telegramIcon from "@iconify/icons-cib/telegram";
import youtubeIcon from "@iconify/icons-cib/youtube";
// ----------------------------------------------------------------------

const SocialIcon = styled((props) => (
  <Stack
    component={Link}
    direction="row"
    alignItems="center"
    justifyContent="flex-end"
    spacing={2}
    target="_blank"
    {...props}
  />
))(({ theme }) => ({
  height: 50,
  width: 140,
  paddingRight: 14,
  background: "rgba(255, 255, 255, 0.2)",
  border: "1px solid rgba(255, 255, 255, 0.7)",
  borderLeft: "none",
  borderRadius: "0 50px 50px 0",
  transform: "translateX(-90px)",
  transition: "all 0.5s",
  cursor: "pointer",
  "&:hover": {
    transform: "translateX(0px)",
  },
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <Stack
      spacing={4}
      sx={{
        zIndex: 9999,
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <SocialIcon href="https://www.facebook.com/gaming/DestinyWarNFTGame">
        <Typography color="white">FaceBook</Typography>
        <Icon icon={facebookIcon} fontSize={30} color="#28f0a5" />
      </SocialIcon>
      <SocialIcon href="https://discord.gg/Yj8aPDzkUt">
        <Typography color="white">Discord</Typography>
        <Icon icon={discordIcon} fontSize={30} color="#28f0a5" />
      </SocialIcon>
      <SocialIcon href="https://twitter.com/DestinyWarNFT">
        <Typography color="white">Twitter</Typography>
        <Icon icon={twitterIcon} fontSize={30} color="#28f0a5" />
      </SocialIcon>
      <SocialIcon href="https://t.me/DestinyWarOfficialGroup">
        <Typography color="white">Telegram</Typography>
        <Icon icon={telegramIcon} fontSize={30} color="#28f0a5" />
      </SocialIcon>
      <SocialIcon>
        <Typography color="white">Youtube</Typography>
        <Icon icon={youtubeIcon} fontSize={30} color="#28f0a5" />
      </SocialIcon>
    </Stack>
  );
}
