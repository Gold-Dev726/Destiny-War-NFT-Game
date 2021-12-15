import { Box } from "@mui/material";

export default function CarouselArrow({ direction, onClick }) {
  return (
    <Box
      onClick={onClick}
      component="img"
      src={`/${direction}Arrow.png`}
      sx={{
        cursor: "pointer",
        transition: "all 0.3s",
        "&:hover": { transform: "scale(1.1)" },
        width: { xs: 80, md: "initial" },
      }}
    />
  );
}
