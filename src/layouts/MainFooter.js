import { Stack, Box, Typography, Container, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import facebookIcon from "@iconify/icons-cib/facebook";
import discordIcon from "@iconify/icons-cib/discord";
import instagramIcon from "@iconify/icons-cib/instagram";
import telegramIcon from "@iconify/icons-cib/telegram";
import youtubeIcon from "@iconify/icons-cib/youtube";
export default function MainFooter() {
  return (
    <Stack textAlign="center" sx={{ background: "#2b2b2b", pb: 2, pt: 4, mt: -2 }}>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Stack direction="row" spacing={3}>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <Icon icon={facebookIcon} fontSize={24} color="grey" />
            </IconButton>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <Icon icon={discordIcon} fontSize={24} color="grey" />
            </IconButton>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <Icon icon={instagramIcon} fontSize={24} color="grey" />
            </IconButton>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <Icon icon={telegramIcon} fontSize={24} color="grey" />
            </IconButton>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <Icon icon={youtubeIcon} fontSize={24} color="grey" />
            </IconButton>
          </Stack>
        </Stack>
        <Typography variant="h4" color="white">
          Copyright 2021 © All rights Reserved. Design by Destiny War Inc.
        </Typography>
      </Container>
    </Stack>
  );
}
