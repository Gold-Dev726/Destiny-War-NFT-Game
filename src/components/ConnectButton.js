import { Button, Box } from "@mui/material";
import { useEthers, useEtherBalance } from "@usedapp/core";
export default function Logo() {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  return (
    <>
      {account ? (
        <Button
          variant="outlined"
          onClick={deactivate}
          color="warning"
          startIcon={
            <Box component="img" src="/metamask.png" sx={{ width: 20 }} />
          }
          sx={{ border: "1px solid white", color: "white" }}
        >
          {`${account.slice(0, 6)}...${account.slice(-6)}`}
        </Button>
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
