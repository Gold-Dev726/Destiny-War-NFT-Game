import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";

const FROGS = [
  {
    title: "THE GOD FATHER",
    image: "father",
  },
  {
    title: "THE DEAF",
    image: "deaf",
  },
  {
    title: "THE BLIND",
    image: "blind",
  },
  {
    title: "THE DJ",
    image: "dj",
  },
  {
    title: "THE HOST",
    image: "host",
  },
  {
    title: "THE ORIENT",
    image: "orient",
  },
  {
    title: "THE QUEEN",
    image: "queen",
  },
  {
    title: "THE RAPPER",
    image: "rapper",
  },
  {
    title: "THE SILENT",
    image: "silent",
  },
];
export default function EnticementSlick() {
  const settings = {
    infinite: false,
    speed: 1000,
    autoplaySpeed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    centerMode: true,
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
      <Stack sx={{ px: 4 }}>
        <Slider {...settings}>
          {FROGS.map((item) => (
            <Stack sx={{ px: 1 }}>
              <Box component="img" src={`/frog/${item.image}.png`} />
              <Typography variant="h6" sx={{ mt: 1 }}>{item.title}</Typography>
            </Stack>
          ))}
        </Slider>
      </Stack>
    </>
  );
}
