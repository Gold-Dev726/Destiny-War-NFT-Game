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
  Container,
  LinearProgress,
  linearProgressClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

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
import { BusdBalance, DwarBalance } from "components/ConnectButton";
// function slideRenderer(params) {
//   const { index, key } = params;
//   console.log(index);
//   return (
//   );
// }

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 18,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#a14900",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "yellow",
  },
}));

const BoxStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: "rgba(234, 178, 18, 0.7)",
  boxShadow: "0px 0px 10px 3px white",
  padding: "32px 64px",
}));

const EventStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: "rgba(234, 178, 18, 0.7)",
  boxShadow: "0px 0px 10px 3px white",
  padding: "16px 64px",
}));

const TitleStyle = styled(Typography)(({ theme }) => ({
  fontFamily: "American",
  color: "#a75108",
  textShadow: "0px 0px 10px #ffffff",
  lineHeight: 1.2,
}));

export default function Homepage() {
  const [busdAmount, setBusdAmount] = useState();
  const [approved, setApproved] = useState(false);
  const [transactions, setTransactions] = useState([
    { account: "0x438Aa0f9941384Db5331715715050E8C68F72237", amount: 25 },
    { account: "0xd34708803b94952f3964985B91D72178bc44E987", amount: 150 },
    { account: "0xdB9B8A143c9a524CC20ec19Fc10CE514f21705f1", amount: 30 },
  ]);
  const { library, account } = useEthers();
  const signer = library?.getSigner();
  const DwarTokenContract = getDwarTokenContract(signer);
  const BusdContract = getERC20Contract(signer);

  const busdBalance = BusdBalance();
  const dwarBalance = DwarBalance(DwarTokenAddress);

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
      const temp = [...transactions, { account, amount: busdAmount }];
      setTransactions(temp);
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
      // toast.error(error.data.message);
      setApproved(false);
    }
  };

  useEffect(() => {
    const fetchTxs = async () => {
      const result = await fetch(
        "https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x116795fcfBC210E5114f2e7FaCDCD5BC6525194D&startblock=0&endblock=9999999&page=1&offset=10&sort=asc&apikey=UZ7MMCU9IGSEYT6PZWUNCAW35WQJENQTBP"
      );
      const data = await result.json();
      console.log("result", data);
    };
    fetchTxs();
  }, []);

  // const presalePercent = async () => {
  //   try {
  //     const approvedResult = await DwarTokenAddress.balance(
  //       DwarTokenAddress,
  //       ethers.constants.MaxUint256
  //     );
  //     console.log("approvedResult", approvedResult);
  //     setApproved(true);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     // toast.error(error.data.message);
  //     setApproved(false);
  //   }
  // };

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

  console.log("dwarBalance", dwarBalance);
  console.log("tranactions", transactions);

  return (
    <>
      {/* <Stack direction="row" sx={{ py: 10 }}>
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
        </Stack>
        <Stack sx={{ position: "relative" }}>
          <Box component="img" src="/token_presale/2.png" />
        </Stack>
        <Stack sx={{ position: "relative" }}>
          <Box component="img" src="/token_presale/3.png" />
        </Stack>
      </Stack> */}

      <Stack direction="row" sx={{ py: 10, px: 10, width: 1 }} spacing={3}>
        <Stack width={650}>
          <BoxStyle>
            <Typography variant="h3" align="center" color="white">
              $DWAR INITIAL TOKEN OFFERING
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="white"
              sx={{ mt: 3 }}
            >
              The goal is to seel initial token to raise funds for liquidity
              pool and further development of the game. <br />
              By purchasing our initial token, you will be able to participate
              in our kickstart initiative and purchase NFT's ahead of time.
              Following that, we'll release the expedition mini-game while we
              work on the main game.
            </Typography>

            <Stack sx={{ mt: 3 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <TitleStyle fontSize={38}>BALANCE</TitleStyle>
                <TitleStyle>BALANCE</TitleStyle>
              </Stack>
              <Stack
                direction="row"
                fullWidth
                spacing={5}
                alignItems="center"
                sx={{
                  bgcolor: "#f6e082",
                  borderRadius: "12px",
                  px: 2,
                  py: "4px",
                }}
              >
                <InputBase
                  type="number"
                  value={busdAmount}
                  onChange={(e) => setBusdAmount(e.target.value)}
                  sx={{ fontSize: 40, height: 50 }}
                  fullWidth
                />
                <TitleStyle
                  fontSize={32}
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                  onClick={handleBuyMax}
                >
                  BUYMAX
                </TitleStyle>
              </Stack>
              <TitleStyle align="center" fontSize={24}>
                $BUSD AMOUNT
              </TitleStyle>
            </Stack>

            <Stack sx={{ mt: 2 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <TitleStyle fontSize={38}>TOTAL BALANCE</TitleStyle>
                {/* <Typography variant="h4" color="#a75108">
                  BALANCE
                </Typography> */}
              </Stack>
              <Stack
                direction="row"
                fullWidth
                spacing={5}
                alignItems="center"
                sx={{
                  bgcolor: "#f6e082",
                  borderRadius: "12px",
                  px: 2,
                  py: "4px",
                }}
              >
                <InputBase
                  type="number"
                  value={busdAmount * 100}
                  onChange={(e) => setBusdAmount(e.target.value)}
                  sx={{ fontSize: 40, height: 50 }}
                  fullWidth
                  disabled
                />
              </Stack>
              <TitleStyle fontSize={24} align="center">
                $DWAR AMOUNT
              </TitleStyle>
            </Stack>

            <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
              {approved ? (
                <Box
                  component="img"
                  src="/token_presale/buy.png"
                  sx={{
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
                    width: 150,
                    cursor: "pointer",
                  }}
                  onClick={handleApprove}
                />
              )}
            </Stack>
          </BoxStyle>
        </Stack>
        <Stack width={500}>
          <BoxStyle>
            <Typography variant="h3" align="center" color="white">
              TOKEN SALE INFORMATION
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="white"
              sx={{ mt: 3 }}
            >
              TOKEN NAME: DESTINY WAR TOKEN <br />
              TOKEN SYMBOL: DWAR <br />
              TOKEN PRICE: 1 DWAR = $0.01 <br />
              MINIMUM: 20BUSD <br />
              MAXIMUM: 2500BUSD <br />
              ACCEPTED TOKEN: BUSD <br />
            </Typography>
          </BoxStyle>
          <BoxStyle>
            <Stack alignItems="center" sx={{ my: 5 }}>
              <Box
                component="img"
                src="/token_presale/dwar_token.png"
                sx={{ width: 160 }}
              />
            </Stack>
            <TitleStyle fontSize={28} align="center">
              TOKEN INITIAL SUPPLY: 300000000
            </TitleStyle>
            <BorderLinearProgress
              variant="determinate"
              value={((300000000 - dwarBalance) / 300000000) * 100}
            />
            <TitleStyle fontSize={28} align="center">
              {300000000 - dwarBalance}/300000000
            </TitleStyle>
          </BoxStyle>
        </Stack>
        <Stack flexGrow={1}>
          <BoxStyle>
            <Typography variant="h3" align="center" color="white">
              DWAR PRESALE STATS
            </Typography>
            <Typography variant="h4" align="center" color="#a14900">
              PRESALE GOAL
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              sx={{ width: 1 }}
            >
              <Typography variant="h4" color="white">
                {300000000 - dwarBalance} DWAR
              </Typography>
              <Typography variant="h3" color="white">
                {(((300000000 - dwarBalance) / 300000000) * 100).toFixed(4)}%
              </Typography>
              <Typography variant="h4" color="white">
                300M DWAR
              </Typography>
            </Stack>
            <BorderLinearProgress
              variant="determinate"
              value={((300000000 - dwarBalance) / 300000000) * 100}
            />
            <TitleStyle fontSize={40} align="center">
              TOKEN PRIVATE SALE <br /> DEC 18, 2021
            </TitleStyle>
          </BoxStyle>
          <BoxStyle>
            <Typography variant="h3" align="center" color="white">
              DWAR PRESALE EVENT
            </Typography>
          </BoxStyle>
          {transactions
            .slice(-3)
            .reverse()
            .map((item) => (
              <EventStyle>
                <Typography fontSize={22} color="white">
                  ({`${item.account.slice(0, 5)}...${item.account.slice(-5)}`})
                  &nbsp;&nbsp;{" "}
                  <Typography fontSize={22} component="span" color="#a14900">
                    has bought DWAR TOKEN!
                  </Typography>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>{item.amount} BUSD</Typography>
                    <Typography>-</Typography>
                    <Typography>{item.amount * 100} DWAR</Typography>
                    <Typography>-</Typography>
                    <Typography color="#a14900">20 seconds ago</Typography>
                  </Stack>
                </Typography>
              </EventStyle>
            ))}
        </Stack>
      </Stack>
    </>
  );
}
