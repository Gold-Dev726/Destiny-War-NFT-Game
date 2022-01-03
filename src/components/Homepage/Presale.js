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
  getDwarMountContract,
  getDwarPetContract,
  getDwarTokenContract,
  getERC20Contract
} from "utils/contractHelpers";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { useEthers } from "@usedapp/core";
import { BusdBalance } from "components/ConnectButton";
import {
  DwarCharacterAddress,
  DwarMountAddress,
  DwarPetAddress,
} from "contracts/address";
import Slider from "react-slick";
import CarouselArrow from "components/CarouselArrow";
import { MetamaskErrorMessage } from "utils/MetamaskErrorMessage";
import formatBigNumber from "utils/formatBigNumber";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#261b04",
    border: "2px solid #47350b",
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
  const [characterApproved, setCharacterApproved] = useState(false);
  const [mountApproved, setMountApproved] = useState(false);
  const [petApproved, setPetApproved] = useState(false);

  const [characterTotalSupply, setCharacterTotalSupply] = useState();
  const [mountTotalSupply, setMountTotalSupply] = useState();
  const [petTotalSupply, setPetTotalSupply] = useState();

  const [presaleModal, setPresaleModal] = useState(false);
  const [currentPresale, setCurrentPresale] = useState();
  const [tokenAmount, setTokenAmount] = useState();

  const { library, account } = useEthers();
  const signer = library?.getSigner();

  const DwarCharacterContract = getDwarCharacterContract(signer);
  const DwarMountContract = getDwarMountContract(signer);
  const DwarPetContract = getDwarPetContract(signer);
  const DwarTokenContract = getDwarTokenContract(signer);
  const BusdContract = getERC20Contract(signer);

  const handleModal = (type) => {
    setPresaleModal(true);
    setCurrentPresale(type);
  };

  console.log("Mount", DwarMountContract);

  const handleBuyToken = async () => {
    try {
      if (currentPresale === "character") {
        const result = await DwarCharacterContract.mintNFTs(1);
        toast.success("You bought a Dwar Character successfully!");
        console.log(result);
      } else if (currentPresale === "mount") {
        console.log("mint-mount");
        const result = await DwarMountContract.mintNFTs(1);
        toast.success("You bought a Dwar Mount successfully!");
        console.log(result);
      } else {
        const result = await DwarPetContract.mintNFTs(1);
        toast.success("You bought a Dwar Pet successfully!");
        console.log(result);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handleCharacterApprove = async () => {
    try {
      const characterApprovedResult = await BusdContract.approve(
        DwarCharacterAddress,
        ethers.constants.MaxUint256
      );
      console.log("characterApprovedResult", characterApprovedResult);
      toast.success("Approved successfully!");
      setCharacterApproved(true);
    } catch (error) {
      console.error("Error:", error);
      toast.error(MetamaskErrorMessage(error));
      setCharacterApproved(false);
    }
  };

  const handleMountApprove = async () => {
    try {
      const characterApprovedResult = await BusdContract.approve(
        DwarMountAddress,
        ethers.constants.MaxUint256
      );
      console.log("characterApprovedResult", characterApprovedResult);
      toast.success("Approved successfully!");
      setMountApproved(true);
    } catch (error) {
      console.error("Error:", error);
      toast.error(MetamaskErrorMessage(error));
      setMountApproved(false);
    }
  };

  const handlePetApprove = async () => {
    try {
      const characterApprovedResult = await BusdContract.approve(
        DwarPetAddress,
        ethers.constants.MaxUint256
      );
      toast.success("Approved successfully!");
      setPetApproved(true);
    } catch (error) {
      console.error("Error:", error);
      toast.error(MetamaskErrorMessage(error));
      setPetApproved(false);
    }
  };

  const currentTotalSupply = () => {
    if (currentPresale === "character") {
      return characterTotalSupply;
    } else if (currentPresale === "mount") {
      return mountTotalSupply;
    } else {
      return petTotalSupply;
    }
  };

  useEffect(() => {
    const getCharacterTotalSupply = async () => {
      try {
        const result = await DwarCharacterContract.totalSupply();
        setCharacterTotalSupply(formatBigNumber(result));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const getMountTotalSupply = async () => {
      try {
        const result = await DwarMountContract.totalSupply();
        setMountTotalSupply(formatBigNumber(result));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const getPetTotalSupply = async () => {
      try {
        const result = await DwarPetContract.totalSupply();
        setPetTotalSupply(formatBigNumber(result));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const checkCharacterAllowance = async () => {
      try {
        const result = await BusdContract.allowance(
          account,
          DwarCharacterAddress
        );
        const allowedBalance = ethers.utils.formatUnits(result);
        if (allowedBalance > 0) {
          setCharacterApproved(true);
        } else {
          setCharacterApproved(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setCharacterApproved(false);
      }
    };

    const checkMountAllowance = async () => {
      try {
        const result = await BusdContract.allowance(
          account,
          DwarMountAddress
        );
        const allowedBalance = ethers.utils.formatUnits(result);
        if (allowedBalance > 0) {
          setMountApproved(true);
        } else {
          setMountApproved(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setMountApproved(false);
      }
    };

    const checkPetAllowance = async () => {
      try {
        const result = await BusdContract.allowance(
          account,
          DwarPetAddress
        );
        const allowedBalance = ethers.utils.formatUnits(result);
        if (allowedBalance > 0) {
          setPetApproved(true);
        } else {
          setPetApproved(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setPetApproved(false);
      }
    };

    checkCharacterAllowance();
    checkMountAllowance();
    checkPetAllowance();
    getCharacterTotalSupply();
    getMountTotalSupply();
    getPetTotalSupply();
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
            {characterApproved ? (
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
                onClick={handleCharacterApprove}
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
            {mountApproved ? (
              <Box
                component="img"
                src="/presale/buy.png"
                onClick={() => handleModal("mount")}
                sx={{ cursor: "pointer", width: 120, mx: "auto" }}
              />
            ) : (
              <Box
                component="img"
                src="/presale/approve.png"
                onClick={handleMountApprove}
                sx={{ cursor: "pointer", width: 120, mx: "auto" }}
              />
            )}
          </Stack>

          <Stack>
            <Box
              component="img"
              src="/presale/pet-egg.gif"
              onClick={() => handleModal("pet")}
              sx={{ cursor: "pointer", width: 320, mx: "auto", mb: 5, mt: 3 }}
            />
            {petApproved ? (
              <Box
                component="img"
                src="/presale/buy.png"
                onClick={() => handleModal("pet")}
                sx={{ cursor: "pointer", width: 120, mx: "auto" }}
              />
            ) : (
              <Box
                component="img"
                src="/presale/approve.png"
                onClick={handlePetApprove}
                sx={{ cursor: "pointer", width: 120, mx: "auto" }}
              />
            )}
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
                {characterApproved ? (
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
                    onClick={handleCharacterApprove}
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
                {mountApproved ? (
                  <Box
                    component="img"
                    src="/presale/buy.png"
                    onClick={() => handleModal("mount")}
                    sx={{ cursor: "pointer", width: 100, mx: "auto" }}
                  />
                ) : (
                  <Box
                    component="img"
                    src="/presale/approve.png"
                    onClick={handleMountApprove}
                    sx={{ cursor: "pointer", width: 100, mx: "auto" }}
                  />
                )}
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
                {petApproved ? (
                  <Box
                    component="img"
                    src="/presale/buy.png"
                    onClick={() => handleModal("pet")}
                    sx={{ cursor: "pointer", width: 100, mx: "auto" }}
                  />
                ) : (
                  <Box
                    component="img"
                    src="/presale/approve.png"
                    onClick={handlePetApprove}
                    sx={{ cursor: "pointer", width: 100, mx: "auto" }}
                  />
                )}
              </Stack>
            </Box>
          </Slider>
        </Box>
      </Hidden>

      <Dialog
        open={presaleModal}
        onClose={() => setPresaleModal(false)}
        PaperProps={{
          sx: { background: "transparent", mx: { xs: "2px", md: "inherit" } },
        }}
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
              top: { xs: 50, md: 100 },
              transform: "translateX(-50%)",
              width: { xs: 140, md: 180 },
            }}
          />

          <Box
            component="img"
            src={`/presale/30.png`}
            sx={{
              position: "absolute",
              left: "50%",
              top: "56%",
              transform: "translateX(-50%)",
              width: { xs: 80, md: 100 },
              cursor: "pointer",
            }}
          />

          <Box
            component="img"
            src={`/presale/buy.png`}
            sx={{
              position: "absolute",
              left: "50%",
              top: "61%",
              transform: "translateX(-50%)",
              width: { xs: 80, md: 100 },
              cursor: "pointer",
            }}
            onClick={handleBuyToken}
          />
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ position: "absolute", bottom: { xs: 80, md: 130 }, width: 1 }}
          >
            <Typography fontSize={{ xs: 14, md: 18 }}>
              {currentTotalSupply() && currentTotalSupply().toFixed(0)}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              position: "absolute",
              bottom: { xs: 0, md: 20 },
              width: 1,
              px: { xs: "28px", md: "58px" },
            }}
          >
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                width: { xs: 60, md: 70 },
                height: { xs: 70, md: 90 },
                background: "url(/presale/egg.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Typography>10000</Typography>
            </Stack>
            <BorderLinearProgress
              sx={{ width: { xs: 140, md: 200 } }}
              variant="determinate"
              value={(currentTotalSupply() / 10000) * 100}
            />
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                width: { xs: 60, md: 70 },
                height: { xs: 70, md: 90 },
                background: "url(/presale/egg.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Typography>{10000 - currentTotalSupply()}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Dialog>
    </Container>
  );
}
