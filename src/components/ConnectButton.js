import { Button, Box, Stack, Typography } from "@mui/material";
import { useEthers, useEtherBalance, useTokenBalance } from "@usedapp/core";
import { TestBusdAddress } from "contracts/address";
import { ethers } from "ethers";

// export function DwarBalance() {
//   const { account } = useEthers();
//   const dwarBalanceBigNumber = useTokenBalance(DwarAddress, account);
//   const dwarBalance =
//     dwarBalanceBigNumber &&
//     ethers.utils.formatUnits(dwarBalanceBigNumber, 9);
//   return dwarBalance;
// }

export function BusdBalance() {
  const { account } = useEthers();
  const busdBalanceBigNumber = useTokenBalance(TestBusdAddress, account);
  const busdBalance =
    busdBalanceBigNumber && ethers.utils.formatUnits(busdBalanceBigNumber, 18);
  return busdBalance;
}

export default function ConnectButton({ sx }) {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const balance = useEtherBalance(account);
  const bnbBalance = balance && ethers.utils.formatEther(balance);
  return (
    <>
      {account ? (
        <>
          <Button
            variant="outlined"
            onClick={deactivate}
            color="warning"
            startIcon={
              <Box component="img" src="/metamask.png" sx={{ width: 20 }} />
            }
            sx={{
              fontStyle: "AmericanCaptain",
              border: "1px solid #47350B",
              color: "#47350B",
              ...sx,
            }}
          >
            Connected!
          </Button>
          <Stack>
            <Typography
              color="#47350B"
              fontSize={12}
              fontStyle="AmericanCaptain"
            >
              {Number(bnbBalance).toFixed(2)} BNB
            </Typography>
            <Typography
              color="#47350B"
              fontSize={12}
              fontStyle="AmericanCaptain"
            >{`${account.slice(0, 5)}...${account.slice(-5)}`}</Typography>
          </Stack>
        </>
      ) : (
        <Button
          variant="outlined"
          color="warning"
          onClick={activateBrowserWallet}
          startIcon={
            <Box component="img" src="/metamask.png" sx={{ width: 20 }} />
          }
          sx={{
            fontStyle: "AmericanCaptain",
            border: "1px solid #47350B",
            color: "#47350B",
            ...sx,
          }}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
