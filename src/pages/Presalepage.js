import { useEffect, useState, useRef } from "react";
// material
import {
  Box,
  Stack,
  Container,
  Hidden,
  Typography,
  Button,
  Divider,
  OutlinedInput,
  InputAdornment,
  Grid,
} from "@mui/material";
import {
  getDwarCharacterContract,
  getDwarTokenContract,
} from "utils/contractHelpers";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { useEthers } from "@usedapp/core";
import Slider from "react-slick";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <Box
      sx={{
        right: -100,
        display: "block",
        background: "url(/nextArrow.png)",
        width: 130,
        height: 95,
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        cursor: "pointer",
        transition: "all 0.3s",
        "&:hover": { transform: "translate(0, -50%) scale(1.2)" },
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Box
      sx={{
        left: -100,
        display: "block",
        background: "url(/prevArrow.png)",
        width: 130,
        height: 95,
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        cursor: "pointer",
        transition: "all 0.3s",
        "&:hover": { transform: "translate(0, -50%) scale(1.2)" },
      }}
      onClick={onClick}
    />
  );
}
// export function NextArrow(props) {
//   const { onClick } = props;
//   return (
//     <Box component="img" src="/nextArrow.png" sx={{ width: 40, height: 40 }} />
//   );
// }
export default function PresalePage() {
  const { library, account } = useEthers();
  const signer = library?.getSigner();
  const DwarCharacterContract = getDwarCharacterContract(signer);
  const DwarTokenContract = getDwarTokenContract(signer);

  const handleBuyCharacter = async () => {
    try {
      const options = { value: ethers.utils.parseEther("0.035") };
      const result = await DwarCharacterContract.DwarCharacter(1, options);
      toast.success("You minted a character successfully!");
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.data.message);
    }
  };


  // Slider Part
  const sliderRef = useRef();

  const sliderSettings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
        sx={{
          background: "url(/presale/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: { xs: "cover", md: "110% 100%" },
          backgroundPosition: { xs: "-100px 150px", md: "-180px" },
        }}
      >
        <Hidden mdDown>
          <>
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
                    {/* <Box
                      component="img"
                      src="/presale/buy.png"
                      sx={{ width: 150, mt: -10 }}
                    /> */}
                  </Stack>
                  {/* <Box
                    component="img"
                    src="/presale/1.png"
                    sx={{
                      width: 100,
                      position: "absolute",
                      right: "29%",
                      top: "40%",
                    }}
                  /> */}
                  <Box
                    component="img"
                    src="/presale/buy.png"
                    sx={{
                      position: "absolute",
                      right: "26%",
                      top: "42%",
                      cursor: "pointer",
                    }}
                    onClick={handleBuyCharacter}
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
                      sx={{
                        width: 1,
                        height: 100,
                        position: "absolute",
                        top: -35,
                      }}
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
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      position: "absolute",
                      bottom: "21%",
                      width: 1,
                      pl: 29,
                      pr: 28.5,
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{ width: "92px", fontSize: 36 }}
                    >
                      50000
                    </Typography>
                    <Typography
                      textAlign="center"
                      sx={{ width: "92px", fontSize: 36 }}
                    >
                      50000
                    </Typography>
                  </Stack>
                  {/* <Stack sx={{ position: "absolute", bottom: "26%", width: 1 }}>
                    <Typography
                      textAlign="center"
                      variant="h3"
                      color="white"
                      sx={{ ml: 2 }}
                    >
                      188
                    </Typography>
                  </Stack> */}
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
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      position: "absolute",
                      bottom: "19%",
                      width: 1,
                      pl: 29,
                      pr: 28.5,
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{ width: "92px", fontSize: 36 }}
                    >
                      50000
                    </Typography>
                    <Typography
                      textAlign="center"
                      sx={{ width: "92px", fontSize: 36 }}
                    >
                      50000
                    </Typography>
                  </Stack>
                  {/* <Stack sx={{ position: "absolute", bottom: "24%", width: 1 }}>
                    <Typography
                      textAlign="center"
                      variant="h3"
                      color="white"
                      sx={{ ml: 2 }}
                    >
                      188
                    </Typography>
                  </Stack> */}
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
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      position: "absolute",
                      bottom: "19%",
                      width: 1,
                      pl: 29,
                      pr: 28.5,
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{ width: "92px", fontSize: 36 }}
                    >
                      50000
                    </Typography>
                    <Typography
                      textAlign="center"
                      sx={{ width: "92px", fontSize: 36 }}
                    >
                      50000
                    </Typography>
                  </Stack>
                  {/* <Stack sx={{ position: "absolute", bottom: "24%", width: 1 }}>
                    <Typography
                      textAlign="center"
                      variant="h3"
                      color="white"
                      sx={{ ml: 2 }}
                    >
                      188
                    </Typography>
                  </Stack> */}
                </Stack>
              </Slider>
            </Container>
            {/* <Stack
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
            </Stack> */}
          </>
        </Hidden>

        <Hidden mdUp>
          <>
            <Container maxWidth="lg" sx={{ mt: 10 }}>
              <Slider ref={sliderRef} {...sliderSettings}>
                <Stack sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src="/presale/description.png"
                    sx={{ height: "100%" }}
                  />
                  <Stack
                    alignItems="center"
                    sx={{
                      width: 150,
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  >
                    <Box component="img" src="/presale/character-egg.gif" />
                  </Stack>
                  <Box
                    component="img"
                    src="/presale/buy.png"
                    sx={{
                      width: 50,
                      position: "absolute",
                      right: "26%",
                      top: "47%",
                    }}
                  />
                  <Box
                    component="img"
                    src="/presale/5000.png"
                    sx={{
                      width: 50,
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
                      width: 150,
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  >
                    <Box component="img" src="/presale/pet-egg.gif" />
                  </Stack>
                  <Box
                    component="img"
                    src="/presale/buy.png"
                    sx={{
                      width: 50,
                      position: "absolute",
                      right: "26%",
                      top: "47%",
                    }}
                  />
                  <Box
                    component="img"
                    src="/presale/5000.png"
                    sx={{
                      width: 40,
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
                      width: 150,
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  >
                    <Box component="img" src="/presale/mount-egg.gif" />
                  </Stack>
                  <Box
                    component="img"
                    src="/presale/buy.png"
                    sx={{
                      width: 50,
                      position: "absolute",
                      right: "26%",
                      top: "47%",
                    }}
                  />
                  <Box
                    component="img"
                    src="/presale/5000.png"
                    sx={{
                      width: 40,
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
          </>
        </Hidden>
      </Stack>
    </>
  );
}
