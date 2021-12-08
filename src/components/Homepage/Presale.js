import { useState } from "react";
// material
import {
  Box,
  Stack,
  Dialog,
  Button,
  Grid,
  Typography,
  TextField,
} from "@mui/material";

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
// function slideRenderer(params) {
//   const { index, key } = params;
//   console.log(index);
//   return (
//   );
// }

export default function Homepage() {
  const [presaleModal, setPresaleModal] = useState(false);
  const [currentPresale, setCurrentPresale] = useState();
  const [tokenAmount, setTokenAmount] = useState();
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
      // const options = {
      //   value: ethers.utils.parseEther((0.000008 * tokenAmount).toString()),
      // };
      // const result = await DwarTokenContract.buyTokens(tokenAmount, options);
      const result = await DwarCharacterContract.mintDwarCharacter(1);
      toast.success("You bought a Dwar Character successfully!");
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.data.message);
    }
  };

  const handleApprove = async () => {
    try {
      const approvedResult = await DwarTokenContract.approve(
        DwarCharacterAddress,
        ethers.constants.MaxUint256
      );
      console.log("approvedResult", approvedResult);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.data.message);
    }
  };

  const busdBalance = BusdBalance();

  return (
    <>
      <Grid container sx={{ px: 20 }} alignItems="center">
        <Grid item md={4} sm={6}>
          <Box
            component="img"
            src="/presale/character-egg.gif"
            onClick={() => handleModal("character")}
            sx={{ cursor: "pointer", mt: -3 }}
          />
        </Grid>
        <Grid item md={4} sm={6}>
          <Box
            component="img"
            src="/presale/mount-egg.gif"
            onClick={() => handleModal("mount")}
            sx={{ cursor: "pointer" }}
          />
        </Grid>
        <Grid item md={4} sm={6}>
          <Box
            component="img"
            src="/presale/pet-egg.gif"
            onClick={() => handleModal("pet")}
            sx={{ cursor: "pointer", mt: "45px" }}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ px: 20, pb: 10, mt: -8 }} alignItems="center">
        <Grid item md={4} sm={6}>
          <Box
            component="img"
            src="/presale/buy.png"
            onClick={() => handleModal("character")}
            sx={{ cursor: "pointer", width: 120, mx: "auto" }}
          />
          <Stack
            justifyContent="center"
            alignItems="center"
            onClick={handleApprove}
            sx={{
              cursor: "pointer",
              width: 120,
              mx: "auto",
              height: 60,
              bgcolor: "yellow",
            }}
          >
            APPROVE
          </Stack>
        </Grid>
        <Grid item md={4} sm={6}>
          <Box
            component="img"
            src="/presale/buy.png"
            onClick={() => handleModal("mount")}
            sx={{ cursor: "pointer", width: 120, ml: 30 }}
          />
        </Grid>
        <Grid item md={4} sm={6}>
          <Box
            component="img"
            src="/presale/buy.png"
            onClick={() => handleModal("pet")}
            sx={{ cursor: "pointer", width: 120, ml: 24 }}
          />
        </Grid>
      </Grid>

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
          {currentPresale === "character" ? (
            <Box
              component="img"
              src={`/presale/${currentPresale}-egg.gif`}
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                transform: "translateX(-50%)",
                width: 320,
              }}
            />
          ) : (
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
          )}

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
            <Stack
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
            </Stack>
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
    </>
  );
}
