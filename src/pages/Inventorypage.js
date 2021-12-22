// material
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Container, Stack } from "@mui/material";
import { getDwarCharacterContract } from "utils/contractHelpers";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import Slider from "react-slick";
import formatBigNumber from "utils/formatBigNumber";

export default function Inventorypage() {
  const navigate = useNavigate();
  const { library, account } = useEthers();
  const [ownedCharacters, setOwnedCharacters] = useState([]);
  const [ownedCharacterImages, setOwnedCharacterImages] = useState([])
  const [ownedMount, setOwnedMount] = useState();
  const [ownedPet, setOwnedPet] = useState();
  const signer = library?.getSigner();
  const DwarCharacterContract = getDwarCharacterContract(signer);

  const CharacterSliderRef = useRef();
  const PetSliderRef = useRef();
  const MountSliderRef = useRef();

  const SliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const realTokenURI = async (tokenId) => {
    const result = await DwarCharacterContract.getCharacter(tokenId);
    return result[1];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await DwarCharacterContract.tokensOfOwner(account);
        const OwnedCharacters = result.map((item) => formatBigNumber(item));
        setOwnedCharacters(OwnedCharacters);
      } catch (error) {
        setOwnedCharacters(null);
      }
    };
    if (account) fetchData();
    console.log("DSFDS");
  }, [account]);

  // const normalImgUri = async () => {
  //   const uri = await DwarCharacterContract.normalImgUri();
  //   // console.log("[Function_URI]", uri);
  //   return uri;
  // };

  console.log("Owned", ownedCharacters);
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
        <Stack sx={{ width: 1 }}>
          <Typography
            textAlign="center"
            variant="h2"
            color="white"
            fontWeight="bold"
          >
            INVENTORY
          </Typography>

          <Stack spacing={5}>
            <Stack>
              <Typography
                variant="h4"
                color="white"
                sx={{ ml: { xs: 10, md: 20 } }}
              >
                CHARACTER
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Box
                  component="img"
                  src="/inventory/prevArrow.png"
                  onClick={() => CharacterSliderRef.current.slickPrev()}
                  sx={{ width: { xs: 30, md: "initial" } }}
                />
                <Box
                  sx={{
                    width: { xs: 200, md: 1200 },
                    bgcolor: "#261896",
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ pt: 2, pb: 1 }}>
                    <Slider {...SliderSettings} ref={CharacterSliderRef}>
                      {ownedCharacters.length > 0
                        ? ownedCharacters.map((item, index) => (
                            <Box>
                              <Stack alignItems="center">
                                <Stack
                                  justifyContent="center"
                                  alignItems="center"
                                  sx={{
                                    width: { xs: 80, md: 150 },
                                    height: { xs: 80, md: 150 },
                                    bgcolor: "#3323ac",
                                    border:
                                      "2px solid rgba(255, 255, 255, 0.3)",
                                    borderRadius: 1,
                                  }}
                                > 
                                  <Box
                                    onClick={() =>
                                      navigate(`/items/character/${item}`)
                                    }
                                    component="img"
                                    src={`${process.env.REACT_APP_CHARACTER_NORMAL_IMAGE_URL}/${item}.png`}
                                    sx={{
                                      width: 1,
                                      height: 1,
                                      cursor: "pointer",
                                    }}
                                  />
                                </Stack>
                              </Stack>
                            </Box>
                          ))
                        : [...Array(5)].map((item, index) => (
                            <Box>
                              <Stack alignItems="center">
                                <Stack
                                  justifyContent="center"
                                  alignItems="center"
                                  sx={{
                                    width: { xs: 80, md: 150 },
                                    height: { xs: 80, md: 150 },
                                    bgcolor: "#3323ac",
                                    border:
                                      "2px solid rgba(255, 255, 255, 0.3)",
                                    borderRadius: 1,
                                  }}
                                />
                              </Stack>
                            </Box>
                          ))}
                    </Slider>
                  </Box>
                </Box>
                <Box
                  component="img"
                  src="/inventory/nextArrow.png"
                  onClick={() => CharacterSliderRef.current.slickNext()}
                  sx={{ width: { xs: 30, md: "initial" } }}
                />
              </Stack>
            </Stack>

            <Stack>
              <Typography
                variant="h4"
                color="white"
                sx={{ ml: { xs: 10, md: 20 } }}
              >
                PET
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Box
                  component="img"
                  src="/inventory/prevArrow.png"
                  onClick={() => PetSliderRef.current.slickPrev()}
                  sx={{ width: { xs: 30, md: "initial" } }}
                />
                <Box
                  sx={{
                    width: { xs: 200, md: 1200 },
                    bgcolor: "#261896",
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ pt: 2, pb: 1 }}>
                    <Slider {...SliderSettings} ref={PetSliderRef}>
                      {[...Array(5)].map((item, index) => (
                        <Box>
                          <Stack alignItems="center">
                            <Stack
                              justifyContent="center"
                              alignItems="center"
                              sx={{
                                width: { xs: 80, md: 150 },
                                height: { xs: 80, md: 150 },
                                bgcolor: "#3323ac",
                                border: "2px solid rgba(255, 255, 255, 0.3)",
                                borderRadius: 1,
                              }}
                            >
                              {/* <Box component="img" src="/presale/pet-egg.gif" /> */}
                            </Stack>
                          </Stack>
                        </Box>
                      ))}
                    </Slider>
                  </Box>
                </Box>
                <Box
                  component="img"
                  src="/inventory/nextArrow.png"
                  onClick={() => CharacterSliderRef.current.slickNext()}
                  sx={{ width: { xs: 30, md: "initial" } }}
                />
              </Stack>
            </Stack>

            <Stack>
              <Typography
                variant="h4"
                color="white"
                sx={{ ml: { xs: 10, md: 20 } }}
              >
                Mount
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Box
                  component="img"
                  src="/inventory/prevArrow.png"
                  onClick={() => MountSliderRef.current.slickPrev()}
                  sx={{ width: { xs: 30, md: "initial" } }}
                />
                <Box
                  sx={{
                    width: { xs: 200, md: 1200 },
                    bgcolor: "#261896",
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ pt: 2, pb: 1 }}>
                    <Slider {...SliderSettings} ref={MountSliderRef}>
                      {[...Array(5)].map((item, index) => (
                        <Box>
                          <Stack alignItems="center">
                            <Stack
                              justifyContent="center"
                              alignItems="center"
                              sx={{
                                width: { xs: 80, md: 150 },
                                height: { xs: 80, md: 150 },
                                bgcolor: "#3323ac",
                                border: "2px solid rgba(255, 255, 255, 0.3)",
                                borderRadius: 1,
                              }}
                            >
                              {/* <Box
                                component="img"
                                src="/presale/mount-egg.gif"
                              /> */}
                            </Stack>
                          </Stack>
                        </Box>
                      ))}
                    </Slider>
                  </Box>
                </Box>
                <Box
                  component="img"
                  src="/inventory/nextArrow.png"
                  onClick={() => CharacterSliderRef.current.slickNext()}
                  sx={{ width: { xs: 30, md: "initial" } }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        {/* <Stack direction="row" justifyContent="space-between" sx={{ width: 1 }}>
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
        </Stack> */}
      </Container>
    </Box>
  );
}
