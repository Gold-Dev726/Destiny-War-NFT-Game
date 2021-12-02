import { useState } from "react";
// material
import { Box, Stack, Dialog, Button, Grid, Typography } from "@mui/material";

import SwipeableViews from "react-swipeable-views";
import { virtualize, bindKeyboard } from "react-swipeable-views-utils";

// function slideRenderer(params) {
//   const { index, key } = params;
//   console.log(index);
//   return (
//   );
// }

export default function Homepage() {
  const [presaleModal, setPresaleModal] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep !== 4) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };
  return (
    <>
      <Box component="img" src="/divider.png" sx={{ width: 1, mt: "-65px", zIndex: 10 }} />

      <Stack sx={{ position: "relative", zIndex: 10, mt: "-16px" }}>
        <Stack
          alignItems="center"
          sx={{ width: 1, position: "absolute", top: 0 }}
        >
          <Stack direction="row" justifyContent="center" sx={{ my: 3 }}>
            {/* <MotionInView variants={varFadeInUp}> */}
            <Box
              component="img"
              src="/texts/choose_class.png"
              sx={{ transform: "scale(0.6)" }}
            />
            {/* </MotionInView> */}
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ mb: 5 }}
            spacing={5}
          >
            <Box
              component="img"
              src="/prevArrow.png"
              onClick={handleBack}
              sx={{
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            />
            <Box
              component="img"
              src="/nextArrow.png"
              onClick={handleNext}
              sx={{
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            />
          </Stack>
        </Stack>
      </Stack>
      <SwipeableViews
        enableMouseEvents
        index={activeStep}
        onChangeIndex={(index) => setActiveStep(index)}
      >
        <Box component="img" src={`/teams/1.png`} />
        <Box component="img" src={`/teams/2.png`} />
        <Box component="img" src={`/teams/3.png`} />
        <Box component="img" src={`/teams/4.png`} />
        <Box component="img" src={`/teams/5.png`} />
      </SwipeableViews>

      <Box
        component="img"
        src="/divider.png"
        sx={{ width: 1, mt: "-65px", zIndex: 10 }}
      />
    </>
  );
}
