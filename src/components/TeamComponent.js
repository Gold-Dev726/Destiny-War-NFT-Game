import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export default function TestComponent({ number, changeTeam }) {
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlag((flag) => !flag);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Box
      component="img"
      src={`/characters/${flag ? number : number + 7}.png`}
      sx={{
        width: { xs: 68, md: 135 },
        cursor: "pointer",
      }}
      onClick={() => changeTeam(number)}
    />
  );
}
