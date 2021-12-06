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
  InputBase,
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
  const [busdAmount, setBusdAmount] = useState();
  const { library, account } = useEthers();
  const signer = library?.getSigner();
  const DwarCharacterContract = getDwarCharacterContract(signer);
  const DwarTokenContract = getDwarTokenContract(signer);

  const handleModal = (type) => {
    setPresaleModal(true);
    setCurrentPresale(type);
  };

  const handleBuyToken = async () => {
    console.log(DwarTokenContract);
    try {
      // const options = {
      //   value: ethers.utils.parseEther((0.000008 * tokenAmount).toString()),
      // };
      // const result = await DwarTokenContract.buyTokens(tokenAmount, options);
      const result = await DwarTokenContract.buyTokens(20);
      toast.success("You bought dwar tokens successfully!");
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.data.message);
    }
  };

  const busdBalance = BusdBalance();

  return (
    <Stack direction="row" sx={{ py: 10 }}>
      <Stack sx={{ position: "relative" }}>
        <Box component="img" src="/token_presale/1.png" />
        <InputBase
          type="number"
          value={busdAmount}
          onChange={(e) => setBusdAmount(e.target.value)}
          fullWidth
          sx={{
            position: "absolute",
            border: "1px solid red",
            top: "53%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 40,
            width: 0.8,
            height: 50,
          }}
        />
        <InputBase
          type="number"
          value={busdAmount * 100}
          fullWidth
          sx={{
            position: "absolute",
            border: "1px solid red",
            top: "72%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 40,
            width: 0.8,
            height: 50,
          }}
          disabled
        />
        <Box
          component="img"
          src="/token_presale/buy.png"
          sx={{
            position: "absolute",
            left: "50%",
            bottom: "25px",
            transform: "translateX(-50%)",
            width: 150,
            cursor: "pointer",
          }}
          onClick={handleBuyToken}
        />
      </Stack>
      <Stack sx={{ position: "relative" }}>
        <Box component="img" src="/token_presale/2.png" />
      </Stack>
      <Stack sx={{ position: "relative" }}>
        <Box component="img" src="/token_presale/3.png" />
      </Stack>
    </Stack>
  );
}
