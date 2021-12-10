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
  const [ownedCharacter, setOwnedCharacter] = useState();
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
  };

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
              <Typography variant="h4" color="white" sx={{ ml: 20 }}>
                CHARACTER
              </Typography>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  component="img"
                  src="/prevArrow.png"
                  onClick={() => CharacterSliderRef.current.slickPrev()}
                />
                <Box
                  sx={{
                    width: 1200,
                    bgcolor: "#261896",
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ pt: 2, pb: 1 }}>
                    <Slider {...SliderSettings} ref={CharacterSliderRef}>
                      {[...Array(5)].map((item, index) => (
                        <Box>
                          <Stack alignItems="center">
                            <Stack
                              justifyContent="center"
                              alignItems="center"
                              sx={{
                                width: 150,
                                height: 150,
                                bgcolor: "#3323ac",
                                border: "2px solid rgba(255, 255, 255, 0.3)",
                                borderRadius: 1,
                              }}
                            >
                              {index === 0 && (
                                <Box
                                  component="img"
                                  src="https://gateway.pinata.cloud/ipfs/QmVEFivQ2NDdm4FA2FTYWFi2nJRjPbc43XE8UMzdC5ZaPH/character_normal/1.png"
                                  // src={`${process.env.REACT_APP_CHARACTER_NORMAL_IMAGE_URL}/1.png`}
                                  sx={{ width: 1, height: 1 }}
                                />
                              )}
                            </Stack>
                          </Stack>
                        </Box>
                      ))}
                    </Slider>
                  </Box>
                </Box>
                <Box
                  component="img"
                  src="/nextArrow.png"
                  onClick={() => CharacterSliderRef.current.slickNext()}
                />
              </Stack>
            </Stack>

            <Stack>
              <Typography variant="h4" color="white" sx={{ ml: 20 }}>
                PET
              </Typography>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  component="img"
                  src="/prevArrow.png"
                  onClick={() => PetSliderRef.current.slickPrev()}
                />
                <Box
                  sx={{
                    width: 1200,
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
                                width: 150,
                                height: 150,
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
                  src="/nextArrow.png"
                  onClick={() => CharacterSliderRef.current.slickNext()}
                />
              </Stack>
            </Stack>

            <Stack>
              <Typography variant="h4" color="white" sx={{ ml: 20 }}>
                Mount
              </Typography>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  component="img"
                  src="/prevArrow.png"
                  onClick={() => MountSliderRef.current.slickPrev()}
                />
                <Box
                  sx={{
                    width: 1200,
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
                                width: 150,
                                height: 150,
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
                  src="/nextArrow.png"
                  onClick={() => CharacterSliderRef.current.slickNext()}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
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
    </Box>
  );
}
