import { useState } from "react";
// material
import { Box, Stack, Dialog, Button } from "@mui/material";

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
  const [currentPresale, setCurrentPresale] = useState(0);
  return (
    <>
      <Stack direction="row" justifyContent="center" sx={{ mt: 20, mb: 25 }}>
        <Button variant="contained" onClick={() => setPresaleModal(true)}>
          Presal
        </Button>
      </Stack>
      <Dialog
        open={presaleModal}
        onClose={() => setPresaleModal(false)}
        PaperProps={{ sx: { background: "transparent" } }}
        // sx={{ height: "500px" }}
      >
        <Stack direction="row" alignItems="center">
          <Button variant="contained">Prev</Button>
          <SwipeableViews
            enableMouseEvents
            index={currentPresale}
            onChangeIndex={(index) => setCurrentPresale(index)}
          >
            <Box component="img" src={`/presale/presale1.jpg`} />
            <Box component="img" src={`/presale/presale2.jpg`} />
            <Box component="img" src={`/presale/presale3.jpg`} />
          </SwipeableViews>
          <Button variant="contained">Next</Button>
        </Stack>
      </Dialog>
    </>
  );
}
