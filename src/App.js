import { useEffect } from "react";
import Router from "./router";
import ThemeConfig from "theme";
import { switchNetwork } from "utils/wallet";

export default function App() {
  switchNetwork();

  return (
    <ThemeConfig>
      <Router />
    </ThemeConfig>
  );
}
