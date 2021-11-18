import { Button, Box, Stack, Typography } from "@mui/material";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { ethers } from "ethers";
export default function Logo() {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const balance = useEtherBalance(account);
  const bnbBalance = balance && ethers.utils.formatEther(balance);
  console.log(balance && ethers.utils.formatEther(balance));
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
            sx={{ border: "1px solid white", color: "white" }}
          >
            Connected!
          </Button>
          <Stack>
            <Typography>{Number(bnbBalance).toFixed(2)} BNB</Typography>
            <Typography>{`${account.slice(0, 5)}...${account.slice(
              -5
            )}`}</Typography>
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
          sx={{ border: "1px solid white", color: "white" }}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
