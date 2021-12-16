// material
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Container, Stack } from "@mui/material";
import { getDwarCharacterContract } from "utils/contractHelpers";
import { useEthers } from "@usedapp/core";
import formatBigNumber from "utils/formatBigNumber";

export default function Inventorypage() {
  const navigate = useNavigate();
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
      </Container>
    </Box>
  );
}
