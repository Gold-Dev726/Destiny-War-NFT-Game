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
    <Container
      maxWidth="xl"
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack>
          <Typography variant="h3">Character</Typography>
          {ownedCharacter && (
            <Box
              component="img"
              src={`${process.env.REACT_APP_CHARACTER_NORMAL_IMAGE_URL}/${ownedCharacter}.png`}
              sx={{ width: 300 }}
            />
          )}
        </Stack>
      </Stack>
    </Container>
  );
}
