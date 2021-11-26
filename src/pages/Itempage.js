// material
import { useState, useEffect } from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import { getDwarCharacterContract } from "utils/contractHelpers";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import formatBigNumber from "utils/formatBigNumber";

export default function Inventorypage() {
  const { library, account } = useEthers();
  const [ownedCharacter, setOwnedCharacter] = useState();
  const signer = library?.getSigner();
  const DwarCharacterContract = getDwarCharacterContract(signer);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const OwnedCharacter = await DwarCharacterContract.tokenOfOwnerByIndex(
          account,
          0
        );
        setOwnedCharacter(formatBigNumber(OwnedCharacter));
      } catch (error) {
        setOwnedCharacter(null);
      }
    };
    if (account) fetchData();
  }, [DwarCharacterContract, account]);

  // const normalImgUri = async () => {
  //   const uri = await DwarCharacterContract.normalImgUri();
  //   // console.log("[Function_URI]", uri);
  //   return uri;
  // };

  // normalImgUri();
  console.log("ownedChar", ownedCharacter);
  return (
    <Box sx={{ mt: "-146px" }}>
      <Stack
        sx={{
          background: "url(/Hatch2.png)",
          backgroundSize: "100% 100%",
          height: "160vh",
          // position: "relative",
          // mt: "-146px"
        }}
      ></Stack>
    </Box>
  );
}
