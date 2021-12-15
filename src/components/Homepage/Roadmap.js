import { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container } from "@mui/material";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import Slider from "react-slick";
import CarouselArrow from "components/CarouselArrow";
export default function Roadmap() {
  const RoadmapSliderRef = useRef();

  const RoadmapSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ mt: { xs: 5, md: 10 }, mb: 5 }}
      >
        <MotionInView variants={varFadeInUp}>
          <Box
            component="img"
            src="/texts/roadmap.png"
            sx={{ width: { xs: 200, md: "initial" } }}
          />
        </MotionInView>
      </Stack>
      <Stack direction="row" justifyContent="center" sx={{ mb: 5 }} spacing={5}>
        <CarouselArrow
          direction="prev"
          onClick={() => RoadmapSliderRef.current.slickPrev()}
        />
        <CarouselArrow
          direction="next"
          onClick={() => RoadmapSliderRef.current.slickNext()}
        />
      </Stack>
      <Container maxWidth="xl">
        <Slider {...RoadmapSliderSettings} ref={RoadmapSliderRef}>
          {[...Array(12)].map((item, index) => (
            <Box key={index}>
              <Box
                component="img"
                src={`/roadmap/${index + 1}.png`}
                sx={{ width: { xs: 260, md: "initial" }, mx: "auto" }}
                // sx={{
                //   width: 450,
                //   height: 490,
                //   background: `url(/roadmap/${index + 1}.png)`,
                //   backgroundSize: "cover",
                // }}
              />
            </Box>
          ))}
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
    </>
  );
}
