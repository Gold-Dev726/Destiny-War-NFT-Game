// material
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack } from "@mui/material";
// hooks
import useCountdown from "hooks/useCountdown";

// ----------------------------------------------------------------------

// const RootStyle = styled(Page)(({ theme }) => ({
//   minHeight: "100%",
//   display: "flex",
//   alignItems: "center",
//   paddingTop: theme.spacing(15),
//   paddingBottom: theme.spacing(10),
// }));

const SeparatorStyle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(0, 2.5),
  },
}));

const NumberStyle = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  background: "rgba(181, 57, 8, 1)",
  width: 200,
  height: 80,
  borderRadius: 6,
  border: "1px solid rgba(255, 255, 255, 0.7)",
});

// ----------------------------------------------------------------------

export default function TokenCountDown() {
  const countdown = useCountdown(new Date("12/18/2021"));

  return (
    <Container>
      <Box sx={{ margin: "auto", textAlign: "center" }}>
        <Stack direction="row" justifyContent="center" spacing={3}>
          <NumberStyle>
            <Typography fontFamily="American" fontSize={70}>
              {countdown.days} DAYS
            </Typography>
          </NumberStyle>

          <NumberStyle>
            <Typography fontFamily="American" fontSize={70}>
              {countdown.hours} HRS
            </Typography>
          </NumberStyle>

          <NumberStyle>
            <Typography fontFamily="American" fontSize={70}>
              {countdown.minutes} MINS
            </Typography>
          </NumberStyle>

          <NumberStyle>
            <Typography fontFamily="American" fontSize={70}>
              {countdown.seconds} SECS
            </Typography>
          </NumberStyle>
        </Stack>
      </Box>
    </Container>
  );
}
