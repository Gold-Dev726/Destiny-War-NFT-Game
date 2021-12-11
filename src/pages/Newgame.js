// material
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Container, Stack } from "@mui/material";
import Unity, { UnityContext } from "react-unity-webgl";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";

const RainbowLight = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`;

const StyledCardAccent = styled(Box)({
  background:
    "linear-gradient(45deg,rgba(255, 0, 0, 1) 0%,rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)",
  backgroundSize: "300% 300%",
  animation: `${RainbowLight} 2s linear infinite`,
  // borderRadius: "16px",
  // filter: "blur(6px)",
  // zIndex: "-1",
  width: 1382,
  height: 784,
});

export default function Gamepage() {
  const navigate = useNavigate();

  const unityContext = new UnityContext({
    productName: "Destiny War Gold",
    companyName: "Gold Dev",
    // The url's of the Unity WebGL runtime, these paths are public and should be
    // accessible from the internet and relative to the index.html.
    loaderUrl: "GameBuild/DynastyWar.loader.js",
    dataUrl: "GameBuild/DynastyWar.data",
    frameworkUrl: "GameBuild/DynastyWar.framework.js",
    codeUrl: "GameBuild/DynastyWar.wasm",
    // streamingAssetsUrl: "unitybuild/2020.1/streamingassets",
    // // Additional configuration options.
    // webglContextAttributes: {
    //   preserveDrawingBuffer: true,
    // },
  });

  return (
    <Box sx={{ background: "linear-gradient(#979e3f, #78b659)", mt: "-146px" }}>
      <Container
        maxWidth="xl"
        sx={{
          py: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledCardAccent>
          <Box sx={{ p: 1 }}>
            <Unity
              className="unity-canvas"
              unityContext={unityContext}
              matchWebGLToCanvasSize={true}
              style={{ width: "1366px", height: "768px" }}
            />
          </Box>
        </StyledCardAccent>
      </Container>
    </Box>
  );
}
