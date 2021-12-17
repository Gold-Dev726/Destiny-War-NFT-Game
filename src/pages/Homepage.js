import { useState, useEffect, useRef } from "react";
// material
import {
  Box,
  Stack,
  Container,
  Typography,
  Dialog,
  Button,
  Grid,
  Hidden,
} from "@mui/material";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import { Link, Element, scroller } from "react-scroll";
import TokenPresale from "components/Homepage/TokenPresale";
import TokenCountDown from "components/TokenCountDown";
import NftCountDown from "components/NftCountDown";
import Presale from "components/Homepage/Presale";
import Roadmap from "components/Homepage/Roadmap";
import Team from "components/Homepage/Team";
import CarouselArrow from "components/CarouselArrow";
import { makeStyles } from "@mui/styles";
import { keyframes } from "@mui/system";

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
    animation: `${zoomIn} 1s linear infinite`,
  },
});

export default function Homepage() {
  const ScrollSliderRef = useRef();

  const ScrollSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box sx={{ mt: "-146px" }}>
      <Stack
        sx={{
          background: "url(/bg.png)",
          backgroundSize: "100% 100%",
          height: { xs: "70vh", md: "160vh" },
        }}
      >
        <Stack
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          sx={{ px: { xs: 2, md: 18 } }}
        >
          <Box
            component="img"
            src="/logo.png"
            sx={{
              mt: { xs: 18, md: 15 },
              maxWidth: 800,
              width: { xs: 240, md: 800 },
            }}
          />
        </Stack>
      </Stack>

      <Box
        component="img"
        src="/divider.png"
        sx={{ width: 1, mt: { xs: "-16px", md: "-65px" } }}
      />

      <Stack sx={{ bgcolor: "#523f8e", mt: { xs: "-3px", md: -2 } }}>
        <Container maxWidth="xl">
          <Stack
            textAlign="center"
            justifyContent="center"
            alignItems="center"
            sx={{ px: { xs: 2, md: 18 }, py: 10 }}
          >
            <Typography variant="h4" sx={{ color: "white" }}>
              Destiny War is bringing back the classic MMORPG gameplay, Interact
              to many players, friends, and family to enjoy the excitement and
              intensity of being a warrior. Explore the new virtual world do
              your daily quest to collect rewards and grind digital assets and
              turn them into REAL MONEY!
            </Typography>
          </Stack>
        </Container>
      </Stack>

      <Box
        component="img"
        src="/divider.png"
        sx={{
          width: 1,
          mt: { xs: "-16px", md: "-65px" },
          position: "relative",
          zIndex: 1,
        }}
      />

      <Box sx={{ position: "relative" }}>
        <Stack
          id="presale"
          sx={{
            mt: { xs: "-3px", md: -2 },
            background: "url(token_presale/bg.png)",
            backgroundSize: "120% 100%",
          }}
          alignItems="center"
        >
          <Box
            component="img"
            src="/presale/presale_btn.png"
            sx={{ mt: -4, zIndex: 2, width: { xs: 160, md: "initial" } }}
          />
          <TokenPresale />
        </Stack>

        {/* <Stack
          id="presale"
          sx={{
            background:
              "linear-gradient(rgba(147, 48, 0, 0.8), rgba(163, 83, 0, 0.8))",
            top: 0,
            position: "absolute",
            width: 1,
            height: 1,
            zIndex: 0,
          }}
          alignItems="center"
          justifyContent="center"
          spacing={10}
        >
          <Typography
            color="#ffae00"
            fontFamily="American"
            fontSize={{ xs: 40, md: 70 }}
            sx={{ textShadow: "3px 3px 5px #000000" }}
          >
            PRESALE COUNTDOWN
          </Typography>
          <TokenCountDown />
        </Stack> */}
      </Box>

      <Box
        component="img"
        src="/divider.png"
        sx={{
          width: 1,
          mt: { xs: "-16px", md: "-65px" },
          position: "relative",
          zIndex: 1,
        }}
      />

      <Box sx={{ position: "relative" }}>
        <Stack
          id="presale"
          sx={{
            mt: { xs: "-3px", md: -2 },
            background: "linear-gradient(#5b3342, #8d532a)",
          }}
          alignItems="center"
        >
          <Box
            component="img"
            src="/presale/presale_btn.png"
            sx={{ mt: -4, zIndex: 2, width: { xs: 160, md: "initial" } }}
          />
          <Container maxWidth="xl">
            <Typography
              variant="h4"
              align="center"
              sx={{ mt: 3, color: "white", mb: 4 }}
            >
              NFT PRESALE We will "only" be selling a total of 50000 Warriors,
              Pets, and Mounts in our pre-sale, Every warrior will get a random
              wing, random costume, and Destiny box. When all 150000 is sold, We
              will no longer be selling except thru the marketplace that will
              come from players who bred and sell their nft's.
            </Typography>
          </Container>

          <Presale />
        </Stack>

        <Stack
          id="presale"
          sx={{
            background:
              "linear-gradient(rgba(91, 9, 0, 0.8), rgba(150, 12, 0, 0.8))",
            top: 0,
            position: "absolute",
            width: 1,
            height: 1,
            zIndex: 0,
          }}
          alignItems="center"
          justifyContent="center"
          spacing={10}
        >
          <Typography
            color="#ffae00"
            fontFamily="American"
            fontSize={{ xs: 40, md: 70 }}
            sx={{ textShadow: "3px 3px 5px #000000" }}
          >
            PRESALE COUNTDOWN
          </Typography>
          <NftCountDown />
        </Stack>
      </Box>
      {/* ----------------Original NFT Presale------------- */}
      {/* <Stack
        id="presale"
        sx={{
          mt: { xs: "-3px", md: -2 },
          background: "linear-gradient(#5b3342, #8d532a)",
        }}
        alignItems="center"
      >
        <Box
          component="img"
          src="/presale/presale_btn.png"
          sx={{ mt: -4, zIndex: 2 }}
        />
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            align="center"
            sx={{ mt: 3, color: "white", mb: 4 }}
          >
            NFT PRESALE We will "only" be selling a total of 50000 Warriors,
            Pets, and Mounts in our pre-sale, Every warrior will get a random
            wing, random costume, and Destiny box. When all 150000 is sold, We
            will no longer be selling except thru the marketplace that will come
            from players who bred and sell their nft's.
          </Typography>
        </Container>

        <Presale />
      </Stack> */}

      <Stack id="class">
        <Team />
      </Stack>

      <Stack
        id="expedition"
        sx={{
          mt: { xs: "-3px", md: -2 },
        }}
      >
        <Box component="img" src="/expedition.png" />
      </Stack>

      {/* <Box component="img" src="/divider.png" sx={{ width: 1, mt: "-65px" }} /> */}

      <Stack
        id="scroll"
        sx={{
          mt: { xs: "-3px", md: -2 },
          background: "url(/scrolls/scroll_bg.png)",
          backgroundSize: "cover",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ mt: { xs: 5, md: 10 }, mb: 5 }}
        >
          <MotionInView variants={varFadeInUp}>
            <Box
              component="img"
              src="/scrolls/crafting_scroll.png"
              sx={{ width: { xs: 300, md: 400 } }}
            />
          </MotionInView>
        </Stack>

        <Hidden mdDown>
          <Container maxWidth="xl">
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              sx={{ mb: 10 }}
              spacing={{ xs: 5, md: 0 }}
            >
              <Stack alignItems="center" spacing={{ xs: 2, md: 4 }}>
                <Box
                  component="img"
                  src="/scrolls/weapon.png"
                  sx={{
                    width: { xs: 160, md: 300 },
                    cursor: "pointer",
                    "&:hover": {
                      animation: `${zoomIn} 0.7s linear infinite alternate`,
                    },
                  }}
                />
                <Box
                  component="img"
                  src="/scrolls/weapon_text.png"
                  sx={{ width: { xs: 160, md: 260 } }}
                />
              </Stack>
              <Stack alignItems="center" spacing={{ xs: 2, md: 4 }}>
                <Box
                  component="img"
                  src="/scrolls/armor.png"
                  sx={{
                    width: { xs: 160, md: 300 },
                    cursor: "pointer",
                    "&:hover": {
                      animation: `${zoomIn} 0.7s linear infinite alternate`,
                    },
                  }}
                />
                <Box
                  component="img"
                  src="/scrolls/armor_text.png"
                  sx={{ width: { xs: 160, md: 260 } }}
                />
              </Stack>
              <Stack alignItems="center" spacing={{ xs: 2, md: 4 }}>
                <Box
                  component="img"
                  src="/scrolls/accessory.png"
                  sx={{
                    width: { xs: 160, md: 300 },
                    cursor: "pointer",
                    "&:hover": {
                      animation: `${zoomIn} 0.7s linear infinite alternate`,
                    },
                  }}
                />
                <Box
                  component="img"
                  src="/scrolls/accessory_text.png"
                  sx={{ width: { xs: 160, md: 260 } }}
                />
              </Stack>
            </Stack>
          </Container>
        </Hidden>

        <Hidden mdUp>
          <Stack sx={{ mb: 5 }}>
            <Stack
              direction="row"
              justifyContent="center"
              sx={{ mb: 5 }}
              spacing={5}
            >
              <CarouselArrow
                direction="prev"
                onClick={() => ScrollSliderRef.current.slickPrev()}
              />
              <CarouselArrow
                direction="next"
                onClick={() => ScrollSliderRef.current.slickNext()}
              />
            </Stack>
            <Container maxWidth="xl">
              <Slider {...ScrollSliderSettings} ref={ScrollSliderRef}>
                <Box>
                  <Stack
                    alignItems="center"
                    spacing={{ xs: 2, md: 4 }}
                    sx={{ mx: "auto" }}
                  >
                    <Box
                      component="img"
                      src="/scrolls/weapon.png"
                      sx={{
                        width: { xs: 160, md: 300 },
                        cursor: "pointer",
                        "&:hover": {
                          animation: `${zoomIn} 0.7s linear infinite alternate`,
                        },
                      }}
                    />
                    <Box
                      component="img"
                      src="/scrolls/weapon_text.png"
                      sx={{ width: { xs: 160, md: 260 } }}
                    />
                  </Stack>
                </Box>
                <Box>
                  <Stack alignItems="center" spacing={{ xs: 2, md: 4 }}>
                    <Box
                      component="img"
                      src="/scrolls/armor.png"
                      sx={{
                        width: { xs: 160, md: 300 },
                        cursor: "pointer",
                        "&:hover": {
                          animation: `${zoomIn} 0.7s linear infinite alternate`,
                        },
                      }}
                    />
                    <Box
                      component="img"
                      src="/scrolls/armor_text.png"
                      sx={{ width: { xs: 160, md: 260 } }}
                    />
                  </Stack>
                </Box>

                <Box>
                  <Stack alignItems="center" spacing={{ xs: 2, md: 4 }}>
                    <Box
                      component="img"
                      src="/scrolls/accessory.png"
                      sx={{
                        width: { xs: 160, md: 300 },
                        cursor: "pointer",
                        "&:hover": {
                          animation: `${zoomIn} 0.7s linear infinite alternate`,
                        },
                      }}
                    />
                    <Box
                      component="img"
                      src="/scrolls/accessory_text.png"
                      sx={{ width: { xs: 160, md: 260 } }}
                    />
                  </Stack>
                </Box>
              </Slider>
              <Stack direction="row">
                {/* <Box
              component="img"
              src="/walking_character.gif"
              sx={{
                width: 400,
                animation: "walk 10s linear infinite",
                "@keyframes walk": {
                  from: { transform: "translateX(0)" },
                  to: { transform: "translateX(300%)" },
                },
              }}
            /> */}
              </Stack>
            </Container>
          </Stack>
        </Hidden>
      </Stack>

      {/* <Box component="img" src="/divider.png" sx={{ width: 1, mt: "-65px" }} />

      <Stack
        id="tokenomic"
        sx={{
          mt: { xs: "-3px", md: -2 },
          background: "url(/tokenomics/tokenomic_bg.png)",
          backgroundSize: "contained",
        }}
      >
        <Stack direction="row" justifyContent="center" sx={{ mt: 10 }}>
          <MotionInView variants={varFadeInUp}>
            <Box
              component="img"
              src="/tokenomics/tokenomic_text.png"
              sx={{ width: 400 }}
            />
          </MotionInView>
        </Stack>
        <Container maxWidth="xl">
          <Box sx={{ position: "relative", height: 700, ml: -5 }}>
            <Box
              component="img"
              src="/tokenomics/1.png"
              sx={{
                transform: "scale(0.7)",
                position: "absolute",
                top: 0,
                transition: "all 0.3s",
                "&:hover": { transform: "scale(0.9)", zIndex: 5 },
              }}
            />
            <Box
              component="img"
              src="/tokenomics/2.png"
              sx={{
                transform: "scale(0.7)",
                position: "absolute",
                top: 230,
                left: 40,
                transition: "all 0.3s",
                "&:hover": { transform: "scale(0.9)", zIndex: 5 },
              }}
            />
            <Box
              component="img"
              src="/tokenomics/3.png"
              sx={{
                transform: "scale(0.7)",
                position: "absolute",
                top: 300,
                left: 0,
                transition: "all 0.3s",
                "&:hover": { transform: "scale(0.9)", zIndex: 5 },
              }}
            />
            <Box
              component="img"
              src="/tokenomics/4.png"
              sx={{
                transform: "scale(0.7)",
                position: "absolute",
                top: 280,
                right: -78,
                transition: "all 0.3s",
                "&:hover": { transform: "scale(0.9)", zIndex: 5 },
              }}
            />
            <Box
              component="img"
              src="/tokenomics/5.png"
              sx={{
                transform: "scale(0.7)",
                position: "absolute",
                top: 40,
                right: -20,
                transition: "all 0.3s",
                "&:hover": { transform: "scale(0.9)", zIndex: 5 },
              }}
            />
          </Box>
        </Container>
        <Stack direction="row" justifyContent="center" sx={{ mt: -10, mb: 5 }}>
          <MotionInView variants={varFadeInUp}>
            <Box
              component="img"
              src="/tokenomics/token_supply.png"
              sx={{ width: 400 }}
            />
          </MotionInView>
        </Stack>
      </Stack> */}

      <Box
        component="img"
        src="/divider.png"
        sx={{ width: 1, mt: { xs: "-16px", md: "-65px" }, zIndex: 999 }}
      />

      <Stack
        id="roadmap"
        sx={{
          mt: { xs: "-3px", md: -2 },
          background: "url(/mapbg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Roadmap />
      </Stack>

      <Box
        component="img"
        src="/divider.png"
        sx={{ width: 1, mt: { xs: "-16px", md: "-65px" } }}
      />
    </Box>
  );
}
