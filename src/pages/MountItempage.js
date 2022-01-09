// material
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Stack,
  Link,
  Button,
  Popover,
  InputBase,
  Grid,
} from "@mui/material";
import { getDwarMountContract } from "utils/contractHelpers";
import { useEthers } from "@usedapp/core";
import { toast } from "react-toastify";
import { MetamaskErrorMessage } from "utils/MetamaskErrorMessage";
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
  const [giftModalOpen, setGiftModalOpen] = useState(false);
  const [saleModalOpen, setSaleModalOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const { library, account } = useEthers();
  const [tokenURI, setTokenURI] = useState();
  const [tokenStar, setTokenStar] = useState();
  const [giftAddress, setGiftAddress] = useState();
  const [ownerOfMount, setOwnerOfMount] = useState();
  const signer = library?.getSigner();
  const DwarMountContract = getDwarMountContract(signer);

  const handleGift = async () => {
    try {
      const result = await DwarMountContract.giftNFT(id, giftAddress);
      toast.success("You gift a mount successfully!");
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const realTokenImage = await DwarMountContract.getMount(id);
        const OwnerOfMount = await DwarMountContract.ownerOf(id);
        setOwnerOfMount(OwnerOfMount);
        setTokenURI(realTokenImage[1]);
        setTokenStar(formatBigNumber(realTokenImage[2]));
      } catch (error) {
        setOwnerOfMount(null);
      }
    };
    if (account) fetchData();
  }, [account, id]);

  const isOwner = account === ownerOfMount;
  console.log("tokenStar", tokenStar);
  return (
    <Box
      sx={{
        background: "linear-gradient(#260381, #0177fe)",
        backgroundSize: "cover",
        mt: "-146px",
      }}
    >
      <Container maxWidth="xl" sx={{ minHeight: "calc(100vh - 108px)", pt: 20, pb: 5 }}>
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
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={10}
        >
          <Stack alignItems="center">
            <Box sx={{ position: "relative", my: 5 }}>
              <Box
                component="img"
                // src={`${process.env.REACT_APP_CHARACTER_NORMAL_IMAGE_URL}/${id}.png`}
                src={tokenURI}
                sx={{ width: 500 }}
              />
              <Typography
                variant="h4"
                align="center"
                sx={{
                  position: "absolute",
                  top: "18px",
                  left: "10px",
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

          <Stack alignItems="center" spacing={3}>
            {/* {isOwner && ( */}
            <Stack direction="row" justifyContent="center" spacing={3}>
              <Button
                disabled={!isOwner}
                onClick={() => setSaleModalOpen(true)}
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
              <Button
                disabled={!isOwner}
                onClick={() => setGiftModalOpen(true)}
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
                Owner: {ownerOfMount ? ownerOfMount : "Private"}
              </Typography>
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
              <Typography
                variant="h3"
                fontFamily="American"
                sx={{ letterSpacing: "1px" }}
              >
                MOUNT GIVE EXTRA MOVEMENT SPEED
              </Typography>
              <Grid container sx={{ color: "#28f0a5" }}>
                <Grid item md={6}>
                  <Typography>HEALTH POINTS + {tokenStar * 100}</Typography>
                  <Typography>MAGIC POINTS + {tokenStar * 100}</Typography>
                  <Typography>PHYSICAL DEFENSE + {tokenStar * 100}</Typography>
                  <Typography>MAGIC DEFENSE + {tokenStar * 100}</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography>PHYSICAL ATTACK + {tokenStar * 100}</Typography>
                  <Typography>MAGIC ATTACK + {tokenStar * 100}</Typography>
                  <Typography>
                    DODGE + {tokenStar === 1 ? 10 : tokenStar === 2 ? 15 : 18}
                  </Typography>
                  <Typography>
                    CRITICAL + {tokenStar === 1 ? 5 : tokenStar === 2 ? 7 : 10}%
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <Dialog onClose={() => setSaleModalOpen(false)} open={saleModalOpen}>
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

      <Dialog
        onClose={() => setGiftModalOpen(false)}
        open={giftModalOpen}
        PaperProps={{
          sx: {
            color: "white",
            bgcolor: "#2926ae",
            p: 2,
            borderRadius: 1,
            border: "1px solid #4c7718",
          },
        }}
      >
        <Typography
          sx={{
            color: "yellow",
          }}
        >
          Gift your Dwar Mount
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "4px",
            px: 2,
            mt: 1,
          }}
        >
          <InputBase
            sx={{ color: "white", width: 360, height: 40 }}
            onChange={(e) => setGiftAddress(e.target.value)}
            value={giftAddress}
            placeholder="Receiver's Metamask wallet address"
          />
        </Stack>
        <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
          <Button
            variant="contained"
            onClick={handleGift}
            disabled={!giftAddress}
          >
            Gift
          </Button>
        </Stack>
      </Dialog>
    </Box>
  );
}
