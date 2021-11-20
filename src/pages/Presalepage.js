import { useEffect, useState, useRef } from "react";
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
import Slider from "react-slick";

export default function Detailpage() {
  const [show, setShow] = useState(false);

  const sliderRef = useRef();

  const sliderSettings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <Stack
        sx={{ background: "url(/presale/bg.png)", backgroundSize: "cover" }}
      >
        <Container maxWidth="lg">
          <Slider ref={sliderRef} {...sliderSettings}>
            <Stack sx={{ position: "relative" }}>
              <Box
                component="img"
                src="/presale/description.png"
                sx={{ height: "100%" }}
              />
              <Stack
                alignItems="center"
                sx={{ width: 600, position: "absolute", top: 0 }}
              >
                <Box component="img" src="/presale/character-egg.gif" />
                <Box
                  component="img"
                  src="/presale/buy.png"
                  sx={{ width: 150, mt: -10 }}
                />
              </Stack>
              <Box
                component="img"
                src="/presale/1.png"
                sx={{
                  width: 100,
                  position: "absolute",
                  right: "29%",
                  top: "40%",
                }}
              />
              <Stack
                sx={{
                  width: 400,
                  position: "absolute",
                  bottom: "18%",
                  transform: "translate(-50%, 0)",
                  left: "50%",
                }}
              >
                <Box
                  component="img"
                  src="/presale/bar2.png"
                  sx={{ width: 390 }}
                />

                <Box
                  component="img"
                  src="/presale/bar.png"
                  sx={{ width: 1, height: 100, position: "absolute", top: -35 }}
                />
              </Stack>
              <Box
                component="img"
                src="/presale/5000.png"
                sx={{
                  // width: 400,
                  position: "absolute",
                  bottom: "5%",
                  transform: "translate(-50%, 0)",
                  left: "50%",
                }}
              />
            </Stack>
            <Stack sx={{ position: "relative" }}>
              <Box
                component="img"
                src="/presale/pet_bg.png"
                sx={{ height: "100%" }}
              />
              <Stack
                alignItems="center"
                sx={{
                  width: 600,
                  position: "absolute",
                  top: "30px",
                  left: "30px",
                }}
              >
                <Box component="img" src="/presale/pet-egg.gif" />
              </Stack>
              <Box
                component="img"
                src="/presale/buy.png"
                sx={{
                  width: 150,
                  position: "absolute",
                  right: "26%",
                  top: "47%",
                }}
              />
              <Box
                component="img"
                src="/presale/5000.png"
                sx={{
                  // width: 400,
                  position: "absolute",
                  bottom: "5%",
                  transform: "translate(-50%, 0)",
                  left: "50%",
                }}
              />
            </Stack>

            <Stack sx={{ position: "relative" }}>
              <Box
                component="img"
                src="/presale/mount_bg.png"
                sx={{ height: "100%" }}
              />
              <Stack
                alignItems="center"
                sx={{
                  width: 600,
                  position: "absolute",
                  top: "30px",
                  left: "30px",
                }}
              >
                <Box component="img" src="/presale/mount-egg.gif" />
              </Stack>
              <Box
                component="img"
                src="/presale/buy.png"
                sx={{
                  width: 150,
                  position: "absolute",
                  right: "26%",
                  top: "47%",
                }}
              />
              <Box
                component="img"
                src="/presale/5000.png"
                sx={{
                  // width: 400,
                  position: "absolute",
                  bottom: "5%",
                  transform: "translate(-50%, 0)",
                  left: "50%",
                }}
              />
            </Stack>
          </Slider>
        </Container>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{ my: 10 }}
        >
          <Button
            variant="contained"
            color="warning"
            onClick={prev}
            sx={{ fontSize: 30 }}
          >
            prev
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={next}
            sx={{ fontSize: 30 }}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
