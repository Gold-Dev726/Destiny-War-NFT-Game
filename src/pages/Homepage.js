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
} from "@mui/material";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import { Link, Element, scroller } from "react-scroll";
import TokenPresale from "components/Homepage/TokenPresale";
import Presale from "components/Homepage/Presale";
import Team from "components/Homepage/Team";
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
  const [presaleModal, setPresaleModal] = useState(false);
  const [currentPresale, setCurrentPresale] = useState(0);
  const location = useLocation();
  const target = location.hash.slice(1);
  useEffect(() => {
    scroller.scrollTo(target, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  }, [target]);

  const TeamSliderRef = useRef();
  const RoadmapSliderRef = useRef();

  const RoadmapSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };

  const TeamSliderSettings = {
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
        id="presale"
        sx={{
          mt: "-16px",
          background: "url(token_presale/bg.png)",
          backgroundSize: '120% 100%'
        }}
        alignItems="center"
      >
        <Box component="img" src="/presale/presale_btn.png" sx={{ mt: -4 }} />
        <TokenPresale />
      </Stack>

      <Box component="img" src="/divider.png" sx={{ width: 1, mt: "-65px" }} />

      <Stack
        id="presale"
        sx={{
          mt: "-16px",
          background: "linear-gradient(#5b3342, #8d532a)",
        }}
        alignItems="center"
      >
        <Box component="img" src="/presale/presale_btn.png" sx={{ mt: -4 }} />
        <Presale />
      </Stack>

      <Stack id="class">
        <Team />
      </Stack>

      <Stack
        id="expedition"
        sx={{
          mt: "-16px",
        }}
      >
        <Box component="img" src="/expedition.png" />
      </Stack>

      {/* <Box component="img" src="/divider.png" sx={{ width: 1, mt: "-65px" }} /> */}

      <Stack
        id="scroll"
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
                sx={{
                  width: 300,
                  cursor: "pointer",
                  "&:hover": {
                    animation: `${zoomIn} 0.7s linear infinite alternate`,
                  },
                }}
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
                sx={{
                  width: 300,
                  cursor: "pointer",
                  "&:hover": {
                    animation: `${zoomIn} 0.7s linear infinite alternate`,
                  },
                }}
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
                sx={{
                  width: 300,
                  cursor: "pointer",
                  "&:hover": {
                    animation: `${zoomIn} 0.7s linear infinite alternate`,
                  },
                }}
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

      {/* <Box component="img" src="/divider.png" sx={{ width: 1, mt: "-65px" }} />

      <Stack
        id="tokenomic"
        sx={{
          mt: "-16px",
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
        sx={{ width: 1, mt: "-65px", zIndex: 999 }}
      />

      <Stack
        id="roadmap"
        sx={{
          mt: "-16px",
          background: "url(/mapbg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Stack direction="row" justifyContent="center" sx={{ mt: 10, mb: 5 }}>
          <MotionInView variants={varFadeInUp}>
            <Box component="img" src="/texts/roadmap.png" />
          </MotionInView>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ mb: 5 }}
          spacing={5}
        >
          <Box
            component="img"
            src="/prevArrow.png"
            onClick={() => RoadmapSliderRef.current.slickPrev()}
            sx={{
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
          <Box
            component="img"
            src="/nextArrow.png"
            onClick={() => RoadmapSliderRef.current.slickNext()}
            sx={{
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </Stack>
        <Container maxWidth="xl">
          <Slider {...RoadmapSliderSettings} ref={RoadmapSliderRef}>
            {[...Array(9)].map((item, index) => (
              <Box key={index}>
                <Box
                  src={`/roadmap/${index + 1}.png`}
                  sx={{
                    width: 496,
                    height: 460,
                    background: `url(/roadmap/${index + 1}.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "-80px",
                  }}
                />
              </Box>
            ))}
          </Slider>
          <Stack direction="row">
            <Box
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
            />
          </Stack>
        </Container>
      </Stack>

      <Box component="img" src="/divider.png" sx={{ width: 1, mt: "-65px" }} />

      {/* <Stack
        sx={{
          mt: "-16px",
          backgroundSize: "contained",
        }}
      >
        <Presale />
      </Stack> */}
    </Box>
  );
}
