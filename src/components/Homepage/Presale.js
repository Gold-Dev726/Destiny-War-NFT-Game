import { useState, useEffect, useRef } from "react";
// material
import {
  Box,
  Stack,
  Dialog,
  Button,
  Grid,
  Typography,
  TextField,
  Container,
  Hidden,
  LinearProgress,
  linearProgressClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { virtualize, bindKeyboard } from "react-swipeable-views-utils";
import {
  getDwarCharacterContract,
  getDwarTokenContract,
} from "utils/contractHelpers";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { useEthers } from "@usedapp/core";
import { BusdBalance } from "components/ConnectButton";
import { DwarCharacterAddress } from "contracts/address";
import Slider from "react-slick";
import CarouselArrow from "components/CarouselArrow";
import { MetamaskErrorMessage } from "utils/MetamaskErrorMessage";
import formatBigNumber from "utils/formatBigNumber";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#261b04",
    border: '2px solid #47350b'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 2,
    backgroundColor: "yellow",
  },
}));

export default function Homepage() {
  const EggSliderRef = useRef();

  const EggSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const [approved, setApproved] = useState(false);
  const [presaleModal, setPresaleModal] = useState(false);
  const [currentPresale, setCurrentPresale] = useState();
  const [tokenAmount, setTokenAmount] = useState();
  const [totalSupply, setTotalSupply] = useState();
  const { library, account } = useEthers();
  const signer = library?.getSigner();
  const DwarCharacterContract = getDwarCharacterContract(signer);
  const DwarTokenContract = getDwarTokenContract(signer);

  const handleModal = (type) => {
    setPresaleModal(true);
    setCurrentPresale(type);
  };

  const handleBuyToken = async () => {
    try {
      const result = await DwarCharacterContract.mintNFTs(1);
      toast.success("You bought a Dwar Character successfully!");
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handleApprove = async () => {
    try {
      const approvedResult = await DwarTokenContract.approve(
        DwarCharacterAddress,
        ethers.constants.MaxUint256
      );
      console.log("approvedResult", approvedResult);
      toast.success("Approved successfully!");
      setApproved(true);
    } catch (error) {
      console.error("Error:", error);
      toast.error(MetamaskErrorMessage(error));
      setApproved(false);
    }
  };

  useEffect(() => {
    const getTotalSupply = async () => {
      try {
        const result = await DwarCharacterContract.totalSupply();
        setTotalSupply(formatBigNumber(result));
      } catch (error) {
        console.error("Error:", error);
      }
    };
    const checkAllowance = async () => {
      try {
        const result = await DwarTokenContract.allowance(
          account,
          DwarCharacterAddress
        );
        const allowedBalance = ethers.utils.formatUnits(result);
        console.log(allowedBalance);
        if (allowedBalance > 0) {
          setApproved(true);
        } else {
          setApproved(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setApproved(false);
      }
    };
    checkAllowance();
    getTotalSupply();
  }, [account]);

  return (
    <Container maxWidth="xl">
      <Hidden mdDown>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={5}
          sx={{ width: 1, pb: 5 }}
        >
          <Stack>
            <Box
              component="img"
              src="/presale/character-egg.gif"
              onClick={() => handleModal("character")}
              sx={{ cursor: "pointer", width: 400, mx: "auto", mb: 5 }}
            />
            {approved ? (
              <Box
                component="img"
                src="/presale/buy.png"
                onClick={() => handleModal("character")}
                sx={{ cursor: "pointer", width: 120, mx: "auto" }}
              />
            ) : (
              <Box
                component="img"
                src="/presale/approve.png"
                onClick={handleApprove}
                sx={{ cursor: "pointer", width: 120, mx: "auto" }}
              />
            )}
          </Stack>

          <Stack>
            <Box
              component="img"
              src="/presale/mount-egg.gif"
              onClick={() => handleModal("mount")}
              sx={{ cursor: "pointer", width: 300, mx: "auto", mb: 5, mt: 3 }}
            />
            <Box
              component="img"
              src="/presale/buy.png"
              onClick={() => handleModal("mount")}
              sx={{ cursor: "pointer", width: 120, mx: "auto" }}
            />
          </Stack>

          <Stack>
            <Box
              component="img"
              src="/presale/pet-egg.gif"
              onClick={() => handleModal("pet")}
              sx={{ cursor: "pointer", width: 320, mx: "auto", mb: 5, mt: 3 }}
            />
            <Box
              component="img"
              src="/presale/buy.png"
              onClick={() => handleModal("pet")}
              sx={{ cursor: "pointer", width: 120, mx: "auto" }}
            />
          </Stack>
        </Stack>
      </Hidden>

      <Hidden mdUp>
        <Box sx={{ pb: 5 }}>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ mb: 5 }}
            spacing={5}
          >
            <CarouselArrow
              direction="prev"
              onClick={() => EggSliderRef.current.slickPrev()}
            />
            <CarouselArrow
              direction="next"
              onClick={() => EggSliderRef.current.slickNext()}
            />
          </Stack>

          <Slider {...EggSliderSettings} ref={EggSliderRef}>
            <Box>
              <Stack>
                <Box
                  component="img"
                  src="/presale/character-egg.gif"
                  onClick={() => handleModal("character")}
                  sx={{ cursor: "pointer", width: 200, mx: "auto", mb: 5 }}
                />
                {approved ? (
                  <Box
                    component="img"
                    src="/presale/buy.png"
                    onClick={() => handleModal("character")}
                    sx={{ cursor: "pointer", width: 100, mx: "auto" }}
                  />
                ) : (
                  <Box
                    component="img"
                    src="/presale/approve.png"
                    onClick={handleApprove}
                    sx={{ cursor: "pointer", width: 100, mx: "auto" }}
                  />
                )}
              </Stack>
            </Box>
            <Box>
              <Stack>
                <Box
                  component="img"
                  src="/presale/mount-egg.gif"
                  onClick={() => handleModal("mount")}
                  sx={{
                    cursor: "pointer",
                    width: 160,
                    mx: "auto",
                    mb: 5,
                  }}
                />
                <Box
                  component="img"
                  src="/presale/buy.png"
                  onClick={() => handleModal("mount")}
                  sx={{ cursor: "pointer", width: 100, mx: "auto" }}
                />
              </Stack>
            </Box>

            <Box>
              <Stack>
                <Box
                  component="img"
                  src="/presale/pet-egg.gif"
                  onClick={() => handleModal("pet")}
                  sx={{
                    cursor: "pointer",
                    width: 160,
                    mx: "auto",
                    mb: 5,
                  }}
                />
                <Box
                  component="img"
                  src="/presale/buy.png"
                  onClick={() => handleModal("pet")}
                  sx={{ cursor: "pointer", width: 100, mx: "auto" }}
                />
              </Stack>
            </Box>
          </Slider>
        </Box>
      </Hidden>

      <Dialog
        open={presaleModal}
        onClose={() => setPresaleModal(false)}
        PaperProps={{ sx: { background: "transparent" } }}
        // sx={{ height: "500px" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ position: "relative" }}
        >
          <Box
            component="img"
            src={`/presale/pet_presale_bg.png`}
            sx={{ width: 500 }}
          />
          <Box
            component="img"
            src={`/presale/${currentPresale}_bg.png`}
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          <Box
            component="img"
            src={`/presale/${currentPresale}-egg.png`}
            sx={{
              position: "absolute",
              left: "50%",
              top: 100,
              transform: "translateX(-50%)",
              width: 180,
            }}
          />

          <Box
            component="img"
            src={`/presale/buy.png`}
            sx={{
              position: "absolute",
              left: "50%",
              top: "60%",
              transform: "translateX(-50%)",
              width: 100,
              cursor: "pointer",
            }}
            onClick={handleBuyToken}
          />
           <Stack
            direction="row"
            justifyContent="center"
            sx={{ position: "absolute", bottom: 130, width: 1 }}
          >
            <Typography>{totalSupply}</Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ position: "absolute", bottom: 20, width: 1, px: "58px" }}
          >
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                width: 70,
                height: 90,
                background: "url(/presale/egg.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Typography>50000</Typography>
            </Stack>
            {/* <Stack
              sx={{
                width: 200,
                height: 20,
                background: "url(/presale/loading_bg.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box
                component="img"
                src="/presale/loading.png"
                sx={{ width: 200 }}
              />
            </Stack> */}
            <BorderLinearProgress sx={{width: 200}} variant="determinate" value={totalSupply} />
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                width: 70,
                height: 90,
                background: "url(/presale/egg.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Typography>{50000 - totalSupply}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Dialog>
      {/* <Dialog
        open={presaleModal}
        onClose={() => setPresaleModal(false)}
        PaperProps={{ sx: { background: "transparent" } }}
        // sx={{ height: "500px" }}
      >
        <Stack direction="row" alignItems="center">
          <Button variant="contained">Prev</Button>
          <SwipeableViews
            enableMouseEvents
            index={currentPresale}
            onChangeIndex={(index) => setCurrentPresale(index)}
          >
            <Box component="img" src={`/presale/presale1.jpg`} />
            <Box component="img" src={`/presale/presale2.jpg`} />
            <Box component="img" src={`/presale/presale3.jpg`} />
          </SwipeableViews>
          <Button variant="contained">Next</Button>
        </Stack>
      </Dialog> */}
    </Container>
  );
}
