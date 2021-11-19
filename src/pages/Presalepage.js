import { useEffect, useState } from "react";
// material
import {
  Box,
  Stack,
  Container,
  Typography,
  Button,
  Divider,
  OutlinedInput,
  InputAdornment,
  Grid,
} from "@mui/material";

import CountDown from "components/CountDown";
import EnticementSlick from "components/EnticementSlick";
import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-cib/twitter";
import linkedinFill from "@iconify/icons-cib/linkedin";

export default function Detailpage() {
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setFlag(!flag);
  //   }, 5000);
  // });
  return (
    <>
      <Container maxWidth="lg">
        <Stack sx={{ position: "relative" }}>
          <Box component="img" src="/presale/description.png" />
          <Stack alignItems="center" sx={{ width: 600, position: "absolute", top: 0 }}>
            <Box component="img" src="/presale/character-egg.gif" />
            <Box component="img" src="/presale/buy.png" sx={{width: 150, mt: -10}} />
          </Stack>
          <Box
            component="img"
            src="/presale/1.png"
            sx={{ width: 100, position: "absolute", right: "29%", top: "40%" }}
          />
          <Stack
            sx={{
              width: 400,
              position: "absolute",
              bottom: "18%",
              transform: "translate(-50%, 0)",
              left: "50%",
            }}
          >
            <Box component="img" src="/presale/bar2.png" sx={{ width: 390 }} />

            <Box
              component="img"
              src="/presale/bar.png"
              sx={{ width: 1, height: 100, position: "absolute", top: -35 }}
            />
          </Stack>
          <Box
            component="img"
            src="/presale/5000.png"
            sx={{
              // width: 400,
              position: "absolute",
              bottom: "5%",
              transform: "translate(-50%, 0)",
              left: "50%",
            }}
          />
        </Stack>
      </Container>
    </>
  );
}
