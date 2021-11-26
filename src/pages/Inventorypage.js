// material
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Container, Stack } from "@mui/material";
import { getDwarCharacterContract } from "utils/contractHelpers";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import formatBigNumber from "utils/formatBigNumber";

export default function Inventorypage() {
  const navigate = useNavigate();
  const { library, account } = useEthers();
  const [ownedCharacter, setOwnedCharacter] = useState();
  const [ownedMount, setOwnedMount] = useState();
  const [ownedPet, setOwnedPet] = useState();
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
      <Stack direction="row" justifyContent="space-between" sx={{ width: 1 }}>
        <Stack
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(`/items/character/${ownedCharacter}`)}
        >
          <Typography variant="h3" textAlign="center">
            Character
          </Typography>
          {ownedCharacter ? (
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                // src="/cha.png"
                src={`${process.env.REACT_APP_CHARACTER_NORMAL_IMAGE_URL}/${ownedCharacter}.png`}
                sx={{ width: 400 }}
              />
              <Typography
                variant="h3"
                fontFamily="BerlinFB"
                sx={{
                  position: "absolute",
                  top: "25%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                #{ownedCharacter}
              </Typography>
            </Box>
          ) : (
            <Typography>No Character</Typography>
          )}
        </Stack>
        <Stack>
          <Typography variant="h3" textAlign="center">
            Mount
          </Typography>
          {ownedMount ? (
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                // src="/cha.png"
                src={`${process.env.REACT_APP_CHARACTER_NORMAL_IMAGE_URL}/${ownedMount}.png`}
                sx={{ width: 400 }}
              />
              <Typography
                variant="h3"
                sx={{
                  position: "absolute",
                  top: "25%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                #{ownedMount}
              </Typography>
            </Box>
          ) : (
            <Typography>No Mount</Typography>
          )}
        </Stack>
        <Stack>
          <Typography variant="h3" textAlign="center">
            Pet
          </Typography>
          {ownedPet ? (
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                // src="/cha.png"
                src={`${process.env.REACT_APP_CHARACTER_NORMAL_IMAGE_URL}/${ownedPet}.png`}
                sx={{ width: 400 }}
              />
              <Typography
                variant="h3"
                sx={{
                  position: "absolute",
                  top: "25%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                #{ownedPet}
              </Typography>
            </Box>
          ) : (
            <Typography>No Pet</Typography>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}
