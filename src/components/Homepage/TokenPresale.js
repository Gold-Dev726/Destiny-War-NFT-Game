import { useState, useEffect } from "react";
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
  getERC20Contract,
} from "utils/contractHelpers";
import { BusdAddress, DwarTokenAddress } from "../../contracts/address";
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
  const [busdAmount, setBusdAmount] = useState();
  const [approved, setApproved] = useState(false);
  const { library, account } = useEthers();
  const signer = library?.getSigner();
  const DwarTokenContract = getDwarTokenContract(signer);
  const BusdContract = getERC20Contract(signer);

  const busdBalance = BusdBalance();

  const handleBuyMax = () => {
    setBusdAmount(busdBalance);
  };

  const handleBuyToken = async () => {
    console.log(DwarTokenContract);
    try {
      const result = await DwarTokenContract.buyTokens(
        (busdAmount * 10 ** 18).toString()
      );
      toast.success("You bought dwar tokens successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error("error");
    }
  };

  const handleApprove = async () => {
    try {
      const approvedResult = await BusdContract.approve(
        DwarTokenAddress,
        ethers.constants.MaxUint256
      );
      console.log("approvedResult", approvedResult);
      setApproved(true);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.data.message);
      setApproved(false);
    }
  };

  useEffect(() => {
    console.log(BusdContract);
    const checkAllowance = async () => {
      try {
        const result = await BusdContract.allowance(account, DwarTokenAddress);
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
  }, [account]);

  return (
    <Stack direction="row" sx={{ py: 10 }}>
      <Stack sx={{ position: "relative" }}>
        <Box component="img" src="/token_presale/1.png" />
        <Stack
          fullWidth
          direction="row"
          justifyContent="flex-end"
          sx={{
            position: "absolute",
            // border: "1px solid red",
            top: "46%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 40,
            width: 0.8,
          }}
        >
          <Typography color="black">Balance: {busdBalance}</Typography>
        </Stack>
        <Stack
          direction="row"
          fullWidth
          spacing={5}
          alignItems="center"
          sx={{
            position: "absolute",
            top: "53%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0.8,
          }}
        >
          <InputBase
            type="number"
            value={busdAmount}
            onChange={(e) => setBusdAmount(e.target.value)}
            sx={{ fontSize: 40, height: 50 }}
            fullWidth
          />
          <Typography
            variant="h3"
            color="#a75108"
            sx={{
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
            onClick={handleBuyMax}
          >
            BUY&nbsp;MAX
          </Typography>
        </Stack>
        <InputBase
          type="number"
          value={busdAmount * 100}
          fullWidth
          sx={{
            position: "absolute",
            // border: "1px solid red",
            top: "72%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 40,
            width: 0.8,
            height: 50,
          }}
          disabled
        />
        {approved ? (
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
        ) : (
          <Box
            component="img"
            src="/token_presale/approve.png"
            sx={{
              position: "absolute",
              left: "50%",
              bottom: "25px",
              transform: "translateX(-50%)",
              width: 150,
              cursor: "pointer",
            }}
            onClick={handleApprove}
          />
        )}
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
