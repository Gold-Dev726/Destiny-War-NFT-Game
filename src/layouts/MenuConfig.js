import { Box } from "@mui/material";
const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "HOME",
    path: "/",
    // icon: <Box component="img" src="/icons/uniswap.svg" sx={{ width: 24 }} />,
  },
  {
    title: "INVENTORY",
    path: "/inventory",
    // icon: <Box component="img" src="/icons/dextools.png" sx={{ width: 20 }} />,
  },
  {
    title: "WHITEPAPER",
    path: "/whitepaper",
    // icon: <Box component="img" src="/icons/etherscan.svg" sx={{ width: 20 }} />,
  },
  {
    title: "PRE-SALE",
    path: "/presale",
    // icon: <Box component="img" src="/icons/etherscan.svg" sx={{ width: 20 }} />,
  },
  {
    title: "MARKETPLACE",
    path: "/marketplace",
    // icon: <Box component="img" src="/icons/etherscan.svg" sx={{ width: 20 }} />,
  },
];

export default menuConfig;
