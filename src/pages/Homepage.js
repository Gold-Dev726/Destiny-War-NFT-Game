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

const TEAM_INFOS = [
  {
    number: 1,
    name: "FIGHTER",
    description1:
      "In the distant past a warrior named Kuang Tu Nha helped the Chou dynasty defeat Tru, a dangerous warrior that had threatened everything. The legend of this battle has drawn hundreds of the greatest Taoists to study his hand to hand style, hoping to become as great as the legendary warrior.",
    description2:
      "Fighters are warriors who focus on close combat. They use their fists to make rapid attacks to wear down their enemies.",
  },
  {
    number: 2,
    name: "SWORDSMAN",
    description1:
      "Swordsman have travelled the world for centuries, gathering in places of power to study and hone their abilities. A true swordsman spends decades honing their craft until their sword is almost a third limb. They are some of the most deadly and feared warriors in the world.",
    description2:
      "Swordsman focus on close combat using blades. They can deal massive damage with their blades. They keep their enemies from attacking the weaker members of their party.",
  },
  {
    number: 3,
    name: "MAGE",
    description1:
      "Mages have focused their power into the summoning of demons and manipulation of the three realms; Heaven, Earth and Human. Their powers made the people considered evil spirits and they withdrew from the world for a time. Recently they finally revealed themselves again.",
    description2:
      "They focused on helping others and soon people began to see them as allies rather than enemies. A mage keeps his foes at a distance, using staves to launch magical attacks at their enemies. While weak physically their powers can cause massive damage.",
  },
  {
    number: 4,
    name: "NINJA",
    description1:
      "Ninjas are a mysterious organization that has existed hidden in the shadows for centuries. Long ago they served under the Zhou dynasty, striking down their foes. They are feared by the people who know of them, as one can never know when or where they may strike. Their hidden blades and clever poisons have killed hundreds of heroes and knights.",
    description2:
      "Ninjas focus on close combat against their foes. They are far more flexible than other warriors, using a variety of different weapons to cause a variety of effects.",
  },
  {
    number: 5,
    name: "PRIEST",
    description1:
      "During the warring states period the priests went deep into the Mon Vong swamp away from the fighting to focus on peace rather than war. For 50 years he meditated and studied the local plants and herbs. As time passed he unlocked the secrets of hundreds of potions, becoming an expert in pharmacology. They also learned many magical spells of great power.",
    description2:
      "The priest is a great healer, his powers keeping people alive in the most dangerous situations. When forced to fight the priest uses his staff to send magical attacks at his foes from a great distance.",
  },
  {
    number: 6,
    name: "TAOIST",
    description1:
      "There are many places of power across the world but the Taoists have gathered at the peak of Kun Lun. Here they can focus on the heavens, contacting demons and other celestial creatures, making deals with them to call on their abilities in the future. When not communing with the universe they study their skill with the blade.",
    description2:
      "Taoists are ranged warriors who use a staff to summon allies to fight for them. When not calling on allies they use a sword to attack their foes.",
  },
  {
    number: 7,
    name: "KNIGHT",
    description1:
      "Knight who follow the teaching of an unknown warrior in the past. His teachings are considered some of the most difficult and beautiful of all the warriors in the world. Warrior are part of a strong military tradition and they expect their warriors to train constantly to maintain peak physical health.",
    description2:
      "Knight are close quarter sword/Spear wielders focused on attacking many enemies.",
  },
];

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
          background: "linear-gradient(#5b3342, #8d532a)",
        }}
        alignItems="center"
      >
        <Box component="img" src="/presale/presale_btn.png" sx={{ mt: -4 }} />
        <Presale />
      </Stack>

      <Box component="img" src="/divider.png" sx={{ width: 1, mt: "-65px" }} />

      <Stack sx={{ bgcolor: "#cdd5b0", mt: "-16px" }}>
        {/* <Stack direction="row" justifyContent="center" sx={{ my: 10 }}>
          <MotionInView variants={varFadeInUp}>
            <Box
              component="img"
              src="/texts/choose_class.png"
              sx={{ transform: "scale(0.6)" }}
            />
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
            onClick={() => TeamSliderRef.current.slickPrev()}
            sx={{
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
          <Box
            component="img"
            src="/nextArrow.png"
            onClick={() => TeamSliderRef.current.slickNext()}
            sx={{
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </Stack>
        <Slider {...TeamSliderSettings} ref={TeamSliderRef}>
          {[...Array(7)].map((item, index) => (
            <Stack>
              <Box
                sx={{
                  height: 1000,
                  background: `url(/teams/${index + 1}.png)`,
                  backgroundSize: "100% 100%",
                }}
              />
            </Stack>
          ))}
        </Slider> */}

        <Team />
        {/* {TEAM_INFOS.map((team, index) => (
            <Container maxWidth="xl" key={index}>
              <Stack
                direction={{ xs: "column", md: "row" }}
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
                      src={`/teams/title${index + 1}.png`}
                      sx={{ width: 300 }}
                    />
                  </Stack>
                  <Typography>
                    {team.description1} <br />
                    <br />
                    {team.description2}
                  </Typography>
                </Stack>
                <Stack flex={1}>
                  <Box component="img" src={`/teams/team${index + 1}.png`} />
                </Stack>
              </Stack>
            </Container>
          ))} */}
      </Stack>

      <Box component="img" src="/divider.png" sx={{ width: 1, mt: "-65px" }} />

      <Stack id="expedition">
        <Box component="img" src="/expedition.png" />
      </Stack>

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

      <Box component="img" src="/divider.png" sx={{ width: 1, mt: "-65px" }} />

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
          {/* <Stack direction="row" justifyContent="center" sx={{ mb: 10 }}>
            <Box
              component="img"
              src="/tokenomics/tokenomic.png"
              sx={{ width: "60%" }}
            />
          </Stack> */}
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
      </Stack>

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
