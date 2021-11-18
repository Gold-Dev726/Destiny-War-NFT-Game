import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export default function TestComponent({ number, changeTeam }) {
  const [flag, setFlag] = useState(true);

  console.log("[flag]", flag);
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
        width: 135,
        cursor: "pointer",
      }}
      onClick={() => changeTeam(number)}
    />
  );
}
