// material
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Container, Stack } from "@mui/material";
import { getDwarTokenContract } from "utils/contractHelpers";
import { useEthers } from "@usedapp/core";
import { MetamaskErrorMessage } from "utils/MetamaskErrorMessage";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import formatBigNumber from "utils/formatBigNumber";

export default function Inventorypage() {
  const navigate = useNavigate();
  const { library, account } = useEthers();
  const signer = library?.getSigner();
  const DwarTokenContract = getDwarTokenContract(signer);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const OwnedCharacter = await DwarTokenContract.tokenOfOwnerByIndex(
  //         account,
  //         0
  //       );
  //       setOwnedCharacter(formatBigNumber(OwnedCharacter));
  //     } catch (error) {
  //       setOwnedCharacter(null);
  //     }
  //   };
  //   if (account) fetchData();
  // }, [DwarCharacterContract, account]);

  const handleWithdraw = async () => {
    try {
      const result = await DwarTokenContract.withdraw();
      toast.success("You bought dwar tokens successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  return (
    <Box
      sx={{
        background: "url(/inventory/bg.png)",
        mt: "-146px",
        backgroundSize: "cover",
        pb: 10,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          pt: 20,
        }}
      >
        <Button variant="contained" onClick={handleWithdraw}>Withdraw</Button>
      </Container>
    </Box>
  );
}
