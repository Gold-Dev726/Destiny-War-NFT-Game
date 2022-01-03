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
import { MetamaskErrorMessage } from "utils/MetamaskErrorMessage";
import { registerToken } from "utils/wallet";
import Moment from "react-moment";
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
  [theme.breakpoints.down("md")]: {
    padding: "8px",
  },
}));

const EventStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: "rgba(234, 178, 18, 0.7)",
  boxShadow: "0px 0px 10px 3px white",
  padding: "16px 64px",
  [theme.breakpoints.down("md")]: {
    padding: "8px",
  },
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
  const [transactions, setTransactions] = useState([]);
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
    try {
      const result = await DwarTokenContract.buyTokens(
        ethers.utils.parseEther(busdAmount)
      );
      toast.success("You bought dwar tokens successfully!");
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
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
        "https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=0xCBABff9e4535E7DC28C6fcCFfF280E4DFF7ADbb6&page=1&offset=200&startblock=0&endblock=999999999&sort=desc&apikey=F6K6ICXJDRGGRHBR67WAAKBU4TA72INHZ3"
      );
      const data = await result.json();
      console.log("data", data.result);

      const transactions = data.result.filter(
        (item) => item.from === item.contractAddress
      );
      setTransactions(transactions.slice(0, 5));
    };
    fetchTxs();
  }, []);

  useEffect(() => {
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

  const SoldBalance = 300500000 - dwarBalance;

  console.log("transactions", transactions);

  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ p: { xs: 2, md: 10 }, py: { xs: 6, md: 10 }, width: 1 }}
        spacing={3}
      >
        <Stack sx={{ maxWidth: 650, width: 1 }}>
          <BoxStyle sx={{ position: "relative" }}>
            <Box
              component="img"
              src="/token_presale/add_token.png"
              variant="contained"
              onClick={() =>
                registerToken(
                  "0xCBABff9e4535E7DC28C6fcCFfF280E4DFF7ADbb6",
                  "DWAR",
                  18,
                  "https://gateway.pinata.cloud/ipfs/QmSwcvrwmvB9BhcghfFZwGeRZ3ATdG3Tk3nWUU8YHHv9Ff"
                )
              }
              sx={{
                position: "absolute",
                top: -60,
                left: "50%",
                transform: "translateX(-50%)",
                width: 260,
                cursor: "pointer",
              }}
            />
            <Typography
              variant="h3"
              align="center"
              color="white"
              sx={{ pt: { xs: 5, md: 0 } }}
            >
              $DWAR INITIAL TOKEN OFFERING
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="white"
              sx={{ mt: 3 }}
            >
              The goal is to sell initial token to raise funds for liquidity
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
                {/* <TitleStyle>BALANCE</TitleStyle> */}
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
                  value={(busdAmount * 100) / 3}
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
        <Stack sx={{ maxWidth: 500, width: 1 }}>
          <BoxStyle>
            <Typography variant="h3" align="center" color="white">
              TOKEN PRICE INFORMATION
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="white"
              sx={{ mt: 3 }}
            >
              TOKEN NAME: DESTINY WAR TOKEN <br />
              TOKEN SYMBOL: DWAR <br />
              TOKEN PRICE: 1 DWAR = $0.03 <br />
              MINIMUM: 20BUSD <br />
              MAXIMUM: 2500BUSD <br />
              ACCEPTED TOKEN: BUSD <br />
            </Typography>
          </BoxStyle>
          <BoxStyle>
            <Stack alignItems="center" sx={{ my: { xs: 2, md: 5 } }}>
              <Box
                component="img"
                src="/token_presale/dwar_token.png"
                sx={{ width: { xs: 80, md: 160 } }}
              />
            </Stack>
            <TitleStyle fontSize={28} align="center">
              TOKEN INITIAL SUPPLY: 90000000
            </TitleStyle>
            <BorderLinearProgress
              variant="determinate"
              value={(SoldBalance / 90000000) * 100}
            />
            <TitleStyle fontSize={28} align="center">
              {SoldBalance}/90000000
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
                {SoldBalance} DWAR
              </Typography>
              <Typography variant="h3" color="white">
                {((SoldBalance / 90000000) * 100).toFixed(4)}%
              </Typography>
              <Typography variant="h4" color="white">
                90M DWAR
              </Typography>
            </Stack>
            <BorderLinearProgress
              variant="determinate"
              value={(SoldBalance / 90000000) * 100}
            />
            <TitleStyle fontSize={40} align="center">
              TOKEN PRIVATE SALE <br /> DEC 20, 2021
            </TitleStyle>
          </BoxStyle>
          <BoxStyle sx={{ py: 2 }}>
            <Typography variant="h3" align="center" color="white">
              DWAR PRESALE EVENT
            </Typography>
          </BoxStyle>
          {transactions?.map((item) => (
            <EventStyle sx={{ py: "2px" }}>
              <Typography fontSize={18} color="white">
                ({`${item?.to?.slice(0, 5)}...${item?.to?.slice(-5)}`})
                &nbsp;&nbsp;{" "}
                <Typography fontSize={18} component="span" color="#a14900">
                  has bought DWAR TOKEN!
                </Typography>
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "white" }}
              >
                <Typography>
                  {Math.round(item.value / 10 ** 18 / 33.333).toFixed(2)} BUSD
                </Typography>
                <Typography>-></Typography>
                <Typography>
                  {Math.round(item.value / 10 ** 18)} DWAR
                </Typography>
                <Typography>-</Typography>
                <Typography color="#a14900">
                  <Moment fromNow ago>
                    {new Date(Number(item.timeStamp + "000")).toString()}
                  </Moment>{" "}
                  ago
                </Typography>
              </Stack>
            </EventStyle>
          ))}
        </Stack>
      </Stack>
    </>
  );
}
