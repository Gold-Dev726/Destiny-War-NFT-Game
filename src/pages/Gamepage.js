// material
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Container, Stack } from "@mui/material";
import Unity, { UnityContext } from "react-unity-webgl";

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
        <Unity className="unity-canvas" unityContext={unityContext} matchWebGLToCanvasSize={true} style={{width: "1366px", height: "768px"}} />
      </Container>
    </Box>
  );
}
