// material
import { useState, useEffect } from "react";
import { Box, Typography, Container, Stack, Link, Button } from "@mui/material";
import { getDwarCharacterContract } from "utils/contractHelpers";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import formatBigNumber from "utils/formatBigNumber";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import AllInboxIcon from "@mui/icons-material/AllInbox";

function StatsItem({ title, min, max }) {
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  return (
    <Stack direction="row" sx={{ width: 160 }} spacing={1}>
      <Typography color="#28f0a5">{title}</Typography>
      <Typography
        textAlign="right"
        color="#28f0a5"
        sx={{
          bgcolor: "#181b0f",
          flexGrow: 1,
          pr: 1,
          borderRadius: 1,
          border: "1px solid #4c7718",
        }}
      >
        {random(min, max + 1)}/{max}
      </Typography>
    </Stack>
  );
}
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
    <Box sx={{ background: "#2e311e", mt: "-146px" }}>
      <Container maxWidth="xl" sx={{ pt: 20, pb: 10 }}>
        <Stack direction="row" alignItems="center">
          <ArrowLeftIcon sx={{ fontSize: 50, color: "#181b0f" }} />
          <Link
            href="/inventory"
            underline="none"
            fontSize={30}
            color="#28f0a5"
          >
            BACK
          </Link>
        </Stack>
        <Stack direction="row" spacing={10}>
          <Stack flex={1} alignItems="center">
            <Box
              sx={{
                width: 400,
                height: 400,
                bgcolor: "red",
                my: 5,
                visibility: "hidden",
              }}
            />
            <Stack direction="row" alignItems="center">
              <Box component="img" src="/hatch/egg.png" sx={{ width: 50 }} />
              <Stack alignItems="center" spacing={1}>
                <Button
                  variant="contained"
                  sx={{
                    color: "#28f0a5",
                    bgcolor: "#3b4721",
                    px: 2,
                    py: 0,
                    fontSize: 16,
                    borderRadius: 1,
                    border: "1px solid #4c7718",
                  }}
                >
                  HATCH
                </Button>
                <Box
                  sx={{
                    width: 400,
                    height: 10,
                    border: "1px solid #4c7718",
                    bgcolor: "#3b4721",
                  }}
                />
                <Typography fontSize={16} color="#28f0a5">
                  35 Days
                </Typography>
              </Stack>
              <Box
                component="img"
                src="/hatch/character_head.png"
                sx={{ width: 70 }}
              />
            </Stack>
          </Stack>

          <Stack flex={1} alignItems="center" spacing={3}>
            <Stack direction="row" justifyContent="center" spacing={3}>
              <Button
                variant="contained"
                sx={{
                  color: "#28f0a5",
                  bgcolor: "#3b4721",
                  px: 4,
                  fontSize: 20,
                  borderRadius: 1,
                  border: "1px solid #4c7718",
                }}
              >
                SALE
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "#28f0a5",
                  bgcolor: "#3b4721",
                  px: 4,
                  fontSize: 20,
                  borderRadius: 1,
                  border: "1px solid #4c7718",
                }}
                startIcon={<AllInboxIcon />}
              >
                GIFT
              </Button>
            </Stack>
            <Typography
              sx={{
                color: "yellow",
                bgcolor: "#3b4721",
                borderRadius: 1,
                fontSize: 16,
                px: 1,
                border: "1px solid #4c7718",
              }}
            >
              This feature is not yet avalable
            </Typography>
            <Stack
              sx={{
                color: "#28f0a5",
                bgcolor: "#3b4721",
                p: 2,
                borderRadius: 1,
                border: "1px solid #4c7718",
              }}
            >
              <Typography>Breed Count: 0</Typography>
              <Typography>Owner: {account}</Typography>
            </Stack>
            <Typography color="#28f0a5">STATS</Typography>
            <Stack direction="row" spacing={5}>
              <Stack spacing={1}>
                <StatsItem title="HP" min={70} max={110} />
                <StatsItem title="MP" min={20} max={50} />
                <StatsItem title="PA" min={10} max={30} />
                <StatsItem title="PD" min={10} max={50} />
                <StatsItem title="MA" min={10} max={20} />
                <StatsItem title="MD" min={10} max={50} />
                <StatsItem title="Dodge" min={30} max={50} />
                <StatsItem title="CH" min={2} max={5} />
              </Stack>
              <Stack spacing={1}>
                <StatsItem title="CON" min={20} max={30} />
                <StatsItem title="SPI" min={20} max={30} />
                <StatsItem title="STR" min={20} max={30} />
                <StatsItem title="CPS" min={20} max={30} />
                <StatsItem title="DEX" min={20} max={30} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
