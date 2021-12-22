// material
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Container, Stack, Link, Button } from "@mui/material";
import { getDwarCharacterContract } from "utils/contractHelpers";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import Dialog from "@mui/material/Dialog";
import formatBigNumber from "utils/formatBigNumber";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import AllInboxIcon from "@mui/icons-material/AllInbox";

function StatsItem({
  title,
  min,
  max,
  current,
  showMax = true,
  isPercent = false,
}) {
  return (
    <Stack direction="row" sx={{ width: 160 }} spacing={1}>
      <Typography color="white">{title}</Typography>
      <Typography
        textAlign="right"
        color="#28f0a5"
        sx={{
          bgcolor: "#152e6a",
          flexGrow: 1,
          pr: 1,
          borderRadius: 1,
          border: "1px solid rgba(255, 255, 255, 0.6)",
        }}
      >
        {showMax ? `${current}/${max}` : current}
      </Typography>
    </Stack>
  );
}

export default function Inventorypage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const { library, account } = useEthers();
  const [tokenURI, setTokenURI] = useState();
  const [ownerOfCharacter, setOwnerOfCharacter] = useState();
  const [stat1OfCharacter, setStat1OfCharacter] = useState();
  const [stat2OfCharacter, setStat2OfCharacter] = useState();
  const signer = library?.getSigner();
  const DwarCharacterContract = getDwarCharacterContract(signer);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const realTokenImage = await DwarCharacterContract.getCharacter(id);
        const OwnerOfCharacter = await DwarCharacterContract.ownerOf(id);
        const Stat1OfCharacter = await DwarCharacterContract.getStat1(id);
        const Stat2OfCharacter = await DwarCharacterContract.getStat2(id);
        setOwnerOfCharacter(OwnerOfCharacter);
        setStat1OfCharacter(Stat1OfCharacter);
        setStat2OfCharacter(Stat2OfCharacter);
        setTokenURI(realTokenImage[1]);
        console.log(Stat1OfCharacter, Stat2OfCharacter);
      } catch (error) {
        setOwnerOfCharacter(null);
      }
    };
    if (account) fetchData();
  }, [account, id]);

  const isOwner = account === ownerOfCharacter;
  console.log(isOwner, ownerOfCharacter);
  return (
    <Box
      sx={{
        background: "linear-gradient(#260381, #0177fe)",
        backgroundSize: "cover",
        mt: "-146px",
      }}
    >
      <Container maxWidth="xl" sx={{ pt: 20, pb: 10 }}>
        <Stack
          direction="row"
          alignItems="center"
          onClick={() => navigate(-1)}
          sx={{ cursor: "pointer" }}
        >
          <ArrowLeftIcon sx={{ fontSize: 50, color: "#0078ff" }} />
          <Typography fontSize={30} color="white">
            BACK
          </Typography>
        </Stack>
        <Stack direction="row" spacing={10}>
          <Stack flex={1} alignItems="center">
            <Box sx={{ position: "relative", my: 5 }}>
              <Box
                component="img"
                // src={`${process.env.REACT_APP_CHARACTER_NORMAL_IMAGE_URL}/${id}.png`}
                src={tokenURI}
                sx={{ width: 400 }}
              />
              <Typography
                variant="h4"
                align="center"
                sx={{
                  position: "absolute",
                  top: "25%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "black",
                  color: "white",
                  borderRadius: "2px",
                  px: 2,
                  boxShadow: "0px 0px 4px 1px white",
                }}
              >
                #{id}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                sx={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  background: "black",
                  color: "#31d15a",
                  borderRadius: "4px",
                  width: 54,
                  boxShadow: "0px 0px 4px 1px white",
                }}
              >
                ORIGIN
              </Typography>
            </Box>
            {/* <Stack direction="row" alignItems="center">
              <Box component="img" src="/hatch/egg.png" sx={{ width: 50 }} />
              <Stack alignItems="center" spacing={1}>
                {isOwner && (
                  <Button
                    onClick={() => setModalOpen(true)}
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
                )}
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
            </Stack> */}
          </Stack>

          <Stack flex={1} alignItems="center" spacing={3}>
            {/* {isOwner && ( */}
            <Stack direction="row" justifyContent="center" spacing={3}>
              <Button
                onClick={() => setModalOpen(true)}
                variant="contained"
                sx={{
                  color: "white",
                  bgcolor: "#1143c6",
                  px: 4,
                  fontSize: 20,
                  borderRadius: 1,
                  border: "1px solid #4c7718",
                }}
              >
                SALE
              </Button>
              {isOwner && (
                <Button
                  onClick={() => setModalOpen(true)}
                  variant="contained"
                  sx={{
                    color: "white",
                    bgcolor: "#1143c6",
                    px: 4,
                    fontSize: 20,
                    borderRadius: 1,
                    border: "1px solid #4c7718",
                  }}
                  startIcon={<AllInboxIcon />}
                >
                  GIFT
                </Button>
              )}
            </Stack>
            <Stack
              sx={{
                color: "white",
                bgcolor: "#2926ae",
                p: 2,
                borderRadius: 1,
                border: "1px solid #4c7718",
              }}
            >
              <Typography>Breed Count: 0</Typography>
              <Typography>
                {/* Owner: {account} */}
                Owner: {ownerOfCharacter ? ownerOfCharacter : "Private"}
              </Typography>
            </Stack>
            <Typography color="#28f0a5">STATS</Typography>
            <Stack direction="row" spacing={5}>
              <Stack spacing={1}>
                <StatsItem title="HP" min={200} max={200} current={200} />
                <StatsItem title="MP" min={20} max={150} current={150} />
                <StatsItem title="PA" min={10} max={70} current={50} />
                <StatsItem title="PD" min={10} max={100} current={80} />
                <StatsItem title="MA" min={10} max={70} current={50} />
                <StatsItem title="MD" min={10} max={100} current={80} />
                <StatsItem
                  title="Dodge"
                  min={30}
                  max={10}
                  current={10}
                  showMax={false}
                />
                <Stack direction="row" sx={{ width: 160 }} spacing={1}>
                  <Typography color="white">CH</Typography>
                  <Typography
                    textAlign="right"
                    color="#28f0a5"
                    sx={{
                      bgcolor: "#152e6a",
                      flexGrow: 1,
                      pr: 1,
                      borderRadius: 1,
                      border: "1px solid rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    3.3%
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={1}>
                <StatsItem
                  title="CON"
                  min={20}
                  max={30}
                  current={0}
                  showMax={false}
                />
                <StatsItem
                  title="SPI"
                  min={20}
                  max={30}
                  current={0}
                  showMax={false}
                />
                <StatsItem
                  title="STR"
                  min={20}
                  max={30}
                  current={0}
                  showMax={false}
                />
                <StatsItem
                  title="CPS"
                  min={20}
                  max={30}
                  current={0}
                  showMax={false}
                />
                <StatsItem
                  title="DEX"
                  min={20}
                  max={30}
                  current={0}
                  showMax={false}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <Dialog onClose={() => setModalOpen(false)} open={modalOpen}>
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
      </Dialog>
    </Box>
  );
}
