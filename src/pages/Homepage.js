// material
import {
  Box,
  Stack,
  Container,
  Typography,
  Button,
  Divider,
  OutlinedInput,
  InputAdornment,
  Grid,
} from "@mui/material";

import CountDown from "components/CountDown";
import EnticementSlick from "components/EnticementSlick";
import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-cib/twitter";
import linkedinFill from "@iconify/icons-cib/linkedin";

const TEAMS = [
  {
    name: "Mohamed - Bengal Tiger",
    image: "Kusama",
    role: "Founder/Biz Lead",
    twitter: "",
    linkedin: "",
  },
  {
    name: "Mohamed - Bengal Tiger",
    image: "Kusama",
    role: "Founder/Biz Lead",
    twitter: "",
    linkedin: "",
  },
  {
    name: "Mohamed - Bengal Tiger",
    image: "Kusama",
    role: "Founder/Biz Lead",
    twitter: "",
    linkedin: "",
  },
  {
    name: "Mohamed - Bengal Tiger",
    image: "Kusama",
    role: "Founder/Biz Lead",
    twitter: "",
    linkedin: "",
  },
];

export default function Detailpage() {
  return (
    <>
      <Container maxWidth="xl">
        <Stack
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          sx={{ px: 18 }}
        >
          <Box component="img" src="/logo.png" />
          <Typography variant="h4" sx={{ mt: 10 }}>
            Destiny War is bringing back the classic MMORPG gameplay, Interact
            to many players, friends, and family to enjoy the excitement and
            intensity of being a warrior. Explore the new virtual world do your
            daily quest to collect rewards and grind digital assets and turn
            them into REAL MONEY!
          </Typography>
          <Typography variant="h4" sx={{ mt: 5 }}>
            We will be selling a total of 50000 Warriors in our pre-sale, Every
            warrior will get a random wing, random costume, and Destiny box. Our
            minimum target is to sell 20000 and after that we will be releasing
            the beta game after 1 month.
          </Typography>
        </Stack>

        <Stack sx={{ px: 18, mt: 10 }}>
          <Typography variant="h2" textAlign="center">
            CHOOSE YOUR CLASS
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            {[...Array(7)].map((item, index) => (
              <Box
                component="img"
                src={`/characters/${index + 1}.png`}
                sx={{ width: 132 }}
              />
            ))}
          </Stack>
          <Stack
            direction="row"
            alignItems="flex-start"
            spacing={5}
            sx={{ mt: 8 }}
          >
            <Stack flex={1}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  component="img"
                  src="/teams/team1-logo.png"
                  sx={{ width: 140 }}
                />
                <Typography variant="h1"> FIGHTER</Typography>
              </Stack>
              <Typography>
                In the distant past a warrior named Kuang Tu Nha helped the Chou
                dynasty defeat Tru, a dangerous warrior that had threatened
                everything. The legend of this battle has drawn hundreds of the
                greatest Taoists to study his hand to hand style, hoping to
                become as great as the legendary warrior. <br />
                <br />
                Fighters are warriors who focus on close combat. They use their
                fists to make rapid attacks to wear down their enemies.
              </Typography>
            </Stack>
            <Stack flex={1}>
              <Box component="img" src="/teams/team1.png" />
            </Stack>
          </Stack>
        </Stack>

        <Stack sx={{ px: 18, mt: 10 }}>
          <Stack direction="row" spacing={5} alignItems="center">
            <Stack flex={1} alignItems="center">
              <Box
                component="img"
                src="/buttons/dwar_character.png"
                sx={{ width: 480 }}
              />
              <Box component="img" src="/eggs/character.gif" />
            </Stack>
            <Stack flex={1} sx={{ position: "relative" }}>
              <Box component="img" src="/description.png" />
              <Box
                component="img"
                src="/buttons/1.png"
                sx={{
                  position: "absolute",
                  top: "52%",
                  left: "50%",
                  transform: "translate3d(-50%,-50%,0)",
                  width: 140,
                }}
              />
              <Box
                component="img"
                src="/buttons/buy.png"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translate3d(-50%,-50%,0)",
                }}
              />
            </Stack>
          </Stack>

          <Stack
            direction="row"
            spacing={5}
            alignItems="center"
            sx={{ mt: 10 }}
          >
            <Stack flex={1} alignItems="center">
              <Box component="img" src="/buttons/pet.png" />
              <Box
                component="img"
                src="/eggs/pet.gif"
                sx={{ mt: -10, mb: -10 }}
              />
              <Box component="img" src="/texts/price.png" sx={{ mb: 2 }} />
              <Box
                component="img"
                src="/buttons/buy.png"
                // sx={{ width: 480 }}
              />
            </Stack>
            <Stack flex={1} alignItems="center">
              <Box component="img" src="/buttons/mount.png" />
              <Box
                component="img"
                src="/eggs/mount.gif"
                sx={{ mt: -10, mb: -10 }}
              />
              <Box component="img" src="/texts/price.png" sx={{ mb: 2 }} />
              <Box
                component="img"
                src="/buttons/buy.png"
                // sx={{ width: 480 }}
              />
            </Stack>
          </Stack>

          <Stack alignItems="center" sx={{ mt: 8 }}>
            <Box component="img" src="/title.png" sx={{ width: 500, mb: 5 }} />
            <Stack direction="row" alignItems="center">
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src="/mint/egg-left.png"
                  sx={{ width: 150 }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  }}
                >
                  50K
                </Typography>
              </Box>
              <Stack alignItems="center" spacing={3}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src="/texts/minted.png"
                    sx={{ width: 200 }}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      position: "absolute",
                      top: "40%",
                      left: "50%",
                      transform: "translate(-50%, 0)",
                    }}
                  >
                    0
                  </Typography>
                </Box>
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src="/mint/slider-bg.png"
                    sx={{ width: 600 }}
                  />
                  <Box
                    component="img"
                    src="/mint/slider.png"
                    sx={{
                      position: "absolute",
                      width: 120,
                      bottom: 0,
                      left: "-5%",
                    }}
                  />
                </Box>
              </Stack>
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src="/mint/egg-right.png"
                  sx={{ width: 150 }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  }}
                >
                  50000
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>

        <Stack sx={{ mt: 10 }}>
          <Typography textAlign="center" variant="h1">
            ROADMAP
          </Typography>
          {[...Array(9)].map((item, index) => (
            <Stack alignItems={index % 2 === 0 ? "flex-start" : "flex-end"}>
              <Box
                component="img"
                src={`/roadmap/${index + 1}.png`}
                sx={{ width: "40%" }}
              />
            </Stack>
          ))}
        </Stack>
      </Container>
    </>
  );
}
