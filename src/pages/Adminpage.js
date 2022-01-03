// material
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import {
  getDwarTokenContract,
  getDwarCharacterContract,
  getDwarMountContract,
  getDwarPetContract,
} from "utils/contractHelpers";
import { useEthers } from "@usedapp/core";
import { MetamaskErrorMessage } from "utils/MetamaskErrorMessage";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import formatBigNumber from "utils/formatBigNumber";

export default function Inventorypage() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState();
  const [tokenAmount, setTokenAmount] = useState(1);
  const [price, setPrice] = useState(0);
  const { library, account } = useEthers();
  const signer = library?.getSigner();
  const DwarTokenContract = getDwarTokenContract(signer);
  const DwarCharacterContract = getDwarCharacterContract(signer);
  const DwarMountContract = getDwarMountContract(signer);
  const DwarPetContract = getDwarPetContract(signer);

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
      toast.error(
        "The liquidity is locked now. You can withdraw funds after liquidity is unlocked."
      );
    }
  };

  const handleTokenWithdraw = async () => {
    try {
      const result = await DwarTokenContract.withdrawTokens(tokenAmount);
      toast.success("You withdraw dwar tokens successfully!");
    } catch (error) {
      console.log("Error:", error);
      toast.error(
        "You already withdraw funds. You have to provide liquidity pool to withdraw funds again."
      );
    }
  };

  const handleChangePrice = async () => {
    try {
      const result = await DwarTokenContract.setPrice(
        ethers.utils.parseEther(price)
      );
      toast.success("You set price successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleMintCharacter = async () => {
    try {
      const result = await DwarCharacterContract.reserveNFTs(amount);
      toast.success("You mint characters successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handleMintMount = async () => {
    try {
      const result = await DwarMountContract.reserveNFTs(amount);
      toast.success("You mint mounts successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handleMintPet = async () => {
    try {
      const result = await DwarPetContract.reserveNFTs(amount);
      toast.success("You mint pets successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handlePriceCharacter = async () => {
    try {
      const result = await DwarCharacterContract.setPrice(
        ethers.utils.parseEther(price)
      );
      toast.success("You set price successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handlePriceMount = async () => {
    try {
      const result = await DwarMountContract.setPrice(
        ethers.utils.parseEther(price)
      );
      toast.success("You set price successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handlePricePet = async () => {
    try {
      const result = await DwarPetContract.setPrice(
        ethers.utils.parseEther(price)
      );
      toast.success("You set price successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const result = await DwarTokenContract.tokenPrice();
        const result1 = ethers.utils.formatUnits(result);
        console.log("tokenPrice", result1);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchPrice();
  }, [account]);

  return (
    <Box
      sx={{
        background: "url(/inventory/bg.png)",
        mt: "-146px",
        backgroundSize: "cover",
        pb: 10,
      }}
    >
      {/* <Container
        maxWidth="xl"
        sx={{
          pt: 20,
        }}
      >
        <Button variant="contained" onClick={handleWithdraw}>
          Withdraw
        </Button>
        <TextField value={amount} onChange={(e) => setAmount(e.target.value)} />
        <Button variant="contained" color="error" onClick={handleMintCharacter}>
          Mint Characters
        </Button>
        <Button variant="contained" color="warning" onClick={handleMintMount}>
          Mint Mounts
        </Button>
        <Button variant="contained" color="info" onClick={handleMintPet}>
          Mint Pets
        </Button>
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          pt: 20,
        }}
      >
        <TextField value={price} onChange={(e) => setPrice(e.target.value)} />

        <Button variant="contained" onClick={handleChangePrice}>
          Change Price
        </Button>
      </Container> */}

      <Container
        maxWidth="xl"
        sx={{
          pt: 20,
        }}
      >
        <TextField value={price} onChange={(e) => setPrice(e.target.value)} />
        <Button
          variant="contained"
          color="error"
          onClick={handlePriceCharacter}
        >
          Set Characters Price
        </Button>
        <Button variant="contained" color="warning" onClick={handlePriceMount}>
          Set Mounts Price
        </Button>
        <Button variant="contained" color="info" onClick={handlePricePet}>
          Set Pets Price
        </Button>
      </Container>
    </Box>
  );
}
