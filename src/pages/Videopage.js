import { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container, Typography } from "@mui/material";

import TeamComponent from "components/TeamComponent";
import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";


export default function Homepage() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <Box sx={{ mt: "-146px" }}>
      <Stack
        sx={{
          background: "url(/bg.png)",
          backgroundSize: "100% 100%",
          height: "160vh",
          // position: "relative",
          // mt: "-146px"
        }}
      >
        <Stack
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          sx={{ px: { xs: 2, md: 18 } }}
        >
          <Box component="img" src="/logo.png" sx={{ mt: 15, width: 800 }} />
        </Stack>
      </Stack>

      <Box component="img" src="/divider.png" sx={{ width: 1, mt: "-65px" }} />

      <Stack sx={{ bgcolor: "#523f8e", mt: "-16px" }}>
        <Container maxWidth="xl">
          <Stack
            textAlign="center"
            justifyContent="center"
            alignItems="center"
            sx={{ px: { xs: 2, md: 18 }, py: 10 }}
          >
            <Typography variant="h4" sx={{ mt: 5, color: "white" }}>
              Destiny War is bringing back the classic MMORPG gameplay, Interact
              to many players, friends, and family to enjoy the excitement and
              intensity of being a warrior. Explore the new virtual world do
              your daily quest to collect rewards and grind digital assets and
              turn them into REAL MONEY!
            </Typography>
            <Typography variant="h4" sx={{ mt: 3, color: "white" }}>
              We will be selling a total of 50000 Warriors in our pre-sale,
              Every warrior will get a random wing, random costume, and Destiny
              box. Our minimum target is to sell 20000 and after that we will be
              releasing the beta game after 1 month.
            </Typography>
          </Stack>
        </Container>
      </Stack>

      <Box component="img" src="/divider.png" sx={{ width: 1, mt: "-65px" }} />

      <Stack
        sx={{
          mt: "-16px",
          background: "url(/scrolls/scroll_bg.png)",
          backgroundSize: "contained",
        }}
      >
        <Stack direction="row" justifyContent="center" sx={{ mt: 10, mb: 5 }}>
          <MotionInView variants={varFadeInUp}>
            <Box
              component="img"
              src="/scrolls/crafting_scroll.png"
              sx={{ width: 400 }}
            />
          </MotionInView>
        </Stack>
        <Container maxWidth="xl">
          <Stack direction="row" justifyContent="space-between" sx={{ mb: 10 }}>
            <Stack alignItems="center" spacing={4}>
              <Box
                component="img"
                src="/scrolls/weapon.png"
                sx={{ width: 300 }}
              />
              <Box
                component="img"
                src="/scrolls/weapon_text.png"
                sx={{ width: 260 }}
              />
            </Stack>
            <Stack alignItems="center" spacing={4}>
              <Box
                component="img"
                src="/scrolls/armor.png"
                sx={{ width: 300 }}
              />
              <Box
                component="img"
                src="/scrolls/armor_text.png"
                sx={{ width: 260 }}
              />
            </Stack>
            <Stack alignItems="center" spacing={4}>
              <Box
                component="img"
                src="/scrolls/accessory.png"
                sx={{ width: 300 }}
              />
              <Box
                component="img"
                src="/scrolls/accessory_text.png"
                sx={{ width: 260 }}
              />
            </Stack>
          </Stack>
        </Container>
      </Stack>

      <video width="50%" ref={videoEl} loop muted="muted" autoplay="true">
        <source src="/scrolls/2.mp4" type="video/mp4" />
      </video>
      <Box component="img" src="/divider.png" sx={{ width: 1, mt: "-65px" }} />
    </Box>
  );
}
